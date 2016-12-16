"use strict";
cc._RFpush(module, '6740b7tuMpJe73O9ttD0ihv', 'FSocketDistributer');
// scripts/FWS/Models/FSocketDistributer.js

/*
 * 收到Socket数据包时的消息分发模块
 * @Author: thor.liu 
 * @Date: 2016-12-05 17:02:59 
 * @Last Modified by:   thor.liu 
 * @Last Modified time: 2016-12-05 17:02:59 
 */
var FWS_MSG = require("FWS_MSG");

var FSocketDistributer = cc.Class({
    name: "FSocketDistributer",
    ctor: function ctor() {},

    statics: {
        inited: false,
        init: function init() {
            if (FSocketDistributer.inited) return;
            FSocketDistributer.inited = true;
            FSocketDistributer.maps = new Object();
        },

        setMapQueue: function setMapQueue(msgid, category) {
            var msgid_setting = null;
            if (FSocketDistributer.maps[category]) {} else {
                FSocketDistributer.maps[category] = new Array();
            }

            msgid_setting = FSocketDistributer.maps[category];

            if (msgid_setting.indexOf(msgid) < 0) {
                msgid_setting.push(msgid);
            }
        },

        getMapQueue: function getMapQueue(msgid) {
            for (var c in FSocketDistributer.maps) {
                var a = FSocketDistributer.maps[c];
                if (a.indexOf(msgid) >= 0) return c;
            }
            return "";
        },

        put: function put(msgid, sn, body, head) {
            var c = FSocketDistributer.getMapQueue(msgid);

            var msg = FWS_MSG.FWSMessageFactory.socketOnReceive(c, msgid, sn, body);
            msg.send();
        }
    }
});

module.exports = FSocketDistributer;

cc._RFpop();