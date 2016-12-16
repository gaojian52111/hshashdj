//
//  cppTojsMsg.hpp
//  TexasPocker
//
//  Created by edz on 2016/12/9.
//
//

#ifndef CppTojsMsg_hpp
#define CppTojsMsg_hpp

#include <stdio.h>
#include <map>
#include <string>
#include "smzy.pb.h"

using namespace std;

class CppTojsMsg
{
public:
    CppTojsMsg();
    ~CppTojsMsg();
    void setData(string jsDataName,string jsData);
    void setDataFromData(map<string,string>msgData);
    
    string getJsFuncAndData();
    string makeJsData();
    void makeJsFuncAddData();

private:
    map<string,string>msgData;//暂存发给js的数据
    int index;//消息数量
    string funcName;//调用js的方法
    string sendFuncAndData;
    map<string, string>::reverse_iterator  iter;
    
    
};

#endif /* CppTojsMsg_hpp */
