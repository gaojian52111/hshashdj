/*
 * 公共数据结构定义 
 * @Author: thor.liu 
 * @Date: 2016-12-05 19:09:15 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-13 18:45:19
 */
const FWS_MODEL = require("FWS_MODEL");
const FWS_MODEL_DATA = {};

//──────────────────────────────────────────────────────────

/**
 * 数据模型对象接口
 */
FWS_MODEL_DATA.IFModelFactory = cc.Class({
    name: "IFModelFactory",
    ctor: function () {
        this._type = null;
    },
    createById: function (id) {
        return null;
    },
    create: function () {
        if (this._type) {
            return new this._type();
        }
        return null;
    },
    reset: function (obj) { }
});

FWS_MODEL_DATA.FEntityFactory = cc.Class({
    name: "FEntityFactory",
    extends: FWS_MODEL_DATA.IFModelFactory,

    ctor: function () {
        this._pool = new Object();
        this._type = null;
    },

    createById: function (id) {
        if (this._pool[id]) return this._pool[id];
        var ret = this.create();
        ret.id = id;
        this._pool[id] = ret;
        return ret;
    },
});


/**
 * 用户对象工厂类
 */
FWS_MODEL_DATA.FUserFactory = cc.Class({
    name: "FUserFactory",
    extends: FWS_MODEL_DATA.FEntityFactory,
    ctor: function () {
        this._type = require("FWS_MODEL_DATA").FUser;
    }
});

/**
 * 玩家对象工厂类
 */
FWS_MODEL_DATA.FPlayerFactory = cc.Class({
    name: "FPlayerFactory",
    extends: FWS_MODEL_DATA.IFModelFactory,
    ctor: function () {
        this._type = require("FWS_MODEL_DATA").FPlayer;
    }
});

/**
 * 游戏对象工厂类
 */
FWS_MODEL_DATA.FGameFactory = cc.Class({
    name: "FGameFactory",
    extends: FWS_MODEL_DATA.FEntityFactory,
    ctor: function () {
        this._type = require("FWS_MODEL_DATA").FGame;
    }
});

/**
 * 游戏桌对象工厂类
 */
FWS_MODEL_DATA.FGameTableFactory = cc.Class({
    name: "FGameTableFactory",
    extends: FWS_MODEL_DATA.IFModelFactory,
    ctor: function () {
        this._type = require("FWS_MODEL_DATA").FGameTable;
    }
});

/**
 * 游戏局对象工厂类
 */
FWS_MODEL_DATA.FGameRoundFactory = cc.Class({
    name: "FGameRoundFactory",
    extends: FWS_MODEL_DATA.IFModelFactory,
    ctor: function () {
        this._type = require("FWS_MODEL_DATA").FGameRound;
    }
});

//──────────────────────────────────────────────────────────

/**
 * 用户对象: 表示一个用户的信息
 */
FWS_MODEL_DATA.FUser = cc.Class({ 
    name: "FUser",
    extends: require("FWS_MODEL").FAbstractModel,

    ctor: function () {
        this.setValue("data", new Object());
    },

    statics: {
        factory: new FWS_MODEL_DATA.FUserFactory()
    },

    reset: function () {
        return FWS_MODEL_DATA.FUser.factory.reset(this);
    },

    properties: {
        /**
         * 用户id
         */
        id: {
            get: function () {
                return this.getValue("id");
            },
            set: function (v) {
                this.setValue("id", v);
            }
        },
        /**
         * 用户的显示信息(名称,头像等内容) 
         */
        display: {
            get: function () {
                return this.getValue("display");
            },
            set: function (v) {
                this.setValue("display", v);
            }
        },
        /**
         * 用户数据
         */
        data: {
            get: function () {
                return this.getValue("data");
            },
            set: function (v) {
                this.setValue("data", v);
            }
        }
    }
});

/**
 * 玩家对象: 表示一个游戏玩家的信息
 */
