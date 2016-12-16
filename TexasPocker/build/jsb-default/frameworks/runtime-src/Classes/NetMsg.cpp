//
//  NetMsg.cpp
//  TexasPocker
//
//  Created by edz on 2016/12/12.
//
//

#include "NetMsg.hpp"

NetMsg::NetMsg(){
    version = -100;
    appid = -100;
    msgId = -100;
    sequence = -100;
    retcode = -100;
    string extra;
    string router;
    string body;
    retransmitIndex = 0;
    sendIndex = -1;
    msgtype = MSGTYPE_NONE;
    pbMsg = nullptr;
}

NetMsg::~NetMsg(){
  //  delete pbMsg;
    //pbMsg = nullptr;
}

void NetMsg::setPbMsg(int messageID, const char* message, int size , int _msgSequnce){

    if (size == 0) {
        //说明是回执消息
        msgtype = MSGTYPE_RETRANSMIT;
        sequence = _msgSequnce;
        return;
    }
    pbMsg->ParseFromArray(message, size);

    if (pbMsg == nullptr) {
        printf("getNetMsgToJsMsg--error   pbMsg = nullptr");
    }

    if (pbMsg->has_head()) {
        if (pbMsg->head().has_appid()) {
            appid = pbMsg->head().appid();
        }
        if (pbMsg->head().has_version()) {
            version =  pbMsg->head().version();
        }
        if (pbMsg->head().has_msgid()) {
            msgId =  pbMsg->head().msgid() & MSGID_MARK_DECODE;
        }
        if (pbMsg->head().has_sequence() && _msgSequnce == pbMsg->head().has_sequence()) {
            sequence = pbMsg->head().sequence();
        }
        if (pbMsg->head().has_timestamp()) {
            timestamp = pbMsg->head().timestamp();
        }
        if (pbMsg->head().has_retcode()) {
            retcode =pbMsg->head().retcode();
        }

        if (pbMsg->head().has_extra()) {
            extra = pbMsg->head().extra();
        }
        if (pbMsg->head().has_router()) {
            router = pbMsg->head().router();
        }
        printf("\
               接收到数据-------------------------------\
               getNetMsgToJsMsg-->>>   appid_ = %d \n \
               getNetMsgToJsMsg-->>>   version_ = %d \n \
               getNetMsgToJsMsg-->>>   msgid_ = %d \n \
               getNetMsgToJsMsg-->>>   sequence_ = %d \n \
               getNetMsgToJsMsg-->>>   has_timestamp_ = %d \n \
               getNetMsgToJsMsg-->>>   retcode_ = %d \n \
               getNetMsgToJsMsg-->>>   router = %s \n \
               getNetMsgToJsMsg-->>>   extra = %s \n \
               接收到数据-------------------------------\
               ",
               appid,version,msgId,sequence,timestamp,retcode,router.c_str(),extra.c_str());
    }
    else{
        printf("getNetMsgToJsMsg--error   pbMsg->head = nullptr");
    }
    if (pbMsg->has_body()) {
        string body= pbMsg->body();
        
    }
    else{
        printf("getNetMsgToJsMsg--   pbMsg->body = nullptr");
    }

}
//组装pb包体
void NetMsg::setNetMsg(map<string,string>jsMsg){
    pbMsg = new Message();
    Head* pbHead = new Head();
    map<string,string>::iterator iter ;
    for (iter = jsMsg.begin(); iter!=jsMsg.end(); iter++) {
        printf("jsMsg ->>%s  %s \n",iter->first.c_str(),iter->second.c_str());
    }
    string key_version = "version";
    iter = jsMsg.find(key_version);
    
    if (iter!=jsMsg.end()) {
        version =atoi(iter->second.c_str());
        pbHead->set_version(version);
        
    }
    
    string key_appid = "appid";
    iter = jsMsg.find(key_appid);
    
    if (iter!=jsMsg.end()) {
        appid =atoi(iter->second.c_str());
        
        pbHead->set_appid(appid);
        
    }
    
    string key_msgId = "msgId";
    iter = jsMsg.find(key_msgId);
    
    if (iter!=jsMsg.end()) {
        
        msgId =atoi(iter->second.c_str());
        pbHead->set_msgid(msgId);
        
    }
    
    string key_sequence = "sequence";
    iter = jsMsg.find(key_sequence);
    
    if (iter!=jsMsg.end()) {
        sequence =atoi(iter->second.c_str());
        pbHead->set_sequence(sequence);
        
    }
    
    string key_retcode = "retcode";
    iter = jsMsg.find(key_retcode);
    
    if (iter!=jsMsg.end()) {
        retcode =atoi(iter->second.c_str());
        pbHead->set_retcode(retcode);
    }
    
    string key_timestamp = "timestamp";
    iter = jsMsg.find(key_timestamp);
    
    if (iter!=jsMsg.end()) {
        retcode =atoi(iter->second.c_str());
        pbHead->set_timestamp(timestamp);
    }
    
    string key_extra = "extra";
    iter = jsMsg.find(extra);
    
    if (iter!=jsMsg.end()) {
        extra =iter->second.c_str();
        pbHead->set_extra(extra);
        
    }
    
    string key_router = "router";
    iter = jsMsg.find(router);
    
    if (iter!=jsMsg.end()) {
        router =iter->second.c_str();
        pbHead->set_router(router);
        
    }
    
    string key_body = "body";
    iter = jsMsg.find(body);
    
    if (iter!=jsMsg.end()) {
        body =iter->second.c_str();
        pbMsg->set_body(body);
        
    }
    pbMsg->set_allocated_head(pbHead);
    
}

