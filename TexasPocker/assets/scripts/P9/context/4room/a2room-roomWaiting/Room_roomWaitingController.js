const MVC = require("FWS_MVC");
var Room_roomWaitingController;
Room_roomWaitingController = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function() {
        cc.log("onEnterNode Room_roomWaitingController");

    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {

    },
    //界面显示
    onMessageshow: function(msg){
        //显示房间名
        //显示房间号
        //显示人数
        //显示进局人数
        //显示牌局时间
        //按钮状态
    },
    //聊天
    onMessagejoinBtn: function(msg){

    },
    //入局玩家头像
    onMessagehead: function(msg){

    },
    //超时警告
    onMessageovertime: function(msg){

    }
    




});
module.exports = Room_roomWaitingController;