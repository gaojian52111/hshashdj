//
//  jsCppMaster.cpp
//  TexasPocker
//
//  Created by sang HongLu on 2016/12/8.
//
//

#include "jsCppMaster.hpp"
#include "jsCppConnect.h"
//#include "Net/MessageManager.h"
#include "NetMsg.hpp"
#include "NetMaster.hpp"

//js中接收原生数据的方法名
static string jsConnectFucName = "gateWay.from(obj)";

jsCppMaster* jsCppMaster::m_jsCppMaster = nullptr;
jsCppMaster::jsCppMaster(){
    index = 0;
//    MessageManager::GetTheTcpInstance()->connectMaster();

}

jsCppMaster::~jsCppMaster(){

}

jsCppMaster* jsCppMaster::getInstence(){
    if (m_jsCppMaster == nullptr) {
        m_jsCppMaster = new jsCppMaster();
    }
    return m_jsCppMaster;
}

void jsCppMaster::destory(){
    if (m_jsCppMaster) {
        delete m_jsCppMaster;
        m_jsCppMaster = nullptr;
    }
}

void jsCppMaster::jsSendMsgToCpp(map<string,string>msgs){
    string keys = "type";
    map<string,string>::iterator iter = msgs.find(keys);
    
    if(iter == msgs.end()){
        CCLOG("type is NULL!!!");
    }
    int type = std::atoi(iter->second.c_str());
    switch (type) {
        case JSMSGTYPE_NONE:
        {
            break;
        }
        case JSMSGTYPE_NET:
        {
            this->sendMsgToNet(msgs);
            break;
        }
        case JSMSGTYPE_WEB:
        {
            this->sendMsgToWEB(msgs);
            break;
        }
        default:
        {
            CCLOG("JSMSGTYPE ERROR does not find ");
            break;
        }
    }
}

void jsCppMaster::jsSendMsgToCppLog(const char* log){
    CCLOG("jsSendMsgToCppLog  %s",log);
}

void jsCppMaster::cppSendMsgToJs(CppTojsMsg* toJsMsg){
    string jsConnectFucName =toJsMsg->getJsFuncAndData();
    CCLOG("cppSendMsgToJs jsConnectFucName = %s \n",jsConnectFucName.c_str());
    jsCppConnect::getInstence()->cppToJs(jsConnectFucName.c_str());
}
//解析数据
void jsCppMaster::jsMsgMaster(map<string,string>msgs){
    
}

//网络部分
void jsCppMaster::sendMsgToNet(map<string,string>msgs){
    
    //创建网络数据对象 准备发送
    NetMsg* msg = new NetMsg();
    msg->setNetMsg(msgs);
    msg->setMsgType(MSGTYPE_COMMON);
    NetMaster::getInstence()->sendMsgToNet(msg);
}
//与原生交互
void jsCppMaster::sendMsgToWEB(map<string,string>msgs){
    NetMaster::getInstence()->sendMsgToWeb(msgs);
}
