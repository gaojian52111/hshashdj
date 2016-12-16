"use strict";
cc._RFpush(module, 'e4d6dFXC0hAcYLOV6u5eYjZ', 'FSocketController');
// scripts/FWS/Controller/FSocketController.js

/*
 * @Author: thor.liu 
 * @Date: 2016-12-05 17:13:49 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-06 17:02:29
 */
var FWS_MSG = require("FWS_MSG");
var FWS_MVC = require("FWS_MVC");
var FWS_NATIVE_GATEWAY = require("FWS_NATIVE_GATEWAY");

//FWS_NATIVE_GATEWAY.FNativeGateway

var FSocketController = cc.Class({
    // name: "FSocketController",
    "extends": FWS_MVC.FMessageConnection,
    // ctor: function() {},

    onFMessage_socketConnect: function onFMessage_socketConnect(msg) {
        msg.complete();

        //TODO: 调用jsToCpp接口, 发起连接
    },

    onFMessage_socketClose: function onFMessage_socketClose(msg) {
        msg.complete();

        //TODO: 调用jsToCpp接口, 关闭连接
    },

    onFMessage_socketSend: function onFMessage_socketSend(msg) {
        msg.complete();

        //TODO: 调用jsToCpp接口, 发送数据
    }
});

/*
    [header]
    msgid

    [head]
    version
    retcode
    extra
    router
    body
*/

module.exports = FSocketController;

cc._RFpop();