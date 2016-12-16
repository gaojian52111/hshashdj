/*
 * 收到Socket数据包时的消息分发模块
 * @Author: thor.liu 
 * @Date: 2016-12-05 17:02:59 
 * @Last Modified by:   thor.liu 
 * @Last Modified time: 2016-12-05 17:02:59 
 */
const FWS_MSG = require("FWS_MSG");

const FSocketDistributer = cc.Class({
    name: "FSocketDistributer",
    ctor: function() {},

    statics: {
        inited: false,
        init: function() {
            if (FSocketDistributer.inited) return;
            FSocketDistributer.inited = true;
            FSocketDistributer.maps = new Object();
        },

        setMapQueue: function(msgid, category) {
            var msgid_setting = null;
            if (FSocketDistributer.maps[category]) {} else {
                FSocketDistributer.maps[category] = new Array();
            }

            msgid_setting = FSocketDistributer.maps[category];

            if (msgid_setting.indexOf(msgid) < 0) {
                msgid_setting.push(msgid);
            }
        },

        getMapQueue: function(msgid) {
            for (var c in FSocketDistributer.maps) {
                var a = FSocketDistributer.maps[c];
                if (a.indexOf(msgid) >= 0) return c;
            }
            return "";
        },

        put: function(msgid, sn, body, head) {
            var c = FSocketDistributer.getMapQueue(msgid);

            var msg = FWS_MSG.FWSMessageFactory.socketOnReceive(c, msgid, sn, body);
            msg.send();
        }
    }
});

module.exports = FSocketDistributer;