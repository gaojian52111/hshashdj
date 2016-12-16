cc.Class({
    extends: cc.Component,

    properties: { 
        //牌局统计按钮 
        leftButton:{
            default:null,
            type:cc.Button
        },
        //我的统计按钮 
        rightButton:{
            default:null,
            type:cc.Button
        },
        //推出的X按钮 
        exitButton:{
            default:null,
            type:cc.Button
        },
        //分享按钮左 
        shareButton1:{
            default:null,
            type:cc.Button
        },
        //分享按钮右 
        shareButton2:{
            default:null,
            type:cc.Button
        }
    },

    // use this for initialization
    onLoad: function () {

    },

    clickleftButton:function(){
        cc.log("clickleftButton");
    },
    clickrightButton:function(){
        cc.log("clickrightButton");
    },
    clickexitButton:function(){
        cc.log("clickexitButton");
    },
    clickshareButton1:function(){
        cc.log("clickshareButton1");
    },
    clickshareButton2:function(){
        cc.log("clickshareButton2");
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
