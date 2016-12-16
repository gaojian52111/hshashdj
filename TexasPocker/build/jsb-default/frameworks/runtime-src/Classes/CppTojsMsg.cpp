//
//  cppTojsMsg.cpp
//  TexasPocker
//
//  Created by edz on 2016/12/9.
//
//

#include "CppTojsMsg.hpp"
#include "jsCppMaster.hpp"

CppTojsMsg::CppTojsMsg()
{
    this->funcName = "cppTojs";
    this->index = jsCppMaster::getInstence()->index++;
};
CppTojsMsg::~CppTojsMsg(){};

void CppTojsMsg::setData(string jsDataName,string jsData){
    this->msgData.insert(make_pair(jsDataName,jsData));
};

string CppTojsMsg::getJsFuncAndData(){
    //由于只有在获取整体字符串的时候才 ++
    this->makeJsFuncAddData();
    return sendFuncAndData;
};

string CppTojsMsg::makeJsData(){
    
    string object = "var obj = new Object();";
    object.append("obj.index");
    object.append("=");
    char index_buf[100];
    sprintf(index_buf, "%d",this->index);
    object.append(index_buf);
    object.append(";");
    for(iter = msgData.rbegin(); iter != msgData.rend(); iter++)
    {
        object.append("obj.");
        object.append(iter->first.c_str());
        object.append("=");
        object.append(iter->second.c_str());
        object.append(";");
        
    }
    return object;
};

void CppTojsMsg::makeJsFuncAddData(){
    string data = this->makeJsData();
    funcName.append("('AAA','dddd','ccccc');");
    
    sendFuncAndData = funcName;
};

void CppTojsMsg::setDataFromData(map<string,string>msgData){
    this->msgData = msgData;
}
