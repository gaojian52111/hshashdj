//
//  NetMaster.hpp
//  TexasPocker
//
//  Created by edz on 2016/12/12.
//
//

#ifndef NetMaster_hpp
#define NetMaster_hpp

#include <stdio.h>
#include "cocos2d.h"
#include <unordered_map>
#include "NetMsg.hpp"
#include <vector>
#include <ctime>
#include "HttpRequest.h"
#include "HttpClient.h"
#include "HttpResponse.h"
#include <stdlib.h>

extern "C" {
    #include "Net/crypto/md5/md5.h"
}

using namespace cocos2d::network;
using namespace std;
using namespace cocos2d;

class NetMaster : public cocos2d::Node
{
public:
    static NetMaster* getInstence();

    //发送消息
    void sendMsgToNet(NetMsg* msg);
    void sendQueueMsgs(float dt);
    void sendReceipt(NetMsg* msg);
    void sendMsgToCocos(NetMsg* msg);
    
    void sendMsgToWeb(map<string,string>msg);
    char* getmd5(const char *test);
    
    //接收消息
    void receiveMsg(NetMsg* msg);
    void receiveWeb(cocos2d::Node *sender ,void *data);
    //断线重连
    void reconnect();
    //断线之后做的事情
    void afterReconnect();
    //设置ReceivedMsgsMap 中的状态
    void setReceivedMsgsMapState(NetMsg* msg);
    
    //在重发消息队列中删除某个消息
    bool removeMsgFromQueueMsgs(NetMsg* msg);
    //获取当前时间
    long getNowTime();
    void chackSendPingMsg(float dt);
    
private:
    NetMaster();
    ~NetMaster();
private:
    long m_reciveLastMsgTime;//最近一次回复消息的时间戳
    int m_sendMsgIndex;//发送消息序号
    int m_chackPingInterval;//检查ping的时间间隔
    int m_maxRecurrentMsgTime;//最大单个消息重发次数
    int m_recurrentMsgInterval;//重发消息时间间隔
    int m_receiveMsgMaxInterval;//回复消息最大间隔
    int m_appId;
    
    unordered_map<int,int> isReceivedMsgsMap;
    unordered_map<int,int>::const_iterator isReceivedMsgsMapIter;

    vector<NetMsg*> resendMsgs;
    static NetMaster* m_NetMaster;
};
#endif /* NetMaster_hpp */
