/*!
 * @brief	瀹㈡埛绔痵ocket绫�
 * @author	Zhou Lingfei
 * @date	2012-9-6
 * @ingroup	Network
 */

#ifndef __TCP_SOCKET_H__
#define __TCP_SOCKET_H__

#include <list>
#include <string>


#ifdef _WIN32
#include <winsock2.h>
typedef	int socklen_t;
#else
#include <sys/socket.h>
#include <sys/types.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <fcntl.h>
#include <unistd.h>
#include <errno.h>
#define closesocket close
#define INVALID_SOCKET -1
#define SOCKET_ERROR -1
typedef int SOCKET;
#endif

#include "google/protobuf/message_lite.h"
//#include "cocos2d.h"

#define SOCKET_BUFFER_SIZE  8192

/*!
 * @brief		娑堟伅澶淬��
 */
typedef struct MessageHeader
{
    int length;
    int sequenceID;
    int messageID;
}
MessageHeader;

/*!
 * @brief		socket鏁版嵁缂撳瓨銆�
 */
typedef struct SocketBuffer
{
    char data[SOCKET_BUFFER_SIZE];
    int length;
    
    SocketBuffer()
    {
        length = 0;
    }
    
    void setBuffer(const char* data, size_t length)
    { 
        memcpy(this->data, data, length);
        this->length = length;
    }
    
    void clear()
    {
        length = 0;
    }

	/*
	 *	鎴彇ori鍚庣殑鏁版嵁
	 */
	void setOffset(size_t ori)
	{
        if (length > ori)
        {
            //将不需要的数据去除
            memmove(data, data + ori, length - ori);
            length = length - ori;
        }
	}
    
    MessageHeader* getHeader()
    {
        MessageHeader* header =(MessageHeader*)data;
        return header;
    }
    
    int getMessageID()
    {
        return getHeader()->messageID;
    }
    
    char* getBody()
    {
        return (data + sizeof(MessageHeader));
    }
    
    int getBodySize()
    {
        return length - sizeof(MessageHeader);
    }
}
SocketBuffer;


class TcpSocket {
public:
    TcpSocket();
    virtual ~ TcpSocket();
    
public:
    /*!
     * @brief		杩炴帴鏈嶅姟鍣ㄣ��
     * @param       ip      IP瀛楃涓�
     * @param       port    绔彛
     */
    virtual bool connect(const char* ip, int port);
    
    /*!
     * @brief		鏂紑杩炴帴銆�
     */
    virtual bool disconnect();
    
    /*!
     * @brief		鍙戦�佹暟鎹��
     * @param       data      鏁版嵁
     * @param       length    鏁版嵁闀垮害
     */
    bool send(const char* data, int length);
    
    /*!
     * @brief		鍙戦�佸甫娑堟伅澶寸殑protobuf娑堟伅銆�
     * @param       msg       protobuf娑堟伅
     * @param       msgID     娑堟伅鍙�
     */
    bool send(google::protobuf::MessageLite* msg, int msgID,int sequenceID);
    
    /*!
     * @brief		鍙戦�佸瓨鍌ㄥ湪鍙戦�佺紦瀛樹腑鐨勬暟鎹��
     */
    bool send();
    
    /*!
     * @brief		鎺ユ敹鏁版嵁骞跺瓨鍌ㄥ埌缂撳瓨銆�
     */
    bool receive(long &_result);
    
    /*!
     * @brief		鍒ゆ柇鏄惁宸茶繛鎺ヤ笂鏈嶅姟鍣ㄣ��
     */
    bool isConnected() const;
    
    /*!
     * @brief		鍒ゆ柇鏄惁姝ｅ湪杩炴帴鏈嶅姟鍣ㄣ��
     */
    bool isConnecting() const;
    
    /*!
     * @brief		鍒ゆ柇鏄惁宸插純鐢ㄣ��
     */
    bool isDiscarded() const;
    
    /*!
     * @brief		鑾峰彇鍐呴儴socket銆�
     */
    SOCKET getSocket() const;
    
    /*!
     * @brief		鑾峰彇IP銆�
     */
    const char* getIP() const;
    
    /*!
     * @brief		鑾峰彇绔彛銆�
     */
    int getPort() const;

	/*
	 *	璁剧疆idle鐨勯棿闅旀椂闂�
	 *
	 *	@param interval	闂撮殧鏃堕棿
	 */
	void setIdleTime(long interval);

	/*
	 *	鑾峰彇閾炬帴鏃堕棿
	 */
	long getConnTime();

	/*
	 *	璁剧疆閾炬帴鏃堕棿
	 */
	void setConnTime(long long currTime);
    
private:
    /*!
     * @brief		璁剧疆socket涓洪潪闃诲妯″紡銆�
     */
    bool setNonBlocking();
    
    /*!
     * @brief		鍒ゆ柇鏄惁鏈夋鍦ㄨ繘琛岀殑闈為樆濉炰换鍔°��
     */
    bool isBusy();
    
public:
    /*!
     * @brief		缃戠粶鍑洪敊鏃剁殑鍥炶皟銆�
     */
    virtual void onError();
    
    /*!
     * @brief		杩炴帴鏈嶅姟鍣ㄦ垚鍔熸椂鐨勫洖璋冦��
     */
    virtual void onConnect();
    
    /*!
     * @brief		鏂紑杩炴帴鍚庣殑鍥炶皟銆�
     */
    virtual void onDisconnect();
    
    /*!
     * @brief		鍙戦�佹垚鍔熷悗鐨勫洖璋冦��
     */
    virtual void onSendData();
    
    /*!
     * @brief		鎺ユ敹鏁版嵁鍚庣殑鍥炶皟銆�
     * @param       messageID   娑堟伅鍙�
     * @param       message     娑堟伅浣�
     * @param       size        娑堟伅浣撻暱搴�
     */
    virtual void onReceiveData(int messageID, const char* message, int size, int msgSequnce) = 0;
    
protected:
    /*!
     * @brief		鑾峰彇鍐呴儴socket銆�
     */
    SOCKET m_socket;
    
    /*!
     * @brief		鏄惁宸茬粡杩炴帴涓婃湇鍔″櫒銆�
     */
    bool m_isConnected;
    
    /*!
     * @brief		鏄惁姝ｅ湪灏濊瘯杩炴帴鏈嶅姟鍣ㄣ��
     */
    bool m_isConnecting;
    
    /*!
     * @brief		鏄惁宸插純鐢ㄣ��
     */
    bool m_isDiscarded;
    
    /*!
     * @brief		IP銆�
     */
    std::string m_ip;
    
    /*!
     * @brief		绔彛銆�
     */
    int m_port;
    
    /*!
     * @brief		瀛樺偍寰呭彂閫佹暟鎹��
     */
    SocketBuffer m_sendBuffer;
    
    /*!
     * @brief		瀛樺偍鎺ユ敹鍒扮殑鏁版嵁銆�
     */
    SocketBuffer m_recvBuffer;

	/*
	 *	socket寤虹珛杩炴帴鏃堕棿
	 */
	long long m_ConnTime;
    
    /*
	 *	idle鐨勯棿闅旀椂闂�
	 */
	long m_Idle;
};

#endif
