var MVC = require("FWS_MVC");
var roomLoadingController;
roomLoadingController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     * 1，发送消息 gameReady消息
     *      消息名：gameReady
     *      节点：暂定 MSG(其实也无所谓 只要有方法就可以接收得到只是之后需要确认一下)
     * 2，等待gameOnStart消息
     *      a，goto startGame
     * */

    onEnterNode: function onEnterNode() {
        this.sendGameReadyMsg();
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {},
    sendGameReadyMsg: function sendGameReadyMsg() {
        //暂时不知道发给谁 先不发
        // var msg = new MVC.FMessage("gameReady","MSG");
        // msg.send();
    },
    onFMessage_gameOnStart: function onFMessage_gameOnStart(msg) {
        MVC.FLog.data("room-LoadingController", "收到消息 {0}", msg);
        MVC.FContextManager.gotoID("startGame");
        msg.complete();
    }

});
module.exports = roomLoadingController;