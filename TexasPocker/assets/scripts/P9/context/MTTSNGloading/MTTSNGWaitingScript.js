const MVC = require("FWS_MVC");

cc.Class({
    extends: MVC.FMessageConnection,

    properties: {
        //返回按钮
        backButton:{
            default:null,
            type:cc.Button
        },
        moreButton:{
            default:null,
            type:cc.Button
        },
        signUpButton:{
            default:null,
            type:cc.Button
        },
        stateButton:{
            default:null,
            type:cc.Button
        },
        rewardsButton:{
            default:null,
            type:cc.Button
        },
        playerButton:{
            default:null,
            type:cc.Button
        },
        TableButton:{
            default:null,
            type:cc.Button
        },
        
    },

    // use this for initialization
     onLoad: function () {
        this.connect();
        
    },
    onDestory:function () {
        this.disconnect();
    },

    clickbackButton:function(){
        cc.log("clickbackButton");
    },
    clickmoreButton:function(){
        cc.log("clickmoreButton");
    },
    clicksignUpButton:function(){
        var msg = new MVC.FMessage("MTTSNGclicksignUpButton","room");
        msg.args.name = "MTTSNGclicksignUpButton进入倒计时";
        msg.send(); 
        cc.log("clicksignUpButton");
    },
    clickstateButton:function(){
        cc.log("clickstateButton");
    },
    clickrewardsButton:function(){
        cc.log("clickrewardsButton");
    },
    clickplayerButton:function(){
        cc.log("clickplayerButton");
    },
    clickpTableButton:function(){
        cc.log("clickpTableButton");
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
