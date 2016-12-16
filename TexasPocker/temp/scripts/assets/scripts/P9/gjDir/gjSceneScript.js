"use strict";
cc._RFpush(module, '241a78ZCXVBvJpZEFtgZTzs', 'gjSceneScript');
// scripts/P9/gjDir/gjSceneScript.js

var MVC = require("FWS_MVC");
var jiarunum;
var shangzhuonum;
cc.Class({
    "extends": MVC.FMessageConnection,
    properties: {
        spr: {
            "default": null,
            type: cc.Sprite
        },
        sPrefab: {
            "default": null,
            type: cc.Prefab
        },
        jiaru: {
            "default": null,
            type: cc.Button
        },
        shangzhuo: {
            "default": null,
            type: cc.Button
        },
        scrollView: {
            "default": null,
            type: cc.ScrollView
        },
        speed: 1,
        horizontalBar: {
            type: cc.ProgressBar,
            "default": null
        },
        BarNum: {
            "default": null,
            type: cc.Label
        },
        seatNum: 9,
        leftPositionX: -310,
        rightPositionX: 310,
        upPositionX_shuangl: -151,
        upPositionX_shuangr: 151,
        upPositionX_dan: 0,
        upPositionY: 527,
        downPositionX: 0,
        downPositionY: -480,
        upMaxPosition: 310,
        downMaxPosition: -170,
        lookOnNum: 0,
        playNum: 0,
        upBedTableMax: 215,
        downBedTableMax: 115

    },
    clickjiaru: function clickjiaru() {
        jiarunum++;
        this.setLookOn();
        cc.log(this.scrollView.content);
    },
    clickshangzhuo: function clickshangzhuo() {
        if (jiarunum > 0) {
            jiarunum--;
            shangzhuonum++;
        }
        cc.log("clickshangzhuo");
    },
    setLookOn: function setLookOn() {
        var her = cc.instantiate(this.sPrefab);
        her.setPositionY(0);
        this.scrollView.content.addChild(her);
    },
    // use this for initialization
    onLoad: function onLoad() {

        var dt = 15;
        this.schedule(function () {
            dt -= 0.1;
            this._updateProgressBar(this.horizontalBar, dt);
        }, 0.1, 140);

        this._pingpong = true;
        var s = cc.director.getVisibleSize();
        cc.log(s);
        jiarunum = this.lookOnNum;
        shangzhuonum = this.playNum;
        for (var i = 0; i < shangzhuonum; i++) {
            var newStar = cc.instantiate(this.sPrefab);
            // 将新增的节点添加到 Canvas 节点下面
            this.node.addChild(newStar);
            // 为星星设置一个随机位置
            cc.log(i);
            cc.log(this.setBedTable(i));
            newStar.setPosition(this.setBedTable(i));
        }
        this.newSeat();
        this.connect();
        // var pro = CCProgressTimer.argscreate(this.spr);
        //     pro.setType(kCCProgressTimerTypeRadial);
        //     pro.setPercentage(0);
    },
    onDestory: function onDestory() {

        this.disconnect();
    },
    newSeat: function newSeat() {
        for (var i = 0; i < this.seatNum; i++) {
            var newStar = cc.instantiate(this.sPrefab);
            // 将新增的节点添加到 Canvas 节点下面
            this.node.addChild(newStar);
            // 为星星设置一个随机位置
            newStar.setPosition(this.setSeatPosition(i));
        }
        // // 将 Game 组件的实例传入星星组件
        // newStar.getComponent('Star').game = this;
    },
    setSeatPosition: function setSeatPosition(i) {
        var pX = 0;
        var pY = 0;
        if (this.seatNum % 2 == 0) {
            cc.log("第一个");
            if (i == this.seatNum / 2 || i == 0) {
                pX = this.downPositionX;

                if (i == 0) {
                    pY = this.downPositionY;
                } else {
                    pY = this.upPositionY;
                }
            } else if (i > 0 && i < this.seatNum / 2) {
                pX = this.rightPositionX;
                pY = (this.upMaxPosition - this.downMaxPosition) / (this.seatNum / 2) * i + this.downMaxPosition;
            } else {
                pX = this.leftPositionX;
                pY = (this.upMaxPosition - this.downMaxPosition) / (this.seatNum / 2) * (this.seatNum - i) + this.downMaxPosition;
            }
        } else if (this.seatNum % 2 == 1) {
            cc.log("第二个");
            if (i == 0) {
                cc.log("i=0");
                pX = this.downPositionX;
                pY = this.downPositionY;
            } else if (i < this.seatNum / 2 + 1 && i > this.seatNum / 2 - 1) {
                if (i < this.seatNum / 2) {
                    pX = this.upPositionX_shuangr;
                } else {
                    pX = this.upPositionX_shuangl;
                }
                pY = this.upPositionY;
            } else if (i > 0 && i < this.seatNum / 2 - 1) {
                cc.log("i=zuo");
                pX = this.rightPositionX;
                pY = (this.upMaxPosition - this.downMaxPosition) / (this.seatNum / 2) * i + this.downMaxPosition;
            } else {
                cc.log("i=you");
                pX = this.leftPositionX;
                pY = (this.upMaxPosition - this.downMaxPosition) / (this.seatNum / 2) * (this.seatNum - i) + this.downMaxPosition;
            }
        }
        // cc.log("x",pX);
        // cc.log("y",pY);
        return cc.p(pX, pY);
    },
    setBedTable: function setBedTable(i) {
        var winSizeX = cc.director.getVisibleSize().width;
        var winSizeY = cc.director.getVisibleSize().height;
        var BedTableXD = winSizeX / 8;
        var BedTableXS = winSizeX / 9;

        var pX = 0;
        var pY = 0;
        if (shangzhuonum % 2 == 0) {
            switch (shangzhuonum) {
                case 2:
                    pX = -BedTableXD / 2 + BedTableXD * i;
                    pY = this.setY(2, i);
                    break;
                case 4:
                    pX = -BedTableXD * 3 / 2 + BedTableXD * i;
                    pY = this.setY(4, i);
                    break;
                case 6:
                    pX = -BedTableXD * 5 / 2 + BedTableXD * i;
                    pY = this.setY(6, i);
                    break;
                case 8:
                    pX = -BedTableXD * 7 / 2 + BedTableXD * i;
                    pY = this.setY(8, i);
                    break;
            }
        } else {
            switch (shangzhuonum) {
                case 1:
                    pX = BedTableXS * i;
                    pY = this.setY(1, i);
                    break;
                case 3:
                    pX = -BedTableXS * 3 / 2 + BedTableXS * i;
                    pY = this.setY(3, i);
                    break;
                case 5:
                    pX = -BedTableXS * 5 / 2 + BedTableXS * i;
                    pY = this.setY(5, i);
                    break;
                case 7:
                    pX = -BedTableXS * 7 / 2 + BedTableXS * i;
                    pY = this.setY(7, i);
                    break;
                case 9:
                    pX = -BedTableXS * 9 / 2 + BedTableXS * i;
                    pY = this.setY(9, i);
                    break;
            }
        }
        return cc.p(pX, pY);
    },
    clicksignUpButton: function clicksignUpButton() {
        var msg = new MVC.FMessage("MTTSNGclicksignUpButton", "room");
        msg.args.name = "MTTSNGclicksignUpButton进入倒计时";
        msg.send();
        cc.log("clicksignUpButton");
    },

    setY: function setY(num, i) {
        var BedTableY = 20;
        var up_maxH = 115;
        var y = 0;
        var Y = new Array();
        Y[0] = up_maxH + BedTableY * 0;
        Y[1] = up_maxH + BedTableY * 1 - 10;
        Y[2] = up_maxH + BedTableY * 2 - 15;
        Y[3] = up_maxH + BedTableY * 3 - 10;
        Y[4] = up_maxH + BedTableY * 4;
        // for(var j = 0 ; j <5 ;j++){
        //         Y[j]=up_maxH+BedTableY*j;
        // }
        switch (num) {
            case 1:
                y = Y[0];
                break;
            case 2:
                y = Y[1];
                break;
            case 3:
                if (i == 1) {
                    y = Y[0];
                } else {
                    y = Y[1];
                }
                break;
            case 4:
                if (i == 0 || i == 3) {
                    y = Y[2];
                } else {
                    y = Y[1];
                }
                break;
            case 5:
                if (i == 0 || i == 4) {
                    y = Y[2];
                } else if (i == 1 || i == 3) {
                    y = Y[1];
                } else {
                    y = Y[0];
                }
                break;
            case 6:
                if (i == 0 || i == 5) {
                    y = Y[3];
                } else if (i == 1 || i == 4) {
                    y = Y[2];
                } else {
                    y = Y[1];
                }
                break;
            case 7:
                if (i == 0 || i == 6) {
                    y = Y[3];
                } else if (i == 1 || i == 5) {
                    y = Y[2];
                } else if (i == 2 || i == 4) {
                    y = Y[1];
                } else {
                    y = Y[0];
                }
                break;
            case 8:
                if (i == 0 || i == 7) {
                    y = Y[4];
                } else if (i == 1 || i == 6) {
                    y = Y[3];
                } else if (i == 2 || i == 5) {
                    y = Y[2];
                } else {
                    y = Y[1];
                }
                break;
            case 9:

                if (i == 0 || i == 8) {
                    y = Y[4];
                } else if (i == 1 || i == 7) {
                    y = Y[3];
                } else if (i == 2 || i == 6) {
                    y = Y[2];
                } else if (i == 3 || i == 5) {
                    cc.log(num);
                    y = Y[1];
                } else {
                    y = Y[0];
                }
                break;
        }
        // cc.log(y);
        return y;
    },
    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        //this._updateProgressBar(this.horizontalBar, dt);
    },
    _updateProgressBar: function _updateProgressBar(progressBar, dt) {
        var progress = progressBar.progress;
        //var progress = 1;
        if (progress < 1.0 && this._pingpong) {
            // progress += dt * this.speed;
            progress += 0.0071;
        } else {
            // progress -= dt * this.speed;
            progress -= 0.0071;
            this._pingpong = progress <= 0;
        }
        cc.log(progress);
        if (progress) {}
        // this.BarNum.string=parseInt(progress*10);
        this.BarNum.string = parseInt(dt);
        progressBar.progress = progress;
    }
});

cc._RFpop();