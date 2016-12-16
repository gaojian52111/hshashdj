"use strict";
cc._RFpush(module, 'fcf2b2wtSJJZJegJdx25LZt', 'joinGameLoadingLayerScript');
// scripts/P9/context/3party/2joinParty/1party_loadingParty/joinGameLoadingLayerScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
        this.scheduleOnce(function () {
            //假装发送进入哪种牌桌的消息
            //目前需要手动改
            var msg1 = new MVC.FMessage("joinPartyInfoReq", "Net");
            msg1.args.type = "MTT";

            msg1.send();
        }, 4);
    },
    onDestory: function onDestory() {
        this.disconnect();
    }

});

cc._RFpop();