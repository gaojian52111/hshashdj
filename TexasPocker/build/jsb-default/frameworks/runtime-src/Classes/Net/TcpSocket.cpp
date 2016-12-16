/*!
 * @brief	瀹㈡埛绔痵ocket绫�
 * @author	Zhou Lingfei
 * @date	2012-9-6
 * @ingroup	Network
 */

#include "TcpSocket.h"
#include "SocketHandler.h"
//#include "Common/System.h"
//#include "Common/OGLogger.h"

#include <iostream>

TcpSocket::TcpSocket()
{
	m_socket        = INVALID_SOCKET;
    m_isConnected   = false;
    m_isConnecting  = false;
    m_isDiscarded   = false;
#ifdef _WIN32
	WSADATA wsa={0};
	WSAStartup(MAKEWORD(2,2),&wsa);
#endif
}

TcpSocket::~ TcpSocket()
{
    disconnect();
	SocketHandler::sharedSocketHandler()->removeSocket(this);
}

bool TcpSocket::connect(const char* ip, int port)
{

    m_ip = ip;
    m_port = port;

	m_socket = ::socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    
    m_isDiscarded = false;
    m_isConnected = false;
    m_isConnecting = true;
    
    m_recvBuffer.clear();
    m_sendBuffer.clear();
	
	if (m_socket == INVALID_SOCKET)
	{
		//int error = GetLastError();
		////CCLOG("[socket] Invalid Socket!   %d",error);

        m_isConnecting = false;
		return false;
	}
    
    if (!setNonBlocking())
    {
       //CCLOG("[socket] Failed to set socket in nonblocking mode!");
        m_isConnecting = false;
        return false;
    }
    
	//CCLOG("[socket] Connecting to server: ip = %s, port = %d", ip, port);
    
    struct sockaddr_in sa;
    //给socket创建一块内存
    //作用是在一段内存块中填充某个给定的值，它是对较大的结构体或数组进行清零操作的一种最快方法
    memset(&sa, 0, sizeof(sa));
    sa.sin_family = AF_INET;
    sa.sin_addr.s_addr = inet_addr(ip);
    sa.sin_port = htons(port);
    
    int result = ::connect(m_socket, reinterpret_cast<sockaddr*>(&sa), sizeof(sa));
    if (result == SOCKET_ERROR && !isBusy())
    {
        //CCLOG("[socket] Failed to connect to server!");
        m_isConnecting = false;
        return false;
    }

	SocketHandler::sharedSocketHandler()->addSockect(this);

    return true;
}

bool TcpSocket::disconnect()
{
    m_isDiscarded = true;
    m_isConnected = false;
    m_isConnecting = false;
    m_recvBuffer.clear();
    m_sendBuffer.clear();

	//OGLog(LogTypeNetwork,"[socket] Disconnecting to server: ip = %s, port = %d", m_ip.c_str(), m_port);
    
	if (m_socket != INVALID_SOCKET)
    {
		//int result = shutdown(m_socket, SHUT_RDWR);
        int result = closesocket(m_socket);
        
        m_socket = INVALID_SOCKET;
		return (result != SOCKET_ERROR);
	}
    
	return true;
}

bool TcpSocket::isConnected() const
{
//    return true;
	//CCLOG("connect:%s",m_isConnected?"true":"false");
    return (m_socket != INVALID_SOCKET) && m_isConnected;
}

bool TcpSocket::isConnecting() const
{
	////CCLOG("connecting:%s",m_isConnecting?"true":"false");
    return (m_socket != INVALID_SOCKET) && m_isConnecting;
}

bool TcpSocket::isDiscarded() const
{
	//CCLOG("disconnect:%s",m_isDiscarded?"true":"false");
    return (m_socket == INVALID_SOCKET) || m_isDiscarded;
}

SOCKET TcpSocket::getSocket() const
{
    return m_socket;
}

const char* TcpSocket::getIP() const
{
    return m_ip.c_str();
}

int TcpSocket::getPort() const
{
    return m_port;
}

bool TcpSocket::send(const char *data, int length)
{
   
    if (isConnected())
    {
		//CCLOG("sendIn");
        long result = 0;
        try
        {
       
                result = ::send(m_socket, data, length, 0);

        }
        catch (...)
        {
            disconnect();
            onError();
            return false;
        }

        if (result == SOCKET_ERROR)
        {
            return isBusy();
        }
        else if (result == 0)
        {
            disconnect();
            onError();
            return false;
        }
	}

	else if(isConnecting())
    {
          m_sendBuffer.setBuffer(data, length);
    }
    else
    {
        return false;
    }
    return true;
}

bool TcpSocket::send()
{
	if (m_sendBuffer.length > 0)
	{
		bool result = send(m_sendBuffer.data, m_sendBuffer.length);
        m_sendBuffer.length = 0;
		//CCLOG("send:%s",result?"true":"false");
        return result;
	}
    return true;
}

bool TcpSocket::send(google::protobuf::MessageLite* msg, int msgID,int sequenceID)
{
	int size = sizeof(MessageHeader);
	int msgLen = 0;
	if (msg != NULL)
	{
		msgLen = msg->ByteSize();
		size += msgLen;
	}
    
    MessageHeader header;
    header.length = msgLen;
    header.messageID = msgID;
    header.sequenceID = sequenceID;
    
  
    char* buffer = (char*)malloc(size);
    memcpy(buffer, &header, sizeof(header));
    

    char* msgBuffer = buffer + sizeof(header);

	if (msg != NULL)
	{
		msg->SerializeToArray(msgBuffer, msgLen);
	}
    
    int result = send(buffer, size);
    
    free(buffer);

    return (result > 0);
}

