"use strict";
cc._RFpush(module, '5109fHWLFFHja5IXhdsEl1u', 'P9GameData');
// scripts/P9/Data/P9GameData.js

/*
 * 九人桌游戏相关的特有数据结构
 * @Author: thor.liu 
 * @Date: 2016-12-03 13:26:32 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-12 14:44:50
 */
var P9GameData = {};

var MVC = require("FWS_MVC");
var MODEL = require("FWS_MODEL");
var DATA = require("FWS_MODEL_DATA");

///游戏房间类型
P9GameData.P9RoomType = cc.Enum({
    STD: 0,
    SNG: 1,
    MTT: 2
});

///扑克牌的花色
P9GameData.PKCardColor = cc.Enum({
    //方片
    Diamond: 0,
    //草花
    Club: 1,
    //红心
    Hearts: 2,
    //黑桃
    Spade: 3
});

///扑克牌的点数
P9GameData.PKCardAmount = cc.Enum({
    AmountA: 0,
    Amount2: 1,
    Amount3: 2,
    Amount4: 3,
    Amount5: 4,
    Amount6: 5,
    Amount7: 6,
    Amount8: 7,
    Amount9: 8,
    Amount10: 9,
    AmountJ: 10,
    AmountQ: 11,
    AmountK: 12
});

///牌型组合类型
P9GameData.P9CardGroupType = cc.Enum({
    ///单牌
    Single: 0,
    ///1对
    Pair1: 1,
    ///2对
    Pair2: 2,
    ///3条
    ThreeSame: 3,
    ///顺
    Straight: 4,
    ///同花
    Flush: 5,
    ///葫芦
    FlushHouse: 6,
    ///4条
    FourSame: 7,
    ///同花顺
    StraightFlush: 8,
    ///皇家同花顺
    StraightKing: 9
});

///游戏动作类型定义
P9GameData.P9GameActionType = cc.Enum({
    ///无
    None: 0,
    ///Ante
    Ante: 1,
    ///小盲
    SB: 2,
    ///大盲
    BB: 3,
    ///下注
    Bet: 4,
    ///跟注
    Call: 5,
    ///弃牌
    Fold: 6,
    ///过牌
    Check: 7,
    ///加注
    Raise: 8,
    ///全下
    Allin: 9,
    ///亮牌
    Showcard: 10,
    ///Straddle
    Straddle: 11,
    ///强制大盲注
    ForceBB: 12,
    ///加时
    TimeBank: 13,

    ///一手结果加分
    ShowChips: 102
});

///游戏事件类型
P9GameData.P9GameEventType = cc.Enum({
    ///无
    None: 0,
    ///发手牌
    HandCards: 1,
    ///发公共牌
    PublicCards: 2
});

//──────────────────────────────────────────────────────────

//扑克牌数据
P9GameData.PKCard = cc.Class({
    name: "PKCard",

    ctor: function ctor() {
        this._id = -1;
    },

    toString: function toString() {
        var szStyles = ["♦️", "♣️", "♥️", "♠️"];
        var szAmounts = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

        if (this._id < 0) return "<?>";

        var c = this.color;
        var a = this.amount;

        return "<" + szStyles[c] + szAmounts[a] + ">";
    },

    statics: {
        /**
         * 创建指定ID的牌
         */
        create: function create(cardId) {
            var ret = new P9GameData.PKCard();
            ret.id = cardId;
            return ret;
        },
        /**
         * 创建指定花色和点数的牌
         */
        createByColorAmount: function createByColorAmount(c, a) {
            var cardId = (c + 1) * 100 + a;
            var ret = new P9GameData.PKCard();
            ret.id = cardId;
            return ret;
        }
    },

    properties: {
        ///获取或设置牌的ID
        id: {
            get: function get() {
                return this._id;
            },
            set: function set(v) {
                this._id = v;
            }
        },
        ///获取牌的花色
        color: {
            get: function get() {
                if (this._id >= 0) {
                    var ret = this._id;
                    ret = Math.floor(ret / 100);
                    return ret - 1;
                }
                return -1;
            }
        },
        ///获取牌的点数
        amount: {
            get: function get() {
                if (this._id >= 0) {
                    var ret = this._id;
                    ret = Math.floor(ret % 100);
                    return ret;
                }
                return -1;
            }
        },
        ///获取牌的排序编号
        order: {
            get: function get() {
                var ret = this._id;
                if (ret < 0) return ret;

                var iColor = this.color;
                var iAmount = this.amount;

                var iColorValue = 0;
                var iAmountValue = 0;

                if (iAmount == 0) iAmount = 20;

                switch (iColor) {
                    case P9GameData.PKCardColor.Club:
                        iColorValue = 1;
                        break;

                    case P9GameData.PKCardColor.Diamond:
                        iColorValue = 2;
                        break;

                    case P9GameData.PKCardColor.Hearts:
                        iColorValue = 3;
                        break;

                    case P9GameData.PKCardColor.Spade:
                        iColorValue = 4;
                        break;
                }

                return iAmount * 1000 + iColorValue;
            }
        }
    }

});

