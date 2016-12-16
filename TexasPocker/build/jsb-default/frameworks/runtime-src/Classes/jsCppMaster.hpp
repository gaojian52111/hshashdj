//
//  jsCppMaster.hpp
//  TexasPocker
//
//  Created by sang HongLu on 2016/12/8.
/*
    功能：
        1，解析js发过来的命令
        2，解析c++接收到的数据
        3，与原生交互
        4，与网络部分交互
 
*/

#ifndef jsCppMaster_hpp
#define jsCppMaster_hpp

#include <stdio.h>
#include <map>
#include <string>

#include "CppTojsMsg.hpp"

using namespace std;

enum JSMSGTYPE{
    JSMSGTYPE_NONE = 0,
    JSMSGTYPE_NET,
    JSMSGTYPE_WEB
};


class jsCppMaster
{
public:
    static jsCppMaster* getInstence();
    static void destory();

    void jsSendMsgToCpp(map<string,string>msgs);
    void cppSendMsgToJs(CppTojsMsg* toJsMsg);
    
    void jsSendMsgToCppLog(const char* log);
    
    //解析数据
    void jsMsgMaster(map<string,string>msgs);
    
    //网络部分
    void sendMsgToNet(map<string,string>msgs);
    void sendMsgToWEB(map<string,string>msgs);
    //与原生交互
    
    int index;

private:
    jsCppMaster();
    ~jsCppMaster();
    
    static jsCppMaster* m_jsCppMaster;
};


#endif /* jsCppMaster_hpp */
