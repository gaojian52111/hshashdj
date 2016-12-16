"use strict";
cc._RFpush(module, '4bc07vH1H1IY43jwIusAMin', 'partyLayerScript');
// scripts/P9/context/3party/partyLayerScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
    },
    onDestory: function onDestory() {
        this.disconnect();
    },
    onCreatParty: function onCreatParty() {
        var msg1 = new MVC.FMessage("onCreatPartyClick", "createPartySet");
        msg1.send();
    },
    onJoinParty: function onJoinParty() {
        var msg1 = new MVC.FMessage("onJoinPartyClick", "createPartySet");
        msg1.send();
    }

});

cc._RFpop();