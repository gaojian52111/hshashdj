/*
 * 与RS服务模块的Socket通讯
 * @Author: thor.liu 
 * @Date: 2016-12-03 14:47:56 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-15 15:46:41
 */

var MVC = require("FWS_MVC");
var MODEL = require("FWS_MODEL");
var DATA = require("FWS_MODEL_DATA");
var MSG = require("FWS_MSG");

var FSocketPack = require("FSocketPack");
var FSocketModelAbstract = require("FSocketModelAbstract");
var NOTIFY = FSocketPack.FHeaderMark.Notify;
var REQ = FSocketPack.FHeaderMark.Req;
var ACK = FSocketPack.FHeaderMark.Ack;
var MSGIDS = FSocketPack.MsgIDs[0];

module.exports = cc.Class({
    // name: "FSocketRSModel",
    "extends": FSocketModelAbstract,
    // ctor: function() {},

    //────────────────────────────────────────────────────────── 网络通讯

    initHandlers: function initHandlers() {},

    //────────────────────────────────────────────────────────── 创建房间

    onFMessage_roomCreate: function onFMessage_roomCreate(msg) {
        msg.complete();
        MVC.FLog.info("Room", "TODO: < 创建房间");
    },
    ack_roomCreate: function ack_roomCreate(msg) {},

    //────────────────────────────────────────────────────────── 加入房间
    onFMessage_roomJoin: function onFMessage_roomJoin(msg) {
        msg.complete();
        MVC.FLog.info("Room", "TODO: < 加入房间");
    },
    ack_roomJoin: function ack_roomJoin(msg) {},

    //────────────────────────────────────────────────────────── 关闭房间
    onFMessage_roomEnd: function onFMessage_roomEnd(msg) {
        msg.complete();
        MVC.FLog.info("Room", "TODO: < 关闭房间");
    },
    ack_roomEnd: function ack_roomEnd(msg) {},

    //────────────────────────────────────────────────────────── 加入游戏
    onFMessage_gameJoin: function onFMessage_gameJoin(msg) {
        msg.complete();
        MVC.FLog.info("Room", "TODO: < 加入游戏");
    },
    ack_gameJoin: function ack_gameJoin(msg) {},

    //────────────────────────────────────────────────────────── 旁观游戏
    onFMessage_gameWatch: function onFMessage_gameWatch(msg) {
        msg.complete();
        MVC.FLog.info("Room", "TODO: < 旁观游戏");
    },
    ack_gameWatch: function ack_gameWatch(msg) {}
});