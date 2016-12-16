#include "MessageManager.h"
#include "SocketHandler.h"
//pb
#include "PbDefine.h"
#include "smzy.pb.h"

#include "NetMaster.hpp"


int num = 0;
MessageManager* MessageManager::m_instance = nullptr;
MessageManager::MessageManager()
{
    
}

MessageManager::~MessageManager()
{
	SocketHandler::destroyInstance();
}

void MessageManager::onReceiveData( int messageID, const char* message, int size ,int msgSequnce)
{
    NetMsg* msg = new NetMsg();
    msg->setPbMsg(messageID, message, size,msgSequnce);
    NetMaster::getInstence()->receiveMsg(msg);

 }

void MessageManager::onError()
{
	TcpSocket::onError();
}

void MessageManager::onConnect()
{
	TcpSocket::onConnect();
}

void MessageManager::onDisconnect()
{
	TcpSocket::onDisconnect();
	//CCLOG("child onDisconnect");
	this->connect("127.0.0.1", 2990);
	//this->connect(IP, PORT);
}



MessageManager* MessageManager::GetTheTcpInstance()
{
	if (m_instance == nullptr)
	{
		m_instance = new MessageManager();
	}
	return m_instance;
}

void MessageManager::destory()
{
	if (m_instance != nullptr)
	{
		delete m_instance;
	}
	m_instance = nullptr;
}

void MessageManager::connectMaster()
{
    this->connect("127.0.0.1", 2990);
}

void MessageManager::sendMsg(const char* msg){
    this->send(msg, 4);
    
}

void MessageManager::addMsg(const char* msg){
    
}

void MessageManager::sendMsgInMsgArray(){
    
}

void MessageManager::sendTestMsg(){
    string sendBuffer;
    
    Message* pbMsg = new Message();
    Head pbHead;
    
    
    pbHead.set_version(1);
    pbHead.set_appid(100);
    pbHead.set_msgid(1000);
    pbHead.set_sequence(10000);
    pbHead.set_timestamp(1010);
    pbHead.set_retcode(1000000);
    
    pbMsg->set_allocated_head(&pbHead);
    pbMsg->set_body("我是包体");
    
    this->send(pbMsg,1,10000);
}

void MessageManager::reconnect(){
    this->disconnect();
    this->connect("127.0.0.1", 2990);
}
