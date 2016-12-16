"use strict";
cc._RFpush(module, '67e19BL6pxHMJR8J/JC09jN', 'Project');
// scripts/Project.js

/*
 * 工程定义
 * @Author: thor.liu 
 * @Date: 2016-12-02 10:35:07 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-08 15:00:34
 */
var Project = {
    FWS: {},
    P9: {
        Config: {},
        DATA: {}

    },
    GameModel: require("FWS_MODEL_DATA").FGameModel
};

//────────────────────────────────────────────────────────── Modules

Project.FWS.MVC = require("FWS_MVC");
Project.FWS.MODEL = require("FWS_MODEL");
Project.FWS.DATA = require("FWS_MODEL_DATA");
Project.FWS.MSG = require("FWS_MSG");
Project.FWS.LANG = require("FLanguage");

Project.P9.DATA.GAME = require("P9GameData");
Project.P9.DATA.ROOM = require("P9RoomData");

Project.FWS.DATA.FUser.factory = new Project.P9.DATA.GAME.P9UserFactory();
Project.FWS.DATA.FPlayer.factory = new Project.P9.DATA.GAME.P9PlayerFactory();
Project.FWS.DATA.FGame.factory = new Project.P9.DATA.GAME.P9GameFactory();
Project.FWS.DATA.FGameTable.factory = new Project.P9.DATA.GAME.P9GameTableFactory();
Project.FWS.DATA.FGameRound.factory = new Project.P9.DATA.GAME.P9GameRoundFactory();

// // 测试: 所有的扑克牌
// for (var c = 0; c <= 3; c++) {
//     for (var a = 0; a <= 12; a++) {
//         var card = Project.P9.DATA.GAME.PKCard.createByColorAmount(c, a);
//         Project.FWS.MVC.FLog.data("test", "card = {0}, id = {1}, color = {2}, amount = {3}, order = {4}", card, card.id, card.color, card.amount, card.order);
//     }
// }

var FSocketCSModel = require("FSocketCSModel");
var FSocketRSModel = require("FSocketRSModel");
var FWebConnectController = require("FWebConnectController");

var P9SocketGSModel = require("P9SocketGSModel");
var P9TestCreatorModel = require("P9TestCreatorModel");

var P9CreateSettings = require("P9CreateSettings");

//────────────────────────────────────────────────────────── loading
var loadingController = require("LoadingController");
var loadingView = require("LoadingView");

//────────────────────────────────────────────────────────── login
var loginController = require("LoginController");
var loginView = require("LoginView");

//────────────────────────────────────────────────────────── main

var mainController = require("MainController");
var mainView = require("MainView");

// //────────────────────────────────────────────────────────── party
//
var partyView = require("PartyView");
var partyController = require("PartyController");
//创建牌局
// const party_CreatePartyView = require("Party_CreatePartyView");
// const party_CreatePartyController = require("Party_CreatePartyController");
var party_CreatePartyLoadingView = require("Party_CreatePartyLoadingView");
var party_CreatePartyLoadingController = require("Party_CreatePartyLoadingController");
var party_CreatePartySetView = require("Party_CreatePartySetView");
var party_CreatePartySetController = require("Party_CreatePartySetController");
// //加入牌局
var party_JoinPartyView = require("Party_joinPartyView");
var party_JoinPartyController = require("Party_joinPartyController");
var party_JoinPartyLoadingView = require("Party_loadingPartyView");
var party_JoinPartyLoadingController = require("Party_loadingPartyController");
var party_chackSportsPartyinfoView = require("Party_chackSportsPartyinfoView");
var party_chackSportsPartyinfoController = require("Party_chackSportsPartyinfoController");

//────────────────────────────────────────────────────────── room

var roomView = require("roomView");
var roomController = require("roomController");

var room_loadingController = require("room_loadingController");
var room_loadingView = require("room_loadingView");

var room_startGameController = require("room_startGameController");
var room_startGameView = require("room_startGameView");