bool TcpSocket::receive(long &_result)
{
    if (!isConnected())
    {
        return false;
    }
    /*
     由于当前recvBuffer中可能会有上次没拼完的数据
     顾要加上 上次剩下的数据的length 就是新的数据要放的地址
     */
    char* data = m_recvBuffer.data + m_recvBuffer.length;
    int size = SOCKET_BUFFER_SIZE - m_recvBuffer.length;
    //recv数据 将数据放到data中 返回值为这次数据的大小
    long result = ::recv(m_socket, data, size, 0);
    _result = result;

    if (result == SOCKET_ERROR)
    {
		//CCLOG("reinFalse busy");
        return isBusy();
    }
    else if (result <= 0)
    {
		//CCLOG("result<=0");
        disconnect();
        onError();
        return false;
    }
    else
    {
        //把接过来的数据长度值 加到原来的数据buffer中
        m_recvBuffer.length += result;
        //CCLOG("else");
        if (m_recvBuffer.length >= sizeof(MessageHeader))
        {
            //获取头中 body的长度记录
            int msgLen = m_recvBuffer.getHeader()->length;
            int msgSequnce = m_recvBuffer.getHeader()->sequenceID;
             //CCLOG("if  %d",msgLen);

            
            //如果当前缓存中的数据大小 大于 发过来的数据大小
            while (m_recvBuffer.getBodySize() > msgLen)
            {
                //直接发送
                onReceiveData(m_recvBuffer.getMessageID(), m_recvBuffer.getBody(), msgLen,msgSequnce);
                //CCLOG("ChaiBao");
                if (m_recvBuffer.length < sizeof(MessageHeader))
                {
                    //如果发送完了 当前的数据长度 已经小于 消息头的长度 返回
                    break;
                }
                //设置已经发送出去的数据长度 在缓存中移除
                m_recvBuffer.setOffset(msgLen + sizeof(MessageHeader));
                if (m_recvBuffer.length < sizeof(MessageHeader))
                {
                    //去除之后如果缓存的长度 小于消息头的长度 返回
                    break;
                }
                //说明缓存中 还有数据（一次发了两条数据）
                msgLen = m_recvBuffer.getHeader()->length;
            }
        }
         //CCLOG("ChaiBaoOver");
        
        if (m_recvBuffer.length < sizeof(MessageHeader) || m_recvBuffer.getHeader()->length > m_recvBuffer.getBodySize())
        {
			 //CCLOG("ChaiBaoOver True");
            return true;
        }
        else
        {
			//CCLOG("ChaiBaoOver else");
            //恰好剩余的数据等于 头里标明的数据长度 继续发送
            int msgSequnce = m_recvBuffer.getHeader()->sequenceID;
            
            onReceiveData(m_recvBuffer.getMessageID(), m_recvBuffer.getBody(), m_recvBuffer.getBodySize(),msgSequnce);
            //正好发完 清零
            m_recvBuffer.clear();
        }
    }
    return true;
}

bool TcpSocket::isBusy()
{
#ifdef _WIN32
    return WSAGetLastError() == WSAEWOULDBLOCK;
#else
    int err = errno;
    return err == EAGAIN || err == EINPROGRESS;
#endif
}

bool TcpSocket::setNonBlocking()
{
#ifdef _WIN32
    unsigned long l = 1;
    int result = ioctlsocket(m_socket, FIONBIO, &l);
    return result != SOCKET_ERROR;
#else
    int flags = fcntl(m_socket, F_GETFL, 0);
    if (flags == SOCKET_ERROR)
    {
        return false;
    }
    int result = fcntl(m_socket, F_SETFL, flags | O_NONBLOCK);
    return result != SOCKET_ERROR;
#endif
}

void TcpSocket::onError()
{
	//CCLOG("[socket] Error: ip = %s, port = %d", m_ip.c_str(), m_port);
}

void TcpSocket::onConnect()
{
    m_isConnected = true;
    m_isConnecting = false;
    m_isDiscarded = false;
    
   //CCLOG("[socket] Connected to server: ip = %s, port = %d", m_ip.c_str(), m_port);
}

void TcpSocket::onDisconnect()
{
    m_isConnected = false;
    m_isConnecting = false;
    m_isDiscarded = true;

	//CCLOG("[socket] Disconnected to server: ip = %s, port = %d", m_ip.c_str(), m_port);
}

void TcpSocket::onSendData()
{
}

/*
 *	璁剧疆idle鐨勯棿闅旀椂闂�
 */
void TcpSocket::setIdleTime(long interval)
{
	m_Idle = interval;
}

/*
 *	鑾峰彇寤虹珛杩炴帴鐨勬椂闂�
 */
long TcpSocket::getConnTime()
{
	return m_ConnTime;
}

/*
 *	璁剧疆閾炬帴鏃堕棿
 */
void TcpSocket::setConnTime(long long currTime)
{
	m_ConnTime = currTime;
}
