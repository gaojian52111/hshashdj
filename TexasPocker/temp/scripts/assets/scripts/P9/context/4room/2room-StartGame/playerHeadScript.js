"use strict";
cc._RFpush(module, '02d67Th465B95xJuaWg565d', 'playerHeadScript');
// scripts/P9/context/4room/2room-StartGame/playerHeadScript.js

var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        icon: {
            "default": null,
            type: cc.Node
        },
        playerName: {
            "default": null,
            type: cc.Label
        },
        num: -1 },

    //-1代表没人
    //其他数据自动获取
    // use this for initialization
    onLoad: function onLoad() {
        if (this.num == -1) {
            // this.name.string = "没有人";

        } else if (this.num == 0) {
                // this.node.setPosition();
            } else if (this.num == 1) {} else if (this.num == 2) {} else if (this.num == 3) {} else if (this.num == 4) {} else if (this.num == 5) {}
    },
    //头像被点击了会发送一个消息 player详情的layer
    headOnClick: function headOnClick() {}

});

cc._RFpop();