var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        // blindresult:0,

        bg: {
            "default": null,
            type: cc.Sprite
        },

        Sliderone: {
            "default": null,
            type: cc.Slider
        },
        //小盲大盲
        blindlabel: {
            "default": null,
            type: cc.Label
        },
        //带入记分牌
        scorecardlabel: {
            "default": null,
            type: cc.Label
        }

    },

    onLoad: function onLoad() {
        this.connect();
    },
    onDestory: function onDestory() {
        this.disconnect();
    },

    //高级选项
    moreoption: function moreoption() {

        // var winSizeW=this.node.getContentSize().height*0.3;
        // var moveup = cc.moveBy(0.1, cc.p(0, winSizeW));
        // this.bg.node.runAction(moveup);

    },

    //创建标准局
    standardButtonClick: function standardButtonClick() {

        var msg = new MVC.FMessage("clickstandardButton", "createPartySet");
        msg.args.name = "创建标准牌局";
        // msg.args.blind = this.blindValue.get();
        msg.send();
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

    Buyshouquan: function Buyshouquan() {
        var msg = new MVC.FMessage("clickbuyshouquan", "party");
        msg.args.name = "创建MTT比赛";
        msg.send();
    },

    //第一个Slider 大小盲注 带入记分牌
    BlindSlider: function BlindSlider() {

        var percent = this.Sliderone.progress;

        if (1 / 6 < percent && percent < 2 / 6) {
            this.blindlabel.string = '2/4';
            this.scorecardlabel.string = '400';
        }
        if (2 / 6 < percent && percent < 3 / 6) {
            this.blindlabel.string = '4/8';
            this.scorecardlabel.string = '1000';
        }
        if (3 / 6 < percent && percent < 4 / 6) {
            this.blindlabel.string = '5/10';
            this.scorecardlabel.string = '2000';
        }
        if (4 / 6 < percent && percent < 5 / 6) {
            this.blindlabel.string = '10/20';
            this.scorecardlabel.string = '5000';
        }
        if (5 / 6 < percent && percent < 1) {
            this.blindlabel.string = '25/50';
            this.scorecardlabel.string = '10000';
        }

        //   this.blindresult=this.blindlabel.string;
        //   this.blindValue.set(blindresult);
    },
    //参与人数Slider
    PeopleNumberSlider: function PeopleNumberSlider() {},
    //牌局时长
    TimeSlider: function TimeSlider() {}

});
// use this for initialization