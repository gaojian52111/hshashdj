"use strict";
cc._RFpush(module, '7f7ddr1O2BCTp/i5gNgVpYF', 'FSocketModelAbstract');
// scripts/FWS/Models/FSocketModelAbstract.js

var MVC = require("FWS_MVC");
var FSocketPack = require("FSocketPack");
var FSocketModelAbstract = cc.Class({
    "extends": MVC.FMessageConnection,

    addPackHandler: function addPackHandler(msgid, handler) {
        if (this.packHandlers) {} else {
            this.packHandlers = new Object();
        }

        if (this.packHandlers[msgid]) {
            MVC.FLog.warn("SocketModel", "重复的数据包处理函数 = {0}", msgid);
        }

        this.packHandlers[msgid] = handler;
    },

    applyPackHandler: function applyPackHandler(pack) {
        var msgid = pack.msgid;
        if (this.packHandlers) {
            if (this.packHandlers[msgid]) {
                var apiId = FSocketPack.getHeaderMsgId(msgid);
                MVC.FLog.info("Socket", "处理数据包 = {0} ({1})", FSocketPack.getMsgIdDesc(msgid), apiId);
                this.packHandlers[msgid](pack);

                return true;
            }
        }

        return false;
    },

    initHandlers: function initHandlers() {},

    onFMessage_socketOnReceive: function onFMessage_socketOnReceive(msg) {

        if (this._handlers_inited_) {} else {
            this._handlers_inited_ = true;
            this.initHandlers();
        }

        var handled = this.applyPackHandler(msg.args.pack);
        if (handled) {
            msg.complete();
        }
    },

    createPack: function createPack() {
        var c = FSocketPack;
        return new c();
    },

    sendPack: function sendPack(pack) {

        //TODO: 发送数据包
    }
});

module.exports = FSocketModelAbstract;

cc._RFpop();