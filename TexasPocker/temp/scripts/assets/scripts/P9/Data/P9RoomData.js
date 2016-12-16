"use strict";
cc._RFpush(module, '9b76bomBpVOr5zY2+5+Z3G2', 'P9RoomData');
// scripts/P9/Data/P9RoomData.js

/*
 * 九人桌的房间相关的特有数据结构
 * @Author: thor.liu 
 * @Date: 2016-12-03 13:26:13 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-08 19:57:20
 */

var P9RoomData = {};

var MVC = require("FWS_MVC");
var MODEL = require("FWS_MODEL");
var DATA = require("FWS_MODEL_DATA");

///标准局参数(STD)
P9RoomData.P9STDGameData = cc.Class({
    name: "P9STDGameData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {

        this.sb = 10;
        this.bb = 20;
        this.enterChip = 2000;
        this.playerCount = 9;
        this.roomTime = 2;
        this.authorize = false;
        this.safe = false;
        this.ante = 0;
        this.straddle = 0;
        this.deepMode = 0;
        this.allin = false;
    },

    properties: {
        //小盲
        sb: {
            get: function get() {
                return this.getValue("sb");
            },
            set: function set(v) {
                this.setValue("sb", v);
            }
        },
        //大盲
        bb: {
            get: function get() {
                return this.getValue("bb");
            },
            set: function set(v) {
                this.setValue("bb", v);
            }
        },
        //带入记分牌
        enterChip: {
            get: function get() {
                return this.getValue("enterChip");
            },
            set: function set(v) {
                this.setValue("enterChip", v);
            }
        },
        //参与人数
        playerCount: {
            get: function get() {
                return this.getValue("playerCount");
            },
            set: function set(v) {
                this.setValue("playerCount", v);
            }
        },
        //牌局时长
        roomTime: {
            get: function get() {
                return this.getValue("roomTime");
            },
            set: function set(v) {
                this.setValue("roomTime", v);
            }
        },
        //授权
        authorize: {
            get: function get() {
                return this.getValue("authorize");
            },
            set: function set(v) {
                this.setValue("authorize", v);
            }
        },
        //保险开关
        safe: {
            get: function get() {
                return this.getValue("safe");
            },
            set: function set(v) {
                this.setValue("safe", v);
            }
        },
        //Ante
        ante: {
            get: function get() {
                return this.getValue("ante");
            },
            set: function set(v) {
                this.setValue("ante", v);
            }
        },
        //Straddle
        straddle: {
            get: function get() {
                return this.getValue("straddle");
            },
            set: function set(v) {
                this.setValue("straddle", v);
            }
        },
        //深筹模式
        deepMode: {
            get: function get() {
                return this.getValue("deepMode");
            },
            set: function set(v) {
                this.setValue("deepMode", v);
            }
        },
        //Allin 禁音
        allin: {
            get: function get() {
                return this.getValue("allin");
            },
            set: function set(v) {
                this.setValue("allin", v);
            }
        }
    }
});

//比赛局参数(SNG, MTT)
P9RoomData.P9MTTGameData = cc.Class({
    name: "P9MTTGameData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {},

    properties: {

        //单桌人数
        tablePlayerCount: {
            get: function get() {
                return this.getValue("tablePlayerCount");
            },
            set: function set(v) {
                this.setValue("tablePlayerCount", v);
            }
        },
        //速度
        speed: {
            get: function get() {
                return this.getValue("speed");
            },
            set: function set(v) {
                this.setValue("speed", v);
            }
        },
        //授权
        authorize: {
            get: function get() {
                return this.getValue("authorize");
            },
            set: function set(v) {
                this.setValue("authorize", v);
            }
        },
        //延时报名
        delayJoin: {
            get: function get() {
                return this.getValue("delayJoin");
            },
            set: function set(v) {
                this.setValue("delayJoin", v);
            }
        },
        //深筹模式
        deepMode: {
            get: function get() {
                return this.getValue("deepMode");
            },
            set: function set(v) {
                this.setValue("deepMode", v);
            }
        },

        //(MTT专用) 开赛时间
        startTime: {
            get: function get() {
                return this.getValue("startTime");
            },
            set: function set(v) {
                this.setValue("startTime", v);
            }
        },

        //(SNG专用) 参数人数
        maxPlayerCount: {
            get: function get() {
                return this.getValue("maxPlayerCount");
            },
            set: function set(v) {
                this.setValue("maxPlayerCount", v);
            }
        }
    }
});

//──────────────────────────────────────────────────────────

module.exports = P9RoomData;

cc._RFpop();