"use strict";
cc._RFpush(module, 'e50ceKCz+JD+7l0PsrcB/Fl', 'P9SocketGSModel');
// scripts/P9/Models/P9SocketGSModel.js

/*
 * 与九人桌游戏服务的Socket通讯
 * @Author: thor.liu 
 * @Date: 2016-12-03 15:08:00 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-15 15:50:07
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
    // name: "P9SocketGSModel",
    "extends": FSocketModelAbstract,
    // ctor: function() {},

    //────────────────────────────────────────────────────────── 网络通讯

    initHandlers: function initHandlers() {},

    //────────────────────────────────────────────────────────── 游戏事件

    //TODO: start
    //TODO: handcards
    //TODO: publiccards
    //TODO: pot
    //TODO: action
    //TODO: timebank
    //TODO: safe...

    //────────────────────────────────────────────────────────── 就绪
    onFMessage_gameReady: function onFMessage_gameReady(msg) {
        msg.complete();
    },

    //────────────────────────────────────────────────────────── 玩家动作
    onFMessage_gameActionAck: function onFMessage_gameActionAck(msg) {
        msg.complete();
    }

});

cc._RFpop();