//会籍
var MVC = require("FWS_MVC");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        //加载的时候要与消息路由连接
        this.connect();
    },
    //销毁
    onDestroy: function onDestroy() {
        //销毁的时候要断开连接
        cc.log("销毁了 断开连接");
        this.disconnect();
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },