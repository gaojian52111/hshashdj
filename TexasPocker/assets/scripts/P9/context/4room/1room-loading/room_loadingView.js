const MVC = require("FWS_MVC");
var roomLoadingView;
var loadLayer;
roomLoadingView = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {


    },

    //TODO:当切换到此节点的时候会运行这个方法
    /*
    * 加载loadingView （转圈的那个页面） 所有的房间内的view 都在一个scene上解决
    * 使用方法：
    *       1，调用方法：
    *           a,通过director获取当前scene 向上面添加新的view
    *           b,通过发送消息给自己写的脚本（挂载在roomScene上的）发送消息来实现某些调用
    *
    *       2，要求：
    *           a,自己的显示需求(context节点的显示需求)单独写一个脚本 挂载在roomScene上
    *       3，
    * */
    onEnterNode: function() {
        //由于第一个scene还没加载的时候 不能调用loadScene方法
        // cc.director.loadScene("room-loadingScene");
        // 加载 Prefab
        //向谁获取我上面的人的信息

        cc.loader.loadRes("TestProfab/loadingGame", function (err, prefab) {
            cc.log(err);
            cc.log("loadingGame");
            loadLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(loadLayer);
        });
        //loadscene。。。
        cc.log("roomLoadingScene");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {
        loadLayer.removeFromParent(true);
    },
    //等待接收加载loadingView的消息
    onFMessage_showLoadingView:function () {
        //获取loadingView


    },

});
module.exports = roomLoadingView;
