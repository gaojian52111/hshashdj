const MVC = require("FWS_MVC");

cc.Class({
    extends: MVC.FMessageConnection,

    properties: {
        //退出分享页面按钮
        shareLayerBtn: {
            default: null,
                type: cc.Button
        },
        //微信分享按钮
        shareVXBtn: {
            default: null,
            type: cc.Button
        },
        //QQ分享按钮
        shareQQBtn: {
            default: null,
            type: cc.Button
        },
        //邀请好友 文字
        invitefriendsLabel: {
            default: null,
            type: cc.Label
        },
        //微信分享 文字
        VXLabel:{
            default: null,
            type: cc.Label
        },
        //QQ分享 文字
        QQLabel: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function () {
        this.connect();
    },
    onDestory:function () {
        this.disconnect();
    },
    //微信分享 按钮点击
    shareVXBtnclick: function () {

    },
    //QQ分享 按钮点击
    shareQQBtnclick: function(){

    },
    //退出分享界面 按钮点击
    shareLayerBtnclick: function () {

    }


});
