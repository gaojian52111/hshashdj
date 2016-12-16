const MVC = require("FWS_MVC");
const Project = require("Project");
var LoginController;
LoginController = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function() {
        //loadscene。。。

        cc.log("LoginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {
        cc.log("LoginController onLeaveNode");
    },
    onFMessage_clickLoginButton: function(msg) {
        if( msg.args.name == "登录"){
            //进入分享节点
            cc.log("goto main 前");
            MVC.FContextManager.gotoID("main");
            cc.log("goto main 后");
            //发送消息给网络模块
        }else if(msg.args.name == "注册"){
            //进入分享节点
            // MVC.FContextManager.gotoID("Share");
            //发送消息给网络模块
        }

    }

});
module.exports = LoginController;


