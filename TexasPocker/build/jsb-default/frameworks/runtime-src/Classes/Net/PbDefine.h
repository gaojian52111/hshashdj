//
//  PbDefine.h
//  TexasPocker
//
//  Created by edz on 2016/12/14.
//
//

#ifndef PbDefine_h
#define PbDefine_h

enum MSGID_MARK {
    MSGID_MARK_DECODE       = 0x0FFFFFFF,   //  服务器下发的通知类消息
    MSGID_MARK_NOTIFY       = 0x00000000,   //  服务器下发的通知类消息
    MSGID_MARK_REQ          = 0x10000000,   //  请求类消息
    MSGID_MARK_ACK          = 0x20000000   //  应答消息
};
/*------------消息ID----------------------------------------------------------------------------------------*/
//  说明：通用平台级消息ID相同，允许各业务对差异消息进行定义；
//  客户端与服务器通信消息段定义
enum MSGID_PLAT_SS{
    MSGID_PLAT_BREAK                        = 1,           //  断线通知
    MSGID_PLAT_BEREADY                      = 2,            //  服务器就绪，可以提供服务了
    MSGID_PLAT_READYCHECK                   = 3,            //  检测对端服务器是否就绪
    
    MSGID_PLAT_RS2GS_GAMESTART              = 4,            //  游戏开始
    MSGID_PLAT_GS2RS_GAMERESULT             = 5,           //  游戏结束
    MSGID_PLAT_RS2GS_PLAYERTABLESTATE       = 6,           //  房间通知游戏：玩家状态改变；
    MSGID_PLAT_GS2RS_PLAYERGAMESTATE        = 7,           //  游戏通知房间：玩家游戏状态改变
    
    MSGID_PLAT_CMS2MS_START                 = 8,            //  通知承办比赛
    MSGID_PLAT_CMS2MS_CANCEL                = 9,            //  通知取消比赛
    MSGID_PLAT_CMS2MS_CREATE                = 10           //  通知创建比赛
};

enum MSGID_PLAT_CS{
    MSGID_PLAT_HEATBEAT     = 5001,         //  心跳
    MSGID_PLAT_PING         = 5002,         //  链路检测包
    MSGID_PLAT_RELOGIN      = 5003,         //  异地登录后的下线通知
    MSGID_PLAT_VERIFY       = 5004          //  客户端认证，首次登录游戏服务器首先发此消息认证身份
};

/*-----------------错误码-----------------------------------------------------------------------------------*/

enum ERROR_PLAT_CS{
    ERROR_PLAT_SUCCESS              = 0,   // token 无效
    ERROR_PLAT_TOKEN_INVALID        = 20000,   // token 无效
    ERROR_PLAT_CS                   = 20001
};


/*----------------------------------------------------------------------------------------------------*/


#endif /* PbDefine_h */
