//   jsbTest.h

#pragma once
#include "cocos2d.h"
#include <string>
#include <vector>
using namespace std;
class jsCppConnect
{
public:

    static jsCppConnect* getInstence();
    static void destory();
    
    static void testlog(const char* msg);

    
    
    
    void cppToJs(const char* FuncMsg);
    static void jsToCpp(map<string,string>msgs);
    
private:
    jsCppConnect();
    ~jsCppConnect();
    
private:
    
    
    static jsCppConnect* m_jsCppConnect;
};


