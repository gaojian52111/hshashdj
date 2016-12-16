const MVC = require("FWS_MVC");

cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        this.connect();
    },
    onDestory:function () {
        this.disconnect();
    },
    onCreatParty:function () {
        var msg1 = new MVC.FMessage("onCreatPartyClick", "createPartySet");
        msg1.send();

    },
    onJoinParty:function () {
        var msg1 = new MVC.FMessage("onJoinPartyClick", "createPartySet");
        msg1.send();
    },


});
