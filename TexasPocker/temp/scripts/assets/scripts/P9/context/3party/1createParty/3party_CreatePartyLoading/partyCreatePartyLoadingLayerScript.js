"use strict";
cc._RFpush(module, '75bc8YSf3VNzq9rb9pPY7Pk', 'partyCreatePartyLoadingLayerScript');
// scripts/P9/context/3party/1createParty/3party_CreatePartyLoading/partyCreatePartyLoadingLayerScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
        this.scheduleOnce(function () {
            //假装发送进入哪种牌桌的消息
            var msg1 = new MVC.FMessage("showPartyTypeReq", "Net");
            msg1.args.type = window.GameType;
            msg1.send();
        }, 2);
    },
    onDestory: function onDestory() {
        this.disconnect();
    }

});

cc._RFpop();