var MVC = require("FWS_MVC");
var LoadingView;
LoadingView = cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *TODO:有需要的话根据回复的数据的不同 加载进度
     * */
    onEnterNode: function onEnterNode() {
        //第一个SCENE不需要加载 自动加载的
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function onLeaveNode() {}

});
module.exports = LoadingView;