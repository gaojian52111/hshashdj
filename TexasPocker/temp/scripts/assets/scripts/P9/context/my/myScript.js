"use strict";
cc._RFpush(module, 'be519C/055LNZ2jllzxBrHV', 'myScript');
// scripts/P9/context/my/myScript.js

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
    //加载脚本内容
    onLoad: function onLoad() {
        //加载的时候要与消息路由连接
        this.connect();
    },
    //销毁
    onDestroy: function onDestroy() {
        //销毁的时候要断开连接
        cc.log("销毁了 断开连接");
        this.disconnect();
    },
    //跳转钱包页面
    walletBtnclick: function walletBtnclick() {
        var loadwalletmsg = new MVC.FMessage("walletBtnclick", "my");
        loadwalletmsg.args.name = "前往钱包页面";
        loadwalletmsg.send();

        MVC.FLog.data("钱包跳转", "发送消息 {0}", loadwalletmsg);
    },
    //跳转商城页面
    mallBtnclick: function mallBtnclick() {
        var loadmallmsg = new MVC.FMessage("mallBtnclick", "my");
        loadmallmsg.args.name = "前往商城页面";
        loadmallmsg.send();

        MVC.FLog.data("商城跳转", "发送消息 {0}", loadmallmsg);
    }
});

cc._RFpop();