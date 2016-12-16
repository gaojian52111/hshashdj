//我的牌谱
const MVC = require("FWS_MVC");
const Project = require("Project");
var mybrandView;
mybrandView = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },
    onEnterNode: function() {
        //加载结算场景
         cc.director.loadScene("mybrandScene");



        cc.log("loginController onEnterNode");
        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {

    }
});
module.exports = mybrandView;