var room_roomWaitingController = require("Room_roomWaitingController");
var room_roomWaitingView = require("Room_roomWaitingView");

var room_VillageController = require("room_VillageConroller");
var room_VillageView = require("room_VillageView");

var room_handSignController = require("room_handSignController");
var room_handSignView = require("room_handSignView");

var room_communityCardController = require("room_communityCardController");
var room_communityCardView = require("room_communityCardView");

var room_myTurnController = require("room_myTurnController");
var room_myTurnView = require("room_myTurnView");

var room_othersTurnController = require("room_othersTurnController");
var room_othersTurnView = require("room_othersTurnView");

var room_safestController = require("room_safestController");
var room_safestView = require("room_safestView");

var room_statementsController = require("room_statementsController");
var room_statementsView = require("room_statementsView");

var room_partyRoomOverController = require("room_partyRoomOverController");
var room_partyRoomOverView = require("room_partyRoomOverView");

//────────────────────────────────────────────────────────── my
var myView = require("myView");
var myController = require("myController");
//钱包
var walletView = require("walletView");
var walletController = require("walletController");
//商城
var mallView = require("mallView");
var mallController = require("mallController");
// //我的战队
// const myteamView = require("myteamView");
// const myteamController = require("myteamController");
// //联系人
// const contactsView = require("contactsView");
// const contactsController = require("contactsController");
// //消息
// const messageView = require("messageView");
// const messageController = require("messageController");
// //所获成就
// const achievementView = require("achievementView");
// const achievementController = require("achievementController");
// //牌局统计
// const gamestatisticsView = require("gamestatisticsView");
// const gamestatisticsController = require("gamestatisticsController");
// //我的牌谱
// const mybrandView = require("mybrandView");
// const mybrandController = require("mybrandController");
// //邀请码
// const invitationcodeView = require("invitationcodeView");
// const invitationcodeController = require("invitationcodeController");
// //系统设置
// const settingView = require("settingView");
// const settingController = require("settingController");
// //规则说明
// const ruleView = require("ruleView");
// const ruleController = require("ruleController");
// //编辑
// const editView = require("editView");
// const editController = require("editController");
// //大师等级
// const masterlevelView = require("masterlevelView");
// const masterlevelController = require("masterlevelController");
// //会籍
// const membershipView = require("membershipView");
// const membershipController = require("membershipController");

// const MTTSNGWaitingView = require("MTTSNGWaitingView");
// const MTTSNGWaitingController = require("MTTSNGWaitingController");

// const SettlementView = require("SettlementView");
// const SettlementController = require("SettlementController");

//────────────────────────────────────────────────────────── Contexts

