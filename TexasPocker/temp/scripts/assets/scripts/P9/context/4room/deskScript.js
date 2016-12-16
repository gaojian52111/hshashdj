"use strict";
cc._RFpush(module, 'c0adfsgrohKTq0BFydiQAGb', 'deskScript');
// scripts/P9/context/4room/deskScript.js

var MVC = require("FWS_MVC");
var roomType = cc.Enum({
    NONE: 0,
    MTT: 1,
    SNG: 2,
    STD: 3
});
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        roomType: roomType.NONE,
        //奖池
        jackpot: 0,
        //palyer的模型(头像等)
        player: {
            "default": null,
            type: cc.Node
        }

    },
    // use this for initialization
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();