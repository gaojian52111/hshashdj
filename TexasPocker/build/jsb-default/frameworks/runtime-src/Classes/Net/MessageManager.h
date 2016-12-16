#ifndef __MESSAGE_MANAGER_H__
#define __MESSAGE_MANAGER_H__
#endif // NETMESSAGE == t

#include "TcpSocket.h"
#include <array>

using namespace std;
class MessageManager : public TcpSocket
{
public:

	static MessageManager* GetTheTcpInstance();
    
    
	void destory();
	virtual void onReceiveData(int messageID, const char* message, int size,int msgSequnce);
	virtual void onError();
	virtual void onConnect();
	virtual void onDisconnect();
    void sendMsg(const char* msg);
    void connectMaster();
    void reconnect();
    
    void sendMsg(int tag);
    
    void addMsg(const char* msg);
    void sendMsgInMsgArray();
    //Test
    void sendTestMsg();

private:
    static MessageManager* m_instance;
    
    MessageManager();
    ~MessageManager();
    
    int sendMsgNum;
    int recMsgNum;
    
  };
