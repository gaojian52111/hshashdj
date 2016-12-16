//   jsCppConnect.cpp

#include "jsCppConnect.h"
#include "Net/MessageManager.h"
#include "ScriptingCore.h"
#include "jsCppMaster.hpp"
USING_NS_CC;

jsCppConnect* jsCppConnect::m_jsCppConnect = nullptr;

jsCppConnect::jsCppConnect(){
    
}

jsCppConnect::~jsCppConnect(){
    
}

jsCppConnect* jsCppConnect::getInstence(){
    if(m_jsCppConnect == nullptr){
        m_jsCppConnect = new jsCppConnect();
    }
    return m_jsCppConnect;
}

void jsCppConnect::destory(){
    if(m_jsCppConnect){
        delete m_jsCppConnect;
        m_jsCppConnect = nullptr;
    }
}

void jsCppConnect::testlog(const char* msg)
{
    jsCppMaster::getInstence()->jsSendMsgToCppLog(msg);
}

void jsCppConnect::cppToJs(const char* FuncMsg){
    ScriptingCore::getInstance()->evalString(FuncMsg);
}

void jsCppConnect::jsToCpp(map<string,string>msgs){
    
    jsCppMaster::getInstence()->jsSendMsgToCpp(msgs);
}
