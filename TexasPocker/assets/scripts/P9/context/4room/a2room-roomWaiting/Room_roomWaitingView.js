const MVC = require("FWS_MVC");
var Room_roomWaitingView;
var roomWaitingLayer;
Room_roomWaitingView = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function() {
        //
        cc.log("roomWaitingLayer");
        //发一条消息 让roomWaitingLayer 显示
        var msg1 = new MVC.FMessage("showWaitingLayer", "roomWaiting");
        msg1.send();

    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {
        // roomWaitingLayer.removeFromParent(true);
    }

});
module.exports = Room_roomWaitingView;