FWS_MODEL_DATA.FPlayer = cc.Class({
    name: "FPlayer",
    extends: FWS_MODEL.FAbstractModel,

    ctor: function () {
        this.setValue("data", new Object());
    },

    statics: {
        factory: new FWS_MODEL_DATA.FPlayerFactory()
    },

    reset: function () {
        return FWS_MODEL_DATA.FPlayer.factory.reset(this);
    },

    properties: {
        user: {
            get: function () {
                return this.getValue("user");
            },
            set: function (v) {
                this.setValue("user", v);
            }
        },
        data: {
            get: function () {
                return this.getValue("data");
            },
            set: function (v) {
                this.setValue("data", v);
            }
        }
    }
});

/**
 * 游戏对象: 表示一个游戏的信息
 */
FWS_MODEL_DATA.FGame = cc.Class({
    name: "FGame",
    extends: FWS_MODEL.FAbstractModel,

    ctor: function () {
        this.setValue("data", new Object());
    },

    statics: {
        factory: new FWS_MODEL_DATA.FGameFactory()
    },

    reset: function () {
        return FWS_MODEL_DATA.FGame.factory.reset(this);
    },

    properties: {

        //游戏房间id
        id: {
            get: function () {
                return this.getValue("id");
            },
            set: function (v) {
                this.setValue("id", v);
            }
        },

        //游戏房间名称
        name: {
            get: function () {
                return this.getValue("name");
            },
            set: function (v) {
                this.setValue("name", v);
            }
        },

        //游戏类型 (九人桌? 麻将? 别的?)
        gameType: {
            get: function () {
                return this.getValue("gameType");
            },
            set: function (v) {
                this.setValue("gameType", v);
            }
        },

        //游戏房间类型 (std/sng/mtt ?)
        roomType: {
            get: function () {
                return this.getValue("roomType");
            },

            set: function (v) {
                this.setValue("roomType", v);
            }
        },

        //房间所属者类型 (官方? 玩家自建? 合作方?)
        ownerType: {
            get: function () {
                return this.getValue("ownerType");
            },
            set: function (v) {
                this.setValue("ownerType", v);
            }
        },

        //房主的用户信息
        ownerUser: {
            get: function () {
                return this.getValue("ownerUser");
            },
            set: function (v) {
                this.setValue("ownerUser", v);
            }
        },

        //邀请码
        code: {
            get: function () {
                return this.getValue("code");
            },
            set: function (v) {
                this.setValue("code", v);
            }
        },

        data: {
            get: function () {
                return this.getValue("data");
            },
            set: function (v) {
                this.setValue("data", v);
            }
        }
    }
});

/**
 * 游戏桌对象: 表示一桌游戏的信息
 */
