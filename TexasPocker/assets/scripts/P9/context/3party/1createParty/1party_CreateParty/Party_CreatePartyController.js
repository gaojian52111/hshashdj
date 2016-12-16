const MVC = require("FWS_MVC");
var party_CreatePartyController;
party_CreatePartyController = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:此类是对将来可能加进来的其他创建方法存在的
    onEnterNode: function() {

        cc.log("party_CreatePartyController");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {

    }

});
module.exports = party_CreatePartyController;
