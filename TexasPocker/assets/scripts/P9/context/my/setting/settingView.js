//系统设置
const MVC = require("FWS_MVC");
const Project = require("Project");
var settingView;
settingView = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },
    onEnterNode: function() {
        //加载结算场景
         cc.director.loadScene("settingScene");



        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {

    }
});
module.exports = settingView;