FWS_MODEL_DATA.FGameTable = cc.Class({
    name: "FGameTable",
    extends: FWS_MODEL.FAbstractModel,

    ctor: function () {
        this.setValue("data", new Object());
        this.setValue("seats", new FWS_MODEL.FDict());
        this.setValue("currentPlayerSeat", -1);
        this.setValue("watchers", new FWS_MODEL.FArray());
    },

    statics: {
        factory: new FWS_MODEL_DATA.FGameTableFactory()
    },

    reset: function () {
        return FWS_MODEL_DATA.FGameTable.factory.reset(this);
    },

    //找桌上找指定的uid, 并返回座位号
    findPlayerOnSeats: function (uid) {
        var keys = this.seats.keys();
        for (var i = 0; i < keys.length; i++) {
            var k = this.keys[i];
            if (k) {
                var p = this.seats.getValue(k);
                if (p) {
                    if (p.user && p.user.id == uid) {
                        return k;
                    }
                }
            }
        }
        return -1;
    },

    //在旁观列表找指定的uid, 并返回座位号
    findPlayerOnWatchers: function (uid) {
        for (var i = 0; i < this.watchers.length; i++) {
            var p = this.watchers[i];
            if (p && p.user) {
                if (p.user.id == uid) return i;
            }
        }
    },

    //设置玩家至座位上
    setPlayerToSeat: function (player, seat) {
        var i = this.watchers.indexOf(player);
        this.watchers.remove(i);

        this.seats.setValue(seat, player);
    },

    //设置玩家为旁观
    setPlayerToWatches: function (player) {
        if (player && player.user) {
            var i = this.watchers.indexOf(player);
            this.watchers.remove(i);

            var k = this.findPlayerOnSeats(player.user.uid);
            this.seats.setValue(k, null);
        }
    },

    //移除玩家
    removePlayer: function (player) {
        if (player && player.user) {
            var seat = this.findPlayerOnSeats(player.user.id);
            if (seat >= 0) this.seats.setValue(seat, null);

            var i = this.findPlayerOnWatchers(player.user.id);
            if (i >= 0) this.watchers.remove(i);
        }
    },

    //获取指定id的玩家对象
    getPlayerByUid: function (uid) {
        var seat = this.findPlayerOnSeats(uid);
        if (seat >= 0) {
            return this.seats.at(seat);
        }

        var i = this.findPlayerOnWatchers(uid);
        if (i >= 0) {
            return this.watchers.at(i);
        }
        return null;
    },

    properties: {
        /**
         * 桌号
         */
        id: {
            get: function () {
                return this.getValue("id");
            },
            set: function (v) {
                this.setValue("id", v);
            }
        },

        /**
         * 座位
         */
        seats: {
            get: function () {
                return this.getValue("seats");
            }
        },

        /**
         * 旁观玩家列表
         */
        watchers: {
            get: function () {
                return this.getValue("watchers");
            }
        },

        /**
         * 当前玩家的座位号
         */
        currentPlayerSeat: {
            get: function () {
                return this.getValue("currentPlayerSeat");
            },
            set: function (v) {
                this.setValue("currentPlayerSeat");
            }
        },

        /**
         * 数据
         */
        data: {
            get: function () {
                return this.getValue("data");
            },
            set: function (v) {
                this.setValue("data", v);
            }
        }
    }
});

/**
 * 游戏局对象: 表示一局游戏的信息 (九人桌的一手牌, 麻将的一局牌)
 */
FWS_MODEL_DATA.FGameRound = cc.Class({
    name: "FGameRound",
    extends: FWS_MODEL.FAbstractModel,

    ctor: function () {
        this.setValue("data", new Object());
    },

    statics: {
        factory: new FWS_MODEL_DATA.FGameRoundFactory()
    },

    reset: function () {
        return FWS_MODEL_DATA.FGameRound.factory.reset(this);
    },

    properties: {
        id: {
            get: function () {
                return this.getValue("id");
            },
            set: function (v) {
                this.setValue("id", v);
            }
        }
    }
});

/**
 * 游戏对象模型
 */
FWS_MODEL_DATA.FGameModel = cc.Class({
    name: "FGameModel",
    extends: FWS_MODEL.FAbstractModel,

    ctor: function () {
        this.setValue("games", new FWS_MODEL.FDict());
    },

    statics: {
        current: function () {
            if (FWS_MODEL_DATA.FGameModel._current) { } else FWS_MODEL_DATA.FGameModel._current = new FWS_MODEL_DATA.FGameModel();

            return FWS_MODEL_DATA.FGameModel._current;
        }
    },

    properties: {

        /**
         * 当前玩家
         */
        currentUser: {
            get: function () {
                return this.getValue("currentUser");
            },
            set: function (v) {
                this.setValue("currentUser", v);
            }
        },
        /**
         * 当前游戏
         */
        currentGame: {
            get: function () {
                return this.getValue("currentGame");
            },
            set: function (v) {
                this.setValue("currentGame", v);
            }
        },
        /**
         * 当前游戏桌
         */
        currentGameTable: {
            get: function () {
                return this.getValue("currentGameTable");
            },
            set: function (v) {
                this.setValue("currentGameTable", v);
            }
        },

        /**
         * 所有游戏
         */
        games: {
            get: function () {
                return this.getValue("games");
            }
        }
    }
});

//──────────────────────────────────────────────────────────

module.exports = FWS_MODEL_DATA;