//牌桌prefab
const MVC = require("FWS_MVC");

cc.Class({
    extends: MVC.FMessageConnection,

    properties: {
        table:{
            default: null,
            type: cc.Sprite
        }
    },

    // use this for initialization
    onLoad: function () {
        this.connect();
    },
    onDestory:function () {
        this.disconnect();
    },
    //动画播放
    tableAnimation: function () {


        var animCtrl = this.table.node.getComponent(cc.Animation);
        animCtrl.on('stop',this.onStop,this);
        animCtrl.play("table");
    },
    //动画结束回调
    onStop: function () {
        //动画结束消息

    }


});