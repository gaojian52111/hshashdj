const MVC = require("FWS_MVC");
var party_loadingPartyController;
party_loadingPartyController = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function() {

        cc.log("roomLoadingScene");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {

    },
    onFMessage_joinPartyInfoReq:function (msg) {
        //

        if(msg.args.type == "STD"){
            cc.log("onFMessage_showPartyTypeReq = STD");
            MVC.FContextManager.gotoID("roomWaiting");
        }
        else if(msg.args.type == "MTT"){
            cc.log("onFMessage_showPartyTypeReq = MTT");

            MVC.FContextManager.gotoID("chackSportsPartyinfo");
        }
        msg.complete();
    }
});
module.exports = party_loadingPartyController;
