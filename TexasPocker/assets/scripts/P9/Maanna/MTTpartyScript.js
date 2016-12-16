const MVC = require("FWS_MVC");
cc.Class({
    extends: MVC.FMessageConnection,
    properties: {

        scrollView: {
            default: null,
            type: cc.ScrollView

        },

        viewone: {
            default: null,
            type: cc.Node,
        },

        viewtwo: {
            default: null,
            type: cc.Node
        },

        viewthree: {
            default: null,
            type: cc.Node
        },

    },

    onLoad: function () {
        this.connect();
        // this.scrollView.enabled = false;

    },

    onDestory: function () {
        this.disconnect();
    },

    //高级设置
    moreoptioncall: function () {

        this.scrollView.enabled = true;
        this.viewtwo.active = true;
        this.scrollView.scrollToBottom(0.1);
        this.viewthree.color = new cc.Color(0, 0, 0);

    },

    //收起
    packupcall: function () {
        this.scrollView.scrollToTop(0.1);
        this.scrollView.enabled = true;
        this.viewtwo.active = false;
        this.viewthree.color = new cc.Color(20, 32, 78);
    },

    //创建MTT
    MTTButtonClick: function () {
        var msg = new MVC.FMessage("clickMTTButton", "createPartySet");
        msg.args.name = "创建MTT比赛";
        msg.send();

    },

});