//玩家操作prefab
const MVC = require("FWS_MVC");

cc.Class({
    extends: MVC.FMessageConnection,

    properties: {
        //2X 图片
        doubleSprite: {
            default: null,
            type: cc.Sprite
        },
        //2X 文字
        doubleLabel: {
            default: null,
            type: cc.Label
        },
        //2X 按钮
        doubleBtn: {
            default: null,
            type: cc.Button
        },
        //2X 数字
        doublecountLabel: {
            default: null,
            type: cc.Label
        },
        //3X 图片
        trebleSprite: {
            default: null,
            type: cc.Sprite
        },
        //3X 文字
        trebleLabel: {
            default: null,
            type: cc.Label
        },
        //3X 按钮
        trebleBtn: {
            default: null,
            type: cc.Button
        },
        //3X 数字
        treblecountLabel: {
            default: null,
            type: cc.Label
        },
        //4X 图片
        fourfoldSprite: {
            default: null,
            type: cc.Sprite
        },
        //4X 文字
        fourfoldLabel: {
            default: null,
            type: cc.Label
        },
        //4X 按钮
        fourfoldBtn: {
            default: null,
            type: cc.Button
        },
        //4X 数字
        fourfoldcountLabel: {
            default: null,
            type: cc.Label
        },
        //自由加注 图片
        freefillSprite: {
            default: null,
            type: cc.Sprite
        },
        //自由加注 文字
        freefillLabel: {
            default: null,
            type: cc.Label
        },
        //自由加注 按钮
        freefillBtn: {
            default: null,
            type: cc.Button
        },
        //弃牌 图片
        foldSprite: {
            default: null,
            type: cc.Sprite
        },
        //弃牌 文字
        foldLabel: {
            default: null,
            type: cc.Label
        },
        //弃牌 按钮
        foldBtn: {
            default: null,
            type: cc.Button
        },

        //过牌 图片
        passSprite: {
            default: null,
            type: cc.Sprite
        },
        //过牌 文字
        passLabel: {
            default: null,
            type: cc.Label
        },
        //过牌 按钮
        passBtn: {
            default: null,
            type: cc.Button
        },
    },

    // use this for initialization
    onLoad: function () {
        this.connect();
    },
    onDestory:function () {
        this.disconnect();
    },
    //2X 按钮点击
    doubleBtnclick: function () {

    },
    //3X 按钮点击
    trebleBtnclick: function () {

    },
    //4X 按钮点击
    fourfoldBtnclick: function () {

    },
    //自由加注 按钮点击
    freefillBtnclick: function () {

    },
    //弃牌 按钮点击
    foldBtnclick: function () {

    },
    //过牌 按钮点击
    passBtnclick: function () {

    }


});