"use strict";
cc._RFpush(module, 'dafc5SZw75HsLUVQmKBWY6F', 'backOfmy');
// scripts/P9/context/my/backOfmy.js

var MVC = require("FWS_MVC");
var Project = require("Project");

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
    onLoad: function onLoad() {},
    backBtn: function backBtn() {
        MVC.FContextManager.gotoID("my");
        cc.director.loadScene("myScene");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();