void NetMsg::setNetMsgReceipt(NetMsg* beReceiptMsg){
    this->msgId = beReceiptMsg->getMsgId();
    this->msgtype = MSGTYPE_RETRANSMIT;
}

Message* NetMsg::getPbMsg(){
    return pbMsg;
}

int NetMsg::getSendIndex(){
    return sendIndex;
}

void NetMsg::setSendIndex(int index){
    sendIndex = index;
}

int NetMsg::getMsgId(){
    return msgId;
}

int NetMsg::getMsgEncryptId(){
    int encryptMsgId = msgId | MSGID_MARK_REQ;
    return encryptMsgId;
}

int NetMsg::getSequence(){
    return sequence;
}

void NetMsg::setSequence(int _sequence){
    sequence = _sequence;
}

map<string,string> NetMsg::getNetMsgToJsMsg(){
    map<string,string> jsMsg;
    if (pbMsg == nullptr) {
        printf("getNetMsgToJsMsg--error   pbMsg = nullptr");
        return jsMsg;
    }
    if (pbMsg->has_head()) {
        if (pbMsg->head().has_appid()) {
            jsMsg["appid"] = pbMsg->head().appid();
        }
        if (pbMsg->head().has_version()) {
            jsMsg["version"] = pbMsg->head().version();
        }
        if (pbMsg->head().has_msgid()) {
            jsMsg["msgid"] = pbMsg->head().msgid();
        }
        if (pbMsg->head().has_sequence()) {
            jsMsg["sequence"] = pbMsg->head().sequence();
        }
        if (pbMsg->head().has_timestamp()) {
            jsMsg["timestamp"] = pbMsg->head().timestamp();
        }
        if (pbMsg->head().has_retcode()) {
            jsMsg["retcode"] = pbMsg->head().retcode();
        }
        if (pbMsg->head().has_msgid()) {
            jsMsg["msgid"] = pbMsg->head().msgid();
        }
        if (pbMsg->head().has_extra()) {
            jsMsg["extra"] = pbMsg->head().extra();
        }
        if (pbMsg->head().has_router()) {
            jsMsg["router"] = pbMsg->head().router();
        }

    }
    else{
        printf("getNetMsgToJsMsg--error   pbMsg->head = nullptr");
        return jsMsg;
    }
    if (pbMsg->has_body()) {
        jsMsg["body"] = pbMsg->body();

    }
    else{
        printf("getNetMsgToJsMsg--   pbMsg->body = nullptr");
    }
    
    return jsMsg;
    
}
