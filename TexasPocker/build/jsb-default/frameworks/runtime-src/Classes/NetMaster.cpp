//
//  NetMaster.cpp
//  TexasPocker
//
//  Created by edz on 2016/12/12.
//
//

#include "NetMaster.hpp"
#include "MessageManager.h"
#include "jsCppMaster.hpp"

enum RECEIVEDMAPVALUETYPE{
    RECEIVEDMAPVALUETYPE_NONE = 0,
    RECEIVEDMAPVALUETYPE_ISRECEIVED = 1,
    RECEIVEDMAPVALUETYPE_NOTRECEIVED = 2
};



NetMaster* NetMaster::m_NetMaster = nullptr;

NetMaster* NetMaster::getInstence(){
    if (m_NetMaster == nullptr) {
        m_NetMaster = new NetMaster();
    }
    return m_NetMaster;
}

//发送消息
void NetMaster::sendMsgToNet(NetMsg* msg){
//    map<string,string>msg1;
//    this->sendMsgToWeb(msg1);
//    return;
    int msgId = msg->getMsgId();
    Message* msgpb = msg->getPbMsg();
    //判断消息类型 看发送消息记录是否增加
    printf("发送消息 ->>>> 这个消息是 %d类型的",msg->getMsgType());
    switch (msg->getMsgType()) {
        case MSGTYPE_NONE:
        {
            
            break;
        }
        case MSGTYPE_COMMON:
        case MSGTYPE_PING:
        {
            this->m_sendMsgIndex ++;
            msg->setSequence(m_sendMsgIndex);
            resendMsgs.push_back(msg);

            break;
        }
        case MSGTYPE_RETRANSMIT:
        {
            break;
        }
        case MSGTYPE_RESEND:
        {
            
            break;
        }
        default:
            break;
    }
    int sequenceID = msg->getSequence();
    MessageManager::GetTheTcpInstance()->send(msgpb, msgId, sequenceID);
}
//定时重新发送消息
void NetMaster::sendQueueMsgs(float dt){
    for(int i=0;i<resendMsgs.size();i++){
        if(resendMsgs[i]->getMsgType() == MSGTYPE_RESEND){
            
            int msgId = resendMsgs[i]->getMsgId();
            
            int retransmitIndex = resendMsgs[i]->getRetransmitIndex();
            if(retransmitIndex >= m_maxRecurrentMsgTime){
                printf("消息id为%d 的消息重发次数%d次 超过%d次 执行断线重连操作\n",msgId,retransmitIndex,m_maxRecurrentMsgTime);
                this->reconnect();
                //断线后所有记录清空 重置
                return;
            }
            retransmitIndex ++;
            resendMsgs[i]->setRetransmitIndex(retransmitIndex);
            
            Message* msgpb = resendMsgs[i]->getPbMsg();
            int sequenceID = resendMsgs[i]->getSequence();
            MessageManager::GetTheTcpInstance()->send(msgpb, msgId, sequenceID);
        }
    }
}

void NetMaster::chackSendPingMsg(float dt){
    long nowTime = getNowTime();
    if (nowTime - m_reciveLastMsgTime >= m_receiveMsgMaxInterval && m_reciveLastMsgTime != 0) {
        printf("最后接收到消息的时间为%ld,允许时间为 %ld ，超过了 %ld",nowTime,m_reciveLastMsgTime,nowTime-m_reciveLastMsgTime);
        //创建一个ping消息
        NetMsg* pingMsg = new NetMsg();
        pingMsg->setMsgType(MSGTYPE_PING);
        this->sendMsgToNet(pingMsg);
    }
}

//接收消息
void NetMaster::receiveMsg(NetMsg* msg){
    
    m_reciveLastMsgTime = getNowTime();
    printf("接收 <<<<<- 这个消息是 %d类型的\n",msg->getMsgType());

    switch (msg->getMsgType()) {
        case MSGTYPE_NONE:
        {
            
            break;
        }
        case MSGTYPE_COMMON:
        case MSGTYPE_PING:
        {
            //发送回执
            this->sendReceipt(msg);
            //设置消息状态
            this->setReceivedMsgsMapState(msg);
            break;
            
        }
        case MSGTYPE_RETRANSMIT:
        {
            //将消息从发送消息队列中删除
            this->removeMsgFromQueueMsgs(msg);
            break;
        }
        case MSGTYPE_RESEND:
        {
            
            break;
            
        }
        default:
            break;
    }
}

void NetMaster::reconnect(){
    MessageManager::GetTheTcpInstance()->reconnect();
    //向js发送断线重连消息
    
}

bool NetMaster::removeMsgFromQueueMsgs(NetMsg* msg){
    for (long i=resendMsgs.size()-1; i>=0; i--) {
        if(resendMsgs[i]->getSequence() == msg->getSequence()){
            printf("找到了要删除的消息 sn = %d\n",resendMsgs[i]->getSequence());
            vector<NetMsg*>::iterator iter =resendMsgs.begin()+i;
            resendMsgs.erase(iter);
            
            return true;
        }
    }
    printf("sn = %d 的消息 不存在\n",msg->getSequence());

    return false;
}

