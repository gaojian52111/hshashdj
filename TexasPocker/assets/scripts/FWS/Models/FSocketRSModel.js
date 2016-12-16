/*
 * 与RS服务模块的Socket通讯
 * @Author: thor.liu 
 * @Date: 2016-12-03 14:47:56 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-15 15:46:41
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
    // name: "FSocketRSModel",
    extends: FSocketModelAbstract,
    // ctor: function() {},

    //────────────────────────────────────────────────────────── 网络通讯

    initHandlers: function(){
    },

    //────────────────────────────────────────────────────────── 创建房间

    onFMessage_roomCreate: function(msg) {
        msg.complete();
        MVC.FLog.info("Room", "TODO: < 创建房间");
    },
    ack_roomCreate: function(msg) {},

    //────────────────────────────────────────────────────────── 加入房间
    onFMessage_roomJoin: function(msg) {
        msg.complete();
        MVC.FLog.info("Room", "TODO: < 加入房间");
    },
    ack_roomJoin: function(msg) {},

    //────────────────────────────────────────────────────────── 关闭房间
    onFMessage_roomEnd: function(msg) {
        msg.complete();
        MVC.FLog.info("Room", "TODO: < 关闭房间");
    },
    ack_roomEnd: function(msg) {},

    //────────────────────────────────────────────────────────── 加入游戏
    onFMessage_gameJoin: function(msg) {
        msg.complete();
        MVC.FLog.info("Room", "TODO: < 加入游戏");
    },
    ack_gameJoin: function(msg) {},

    //────────────────────────────────────────────────────────── 旁观游戏
    onFMessage_gameWatch: function(msg) {
        msg.complete();
        MVC.FLog.info("Room", "TODO: < 旁观游戏");
    },
    ack_gameWatch: function(msg) {}
});