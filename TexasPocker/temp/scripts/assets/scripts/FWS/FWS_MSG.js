"use strict";
cc._RFpush(module, '044da1e/+pP6a/GPesiUe26', 'FWS_MSG');
// scripts/FWS/FWS_MSG.js

var FWS_MSG = {};
var FWS_MVC = require("FWS_MVC");

FWS_MSG.FWSMessageFactory = cc.Class({
    name: "FWSMessageFactory",
    statics: {

        //────────────────────────────────────────────────────────── Socket
        /**
         * 连接请求
         */
        socketConnect: function socketConnect(type, ip, port) {
            var ret = new FWS_MVC.FMessage("socketConnect", "socket");
            ret.args.type = type;
            ret.args.ip = ip;
            ret.args.port = port;
            return ret;
        },

        /**
         * 关闭连接
         */
        socketClose: function socketClose(type) {
            var ret = new FWS_MVC.FMessage("socketClose", "socket");
            ret.args.type = type;
            return ret;
        },

        /**
         * 发送数据
         */
        socketSend: function socketSend(pack) {
            var ret = new FWS_MVC.FMessage("socketSend", "socket");
            ret.args.pack = pack;
            return ret;
        },

        /**
         * 接收数据时
         */
        socketOnReceive: function socketOnReceive(pack) {
            var ret = new FWS_MVC.FMessage("socketOnReceive", "socket");
            ret.args.pack = pack;
            return ret;
        },

        /**
         * 连接成功或者连接失败时
         */
        socketOnConnect: function socketOnConnect(type, success) {
            var ret = new FWS_MVC.FMessage("socketOnConnect", "socket");
            ret.args.type = type;
            ret.args.retcode = success ? 0 : -1;
            return ret;
        },

        /**
         * 连接被关闭时
         */
        socketOnClose: function socketOnClose(type) {
            var ret = new FWS_MVC.FMessage("socketOnClose", "socket");
            ret.args.type = type;
            return ret;
        },

        //────────────────────────────────────────────────────────── Common

        /**
         * 连接服务器
         */
        serverConnect: function serverConnect() {
            return new FWS_MVC.FMessage("serverConnect", "ui");
        },
        /**
         * 连接服务器成功或者失败
         */
        serverConnectResult: function serverConnectResult(retcode) {
            var ret = new FWS_MVC.FMessage("serverConnectResult", "ui");
            ret.args.retcode = retcode;
            return ret;
        },

        //────────────────────────────────────────────────────────── User

        /**
         * 标准注册
         */
        userReg: function userReg() {
            var ret = FWS_MVC.FMessage("userReg", "");
            return ret;
        },
        /**
         * 标准注册结果
         */
        userRegResult: function userRegResult(retcode) {
            var ret = FWS_MVC.FMessage("userRegResult", "ui");
            ret.args.retcode = retcode;
            return ret;
        },

        /**
         * 标准登录
         */
        userLogin: function userLogin(uid, pwd) {
            var ret = FWS_MVC.FMessage("userLogin", "");
            return ret;
        },
        /**
         * 标准登录结果
         */
        userLoginResult: function userLoginResult(retcode) {
            var ret = FWS_MVC.FMessage("userLoginResult", "ui");
            ret.args.retcode = retcode;
            return ret;
        },

        //────────────────────────────────────────────────────────── Room

        /**
         * 创建房间
         * @param name 房间名称
         * @param roomType 房间类型
         * @param room 房间数据 (P9STDGameData/P9MTTGameData)
         */
        roomCreate: function roomCreate(name, roomType, room) {
            var ret = new FWS_MVC.FMessage("roomCreate", "");
            ret.args.name = name;
            ret.args.roomType = roomType;
            ret.args.room = room;
            return ret;
        },
        roomCreateResult: function roomCreateResult(retcode, game) {
            var ret = new FWS_MVC.FMessage("roomCreateResult", "ui");
            ret.args.retcode = retcode;
            ret.args.game = game;
            return ret;
        },

        /**
         * 加入房间
         */
        roomJoin: function roomJoin(code) {
            var ret = new FWS_MVC.FMessage("roomJoin", "");
            ret.args.code = code;
            return ret;
        },
        roomJoinResult: function roomJoinResult(retcode, game) {
            var ret = new FWS_MVC.FMessage("roomJoinResult", "ui");
            ret.args.retcode = retcode;
            ret.args.game = game;
            return ret;
        },

        /**
         * 关闭房间
         */
        roomEnd: function roomEnd() {
            var ret = new FWS_MVC.FMessage("roomEnd", "");
            return ret;
        },
        roomEndResult: function roomEndResult(retcode) {
            var ret = new FWS_MVC.FMessage("roomEndResult", "ui");
            ret.args.retcode = retcode;
            return ret;
        },
        roomOnEnd: function roomOnEnd() {
            var ret = new FWS_MVC.FMessage("roomOnEnd", "ui");
            return ret;
        },

        roomOnGotoTable: function roomOnGotoTable() {
            var ret = new FWS_MVC.FMessage("roomOnGotoTable", "ui");
            return ret;
        },

        /**
         * 开始房间
         */
        roomStart: function roomStart() {
            var ret = new FWS_MVC.FMessage("roomStart", "");
            return ret;
        },
        roomStartResult: function roomStartResult(retcode) {
            var ret = new FWS_MVC.FMessage("roomStartResult", "ui");
            ret.args.retcode = retcode;
        },
        roomOnStart: function roomOnStart() {
            var ret = new FWS_MVC.FMessage("roomOnStart", "ui");
            return ret;
        },

        //────────────────────────────────────────────────────────── Game       

        /**
         * 加入游戏(上桌,报名)
         */
        gameJoin: function gameJoin() {
            var ret = new FWS_MVC.FMessage("gameJoin", "");
            return ret;
        },
        gameJoinResult: function gameJoinResult(retcode) {
            var ret = new FWS_MVC.FMessage("gameJoinResult", "ui");
            ret.args.retcode = retcode;
            return ret;
        },
        gameOnJoin: function gameOnJoin() {
            var ret = new FWS_MVC.FMessage("gameOnJoin", "ui");
            return ret;
        },

        /**
         * 旁观游戏
         */
        gameWatch: function gameWatch() {
            var ret = new FWS_MVC.FMessage("gameWatch", "");
            return ret;
        },
        gameWatchResult: function gameWatchResult(retcode) {
            var ret = new FWS_MVC.FMessage("gameWatchResult", "ui");
            ret.args.retcode = retcode;
            return ret;
        },
        gameOnWatch: function gameOnWatch() {
            var ret = new FWS_MVC.FMessage("gameOnWatch", "ui");
            return ret;
        },

        /**
         * 恢复游戏
         */
        gameResume: function gameResume() {
            var ret = new FWS_MVC.FMessage("gameResume", "");
            return ret;
        },
        gameResumeResult: function gameResumeResult(retcode) {
            var ret = new FWS_MVC.FMessage("gameResumeResult", "ui");
            ret.args.retcode = retcode;
            return ret;
        },

        /**
         * 游戏就绪
         */
        gameReady: function gameReady() {
            var ret = new FWS_MVC.FMessage("gameReady", "");
            return ret;
        },
        gameOnReady: function gameOnReady() {
            var ret = new FWS_MVC.FMessage("gameOnReady", "ui");
            return ret;
        },

        /**
         * 游戏开始时
         */
        gameOnStart: function gameOnStart(startData) {
            var ret = new FWS_MVC.FMessage("gameOnStart", "ui");
            ret.args.startData;
            return ret;
        },

        /**
         * 游戏结束时
         */
        gameOnResult: function gameOnResult(resultData) {
            var ret = new FWS_MVC.FMessage("gameOnResult", "ui");
            ret.args.resultData = resultData;
            return ret;
        },

        /**
         * 询问玩家动作
         */
        gameActionReq: function gameActionReq(actionReqData) {
            var ret = new FWS_MVC.FMessage("gameActionReq", "ui");
            ret.args.actionReqData = actionReqData;
            return ret;
        },

        /**
         * 玩家动作选择
         */
        gameActionAck: function gameActionAck(actionAckData) {
            var ret = new FWS_MVC.FMessage("gameActionAck", "ui");
            ret.args.actionAckData = actionAckData;
            return ret;
        },

        /**
         * 玩家动作结果
         */
        gameActionAckResult: function gameActionAckResult(retcode) {
            var ret = new FWS_MVC.FMessage("gameActionAckResult", "ui");
            ret.args.retcode = retcode;
            return ret;
        },

        /**
         * 玩家动作通知
         */
        gameActionNotify: function gameActionNotify(actionNotifyData) {
            var ret = new FWS_MVC.FMessage("gameActionNotify", "ui");
            ret.args.actionNotifyData = actionNotifyData;
            return ret;
        },

        /**
         * 游戏事件通知
         */
        gameEventNotify: function gameEventNotify(eventType, eventNotifyData) {
            var ret = new FWS_MVC.FMessage("gameEventNotify", "ui");
            ret.args.eventType = eventType;
            ret.args.eventNotifyData = eventNotifyData;
            return ret;
        }
    }
});

//──────────────────────────────────────────────────────────

module.exports = FWS_MSG;

cc._RFpop();