void NetMaster::setReceivedMsgsMapState(NetMsg* msg)
{

    isReceivedMsgsMapIter = isReceivedMsgsMap.find(msg->getSequence());
    //这条消息第一次被接收到
    if (isReceivedMsgsMapIter == isReceivedMsgsMap.end())
    {
        printf("Sequence = %d  ->>>>这条消息第一次被接收到 ",msg->getSequence());

        isReceivedMsgsMap[msg->getSequence()] = RECEIVEDMAPVALUETYPE_ISRECEIVED;
        //消息发给业务层
        this->sendMsgToCocos(msg);
    }
    else
    {
        printf("Sequence = %d  ->>>>这条消息第一次被接收到之前被接收过 判断是否接收过回复",msg->getSequence());

        //接收到过这条消息
        if (isReceivedMsgsMap[msg->getSequence()] == RECEIVEDMAPVALUETYPE_ISRECEIVED) {
            //扔掉消息
            printf("Sequence = %d  ->>>>这条消息被回复过  被扔掉了 ",msg->getSequence());

        }
        else if (isReceivedMsgsMap[msg->getSequence()] == RECEIVEDMAPVALUETYPE_NOTRECEIVED){
            isReceivedMsgsMap[msg->getSequence()] = RECEIVEDMAPVALUETYPE_ISRECEIVED;
            printf("Sequence = %d  ->>>>这条消息还没有被回复 消息发送给业务层 ",msg->getSequence());

            //消息发给业务层
            this->sendMsgToCocos(msg);
        }
    }
}

void NetMaster::sendMsgToCocos(NetMsg* msg){

    CppTojsMsg* msgForJs = new CppTojsMsg();
    msgForJs->setDataFromData(msg->getNetMsgToJsMsg());
    jsCppMaster::getInstence()->cppSendMsgToJs(msgForJs);
}

void NetMaster::sendReceipt(NetMsg* msg){
    
    NetMsg* receiptMsg = new NetMsg();
    receiptMsg->setNetMsgReceipt(msg);
    this->sendMsgToNet(receiptMsg);
}

long NetMaster::getNowTime(){
    time_t now_time;
    time(&now_time);
    return now_time;
}
char* NetMaster::getmd5(const char *test){

    md5_state_t state;
    md5_byte_t digest[16];
    int di;
    
    md5_init(&state);
    md5_append(&state, (const md5_byte_t *)test, strlen(test));
    md5_finish(&state, digest);
    char *a=new char[32];
    for (di = 0; di < 16; ++di)
    {
        
        sprintf(a+di*2,"%02x",digest[di]);
        
    }
    return a;
}
void NetMaster::sendMsgToWeb(map<string,string>msg){
    HttpRequest* request = new HttpRequest();
    //发送过来的 是结构体
    
    string url = "http://127.0.0.1:8080?ssss=111";
    string data;

    map<string,string>::iterator iters = msg.find("webMsg");
    if (iters != msg.end()) {
        data.append(iters->second);
    }
    else
    {
        printf("web消息是空");
    }
    //url.append(data);
    string p9md5key = "jWD74FtlvJ1XjXyT";
    string willBeEncrypted = "13040403020"+ p9md5key ;
    const char*willBeEncrypted_c =willBeEncrypted.c_str();
    char* md5 = this->getmd5(willBeEncrypted_c);
    printf("md5 = %s ", md5);
    
    request->setUrl(url);
    request->setRequestType(cocos2d::network::HttpRequest::Type::GET);
    request->setResponseCallback(this, httpresponse_selector(NetMaster::receiveWeb));
    request->setTag("GET Login");
    HttpClient::getInstance()->send(request);
    request->release();
}

void NetMaster::receiveWeb(cocos2d::Node *sender ,void *data){
    HttpResponse *response = (HttpResponse*)data;

    if (!response)
    {
        return;
    }
    if (0 != strlen(response->getHttpRequest()->getTag()))
    {
        printf("%s completed ", response->getHttpRequest()->getTag());
    }
    std::vector<char> *buffer = response->getResponseData();//用来获取接收到的数据
    printf("Http Test, dump data: ");
    for (unsigned int i = 0; i < buffer->size(); i++)
    {
        printf("%c", (*buffer)[i]);
    }
    printf("%s",data);
}
NetMaster::NetMaster(){
    
    m_reciveLastMsgTime = 0;
    m_sendMsgIndex = 0;
    m_chackPingInterval = 5;
    m_receiveMsgMaxInterval = 5;
    m_maxRecurrentMsgTime = 5;
    m_recurrentMsgInterval = 1;
    
    MessageManager::GetTheTcpInstance()->connectMaster();
    //创建定时器
    Director::getInstance()->getScheduler()->schedule(schedule_selector(NetMaster::sendQueueMsgs), this, m_recurrentMsgInterval, false);
    Director::getInstance()->getScheduler()->schedule(schedule_selector(NetMaster::chackSendPingMsg), this, m_chackPingInterval, false);

}
NetMaster::~NetMaster(){
    Director::getInstance()->getScheduler()->unscheduleAllForTarget(this);
}
