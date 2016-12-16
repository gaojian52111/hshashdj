/*
 * 与九人桌游戏服务的Socket通讯
 * @Author: thor.liu 
 * @Date: 2016-12-03 15:08:00 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-15 15:50:07
 */
const MVC = require("FWS_MVC");
const MODEL = require("FWS_MODEL");
const DATA = require("FWS_MODEL_DATA");
const MSG = require("FWS_MSG");

const FSocketPack = require("FSocketPack");
const FSocketModelAbstract = require("FSocketModelAbstract");
const NOTIFY = FSocketPack.FHeaderMark.Notify;
const REQ = FSocketPack.FHeaderMark.Req;
const ACK = FSocketPack.FHeaderMark.Ack;
const MSGIDS = FSocketPack.MsgIDs[0];


module.exports = cc.Class({
    // name: "P9SocketGSModel",
    extends: FSocketModelAbstract,
    // ctor: function() {},

    //────────────────────────────────────────────────────────── 网络通讯

    initHandlers: function () {
    }, 

    //────────────────────────────────────────────────────────── 游戏事件
    

    //TODO: start
    //TODO: handcards
    //TODO: publiccards
    //TODO: pot
    //TODO: action
    //TODO: timebank
    //TODO: safe...

    //────────────────────────────────────────────────────────── 就绪
    onFMessage_gameReady: function(msg) {
        msg.complete();
    },

    //────────────────────────────────────────────────────────── 玩家动作
    onFMessage_gameActionAck: function(msg) {
        msg.complete();
    }

});