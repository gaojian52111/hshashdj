"use strict";
cc._RFpush(module, '74eb8wX0ldPO5GBa8l0B4Bi', 'FSocketCSModel');
// scripts/FWS/Models/FSocketCSModel.js

/*
 * 与CS服务模块的SOCKET通讯
 * @Author: thor.liu 
 * @Date: 2016-12-03 14:47:33 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-15 15:45:23
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
    // name: "FSocketCSModel",
    "extends": FSocketModelAbstract,
    // ctor: function() {},

    //────────────────────────────────────────────────────────── 网络通讯

    initHandlers: function initHandlers() {
        this.addPackHandler(NOTIFY | MSGIDS.Relogin, this.onNotifyRelogin);
        this.addPackHandler(ACK | MSGIDS.Verify, this.onAckVerify);
    },

    //────────────────────────────────────────────────────────── 数据包处理

    ///异地登录后通知下线
    onNotifyRelogin: function onNotifyRelogin(pack) {},

    ///身份验证结果
    onAckVerify: function onAckVerify(pack) {},

    //────────────────────────────────────────────────────────── 连接服务器

    /**
     * 连接服务器
     */
    onFMessage_serverConnect: function onFMessage_serverConnect(msg) {
        msg.complete();
    },

    /**
     * 连接服务器结果
     */
    onFMessage_socketOnConnect: function onFMessage_socketOnConnect(msg) {
        msg.complete();
    }

});

cc._RFpop();