Project.Contexts = cc.Class({
    name: "Contexts",
    statics: {
        init: function init() {
            if (Project.Contexts.inited) return;
            Project.Contexts.inited = true;

            //TODO: 加载jsCpp通道

            //根
            Project.Contexts.root = new Project.FWS.MVC.FContext("root");
            Project.Contexts.root.setModules(new FSocketCSModel(), new FSocketRSModel(), new P9SocketGSModel(), new P9TestCreatorModel(), //在creator下测试时的模拟消息交互
            new P9CreateSettings(), new FWebConnectController());

            //TODO: 根 > 加载
            Project.Contexts.loading = Project.Contexts.root.add(new Project.FWS.MVC.FContext("loading").setModules(new loadingController(), new loadingView()));

            //TODO: 根 > 登录
            Project.Contexts.login = Project.Contexts.root.add(new Project.FWS.MVC.FContext("login").setModules(
            //登录view 创建登录注册页 添加        onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //登录controller 负责接收消息 运行goto（节点跳转）
            new loginController(), new loginView()));

            //TODO: 根 > 主界面
            Project.Contexts.main = Project.Contexts.root.add(new Project.FWS.MVC.FContext("main").setModules(

            //主界面view       onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用

            //主界面controller 负责接收消息 运行goto（节点跳转）
            new mainController(), new mainView()));

            //TODO: 根 > 主界面 > 牌局
            Project.Contexts.party = Project.Contexts.main.add(new Project.FWS.MVC.FContext("party").setModules(
            //牌局view       onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //牌局controller 负责接收消息 运行goto（节点跳转）
            new partyView(), new partyController()));
            //TODO: 根 > 主界面 > 牌局 > 加入牌局

            Project.Contexts.joinParty = Project.Contexts.party.add(new Project.FWS.MVC.FContext("joinParty").setModules(
            //加入牌局view       onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //加入牌局controller 负责接收消息 运行goto（节点跳转）
            new party_JoinPartyView(), new party_JoinPartyController()));

            //TODO: 根 > 主界面 > 牌局 > 加入牌局 > 加入牌局loading
            Project.Contexts.loadingParty = Project.Contexts.party.add(new Project.FWS.MVC.FContext("loadingParty").setModules(
            //加入牌局loadingview       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //加入牌局loadingcontroller
            /*  : 负责接收进入牌局的数据
                : 负责判断 进入哪种怕局等待页
            */
            new party_JoinPartyLoadingView(), new party_JoinPartyLoadingController()));

            //TODO: 根 > 主界面 > 牌局 > 加入牌局 > 查看竞技场信息
            Project.Contexts.chackSportsPartyinfo = Project.Contexts.party.add(new Project.FWS.MVC.FContext("chackSportsPartyinfo").setModules(
            //查看竞技场信息view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //查看竞技场信息controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            // new MTTSNGWaitingView(),
            // new MTTSNGWaitingController()

            new party_chackSportsPartyinfoView(), new party_chackSportsPartyinfoController()));

            //TODO: 根 > 主界面 > 牌局 > 创建牌局
            // Project.Contexts.createParty = Project.Contexts.party.add(new Project.FWS.MVC.FContext("createParty").setModules(
            //     //创建标准局view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //     //创建标准局controller
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            //
            //     new party_CreatePartyView(),
            //     new party_CreatePartyController()
            // ));

            //TODO: 根 > 主界面 > 牌局 > 创建牌局设置
            Project.Contexts.createPartySet = Project.Contexts.party.add(new Project.FWS.MVC.FContext("createPartySet").setModules(
            //创建标准牌局设置 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //创建标准牌局设置 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */

            new party_CreatePartySetView(), new party_CreatePartySetController()));

            //TODO: 根 > 主界面 > 牌局 > 创建牌局loading
            Project.Contexts.createPartyLoading = Project.Contexts.party.add(new Project.FWS.MVC.FContext("createPartyLoading").setModules(
            //创建牌局loading view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //创建牌局loading controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            new party_CreatePartyLoadingView(), new party_CreatePartyLoadingController()));

            //TODO: 根 > 房间
            Project.Contexts.room = Project.Contexts.root.add(new Project.FWS.MVC.FContext("room").setModules(
            //房间 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //房间 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            new roomView(), new roomController()));
            //TODO: 根 > 房间 > 房间等待... (STD) (判断是否上桌)
            Project.Contexts.roomWaiting = Project.Contexts.room.add(new Project.FWS.MVC.FContext("roomWaiting").setModules(
            //房间等待 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //房间等待 controller
            /*  : 负责接收消息 运行goto（节点跳转）
            //  */
            // new createPartyWaitingView(),
            // new createPartyWaitingController()

            new room_roomWaitingController(), new room_roomWaitingView()));

            //TODO: 根 > 房间 > loading
            Project.Contexts.loadingGame = Project.Contexts.room.add(new Project.FWS.MVC.FContext("loadingGame").setModules(
            //开始游戏 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //开始游戏 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            new room_loadingController(), new room_loadingView()));
            //TODO: 根 > 房间 > 开始游戏
            Project.Contexts.startGame = Project.Contexts.room.add(new Project.FWS.MVC.FContext("startGame").setModules(
            //开始游戏 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //开始游戏 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */

            new room_startGameController(), new room_startGameView()));

            //TODO: 根 > 房间 > 开始游戏 > 定庄
            Project.Contexts.Village = Project.Contexts.startGame.add(new Project.FWS.MVC.FContext("Village").setModules(
            //定庄 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //定庄 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            new room_VillageController(), new room_VillageView()));
            //TODO: 根 > 房间 > 开始游戏 > 发手牌
            Project.Contexts.handSign = Project.Contexts.startGame.add(new Project.FWS.MVC.FContext("handSign").setModules(
            //发手牌 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //发手牌 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            new room_handSignController(), new room_handSignView()));
            //TODO: 根 > 房间 > 开始游戏 >  发公共牌
            Project.Contexts.communityCard = Project.Contexts.startGame.add(new Project.FWS.MVC.FContext("communityCard").setModules(
            //发公共牌 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //发公共牌 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            new room_communityCardController(), new room_communityCardView()));
            //TODO: 根 > 房间 > 开始游戏 >  轮到别人动作
            Project.Contexts.othersAction = Project.Contexts.startGame.add(new Project.FWS.MVC.FContext("othersAction").setModules(
            //轮到别人动作 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //轮到别人动作 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            new room_othersTurnController(), new room_othersTurnView()));
            //TODO: 根 > 房间 > 开始游戏 >  轮到自己动作
            Project.Contexts.myAction = Project.Contexts.startGame.add(new Project.FWS.MVC.FContext("myAction").setModules(
            //轮到自己动作 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //轮到自己动作 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */

            new room_myTurnController(), new room_myTurnView()));
            //TODO: 根 > 房间 > 开始游戏 >  保险
            Project.Contexts.safest = Project.Contexts.startGame.add(new Project.FWS.MVC.FContext("safest").setModules(
            //保险 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //保险 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            new room_safestController(), new room_safestView()));
            //TODO: 根 > 房间 > 结算
            Project.Contexts.statements = Project.Contexts.room.add(new Project.FWS.MVC.FContext("statements").setModules());
            //TODO: 根 > 房间 > 牌局房间结束

            //保险 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //保险 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */

            // new room_statementsController(),
            // new room_statementsView()
            // new SettlementView(),
            // new SettlementController()
            Project.Contexts.partyRoomOver = Project.Contexts.room.add(new Project.FWS.MVC.FContext("partyRoomOver").setModules(
            //牌局房间结束 view       : onEnterNode 进入节点->loadScene load控件等  onLeaveNode 离开节点的时候会调用
            //牌局房间结束 controller
            /*  : 负责接收消息 运行goto（节点跳转）
             */

            new room_partyRoomOverController(), new room_partyRoomOverView()));

            //根 > 我的
            Project.Contexts.my = Project.Contexts.root.add(new Project.FWS.MVC.FContext("my").setModules(new myView(), new myController()

            //我的
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            ));
            // //根 > 我的 > 个人设置
            Project.Contexts.edit = Project.Contexts.my.add(new Project.FWS.MVC.FContext("edit").setModules());
            // //根 > 我的 > 牌谱

            // new editView(),
            // new editController()

            //我的
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            Project.Contexts.mybrand = Project.Contexts.my.add(new Project.FWS.MVC.FContext("mybrand").setModules());
            // //根 > 我的 > 牌谱 > 我的牌谱
            // //根 > 我的 > 牌谱 > 收藏的牌谱
            // //根 > 我的 > 大师等级

            // new mybrandView(),
            // new mybrandController()
            //钱包
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            Project.Contexts.masterlevel = Project.Contexts.my.add(new Project.FWS.MVC.FContext("masterlevel").setModules());
            // //根 > 我的 > 会籍

            // new masterlevelView(),
            // new masterlevelController()
            //钱包
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            Project.Contexts.membership = Project.Contexts.my.add(new Project.FWS.MVC.FContext("membership").setModules());
            // //根 > 我的 > 会籍 > 会籍绑定
            // //根 > 我的 > 会籍 > 升级会员
            // //根 > 我的 > 钱包

            // new membershipView(),
            // new membershipController()
            //钱包
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            Project.Contexts.wallet = Project.Contexts.my.add(new Project.FWS.MVC.FContext("wallet").setModules());
            //根 > 我的 > 钱包 > 商城
            //根 > 我的 > 商城

            // new walletView(),
            // new walletController()
            //钱包
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            Project.Contexts.mall = Project.Contexts.my.add(new Project.FWS.MVC.FContext("mall").setModules());
            // //根 > 我的 > 我的战队
            // Project.Contexts.myteam = Project.Contexts.my.add(new Project.FWS.MVC.FContext("myteam").setModules(
            //     new myteamView(),
            //     new myteamController()
            //     //钱包
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            // ));
            // //根 > 我的 > 联系人 > 我关注的
            // Project.Contexts.contactsfollow= Project.Contexts.my.add(new Project.FWS.MVC.FContext("contactsfollow").setModules(
            //     new contactsView(),
            //     new contactsController()
            //     //钱包
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            // ));
            // //根 > 我的 > 联系人 > 粉丝
            // Project.Contexts.contactsfan= Project.Contexts.my.add(new Project.FWS.MVC.FContext("contactsfan").setModules(
            //     new contactsView(),
            //     new contactsController()
            //     //钱包
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            // ));
            // //根 > 我的 > 我关注的
            // //根 > 我的 > 我的粉丝
            // //根 > 我的 > 消息
            // Project.Contexts.message = Project.Contexts.my.add(new Project.FWS.MVC.FContext("message").setModules(
            //     new messageView(),
            //     new messageController()
            //     //钱包
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            // ));
            // //根 > 我的 > 消息 > 聊天
            // //根 > 我的 > 消息 > 消息
            // //根 > 我的 > 所获成就
            // Project.Contexts.achievement = Project.Contexts.my.add(new Project.FWS.MVC.FContext("achievement").setModules(
            //     new achievementView(),
            //     new achievementController()
            //     //钱包
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            // ));
            // //根 > 我的 > 所获成就 > STD
            // //根 > 我的 > 所获成就 > SNG
            // //根 > 我的 > 所获成就 > MTT
            //
            // //根 > 我的 > 牌局统计
            // Project.Contexts.gamestatistics = Project.Contexts.my.add(new Project.FWS.MVC.FContext("gamestatistics").setModules(
            //     new gamestatisticsView(),
            //     new gamestatisticsController()
            //     //钱包
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            // ));
            // //根 > 我的 > 邀请码
            // Project.Contexts.invitationcode = Project.Contexts.my.add(new Project.FWS.MVC.FContext("invitationcode").setModules(
            //     new invitationcodeView(),
            //     new invitationcodeController()
            //     //钱包
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            // ));
            // //根 > 我的 > 邀请码 > 邀请好友
            // //根 > 我的 > 邀请码 > 邀请好友
            // //根 > 我的 > 系统设置
            // Project.Contexts.setting = Project.Contexts.my.add(new Project.FWS.MVC.FContext("setting").setModules(
            //     new settingView(),
            //     new settingController()
            //     //钱包
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            // ));
            // //根 > 我的 > 系统设置 > 切换账号
            // //根 > 我的 > 系统设置 > 评分
            // //根 > 我的 > 系统设置 > 帮助与反馈
            // //根 > 我的 > 系统设置 > 关于我们
            // //根 > 我的 > 规则说明
            // Project.Contexts.rule = Project.Contexts.my.add(new Project.FWS.MVC.FContext("rule").setModules(
            //     new ruleView(),
            //     new ruleController()
            //     //钱包
            //     /*  : 负责接收消息 运行goto（节点跳转）
            //      */
            // ));
            // //根 > 我的 > 规则说明 > 基本规则
            // //根 > 我的 > 规则说明 > 盲注级别表
            // //根 > 我的 > 规则说明 > 保险说明
            // //根 > 我的 > 规则说明 > 免责说明
            //

            // //根 > 主界面 > 创建牌局
            // //根 > 房间
            //
            // //根 > 加载
            // // Project.Contexts.loading = Project.Contexts.root.add(new Project.FWS.MVC.FContext("loading"));
            // //根 > 主界面
            // Project.Contexts.main = Project.Contexts.root.add(new Project.FWS.MVC.FContext("main"));
            // //根 > 主界面 > 菜单
            // Project.Contexts.menu = Project.Contexts.main.add(new Project.FWS.MVC.FContext("menu"));
            // //根 > 主界面 > 帐户信息
            // //根 > 主界面 > 创建房间
            // Project.Contexts.roomCreate = Project.Contexts.main.add(new Project.FWS.MVC.FContext("roomCreate"));
            // //根 > 主界面 > 加入房间
            // Project.Contexts.roomJoin = Project.Contexts.main.add(new Project.FWS.MVC.FContext("roomJoin"));
            // //根 > 主界面 > 公告
            // //根 > 主界面 > 背包
            // //根 > 主界面 > 商城
            // //根 > 主界面 > 任务
            // //根 > 主界面 > 规则
            // //根 > 主界面 > 帮助
            // //根 > 主界面 > 分享
            // //根 > 主界面 > 设置
            //
            // //根 > 房间
            // Project.Contexts.room = Project.Contexts.root.add(new Project.FWS.MVC.FContext("room"));
            // //根 > 房间 > 加载
            // //根 > 房间 > 邀请
            // //根 > 房间 > 游戏
            // Project.Contexts.game = Project.Contexts.room.add(new Project.FWS.MVC.FContext("game"));
            // //根 > 房间 > 游戏 > 等待
            // //根 > 房间 > 游戏 > 定庄
            // //根 > 房间 > 游戏 > 发牌
            // //根 > 房间 > 游戏 > 换牌
            // //根 > 房间 > 游戏 > 定缺
            // //根 > 房间 > 游戏 > 行牌
            // //根 > 房间 > 游戏 > 结算
            // //根 > 房间 > 结束

            //-----

            // new mallView(),
            // new mallController()
            //钱包
            /*  : 负责接收消息 运行goto（节点跳转）
             */
            Project.FWS.MVC.FMessageRouter.createQueue("ui");
            Project.FWS.MVC.FContextManager.init(Project.Contexts.root);
        },
        //开始
        start: function start() {
            Project.Contexts.init();
            Project.FWS.MVC.FContextManager.gotoID("loading");
        }
    }
});

Project.Contexts.start();

//------ 测试代码: 不填参数的情况下跑一遍主线消息流程

// //连接服务器
// Project.FWS.MSG.FWSMessageFactory.serverConnect().send();
// //创建房间 (此处也可能是加入房间)
// Project.FWS.MSG.FWSMessageFactory.roomCreate().send();
// //加入游戏
// Project.FWS.MSG.FWSMessageFactory.gameJoin().send();
// //游戏就绪
// Project.FWS.MSG.FWSMessageFactory.gameReady().send();
// //应答动作
// Project.FWS.MSG.FWSMessageFactory.gameActionAck().send();

//------ 创建游戏房间

// //房间名称
// var roomName = "我的MTT游戏";
// //房间类型
// var roomType = Project.P9.DATA.GAME.P9RoomType.MTT;
// //房间选项参考P9RoomData.js中的P9STDGameData和P9MTTGameData的属性定义...
// var roomData = new Project.P9.DATA.ROOM.P9MTTGameData();
// roomData.tablePlayerCount = 9;
// //...

// Project.FWS.MSG.FWSMessageFactory.roomCreate(roomName, roomType, roomData).send();

module.exports = Project;

cc._RFpop();