//九人桌游戏房间数据
P9GameData.P9GameData = cc.Class({
    name: "P9GameData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {},

    properties: {
        ///游戏房间类型
        roomType: {
            get: function get() {
                this.getValue("roomType");
            },
            set: function set(v) {
                this.setValue("roomType", v);
            }
        }
    }
});

//九人桌游戏桌数据
P9GameData.P9GameTableData = cc.Class({
    name: "P9GameTableData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {
        this.setValue("publicCards", new MODEL.FArray());
        this.setValue("totalChips", 0);
        this.setValue("pots", new MODEL.FArray());
    },
    properties: {
        ///公共牌
        publicCards: {
            get: function get() {
                return this.getValue("publicCards");
            }
        },
        ///当前游戏的总奖池
        totalChips: {
            get: function get() {
                return this.getValue("totalChips");
            },
            set: function set(v) {
                this.setValue("totalChips", v);
            }
        },
        ///当前游戏的所有奖池 (P9GamePotData组成的FArray)
        pots: {
            get: function get() {
                return this.getValue("pots");
            }
        }
    }
});

//九人桌游戏奖池数据
P9GameData.P9GamePotData = cc.Class({
    name: "P9GamePotData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {
        this.setValue("chips", 0);
        this.setValue("seats", new MODEL.FArray());
    },
    properties: {
        //奖池中的筹码数量
        chips: {
            get: function get() {
                return this.getValue("chips");
            },
            set: function set(v) {
                this.setValue("chips", v);
            }
        },
        //奖池涉及的玩家坐位号
        seats: {
            get: function get() {
                return this.getValue("seats");
            }
        }
    }
});

//九人桌游戏结算数据
P9GameData.P9GameResultData = cc.Class({
    name: "P9GameResultData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {
        this.setValue("players", new MODEL.FArray());
    },
    properties: {
        players: {
            get: function get() {
                return this.getValue("players");
            }
        }
    }
});

//九人桌游戏结算时每个玩家的数据
P9GameData.P9GameResultPlayerData = cc.Class({
    name: "P9GameResultPlayerData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {
        this.setValue("seat", 0);
        this.setValue("winChips", 0);
    },
    properties: {
        //座位号
        seat: {
            get: function get() {
                return this.getValue("seat");
            },
            set: function set(v) {
                this.setValue("seat", v);
            }
        },
        //赢的筹码数
        winChips: {
            get: function get() {
                return this.getValue("winChips");
            },
            set: function set(v) {
                this.setValue("winChips", v);
            }
        }
    }
});

//九人桌玩家数据
P9GameData.P9PlayerData = cc.Class({
    name: "P9PlayerData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {
        this.setValue("handCards", new MODEL.FArray());
        this.setValue("cardGroup", new MODEL.FArray());
        this.setValue("cardGroupType", P9GameData.P9CardGroupType.None);
        this.setValue("currentRoundActionType", P9GameData.P9GameActionType.Single);
        this.setValue("currentRoundChips", 0);
    },
    properties: {
        ///手牌数据
        handCards: {
            get: function get() {
                return this.getValue("handCards");
            }
        },
        ///牌型组合
        cardGroup: {
            get: function get() {
                return this.getValue("cardGroup");
            }
        },
        ///牌型组合类型
        cardGroupType: {
            get: function get() {
                return this.getValue("cardGroupType");
            },
            set: function set(v) {
                this.setValue("cardGroupType", v);
            }
        },
        ///当前这一轮的动作类型
        currentRoundActionType: {
            get: function get() {
                return this.getValue("currentRoundActionType");
            },
            set: function set(v) {
                this.setValue("currentRoundActionType", v);
            }
        },
        ///当前这一轮出的筹码数
        currentRoundChips: {
            get: function get() {
                return this.getValue("currentRoundChips");
            },
            set: function set(v) {
                this.setValue("currentRoundChips", v);
            }
        }
    }
});

