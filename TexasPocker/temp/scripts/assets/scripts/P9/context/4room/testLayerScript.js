"use strict";
cc._RFpush(module, '93646eHrhRBz5ZLJJFkxXT4', 'testLayerScript');
// scripts/P9/context/4room/testLayerScript.js

var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
    },
    onDestroy: function onDestroy() {
        this.disconnect();
    },
    dingZhuang: function dingZhuang() {
        var msg2 = new MVC.FMessage("gameEventNotify", "startGame");
        msg2.args.eventType = "DingZhuang";
        msg2.send();
    },
    faShouPai: function faShouPai() {
        var msg2 = new MVC.FMessage("gameEventNotify", "startGame");
        msg2.args.eventType = "FaShouPai";
        msg2.send();
    },
    faGongGongPai: function faGongGongPai() {
        var msg2 = new MVC.FMessage("gameEventNotify", "startGame");
        msg2.args.eventType = "FaGongGongPai";
        msg2.send();
    },
    lunDaoZiJi: function lunDaoZiJi() {
        var msg2 = new MVC.FMessage("gameActionReq", "startGame");
        msg2.args.actionType = "myAction";
        msg2.send();
    },
    lunDaoBieRen: function lunDaoBieRen() {
        var msg2 = new MVC.FMessage("gameActionReq", "startGame");
        msg2.args.actionType = "othersAction";
        msg2.send();
    },
    baoXian: function baoXian() {
        var msg2 = new MVC.FMessage("safestReq", "startGame");
        msg2.args.actionType = "othersAction";
        msg2.send();
    },
    jieSuan: function jieSuan() {
        var msg2 = new MVC.FMessage("gameOnResult", "startGame");
        msg2.args.actionType = "othersAction";
        msg2.send();
    },
    paiJuFangJianJieShu: function paiJuFangJianJieShu() {
        var msg2 = new MVC.FMessage("roomOnEnd", "startGame");
        msg2.args.actionType = "othersAction";
        msg2.send();
    }
});

cc._RFpop();