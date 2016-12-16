/*!
 * @brief	管理客户端所有socket
 * @author	Zhou Lingfei
 * @date	2012-9-10
 * @ingroup	Network
 * @note    使用libcurl的multi interface实现。
 */
#include "CCScheduler.h"
#include "SocketHandler.h"

#include "TcpSocket.h"
//#include "Common/OGLogger.h"

static SocketHandler* s_socketHandler = NULL;

SocketHandler::SocketHandler()
{
    sendReplyInterval=0;
    revReplyInterval=0;
    
    Director::getInstance()->getScheduler()->scheduleUpdate(this, 0, false);
    Director::getInstance()->getScheduler()->schedule(schedule_selector(SocketHandler::scheduler), this, 1, false);
    Director::getInstance()->getScheduler()->schedule(schedule_selector(SocketHandler::sendMsgScheduler), this, 1, false);
}

SocketHandler::~SocketHandler()
{
//    Director::sharedDirector()->getScheduler()->unscheduleUpdateForTarget(this);
    Director::getInstance()->getScheduler()->unscheduleAllForTarget(this);
}

SocketHandler* SocketHandler::sharedSocketHandler()
{
    if (s_socketHandler == NULL)
    {
        s_socketHandler = new SocketHandler;
    }
    return s_socketHandler;
}

void SocketHandler::destroyInstance()
{
    CC_SAFE_DELETE(s_socketHandler);
}

void SocketHandler::addSockect(TcpSocket *socket)
{
    for (SocketList::iterator it = m_sockets.begin(); it != m_sockets.end(); ++it)
    {
        if ((*it) == socket)
        {
            return;
        }
    }
    
    m_sockets.push_back(socket);
}

void SocketHandler::removeSocket(TcpSocket *socket)
{
    m_sockets.remove(socket);
}
//定时器
void SocketHandler::scheduler(float dt){
    sendReplyInterval ++;
    revReplyInterval ++;
}
//重发机制定时器（1秒重发一次）
void SocketHandler::sendMsgScheduler(float dt){
    int maxfd = 0;
    for (SocketList::iterator it = m_sockets.begin(); it != m_sockets.end(); ++it)
    {
        SOCKET s = (*it)->getSocket();
        //判断是否是无效socket
        if (s != INVALID_SOCKET && maxfd < s)
        {
            maxfd = s;
        }
    }
    if (maxfd <= 0)
    {
        return;
    }
    
     fd_set fs_write;
    fd_set fs_except;
    
     FD_ZERO(&fs_write);
    FD_ZERO(&fs_except);
    
    for (SocketList::iterator it = m_sockets.begin(); it != m_sockets.end(); ++it)
    {
        SOCKET s = (*it)->getSocket();
        if (s != INVALID_SOCKET)
        {
             FD_SET(s, &fs_write);
            FD_SET(s, &fs_except);
        }
    }
    
    struct timeval tv;
    tv.tv_sec = 0;
    tv.tv_usec = 0;
    
    int result = select(maxfd + 1, NULL, &fs_write, &fs_except, &tv);
    if (result == SOCKET_ERROR)
    {
        //OGLog(LogTypeNetwork,"[socket] select error!");
    }
    else
    {
        for (SocketList::iterator it = m_sockets.begin(); it != m_sockets.end(); ++it)
        {
            TcpSocket* socket = *it;
            SOCKET s = socket->getSocket();
            if (s != INVALID_SOCKET)
            {
                if (FD_ISSET(s, &fs_except))
                {
                    socket->onDisconnect();
                    socket->onError();
                    continue;
                }
                
                if (FD_ISSET(s, &fs_write))
                {
                    int value = 0;
                    socklen_t length = sizeof(value);
                    getsockopt(s, SOL_SOCKET, SO_ERROR, (char*)&value, &length);
                    
                    if (value != 0 &&(socket->isConnected() || socket->isConnecting()))
                    {
                        socket->onDisconnect();
                        socket->onError();
                        continue;
                    }
                    else
                    {
                        if (socket->isConnecting())
                        {
                            CCLOG("正在连接");
                            socket->onConnect();
                        }
//                        socket->send();
                    }
                }
            }
        }
    }
}
//
void SocketHandler::update(float dt)
{
    int maxfd = 0;
    for (SocketList::iterator it = m_sockets.begin(); it != m_sockets.end(); ++it)
    {
        SOCKET s = (*it)->getSocket();
        //判断是否是无效socket
        if (s != INVALID_SOCKET && maxfd < s)
        {
            maxfd = s;
        }
    }
    if (maxfd <= 0)
    {
        return;
    }
    
    fd_set fs_read;
    fd_set fs_write;
    fd_set fs_except;
    
    FD_ZERO(&fs_read);
    FD_ZERO(&fs_write);
    FD_ZERO(&fs_except);
    
    for (SocketList::iterator it = m_sockets.begin(); it != m_sockets.end(); ++it)
    {
        SOCKET s = (*it)->getSocket();
        if (s != INVALID_SOCKET)
        {
            FD_SET(s, &fs_read);
            FD_SET(s, &fs_write);
            FD_SET(s, &fs_except);
        }
    }
    
    struct timeval tv;
    tv.tv_sec = 0;
    tv.tv_usec = 0;
    
    int result = select(maxfd + 1, &fs_read, &fs_write, &fs_except, &tv);
    if (result == SOCKET_ERROR)
    {
        //OGLog(LogTypeNetwork,"[socket] select error!");
    }
    else
    {
        for (SocketList::iterator it = m_sockets.begin(); it != m_sockets.end(); ++it)
        {
            TcpSocket* socket = *it;
            SOCKET s = socket->getSocket();
            if (s != INVALID_SOCKET)
            {
                if (FD_ISSET(s, &fs_except))
                {
                    socket->onDisconnect();
                    socket->onError();
                    continue;
                }
                
                if (FD_ISSET(s, &fs_write))
                {
                    int value = 0;
                    socklen_t length = sizeof(value);
                    getsockopt(s, SOL_SOCKET, SO_ERROR, (char*)&value, &length);
                    
                    if (value != 0 &&(socket->isConnected() || socket->isConnecting()))
                    {
                        socket->onDisconnect();
                        socket->onError();
                        continue;
                    }
                    else
                    {
                        if (socket->isConnecting())
                        {
                            CCLOG("正在连接");
                            socket->onConnect();
                        }
                        socket->send();
                    }
                }
                
                if (FD_ISSET(s, &fs_read))
                {
                    CCLOG("有回复消息");
                    if (socket->isConnected())
                    {
                        long result = 0;
                        socket->receive(result);
                    }
                }
            }
        }
    }
}
