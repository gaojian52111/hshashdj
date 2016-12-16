var MVC = require("FWS_MVC");
var Project = require("Project");
var P9RoomData = require("P9RoomData");
var P9CreateSettings = require("P9CreateSettings");

var SingleDeskPlayerNum = [];
var Speedvalue = [];

var singleseskplayernum;
var speedtype;

cc.Class({
    "extends": MVC.FMessageConnection,
    properties: {

        scrollView: {
            "default": null,
            type: cc.ScrollView

        },
        pageView: {
            "default": null,
            type: cc.pageView
        },
        viewone: {
            "default": null,
            type: cc.Node
        },
        viewtwo: {
            "default": null,
            type: cc.Node
        },
        viewthree: {
            "default": null,
            type: cc.Node
        },
        playercountSlider: {
            "default": null,
            type: cc.Slider

        },
        speedSlider: {
            "default": null,
            type: cc.Slider

        }

    },

    onLoad: function onLoad() {
        this.connect();
        // this.scrollView.enabled = false;

        var gamedatamsg = new MVC.FMessage("GetP9CreateSettingsSNGAck", "root");
        gamedatamsg.send();
    },
    onDestory: function onDestory() {
        this.disconnect();
    },

    //高级设置
    moreoptioncall: function moreoptioncall() {

        this.scrollView.enabled = true;
        this.viewtwo.active = true;
        this.scrollView.scrollToBottom(0.1);
        this.viewthree.color = new cc.Color(0, 0, 0);
    },
    //收起
    packupcall: function packupcall() {
        this.scrollView.scrollToTop(0.1);
        this.scrollView.enabled = true;
        this.viewtwo.active = false;
        this.viewthree.color = new cc.Color(20, 32, 78);
    },
    //创建SNG
    SNGButtonClick: function SNGButtonClick() {
        var msg = new MVC.FMessage("clickSNGButton", "createPartySet");
        msg.args.name = "创建SNG比赛";
        msg.send();
    },
    //创建MTT
    MTTButtonClick: function MTTButtonClick() {
        var msg = new MVC.FMessage("clickMTTButton", "createPartySet");
        msg.args.name = "创建MTT比赛";
        msg.send();
    },

    onFMessage_GetP9CreateSettingsSNGReq: function onFMessage_GetP9CreateSettingsSNGReq(msg) {
        msg.complete();
        var data = msg.args;

        //循环遍历PlayerNum
        for (var i = 0; i < data.SingleDeskPlayerNum.length; i++) {
            SingleDeskPlayerNum.push(data.SingleDeskPlayerNum[i]);
            // 界面显示牌局人数

            var label = new cc.Node().addComponent(cc.Label);
            label.string = data.SingleDeskPlayerNum[i];
            label.fontSize = 20;
            var sliderlength = this.playercountSlider.node.getContentSize().width;
            var pointX = -(sliderlength / 2);
            var sliderpositionX = this.playercountSlider.node.getPositionX();
            var sliderpositionY = this.playercountSlider.node.getPositionY();
            label.node.setPosition(pointX + i * (sliderlength / (data.SingleDeskPlayerNum.length - 1)), sliderpositionY + 10);
            this.viewone.addChild(label.node);
        }

        for (var i = 0; i < data.Speed.length; i++) {
            Speedvalue.push(data.Speed[i]);
            // 界面显示牌局人数

            var label = new cc.Node().addComponent(cc.Label);
            label.string = data.Speed[i].SpeedName;
            cc.log("speed.....", label.string);
            label.fontSize = 20;
            var sliderlength = this.speedSlider.node.getContentSize().width;
            var pointX = -(sliderlength / 2);
            var sliderpositionX = this.speedSlider.node.getPositionX();
            var sliderpositionY = this.speedSlider.node.getPositionY();
            label.node.setPosition(pointX + i * (sliderlength / (data.Speed.length - 1)), sliderpositionY + 10);
            this.viewone.addChild(label.node);
        }
    },
    playercountSlidercall: function playercountSlidercall() {

        var percent = this.playercountSlider.progress;
        for (var a = 0; a < SingleDeskPlayerNum.length; a++) {

            var singleDeskPlayerNum = SingleDeskPlayerNum[a];
            if (a == 0) {
                if (percent < 1 / ((SingleDeskPlayerNum.length - 1) * 2)) {

                    this.singleseskplayernum = singleDeskPlayerNum;
                }
            } else {
                if ((2 * (a - 1) + 1) / ((SingleDeskPlayerNum.length - 1) * 2) < percent && percent < (2 * a + 1) / ((SingleDeskPlayerNum.length - 1) * 2)) {

                    this.singleseskplayernum = singleDeskPlayerNum;
                }

                //存储创建牌桌信息
                Project.P9.DATA.ROOM.P9MTTGameData.tablePlayerCount = this.singleseskplayernum;

                cc.log("renshu", Project.P9.DATA.ROOM.P9MTTGameData.tablePlayerCount);
            }
        }
    },

    speedSlidercall: function speedSlidercall() {

        var percent = this.speedSlider.progress;
        for (var a = 0; a < Speedvalue.length; a++) {

            var speed = Speedvalue[a];
            if (a == 0) {
                if (percent < 1 / ((SingleDeskPlayerNum.length - 1) * 2)) {

                    this.speedtype = speed;
                }
            } else {
                if ((2 * (a - 1) + 1) / ((SingleDeskPlayerNum.length - 1) * 2) < percent && percent < (2 * a + 1) / ((SingleDeskPlayerNum.length - 1) * 2)) {

                    this.speedtype = speed;
                }

                //存储创建牌桌信息
                Project.P9.DATA.ROOM.P9MTTGameData.speed = this.speedtype;

                cc.log("renshu", Project.P9.DATA.ROOM.P9MTTGameData.speed);
            }
        }
    }

});