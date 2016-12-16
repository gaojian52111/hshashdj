//
//  NetMsg.hpp
//  TexasPocker
//
//  Created by edz on 2016/12/12.
//
//

#ifndef NetMsg_hpp
#define NetMsg_hpp

#include <stdio.h>
#include <stdio.h>
#include <stdio.h>
#include <string>
#include <map>
#include "smzy.pb.h"
#include "PbDefine.h"

using namespace std;

enum MSGTYPE{
    MSGTYPE_NONE = 0,
    MSGTYPE_COMMON ,
    MSGTYPE_PING,
    MSGTYPE_RETRANSMIT,
    MSGTYPE_RESEND
};

class NetMsg{
public:
    NetMsg();
    ~NetMsg();
    //js->cpp send
    void setNetMsg(map<string,string>jsMsg);
    void setNetMsgReceipt(NetMsg* beReceiptMsg);
    Message* getPbMsg();
    //cpp->js receive
    void setPbMsg(int messageID, const char* message, int size, int msgSequnce);
    
    map<string,string> getNetMsgToJsMsg();

    int getSendIndex();
    void setSendIndex(int index);
    
    int getMsgId();
    int getMsgEncryptId();

    int getSequence();
    void setSequence(int sequence);
    void setMsgType(MSGTYPE _msgtype){this->msgtype = _msgtype;}
    MSGTYPE getMsgType(){return this->msgtype;}
    
    void setRetransmitIndex(int _retransmitIndex){retransmitIndex = _retransmitIndex;}
    int getRetransmitIndex(){return retransmitIndex;}
private:
    //消息体
    int version;
    int appid;
    int msgId;
    int sequence;
    int retcode;
    int timestamp;
    
    string extra;
    string router;
    string body;
    
    MSGTYPE msgtype;
    Message* pbMsg;
    
    //消息序号
    int sendIndex;
    //重新发送次数
    int retransmitIndex;
};


#endif /* NetMsg_hpp */
