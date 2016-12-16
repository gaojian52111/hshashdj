"use strict";
cc._RFpush(module, '60172jpMiFCTrhkjws5ff22', 'MTTpartyScript');
// scripts/P9/Maanna/MTTpartyScript.js

var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,
    properties: {

        scrollView: {
            "default": null,
            type: cc.ScrollView

        },

        viewone: {
            "default": null,
            type: cc.Node
        },

        viewtwo: {
            "default": null,
            type: cc.Node
        },

        viewthree: {
            "default": null,
            type: cc.Node
        }

    },

    onLoad: function onLoad() {
        this.connect();
        // this.scrollView.enabled = false;
    },

    onDestory: function onDestory() {
        this.disconnect();
    },

    //高级设置
    moreoptioncall: function moreoptioncall() {

        this.scrollView.enabled = true;
        this.viewtwo.active = true;
        this.scrollView.scrollToBottom(0.1);
        this.viewthree.color = new cc.Color(0, 0, 0);
    },

    //收起
    packupcall: function packupcall() {
        this.scrollView.scrollToTop(0.1);
        this.scrollView.enabled = true;
        this.viewtwo.active = false;
        this.viewthree.color = new cc.Color(20, 32, 78);
    },

    //创建MTT
    MTTButtonClick: function MTTButtonClick() {
        var msg = new MVC.FMessage("clickMTTButton", "createPartySet");
        msg.args.name = "创建MTT比赛";
        msg.send();
    }

});

cc._RFpop();