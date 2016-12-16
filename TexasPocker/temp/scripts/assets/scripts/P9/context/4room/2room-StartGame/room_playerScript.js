"use strict";
cc._RFpush(module, '6415cD+ROBE46bpPSOlMlnp', 'room_playerScript');
// scripts/P9/context/4room/2room-StartGame/room_playerScript.js

var MVC = require("FWS_MVC");
var playerType = cc.Enum({
    noBody: 0,
    player: 1
});

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        //头像
        icon: {
            "default": null,
            type: cc.Sprite
        },
        //名字
        playerName: {
            "default": null,
            type: cc.Label
        },
        //个人信息
        infoLayer: {
            "default": null,
            type: cc.Node
        },
        //我的属性
        //playerNum
        num: -1,
        type: playerType.noBody

    },
    onload: function onload() {
        if (this.type == playerType.noBody) {
            //有一套默认的显示方式
            this.playerName.string = "此桌没人";
            //代表此桌没人
        }
        //根据num来设置position
    },
    //TODO: 设置这个玩家的各种信息
    /*
    * 玩家类型
    *
    * */
    onFMessage_setPlayerInfo: function onFMessage_setPlayerInfo(msg) {}

});

cc._RFpop();