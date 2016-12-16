/*
 * 与CS服务模块的SOCKET通讯
 * @Author: thor.liu 
 * @Date: 2016-12-03 14:47:33 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-15 15:45:23
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
    // name: "FSocketCSModel",
    extends: FSocketModelAbstract,
    // ctor: function() {},

    //────────────────────────────────────────────────────────── 网络通讯

    initHandlers: function () {
        this.addPackHandler(NOTIFY | MSGIDS.Relogin, this.onNotifyRelogin);
        this.addPackHandler(ACK | MSGIDS.Verify, this.onAckVerify);
    },

    //────────────────────────────────────────────────────────── 数据包处理

    ///异地登录后通知下线
    onNotifyRelogin: function (pack) {
    },

    ///身份验证结果
    onAckVerify: function (pack) {
    },

    //────────────────────────────────────────────────────────── 连接服务器

    /**
     * 连接服务器
     */
    onFMessage_serverConnect: function (msg) {
        msg.complete();
    },

    /**
     * 连接服务器结果
     */
    onFMessage_socketOnConnect: function (msg) {
        msg.complete();
    }


});