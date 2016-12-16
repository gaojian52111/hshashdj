var MVC = require("FWS_MVC");

cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        //设置带入记分牌 文字
        titleLabel: {
            "default": null,
            type: cc.Label
        },
        //退出 按钮
        quitBtn: {
            "default": null,
            type: cc.Button
        },
        //滑动条
        slider: {
            "default": null,
            type: cc.Slider
        },
        //第一段 变色
        firstslider: {
            "default": null,
            type: cc.Sprite
        },
        //第二段 变色
        secondslider: {
            "default": null,
            type: cc.Sprite
        },
        //第三段 变色
        thirdslider: {
            "default": null,
            type: cc.Sprite
        },
        //带入数量 文字
        scoreLabel: {
            "default": null,
            type: cc.Label
        },
        //设置带入记分牌（小） 文字
        settakeinLabel: {
            "default": null,
            type: cc.Label
        },
        //最小带入 文字
        mintakein: {
            "default": null,
            type: cc.Label
        },
        //最大带入 文字
        maxtakein: {
            "default": null,
            type: cc.Label
        },
        //开启自动买入 文字
        openautobuyLabel: {
            "default": null,
            type: cc.Label
        },
        //开启自动买入 按钮
        openBtn: {
            "default": null,
            type: cc.Button
        },
        //自动买入变色背景
        openBtnbgSprite: {
            "default": null,
            type: cc.Sprite
        },
        //滑块
        circleSprite: {
            "default": null,
            type: cc.Sprite
        },
        //自动买入
        autobuysettingLayer: {
            "default": null,
            type: cc.Layout
        },
        //当我的计分板少于/等于 文字
        scoreless1Label: {
            "default": null,
            type: cc.Label
        },
        //个大盲注时 文字
        scoreless2Label: {
            "default": null,
            type: cc.Label
        },
        //系统自动为我补充 文字
        supplement1Label: {
            "default": null,
            type: cc.Label
        },
        //个buy-in 文字
        supplement2Label: {
            "default": null,
            type: cc.Label
        },
        //减号 按钮
        minusBtn: {
            "default": null,
            type: cc.Button
        },
        //加号 按钮
        addBtn: {
            "default": null,
            type: cc.Button
        },
        //补充buy-in数量
        buyincountLabel: {
            "default": null,
            type: cc.Label
        },
        //确定带入 按钮
        confirmtakeBtn: {
            "default": null,
            type: cc.Button
        },
        //确定带入 文字
        confirmtakeLabel: {
            "default": null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.connect();
    },
    onDestory: function onDestory() {
        this.disconnect();
    },
    //退出设置记分牌layer
    quitBtnclick: function quitBtnclick() {
        this.setscoreLayer.node.active = false;
    },
    //slider滑动
    sliderclick: function sliderclick() {
        cc.log("11111111111111111111111111111111111111111111");

        var index = this.slider.progress * 100;
        cc.log(index);

        var width = this.sliderbackground.node.width;
        cc.log(width);

        //四个位置的按钮动画
        var to0Action = cc.moveTo(0.1, cc.p(-width / 2, 0));
        var to33Action = cc.moveTo(0.1, cc.p(-width / 6, 0));
        var to67Action = cc.moveTo(0.1, cc.p(width / 6, 0));
        var to100Action = cc.moveTo(0.1, cc.p(width / 2, 0));

        var handle = this.slider.handle.node;

        //滑动区间判定
        if (index <= 0) {
            handle.runAction(to0Action);
        } else if (index > 100) {
            handle.runAction(to100Action);
        } else if (index > 0 && index <= 17) {
            handle.runAction(to0Action);
        } else if (index > 17 && index <= 50) {
            handle.runAction(to33Action);
        } else if (index > 50 && index <= 83) {
            handle.runAction(to67Action);
        } else if (index > 83 && index <= 100) {
            handle.runAction(to100Action);
        }
    },
    //自动买入按钮开启
    openBtnclick: function openBtnclick() {
        cc.log(openautobuy);
        cc.log("openBtnclick");

        var movewidth = this.circleSprite.node.width / 2;
        var leftmoveaction = cc.moveTo(0.2, cc.p(-movewidth, 0));
        var rightmoveaction = cc.moveTo(0.2, cc.p(movewidth, 0));

        var colorblue = new cc.Color(0, 112, 255);
        var colorgray = new cc.Color(111, 111, 111);

        if (openautobuy === false) {
            cc.log("openautobuy = " + openautobuy);

            this.autobuysettingLayer.node.active = true;

            this.openBtnbgSprite.node.color = colorblue;
            this.circleSprite.node.runAction(rightmoveaction);

            cc.log("发鬼地方", this.openBtnbgSprite.node.color);
            openautobuy = true;
        } else {
            cc.log("openautobuy = " + openautobuy);

            this.autobuysettingLayer.node.active = false;

            this.openBtnbgSprite.node.color = colorgray;

            this.circleSprite.node.runAction(leftmoveaction);

            // cc.log(this.openBtnbgSprite.node.color);

            cc.log("发鬼地方", this.openBtnbgSprite.node.color);
            openautobuy = false;
        }
    },
    //减号按钮点击
    minusBtnclick: function minusBtnclick() {},
    //加号按钮点击
    addBtnclick: function addBtnclick() {},
    //确定带入按钮点击
    confirmtakeBtnclick: function confirmtakeBtnclick() {}

});