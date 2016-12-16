const MVC = require("FWS_MVC");
var roomType = cc.Enum({
    NONE:0,
    MTT:1,
    SNG:2,
    STD:3
});
cc.Class({
    extends: MVC.FMessageConnection,

    properties: {
        roomType:roomType.NONE,
        //奖池
        jackpot:0,
        //palyer的模型(头像等)
        player:{
            default:null,
            type:cc.Node
        },


    },
    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
