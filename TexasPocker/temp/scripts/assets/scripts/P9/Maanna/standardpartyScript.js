"use strict";
cc._RFpush(module, '51556cIfw9Dq72KPbPfug4y', 'standardpartyScript');
// scripts/P9/Maanna/standardpartyScript.js

/*
选择创建标准局页面
 */
var MVC = require("FWS_MVC");
var Project = require("Project");
var P9RoomData = require("P9RoomData");
var P9CreateSettings = require("P9CreateSettings");
var valuearray_SB_BB_EntryFee = []; //存储SB_BB_EntryFee(大小盲 带入记分牌)的数组
var valuearray_PlayerNum = []; //存储PlayerNum上桌人数的数组
var valuearray_PartyTime = []; //存储牌局时长的数组
var valuearray_Ante = [];
var valuearray_DeepRaise = [];

var playernum;
var partytime;
var partyAnte;
var partyDeepRaise;
cc.Class({
    "extends": MVC.FMessageConnection,
    properties: {
        bg: {
            "default": null,
            type: cc.Sprite
        },

        scrollView: {
            "default": null,
            type: cc.ScrollView

        },
        view1: {
            "default": null,
            type: cc.Node
        },
        view2: {
            "default": null,
            type: cc.Node
        },
        view3: {
            "default": null,
            type: cc.Node
        },

        BlindSlider: {
            "default": null,
            type: cc.Slider
        },
        PeopleNumberSlider: {
            "default": null,
            type: cc.Slider
        },
        TimeSlider: {
            "default": null,
            type: cc.Slider
        },
        AnteSlider: {
            "default": null,
            type: cc.Slider
        },
        DeepRaiseSlider: {
            "default": null,
            type: cc.Slider
        },
        //小盲
        sblabel: {
            "default": null,
            type: cc.Label
        },
        //大盲
        bblabel: {
            "default": null,
            type: cc.Label
        },
        //带入记分牌
        scorecardlabel: {
            "default": null,
            type: cc.Label
        },

        //
        //等分线
        line: {
            "default": null,
            type: cc.Sprite
        },
        //牌局时长
        roomTimelabel: {
            "default": null,
            type: cc.Label
        }

    },
    onLoad: function onLoad() {
        this.connect();

        // //请求获取游戏数据配置文件
        var gamedatamsg = new MVC.FMessage("GetP9CreateSettingsSTDDataAck", "root");

        gamedatamsg.send();
    },

    onDestory: function onDestory() {
        this.disconnect();
    },

    //高级选项
    moreoptioncall: function moreoptioncall() {

        this.scrollView.enabled = true;
        this.view2.active = true;
        this.scrollView.scrollToBottom(0.1);
        this.view3.color = new cc.Color(0, 0, 0);
    },
    //收起
    packupcall: function packupcall() {
        this.scrollView.scrollToTop(0.1);
        this.scrollView.enabled = true;
        this.view2.active = false;
        this.view3.color = new cc.Color(20, 32, 78);
    },

    //创建标准局
    standardButtonClick: function standardButtonClick() {

        var roomName = "我的MTT游戏";
        // //房间类型
        var roomType = Project.P9.DATA.GAME.P9RoomType.STD;
        // //房间选项参考P9RoomData.js中的P9STDGameData和P9MTTGameData的属性定义...
        var roomData = new Project.P9.DATA.ROOM.P9MTTGameData();
        Project.FWS.MSG.FWSMessageFactory.roomCreate(roomName, roomType, roomData).send();
    },

    //大小盲注记分牌Slider
    BlindSlidercall: function BlindSlidercall() {

        var percent = this.BlindSlider.progress;
        for (var a = 0; a < valuearray_SB_BB_EntryFee.length; a++) {

            var value_SB = valuearray_SB_BB_EntryFee[a].SB;
            var value_BB = valuearray_SB_BB_EntryFee[a].BB;
            var value_Entry = valuearray_SB_BB_EntryFee[a].EntryFee;
            if (a == 0) {
                if (percent < 1 / ((valuearray_SB_BB_EntryFee.length - 1) * 2)) {

                    this.sblabel.string = value_SB;
                    this.bblabel.string = value_BB;
                    this.scorecardlabel.string = value_Entry;
                }
            } else {
                if ((2 * (a - 1) + 1) / ((valuearray_SB_BB_EntryFee.length - 1) * 2) < percent && percent < (2 * a + 1) / ((valuearray_SB_BB_EntryFee.length - 1) * 2)) {

                    this.sblabel.string = value_SB;
                    this.bblabel.string = value_BB;
                    this.scorecardlabel.string = value_Entry;
                }

                //存储创建牌桌信息
                Project.P9.DATA.ROOM.P9STDGameData.sb = this.sblabel.string; //小盲
                Project.P9.DATA.ROOM.P9STDGameData.bb = this.bblabel.string; //大盲
                Project.P9.DATA.ROOM.P9STDGameData.enterChip = this.scorecardlabel.string; //记分牌

                cc.log(Project.P9.DATA.ROOM.P9STDGameData.sb, Project.P9.DATA.ROOM.P9STDGameData.bb, Project.P9.DATA.ROOM.P9STDGameData.enterChip);
            }
        }
    },
    PeopleNumberSlider1: function PeopleNumberSlider1() {

        var percent = this.PeopleNumberSlider.progress;
        for (var a = 0; a < valuearray_PlayerNum.length; a++) {

            var value_PlayerNum = valuearray_PlayerNum[a];
            cc.log(value_PlayerNum);
            if (a == 0) {
                if (percent < 1 / ((valuearray_PlayerNum.length - 1) * 2)) {

                    this.playernum = value_PlayerNum;
                }
            } else {
                if ((2 * (a - 1) + 1) / ((valuearray_PlayerNum.length - 1) * 2) < percent && percent < (2 * a + 1) / ((valuearray_PlayerNum.length - 1) * 2)) {

                    this.playernum = value_PlayerNum;
                }

                //存储创建牌桌信息
                Project.P9.DATA.ROOM.P9STDGameData.playerCount = this.playernum; //牌桌人数
                cc.log("人数：", Project.P9.DATA.ROOM.P9STDGameData.playerCount);
            }
        }
    },

    TimeSlider1: function TimeSlider1() {

        var percent = this.TimeSlider.progress;
        for (var a = 0; a < valuearray_PartyTime.length; a++) {

            var value_PlayerTime = valuearray_PartyTime[a];
            if (a == 0) {
                if (percent < 1 / ((valuearray_PartyTime.length - 1) * 2)) {

                    this.partytime = value_PlayerTime;
                }
            } else {
                if ((2 * (a - 1) + 1) / ((valuearray_PartyTime.length - 1) * 2) < percent && percent < (2 * a + 1) / ((valuearray_PartyTime.length - 1) * 2)) {

                    this.partytime = value_PlayerTime;
                }

                //存储创建牌桌信息
                Project.P9.DATA.ROOM.P9STDGameData.roomTime = this.partytime;

                cc.log("time", Project.P9.DATA.ROOM.P9STDGameData.roomTime);
            }
        }
    },

    AnteSlidercall: function AnteSlidercall() {
        var percent = this.AnteSlider.progress;
        for (var a = 0; a < valuearray_Ante.length; a++) {

            var value_PlayerAnte = valuearray_Ante[a];
            if (a == 0) {
                if (percent < 1 / ((valuearray_Ante.length - 1) * 2)) {

                    this.partyAnte = value_PlayerAnte;
                }
            } else {
                if ((2 * (a - 1) + 1) / ((valuearray_Ante.length - 1) * 2) < percent && percent < (2 * a + 1) / ((valuearray_Ante.length - 1) * 2)) {

                    this.partyAnte = value_PlayerAnte;
                }

                //存储创建牌桌信息
                Project.P9.DATA.ROOM.P9STDGameData.ante = this.partyAnte;

                cc.log("time", Project.P9.DATA.ROOM.P9STDGameData.ante);
            }
        }
    },

    DeepRaiseSlidercall: function DeepRaiseSlidercall() {
        var percent = this.DeepRaiseSlider.progress;
        for (var a = 0; a < valuearray_DeepRaise.length; a++) {

            var value_DeepRaise = valuearray_DeepRaise[a];
            if (a == 0) {
                if (percent < 1 / ((valuearray_DeepRaise.length - 1) * 2)) {

                    this.partyDeepRaise = value_DeepRaise;
                }
            } else {
                if ((2 * (a - 1) + 1) / ((valuearray_DeepRaise.length - 1) * 2) < percent && percent < (2 * a + 1) / ((valuearray_DeepRaise.length - 1) * 2)) {

                    this.partyDeepRaise = value_DeepRaise;
                }

                //存储创建牌桌信息
                Project.P9.DATA.ROOM.P9STDGameData.deepMode = this.partyDeepRaise;

                cc.log("time", Project.P9.DATA.ROOM.P9STDGameData.deepMode);
            }
        }
    },

    onFMessage_GetP9CreateSettingsSTDDataReq: function onFMessage_GetP9CreateSettingsSTDDataReq(msg) {
        msg.complete();

        var data = msg.args;
        //获取进度条进行几等分数据
        var length_SB_BB_EntryFee = data.SB_BB_EntryFee.length;
        var length_PlayerNum = data.PlayerNum.length;
        var length_PartyTime = data.PartyTime.length;
        var length_Ante = data.Ante.length;
        var length_DeepRaise = data.DeepRaise.length;

        //循环遍历SB_BB_EntryFee 并存入到数组中
        for (var i = 0; i < data.SB_BB_EntryFee.length; i++) {
            valuearray_SB_BB_EntryFee.push(data.SB_BB_EntryFee[i]);
        }
        //循环遍历PlayerNum
        for (var i = 0; i < length_PlayerNum; i++) {
            valuearray_PlayerNum.push(data.PlayerNum[i]);
            // 界面显示牌局人数

            var label = new cc.Node().addComponent(cc.Label);
            label.string = data.PlayerNum[i];
            label.fontSize = 20;
            var sliderlength = this.PeopleNumberSlider.node.getContentSize().width;
            var pointX = -(sliderlength / 2);
            var sliderpositionX = this.PeopleNumberSlider.node.getPositionX();
            var sliderpositionY = this.PeopleNumberSlider.node.getPositionY();
            label.node.setPosition(pointX + i * (sliderlength / (length_PlayerNum - 1)), sliderpositionY + 10);
            this.view1.addChild(label.node);
        }
        //循环遍历PartyTime
        for (var i = 0; i < data.PartyTime.length; i++) {
            valuearray_PartyTime.push(data.PartyTime[i]);

            var label = new cc.Node().addComponent(cc.Label);
            label.string = data.PartyTime[i];
            label.fontSize = 20;
            var sliderlength = this.TimeSlider.node.getContentSize().width;
            var pointX = -(sliderlength / 2);
            var sliderpositionX = this.TimeSlider.node.getPositionX();
            var sliderpositionY = this.TimeSlider.node.getPositionY();
            label.node.setPosition(pointX + i * (sliderlength / (data.PartyTime.length - 1)), sliderpositionY + 10);
            this.view1.addChild(label.node);
        }

        //循环遍历Ante
        for (var i = 0; i < data.Ante.length; i++) {
            valuearray_Ante.push(data.Ante[i]);

            var label = new cc.Node().addComponent(cc.Label);
            label.string = data.Ante[i];
            label.fontSize = 20;
            var sliderlength = this.AnteSlider.node.getContentSize().width;
            var pointX = -(sliderlength / 2);
            var sliderpositionX = this.AnteSlider.node.getPositionX();
            var sliderpositionY = this.AnteSlider.node.getPositionY();
            label.node.setPosition(pointX + i * (sliderlength / (data.Ante.length - 1)), sliderpositionY + 10);
            this.view2.addChild(label.node);
        }
        for (var i = 0; i < data.DeepRaise.length; i++) {

            valuearray_DeepRaise.push(data.DeepRaise[i]);

            var label = new cc.Node().addComponent(cc.Label);
            label.string = data.DeepRaise[i];
            label.fontSize = 20;
            var sliderlength = this.DeepRaiseSlider.node.getContentSize().width;
            var pointX = -(sliderlength / 2);
            var sliderpositionX = this.DeepRaiseSlider.node.getPositionX();
            var sliderpositionY = this.DeepRaiseSlider.node.getPositionY();
            label.node.setPosition(pointX + i * (sliderlength / (data.DeepRaise.length - 1)), sliderpositionY + 10);
            this.view2.addChild(label.node);
        }
    }

});

cc._RFpop();