"use strict";
cc._RFpush(module, '9e64btvJpxJ6az3V+5DLLHL', 'FLogInModel');
// scripts/FWS/Models/FLogInModel.js

var MVC = require("FWS_MVC");
var MODEL = require("FWS_MODEL");
var loginModel;
loginModel = cc.Class({
    "extends": MVC.FMessageConnection,

    onFMessage_Login: function onFMessage_Login(msg) {
        cc.log("我收到登录消息啦" + msg);
        msg.complete();
        var msg2 = new MVC.FMessage("loginResult", "loginScene");
        msg2.args.loginState = true;
        msg2.send();
    }

});

module.exports = loginModel;

cc._RFpop();