var MVC = require("FWS_MVC");
var roomStartGameController;
roomStartGameController = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
    * 说明：
    *   本节点是游戏进行中的数据相关逻辑
    * 流程：
    *   1，等待gameEventNotify 消息
    *       a，说明：负责由服务器发来的被动动作
    *           1），被动动作：服务器让我们执行我们才执行的动作
    *       b，职能：负责切换到某些节点上
    *       c，动作（context节点）包括：
    *           1），定庄
    *           2），发手牌
    *           3），发公共牌
    *   2，等待gameActionReq 消息
    *       a，说明：负责玩家要做的主动动作
    *           1），主动动作：到我自己的时候 我该做什么 轮到别人的时候我该做什么
    *           b，职能：负责切换到某个节点上
    *           c，动作（context）包括
    *               1），轮到自己
    *               2），轮到别人
    *       3，等待游戏房间结束动画播送完毕消息
    *           goto主界面
     * */
    onEnterNode: function onEnterNode() {},
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {},
    onFMessage_gameEventNotify: function onFMessage_gameEventNotify(msg) {
        if (msg.args.eventType == "DingZhuang") {
            //goto定庄
            MVC.FContextManager.gotoID("Village");
        } else if (msg.args.eventType == "FaShouPai") {
            MVC.FContextManager.gotoID("handSign");
        } else if (msg.args.eventType == "FaGongGongPai") {
            MVC.FContextManager.gotoID("communityCard");
        } else {
            //error event
        }
        msg.complete();
    },
    onFMessage_gameActionReq: function onFMessage_gameActionReq(msg) {
        if (msg.args.actionType == "myAction") {
            MVC.FContextManager.gotoID("myAction");
        } else if (msg.args.actionType == "othersAction") {
            MVC.FContextManager.gotoID("othersAction");
        } else {
            //error action
        }
        msg.complete();
    },
    onFMessage_gameEndingThingsOfView: function onFMessage_gameEndingThingsOfView(msg) {
        //房间结束动画等动作完成后
        MVC.FContextManager.gotoID("myAction");
        msg.complete();
    },
    onFMessage_safestReq: function onFMessage_safestReq(msg) {
        //切换到保险节点
        MVC.FContextManager.gotoID("safest");
        msg.complete();
    },
    onFMessage_gameOnResult: function onFMessage_gameOnResult(msg) {
        //切换到结算节点
        MVC.FContextManager.gotoID("statements");
        msg.complete();
    },
    onFMessage_roomOnEnd: function onFMessage_roomOnEnd(msg) {
        //切换到牌局结束节点
        MVC.FContextManager.gotoID("partyRoomOver");
        msg.complete();
    }

});
module.exports = roomStartGameController;