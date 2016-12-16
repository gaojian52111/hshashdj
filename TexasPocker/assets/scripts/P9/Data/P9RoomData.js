/*
 * 九人桌的房间相关的特有数据结构
 * @Author: thor.liu 
 * @Date: 2016-12-03 13:26:13 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-08 19:57:20
 */


const P9RoomData = {};

const MVC = require("FWS_MVC");
const MODEL = require("FWS_MODEL");
const DATA = require("FWS_MODEL_DATA");

///标准局参数(STD)
P9RoomData.P9STDGameData = cc.Class({
    name: "P9STDGameData",
    extends: MODEL.FAbstractModel,
    ctor: function() {

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
            get: function() {
                return this.getValue("sb");
            },
            set: function(v) {
                this.setValue("sb", v);
            }
        },
        //大盲
        bb: {
            get: function() {
                return this.getValue("bb");
            },
            set: function(v) {
                this.setValue("bb", v);
            }
        },
        //带入记分牌
        enterChip: {
            get: function() {
                return this.getValue("enterChip");
            },
            set: function(v) {
                this.setValue("enterChip", v);
            }
        },
        //参与人数
        playerCount: {
            get: function() {
                return this.getValue("playerCount");
            },
            set: function(v) {
                this.setValue("playerCount", v);
            }
        },
        //牌局时长
        roomTime: {
            get: function() {
                return this.getValue("roomTime");
            },
            set: function(v) {
                this.setValue("roomTime", v);
            }
        },
        //授权
        authorize: {
            get: function() {
                return this.getValue("authorize");
            },
            set: function(v) {
                this.setValue("authorize", v);
            }
        },
        //保险开关
        safe: {
            get: function() {
                return this.getValue("safe");
            },
            set: function(v) {
                this.setValue("safe", v);
            }
        },
        //Ante
        ante: {
            get: function() {
                return this.getValue("ante");
            },
            set: function(v) {
                this.setValue("ante", v);
            }
        },
        //Straddle
        straddle: {
            get: function() {
                return this.getValue("straddle");
            },
            set: function(v) {
                this.setValue("straddle", v);
            }
        },
        //深筹模式
        deepMode: {
            get: function() {
                return this.getValue("deepMode");
            },
            set: function(v) {
                this.setValue("deepMode", v);
            }
        },
        //Allin 禁音
        allin: {
            get: function() {
                return this.getValue("allin");
            },
            set: function(v) {
                this.setValue("allin", v);
            }
        }
    }
});

//比赛局参数(SNG, MTT)
P9RoomData.P9MTTGameData = cc.Class({
    name: "P9MTTGameData",
    extends: MODEL.FAbstractModel,
    ctor: function() {

    },

    properties: {

        //单桌人数
        tablePlayerCount: {
            get: function() {
                return this.getValue("tablePlayerCount");
            },
            set: function(v) {
                this.setValue("tablePlayerCount", v);
            }
        },
        //速度
        speed: {
            get: function() {
                return this.getValue("speed");
            },
            set: function(v) {
                this.setValue("speed", v);
            }
        },
        //授权
        authorize: {
            get: function() {
                return this.getValue("authorize");
            },
            set: function(v) {
                this.setValue("authorize", v);
            }
        },
        //延时报名
        delayJoin: {
            get: function() {
                return this.getValue("delayJoin");
            },
            set: function(v) {
                this.setValue("delayJoin", v);
            }
        },
        //深筹模式
        deepMode: {
            get: function() {
                return this.getValue("deepMode");
            },
            set: function(v) {
                this.setValue("deepMode", v);
            }
        },

        //(MTT专用) 开赛时间
        startTime: {
            get: function() {
                return this.getValue("startTime");
            },
            set: function(v) {
                this.setValue("startTime", v);
            }
        },

        //(SNG专用) 参数人数
        maxPlayerCount: {
            get: function() {
                return this.getValue("maxPlayerCount");
            },
            set: function(v) {
                this.setValue("maxPlayerCount", v);
            }
        }
    }
});

//──────────────────────────────────────────────────────────

module.exports = P9RoomData;