"use strict";
cc._RFpush(module, '50aa252jyZAipogbfRnFHDG', 'partyCreateSetLayerScript');
// scripts/P9/context/3party/1createParty/2party_CreatePartySet/partyCreateSetLayerScript.js

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
    onCreateStd: function onCreateStd() {
        //假设设置好了数据等东西  将这些东西发给网络层
        var msg1 = new MVC.FMessage("CreateStdPartyInfoAck", "Net");
        msg1.args.Type = "STD";
        msg1.send();
        //直接跳到loading
        window.GameType = "STD";
        MVC.FContextManager.gotoID("createPartyLoading");
    },
    onCreateMTT: function onCreateMTT() {
        //假设设置好了数据等东西  将这些东西发给网络层

        var msg1 = new MVC.FMessage("CreateStdPartyInfoAck", "Net");
        msg1.args.Type = "MTT";
        msg1.send();
        window.GameType = "MTT";

        //直接跳到loading
        MVC.FContextManager.gotoID("createPartyLoading");
    }

});

cc._RFpop();