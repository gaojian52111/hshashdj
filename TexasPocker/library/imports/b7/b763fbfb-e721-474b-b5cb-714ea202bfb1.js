var MVC = require("FWS_MVC");
var MathUtility = require("MathUtility");
cc.Class({
    "extends": MVC.FMessageConnection,

    properties: {
        //头像按钮
        AvatarButton: {
            "default": null,
            type: cc.Button
        },
        //空位文字
        kong: {
            "default": null,
            type: cc.Label
        },
        //倒计时的背景
        barBg: {
            "default": null,
            type: cc.Sprite
        },
        //倒计时的圈
        progressBar: {
            "default": null,
            type: cc.ProgressBar
        },
        //头像的载体
        Avatar: {
            "default": null,
            type: cc.Sprite
        },
        //名字的载体
        nameLabel: {
            "default": null,
            type: cc.Label
        },
        //房主的标记点
        dian: {
            "default": null,
            type: cc.Sprite
        },
        //圆形的节点
        mask: {
            "default": null,
            type: cc.Mask
        },
        //弃牌的背景
        qipaiBg: {
            "default": null,
            type: cc.Sprite
        },
        //弃牌的文字
        qiPaiLabel: {
            "default": null,
            type: cc.Label
        },
        //倒计时时半透明的灰色遮罩
        shadow: {
            "default": null,
            type: cc.Sprite
        },
        //倒计时的文字
        BarNum: {
            "default": null,
            type: cc.Label
        }
    },

    onLoad: function onLoad() {
        cc.log("schedule回调调用了");

        // var kk = new MathUtility();
        // this.BarNum.node.setPosition(cc.p(20,30));
        // this.Avatar.node.setPosition(cc.p(40,50));
        // var ss=kk.GetAngle(cc.p(-317,233),cc.p(317,233));
        // cc.log("我的天哪",ss);
        this.connect();
        //this.initTypeLocation();
    },
    onDestory: function onDestory() {
        cc.log("wo bei shan chu le ");
        this.disconnect();
    },
    //初始化
    initType: function initType() {
        this.AvatarButton.node.active = true;
        this.kong.node.active = true;
        this.barBg.node.active = true;
        this.progressBar.node.active = true;
        this.Avatar.node.active = true;
        this.nameLabel.node.active = true;
        this.dian.node.active = true;
        this.mask.node.active = true;
        this.qipaiBg.node.active = true;
        this.qiPaiLabel.node.active = true;
        this.shadow.node.active = true;
        this.BarNum.node.active = true;
    },
    //加入牌局时候的初始化
    initTypeJoinParty: function initTypeJoinParty() {
        cc.log("wanawdasjdkhaskdjha");
        //缩小
        this.AvatarButton.node.scale = 0.8;
        this.mask.node.active = false;
        this.nameLabel.node.active = false;
        this.barBg.node.active = false;
    },
    //上桌时候的初始化
    initTypeServe: function initTypeServe() {
        this.mask.node.active = false;
        this.nameLabel.node.active = false;
        this.barBg.node.active = false;
    },
    //空座位的初始化
    initTypeNull: function initTypeNull() {
        this.barBg.node.active = false;
        this.Avatar.node.active = false;
    },
    //倒计时时的初始化
    initTypeProgressBar: function initTypeProgressBar() {
        this.dian.node.active = false;
        this.qipaiBg.node.active = false;
    },
    //弃牌时的初始化
    initTypeChess: function initTypeChess() {
        this.barBg.node.active = false;
        this.dian.node.active = false;
        this.shadow.node.active = false;
    },
    //定座（正常行牌）时的初始化
    initTypeLocation: function initTypeLocation() {
        this.barBg.node.active = false;
        this.dian.node.active = false;
        this.mask.node.active = false;
    },
    click: function click() {
        cc.log("sadasdasda");
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {
    onFMessage_Avatar: function onFMessage_Avatar(msg) {
        if (msg.args.name == this.node.name) {
            if (msg.args.name == "initTypeLocation") {
                this.initType();
                this.initTypeLocation();
            }
            if (msg.args.name == "initTypeChess") {
                this.initType();
                this.initTypeChess();
            }
            if (msg.args.name == "initTypeProgressBar") {
                this.initType();
                this.initTypeProgressBar();
                this.kaqidingshiqi();
            }
            if (msg.args.name == "initTypeNull") {
                this.initType();
                this.initTypeNull();
            }
            if (msg.args.name == "initTypeServe") {
                this.initType();
                this.initTypeServe();
            }
            if (msg.args.name == "initTypeJoinParty") {
                this.initType();
                this.initTypeJoinParty();
            }
            msg.complete();
        }
    },
    _updateProgressBar: function _updateProgressBar(progressBar, dt) {
        cc.log("回调调用了");
        var progress = progressBar.progress;
        //var progress = 1;
        if (progress < 1.0 && this._pingpong) {
            cc.log("回调调用了11111");
            // progress += dt * this.speed;
            progress += 0.0071;
        } else {
            cc.log("回调调用了22222");
            // progress -= dt * this.speed;
            progress -= 0.0071;
            this._pingpong = progress <= 0;
        }
        // this.BarNum.string=parseInt(progress*10);
        this.BarNum.string = parseInt(dt);
        progressBar.progress = progress;
    },
    kaqidingshiqi: function kaqidingshiqi() {
        var dt = 15;
        this._pingpong = true;
        this.schedule(function () {
            cc.log("schedule回调调用了");
            dt -= 0.1;
            this._updateProgressBar(this.progressBar, dt);
        }, 0.1, 140);
    }

});