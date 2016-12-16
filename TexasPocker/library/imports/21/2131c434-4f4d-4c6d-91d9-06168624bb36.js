/*
 * 在Creator下的测试模块, 发假消息用的
 * @Author: thor.liu 
 * @Date: 2016-12-03 15:08:27 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-12 13:12:21
 */

var MVC = require("FWS_MVC");
var MSG = require("FWS_MSG");
var MODEL = require("FWS_MODEL");
var DATA = require("FWS_MODEL_DATA");
var GameData = require("P9GameData");
var RoomData = require("P9RoomData");

var P9TestCreatorModel = cc.Class({
    // name: "P9TestCreatorModel",
    "extends": MVC.FMessageConnection,
    // ctor: function() {},

    onEnterNode: function onEnterNode() {
        MVC.FLog.info("test", "onEnterNode");

        var table = DATA.FGameTable.factory.create();
        DATA.FGameModel.current().currentGameTable = table;
        var test_users = [{ id: "10001", name: "张建民", img: "10001.jpg" }, { id: "10002", name: "张灿阳", img: "10002.jpg" }, { id: "10003", name: "杨飞", img: "10003.jpg" }, { id: "10004", name: "刘强", img: "10004.jpg" }, { id: "10005", name: "桑桑", img: "10005.jpg" }, { id: "10006", name: "高健", img: "10006.jpg" }, { id: "10007", name: "钧浩", img: "10007.jpg" }, { id: "10008", name: "安娜", img: "10008.jpg" }, { id: "10009", name: "球球", img: "10009.jpg" }];

        table.id = "12";

        var tableData = new GameData.P9GameTableData();

        table.data = tableData;

        for (var i = 0; i < 9; i++) {
            var user = new DATA.FUser();
            user.id = test_users[i].id;
            user.name = test_users[i].name;
            user.avatar = test_users[i].img;

            var player = DATA.FPlayer.factory.create();
            player.user = user;

            table.setPlayerToSeat(player, i);
        }

        MVC.FLog.info("test", "table={0}", table);
    },

    //────────────────────────────────────────────────────────── Common

    onFMessage_serverConnect: function onFMessage_serverConnect(msg) {
        msg.complete();

        MSG.FWSMessageFactory.serverConnectResult(0).send();
    },

    //────────────────────────────────────────────────────────── User

    //────────────────────────────────────────────────────────── Room

    ///请求创建房间时
    onFMessage_roomCreate: function onFMessage_roomCreate(msg) {
        msg.complete();

        var game = DATA.FGame.factory.create();
        game.name = msg.args.name;
        game.roomType = msg.args.roomType;
        game.data = msg.args.room;

        MSG.FWSMessageFactory.roomCreateResult(0, game).send(); //假装创建房间成功
    },

    ///请求加入房间时
    onFMessage_roomJoin: function onFMessage_roomJoin(msg) {
        msg.complete();

        var game = DATA.FGame.factory.create();
        game.name = "测试房间";
        game.roomType = GameData.P9RoomType.STD;
        game.data = new RoomData.P9STDGameData();

        MSG.FWSMessageFactory.roomJoinResult(0, game).send(); //假装加入房间成功
    },

    //────────────────────────────────────────────────────────── Game

    ///请求加入游戏时
    onFMessage_gameJoin: function onFMessage_gameJoin(msg) {
        msg.complete();

        MSG.FWSMessageFactory.gameJoinResult(0).send(); //假装进入游戏成功
        MSG.FWSMessageFactory.roomOnGotoTable().send(); //假装切换到桌子的通知
    },

    ///请求就绪时
    onFMessage_gameReady: function onFMessage_gameReady(msg) {
        msg.complete();

        MSG.FWSMessageFactory.gameOnStart().send(); //假装游戏开始的通知

        //假装游戏事件通知 (发手牌)
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 9; j++) {
                var eventData = new GameData.P9GameEventGetCards();
                eventData.seat = i;
                var cardId = (i + 1) * 100 + j;
                if (j == 0) cardId = -1;
                var card = GameData.PKCard.create(cardId);
                eventData.cards.add(card);
                MSG.FWSMessageFactory.gameEventNotify(GameData.P9GameEventType.HandCards, eventData).send();
            }
        }

        //假装动作询问通知
        var reqData = new GameData.P9GameActionReqData();
        reqData.timer = 30;
        reqData.minChips = 0;
        reqData.maxChips = 100;
        reqData.seat = 0;
        reqData.actionTypes.add(GameData.P9GameActionType.Call);
        reqData.actionTypes.add(GameData.P9GameActionType.Bet);
        reqData.actionTypes.add(GameData.P9GameActionType.Fold);
        reqData.actionTypes.add(GameData.P9GameActionType.Check);
        reqData.actionTypes.add(GameData.P9GameActionType.Allin);

        MSG.FWSMessageFactory.gameActionReq().send();
    },

    ///回复游戏动作时
    onFMessage_gameActionAck: function onFMessage_gameActionAck(msg) {
        msg.complete();

        MSG.FWSMessageFactory.gameActionNotify().send(); //假装动作结果通知
        MSG.FWSMessageFactory.gameOnResult().send(); //假装游戏结果通知
    }
});

module.exports = P9TestCreatorModel;