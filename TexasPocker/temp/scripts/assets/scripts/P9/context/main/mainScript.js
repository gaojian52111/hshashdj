"use strict";
cc._RFpush(module, 'a7a25pYc9xCRI8WkuuYDVp5', 'mainScript');
// scripts/P9/context/main/mainScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,
    properties: {
        addPartyButton: {
            "default": null,
            type: cc.Button
        },
        setPartyButton: {
            "default": null,
            type: cc.Button
        },
        My: {
            "default": null,
            type: cc.Button
        }

    },

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
    },
    onDestory: function onDestory() {
        this.disconnect();
    },
    clickaddPartyButton: function clickaddPartyButton() {
        var msg = new MVC.FMessage("clickaddPartyButton", "main");
        msg.args.name = "进入牌桌";
        msg.send();
        cc.log("clickaddPartyButton");
    },
    clicksetPartyButton: function clicksetPartyButton() {
        var msg = new MVC.FMessage("clicksetPartyButton", "main");
        msg.args.name = "进入牌局设置";
        msg.send();
        cc.log("clicksetPartyButton");
    },
    clickMy: function clickMy() {
        var msg = new MVC.FMessage("clickMy", "main");
        msg.args.name = "我的";
        msg.send();
        cc.log("clickMy");
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();