var MVC = require("FWS_MVC");
//单个玩家的数据结构
var player = {};
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        //本桌支持最大人数
        maxplayerNum: 0,
        //任务头像模型
        playerModel: {
            "default": null,
            type: cc.Node
        },
        //哪些位置有人哪些位置没有人的数组 装的是每个人的结构体（头像，名字，详细信息）
        //自己获取？
        players: []
    },
    //需要确认onEnterNode和 onLoad谁先加载
    //如果onEnterNode先加载的话可以让这个函数先获取自己需要的东西 然后走onload
    onEnterNode: function onEnterNode() {
        console.log("!!!!!!playerLayerScirpt----onEnterNode");
    },
    // use this for initialization
    onLoad: function onLoad() {
        console.log("!!!!!!playerLayerScirpt----onLoad");
        this.connect();
        //向谁获取我上面的人的信息
    },
    onDestroy: function onDestroy() {
        this.disconnect();
    },
    onFMessage_initHeadLayerInfo: function onFMessage_initHeadLayerInfo(msg) {}
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});