//自动操作prefab
var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        //自动弃牌 图片
        autofoldSprite: {
            "default": null,
            type: cc.Sprite
        },
        //自动弃牌 文字
        autofoldLabel: {
            "default": null,
            type: cc.Label
        },
        //自动弃牌 按钮
        autofoldBtn: {
            "default": null,
            type: cc.Button
        },
        //自动过牌 图片
        autopassSprite: {
            "default": null,
            type: cc.Sprite
        },
        //自动过牌 文字
        autopassLabel: {
            "default": null,
            type: cc.Label
        },
        //自动过牌 按钮
        autopassBtn: {
            "default": null,
            type: cc.Button
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
    },
    onDestory: function onDestory() {
        this.disconnect();
    },
    //自动弃牌 按钮点击
    autofoldBtnclick: function autofoldBtnclick() {},
    //自动过牌 按钮点击
    autopassBtnclick: function autopassBtnclick() {}

});