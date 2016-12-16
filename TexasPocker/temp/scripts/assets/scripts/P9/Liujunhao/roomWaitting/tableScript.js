"use strict";
cc._RFpush(module, '0e70fAtCR1GSrTzlEzCSRmP', 'tableScript');
// scripts/P9/Liujunhao/roomWaitting/tableScript.js

//牌桌prefab
var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        table: {
            "default": null,
            type: cc.Sprite
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
    },
    onDestory: function onDestory() {
        this.disconnect();
    },
    //动画播放
    tableAnimation: function tableAnimation() {

        var animCtrl = this.table.node.getComponent(cc.Animation);
        animCtrl.on('stop', this.onStop, this);
        animCtrl.play("table");
    },
    //动画结束回调
    onStop: function onStop() {
        //动画结束消息

    }

});

cc._RFpop();