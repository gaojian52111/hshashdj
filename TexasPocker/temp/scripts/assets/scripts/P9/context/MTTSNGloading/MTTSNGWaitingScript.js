"use strict";
cc._RFpush(module, '57ec4IV+ARC37OHDLqpDcUD', 'MTTSNGWaitingScript');
// scripts/P9/context/MTTSNGloading/MTTSNGWaitingScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        //返回按钮
        backButton: {
            "default": null,
            type: cc.Button
        },
        moreButton: {
            "default": null,
            type: cc.Button
        },
        signUpButton: {
            "default": null,
            type: cc.Button
        },
        stateButton: {
            "default": null,
            type: cc.Button
        },
        rewardsButton: {
            "default": null,
            type: cc.Button
        },
        playerButton: {
            "default": null,
            type: cc.Button
        },
        TableButton: {
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

    clickbackButton: function clickbackButton() {
        cc.log("clickbackButton");
    },
    clickmoreButton: function clickmoreButton() {
        cc.log("clickmoreButton");
    },
    clicksignUpButton: function clicksignUpButton() {
        var msg = new MVC.FMessage("MTTSNGclicksignUpButton", "room");
        msg.args.name = "MTTSNGclicksignUpButton进入倒计时";
        msg.send();
        cc.log("clicksignUpButton");
    },
    clickstateButton: function clickstateButton() {
        cc.log("clickstateButton");
    },
    clickrewardsButton: function clickrewardsButton() {
        cc.log("clickrewardsButton");
    },
    clickplayerButton: function clickplayerButton() {
        cc.log("clickplayerButton");
    },
    clickpTableButton: function clickpTableButton() {
        cc.log("clickpTableButton");
    }
});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();