//九人桌牌谱数据
P9GameData.P9GameRoundData = cc.Class({
    name: "P9GameRoundData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {},
    properties: {}
});

//──────────────────────────────────────────────────────────

//发牌事件
P9GameData.P9GameEventGetCards = cc.Class({
    name: "P9GameEventGetCards",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {
        this.setValue("cards", new MODEL.FArray());
        this.setValue("seat", -1);
    },
    properties: {
        //本次发牌包含了哪几张扑克牌的对象
        cards: {
            get: function get() {
                return this.getValue("cards");
            }
        },
        //本次发牌是发给谁(座位号), 如果是负数, 表示是发的公共牌
        seat: {
            get: function get() {
                return this.getValue("seat");
            },
            set: function set(v) {
                this.setValue("seat", v);
            }
        }
    }
});

//动作询问
P9GameData.P9GameActionReqData = cc.Class({
    name: "P9GameActionReqData",
    "extends": MODEL.FAbstractModel,
    ctor: function ctor() {
        this.setValue("actionTypes", new MODEL.FArray());
        this.setValue("timer", 0);
        this.setValue("minChips", 0);
        this.setValue("maxChips", 0);
        this.setValue("seat", 0);
    },

    properties: {
        //可选的动作类型
        actionTypes: {
            get: function get() {
                return this.getValue("actionTypes");
            }
        },
        //到计时秒数
        timer: {
            get: function get() {
                return this.getValue("timer");
            },
            set: function set(v) {
                this.setValue("timer", v);
            }
        },
        //最小筹码
        minChips: {
            get: function get() {
                return this.getValue("minChips");
            },
            set: function set(v) {
                this.setValue("minChips", v);
            }
        },
        //最大筹码
        maxChips: {
            get: function get() {
                return this.getValue("maxChips");
            },
            set: function set(v) {
                this.setValue("maxChips", v);
            }
        },
        //座位号
        seat: {
            get: function get() {
                return this.getValue("seat");
            },
            set: function set(v) {
                this.setValue("seat", v);
            }
        }
    }
});

//──────────────────────────────────────────────────────────

P9GameData.P9UserFactory = cc.Class({
    name: "P9UserFactory",
    "extends": DATA.FUserFactory,
    ctor: function ctor() {},
    create: function create() {
        var ret = this._super();
        if (ret) {
            // ret.data.userData = new P9GameData.P9UserData();
        }
        return ret;
    }
});

P9GameData.P9PlayerFactory = cc.Class({
    name: "P9PlayerFactory",
    "extends": DATA.FPlayerFactory,
    ctor: function ctor() {},
    create: function create() {
        var ret = this._super();
        if (ret) {
            ret.data.playerData = new P9GameData.P9PlayerData();
        }
        return ret;
    }
});

P9GameData.P9GameFactory = cc.Class({
    name: "P9GameFactory",
    "extends": DATA.FGameFactory,
    ctor: function ctor() {},
    create: function create() {
        var ret = this._super();
        if (ret) {
            ret.data.gameData = new P9GameData.P9GameData();
        }
        return ret;
    }
});

P9GameData.P9GameTableFactory = cc.Class({
    name: "P9GameTableFactory",
    "extends": DATA.FGameTableFactory,
    ctor: function ctor() {},
    create: function create() {
        var ret = this._super();
        if (ret) {
            ret.data.tableData = new P9GameData.P9GameTableData();
        }
        return ret;
    }
});

P9GameData.P9GameRoundFactory = cc.Class({
    name: "P9GameRoundFactory",
    "extends": DATA.FGameRoundFactory,
    ctor: function ctor() {}
});

//──────────────────────────────────────────────────────────

module.exports = P9GameData;

cc._RFpop();