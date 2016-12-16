"use strict";
cc._RFpush(module, '54a05qGQfFAD6yGt2ZmiIVC', 'FWS_MVC');
// scripts/FWS/FWS_MVC.js

/*
 * 公共代码的MVC框架
 * @Author: thor.liu 
 * @Date: 2016-11-25 10:40:31 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-05 17:19:42
 */

var FWS_MVC = {};

/**
 * 日志功能
 */
FWS_MVC.FLog = cc.Class({
    name: "FLog",
    statics: {
        /**
         * 输出信息类日志
         */
        info: function info(tags, template) {
            var args = new Array();
            args.push("INFO");
            for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            FWS_MVC.FLog.output(args);
        },
        /**
         * 输出警告类日志
         */
        warn: function warn(tags, template) {
            var args = new Array();
            args.push("WARN");
            for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            FWS_MVC.FLog.output(args);
        },
        /**
         * 输出错误类日志
         */
        err: function err(tags, template) {
            var args = new Array();
            args.push("ERROR");
            for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            FWS_MVC.FLog.output(args);
        },
        /**
         * 输出数据类日志
         */
        data: function data(tags, template) {
            var args = new Array();
            args.push("DATA");
            for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            FWS_MVC.FLog.output(args);
        },
        /**
         * 输出日志信息至控制台, 或者之后看情况去写日志文件, 或者发给日志服务
         */
        output: function output(args) {
            if (args.length < 3) return;
            var type = args[0];
            var tags = args[1];
            var format = args[2] + "";

            for (var i = 3; i < args.length; i++) {
                format = format.replace("{" + (i - 3) + "}", args[i]);
            }

            var output = "(" + tags + ") " + format;

            if (type == "INFO") {
                cc.info(output);
            } else if (type == "ERROR") {
                cc.error(output);
            } else if (type == "WARN") {
                cc.warn(output);
            } else {
                cc.log(output);
            }
            //TODO: 写一个文本文件
        }
    }
}),

//──────────────────────────────────────────────────────────

/**
 * 消息通知
 */
FWS_MVC.FMessage = cc.Class({
    name: "FMessage",
    ctor: function ctor() {

        var msgType = arguments[0];
        var msgCategory = arguments[1];

        this._type = msgType;
        this._category = msgCategory;
        this._index = FWS_MVC.FMessage._nextIndex;
        FWS_MVC.FMessage._nextIndex++;

        this._isSended = false;
        this._isCompleted = false;
        this.args = new Object();
    },

    statics: {
        _nextIndex: 0
    },

    /**
     * 获取消息类型
     */
    type: function type() {
        return this._type;
    },

    /**
     * 获取消息分类
     */
    category: function category() {
        return this._category;
    },
    /**
     * 获取消息是否已经完成
     */
    isCompleted: function isCompleted() {
        return this._isCompleted;
    },
    /**
     * 获取消息是否已经发送
     */
    isSended: function isSended() {
        return this._isSended;
    },
    /**
     * 发送消息到消息路由
     */
    send: function send() {
        if (this._isSended) return;
        this._isSended = true;

        FWS_MVC.FMessageRouter.send(this);
    },
    /**
     * 通知消息已经完成
     */
    complete: function complete() {
        if (!this._isSended) return;
        if (this._isCompleted) return;
        this._isCompleted = true;

        FWS_MVC.FMessageRouter.complete(this);
    },
    /**
     * 获取消息的文本信息
     */
    toString: function toString() {
        return "<FMessage " + this._type + "(" + this._category + " : " + this._index + ") " + JSON.stringify(this.args) + ">";
    }

}),

//──────────────────────────────────────────────────────────

/**
 * 消息队列
 */
FWS_MVC.FMessageQueue = cc.Class({
    name: "FMessageQueue",
    ctor: function ctor() {
        var msgCategory = arguments[0];
        this._category = msgCategory;
        this._messages = new Array();
    },
    /**
     * 获取消息队列所绑定的消息分类
     */
    category: function category() {
        return this._category;
    },
    /**
     * 获取消息队列的当前消息, 也就是队列中最前面的那个消息
     */
    current: function current() {
        if (this._messages.length > 0) return this._messages[0];
        return null;
    },
    /**
     * 获取消息队列中所包含的消息数量
     */
    count: function count() {
        return this._messages.length;
    },
    /**
     * 添加一个消息至消息队列的尾部
     */
    add: function add(msg) {

        if (!(msg instanceof FWS_MVC.FMessage)) {
            FWS_MVC.FLog.err("FMessageQueue", "{0}不是一个正确的消息通知对象", msg);
        } else if (this._messages.indexOf(msg) >= 0) {
            FWS_MVC.FLog.err("FMessageQueue", "消息队列中已经包含了{0}", msg);
        } else {
            this._messages.push(msg);
        }
    },
    /**
     * 移除并返回消息队列中最前面的那个消息
     */
    remove: function remove() {
        if (this._messages.length > 0) return this._messages.shift();
        return null;
    },
    /**
     * 清空消息队列中的所有消息
     */
    clear: function clear() {
        if (this._messages.length > 0) this._messages.splice(0, this._messages.length);
    },
    /**
     * 获取消息队列的文本信息
     */
    toString: function toString() {
        return "<FMessageQueue " + this._messages.toString() + ">";
    }
}),

//──────────────────────────────────────────────────────────

/**
 * 消息连接类
 */
FWS_MVC.FMessageConnection = cc.Class({
    // name: "FMessageConnection",
    "extends": cc.Component,

    /**
     * 连接模块至消息路由
     */
    connect: function connect() {
        FWS_MVC.FMessageRouter.connect(this);
    },

    /**
     * 从消息路由断开连接 
     */
    disconnect: function disconnect() {
        FWS_MVC.FMessageRouter.disconnect(this);
    },

    /**
     * 收到消息通知时, 直接按消息的类型加onFMessage_的前缀定义函数名作侦听, 例如: onFMessage_Login: function(msg) {...}
     */
    onFMessage: function onFMessage(msg) {
        var handler = "onFMessage_" + msg.type();
        if (typeof this[handler] == "function") {
            this[handler](msg);
            return true;
        }

        return false;
    }
}),

//──────────────────────────────────────────────────────────

/**
 * 消息路由 (全局唯一)
 */
FWS_MVC.FMessageRouter = cc.Class({
    name: "FMessageRouter",

    statics: {

        /**
         * 初始化消息路由
         */
        init: function init() {
            if (FWS_MVC.FMessageRouter.queues) return;
            FWS_MVC.FMessageRouter.queues = new Object();
            FWS_MVC.FMessageRouter.connections = new Array();
            FWS_MVC.FMessageRouter.inited = true;
            FWS_MVC.FMessageRouter.updateHandler = setInterval(FWS_MVC.FMessageRouter.update, 100);
        },

        /**
         * 创建一个指定消息分类的消息队列
         */
        createQueue: function createQueue(category) {
            FWS_MVC.FMessageRouter.init();

            if (FWS_MVC.FMessageRouter.queues[category]) return;

            FWS_MVC.FMessageRouter.queues[category] = new FWS_MVC.FMessageQueue(category);
        },

        /**
         * 移除一个指定消息分类的消息队列
         */
        removeQueue: function removeQueue(category) {
            FWS_MVC.FMessageRouter.init();

            if (FWS_MVC.FMessageRouter.queues[category]) delete FWS_MVC.FMessageRouter.queues[category];
        },

        /**
         * 移除所有的消息队列
         */
        removeAllQueue: function removeAllQueue() {
            FWS_MVC.FMessageRouter.init();

            for (var category in FWS_MVC.FMessageRouter.queues) {
                delete FWS_MVC.FMessageRouter.queues[category];
            }
        },

        /**
         * 清空指定消息分类的消息队列的内容
         */
        cleanQueue: function cleanQueue(category) {
            FWS_MVC.FMessageRouter.init();

            for (var cat in FWS_MVC.FMessageRouter.queues) {
                if (cat != category) continue;
                var q = FWS_MVC.FMessageRouter.queues[category];
                q.clear();
            }
        },

        /**
         * 清空所有消息队列的内容
         */
        cleanAllQueue: function cleanAllQueue() {
            FWS_MVC.FMessageRouter.init();

            for (var category in FWS_MVC.FMessageRouter.queues) {
                var q = FWS_MVC.FMessageRouter.queues[category];
                q.clear();
            }
        },

        /**
         * 连接一个模块到消息路由
         */
        connect: function connect(connection) {
            FWS_MVC.FMessageRouter.init();

            if (connection) {
                if (FWS_MVC.FMessageRouter.connections.indexOf(connection) >= 0) {
                    FWS_MVC.FLog.warn("FMessageRouter", "在消息路由中发现重复连接的模块{0}", connection);
                } else {
                    FWS_MVC.FMessageRouter.connections.push(connection);
                }
            }
        },

        /**
         * 从消息路由断开一个连接
         */
        disconnect: function disconnect(connection) {
            FWS_MVC.FMessageRouter.init();
            if (connection) {
                var i = FWS_MVC.FMessageRouter.connections.indexOf(connection);
                if (i >= 0) {
                    FWS_MVC.FMessageRouter.connections.splice(i, 1);
                }
            }
        },

        /**
         * 断开消息路由中的所有连接
         */
        disconnectAll: function disconnectAll() {
            FWS_MVC.FMessageRouter.init();

            if (FWS_MVC.FMessageRouter.connections.length > 0) {
                FWS_MVC.FMessageRouter.connections.splice(0, FWS_MVC.FMessageRouter.connections.length);
            }
        },

        /**
         * 向消息路由发送一个消息 (并不是马上发布到各模块, 只是入队列)
         */
        send: function send(msg) {
            FWS_MVC.FMessageRouter.init();

            FWS_MVC.FLog.data("消息", "发送: {0}", msg);

            if (msg instanceof FWS_MVC.FMessage) {
                for (var category in FWS_MVC.FMessageRouter.queues) {
                    var q = FWS_MVC.FMessageRouter.queues[category];
                    q.add(msg);

                    if (q.count() == 1) {
                        FWS_MVC.FMessageRouter.push(msg);
                    }
                    return;
                }

                FWS_MVC.FMessageRouter.push(msg);
            }
        },

        /**
         * 推送一个消息到所有连接
         */
        push: function push(msg) {
            FWS_MVC.FMessageRouter.init();

            FWS_MVC.FLog.info("消息", "推送: {0}", msg);

            var cloneArray = FWS_MVC.FMessageRouter.connections.slice(0);
            var counter = 0;
            for (var i = 0; i < cloneArray.length; i++) {
                var conn = cloneArray[i];
                if (typeof conn.onFMessage == "function") {
                    if (conn.onFMessage(msg)) {
                        counter++;
                    }
                }
            }

            if (counter == 0) {
                msg.complete();
                FWS_MVC.FLog.warn("消息", "丢弃了一个未处理的消息通知: {0}", msg);
            }
        },

        /**
         * 标记一个消息已经完成
         */
        complete: function complete(msg) {
            FWS_MVC.FMessageRouter.init();
            FWS_MVC.FLog.data("消息", "完成消息: {0}", msg);
        },

        /**
         * 更新操作
         */
        update: function update() {
            for (var category in FWS_MVC.FMessageRouter.queues) {
                var queue = FWS_MVC.FMessageRouter.queues[category];

                if (queue.current() && queue.current().isCompleted()) {
                    queue.remove();
                    if (queue.current()) FWS_MVC.FMessageRouter.push(queue.current());
                }
            }
        }
    }
}),

//──────────────────────────────────────────────────────────

/**
 * 树形节点结构
 */
FWS_MVC.FNode = cc.Class({
    name: "FNode",
    ctor: function ctor() {
        var nodeid = arguments[0];
        this._id = nodeid;
        this._nodes = new Array();
        this._data = null;
        this._parent = null;
    },

    toString: function toString() {
        return "<" + cc.js.getClassName(this) + " " + this.id() + ">";
    },

    /**
     * 获取节点的标识
     */
    id: function id() {
        return this._id;
    },

    /**
     * 获取所属的父节点
     */
    parent: function parent() {
        return this._parent;
    },

    /**
     * 获取节点的全路径
     */
    path: function path() {
        var ary = new Array();

        var n = this;

        while (n) {
            ary.splice(0, 0, n.id());
            n = n.parent();
        }

        return ary.join("/");
    },

    /**
     * 获取子节点的数组
     */
    nodes: function nodes() {
        return this._nodes.slice(0);
    },

    /**
     * 获取一个指定id的子节点
     */
    find: function find(nodeid) {
        if (this._id == nodeid) return this;
        for (var i = 0; i < this._nodes.length; i++) {
            var n = this._nodes[i];
            if (n.id() == nodeid) return n;
            var cn = n.find(nodeid);
            if (cn) return cn;
        }
        return null;
    },

    /**
     * 获取一个指定索引的子节点
     */
    at: function at(index) {
        if (index >= 0 && index < this._nodes.length) {
            return this._nodes[index];
        }
        return null;
    },

    /**
     * 添加一个子节点
     */
    add: function add(node) {
        if (this._nodes.indexOf(node) >= 0) return null;
        if (node.parent()) return null;
        node._parent = this;
        this._nodes.push(node);
        return node;
    },

    /**
     * 移除一个子节点
     */
    remove: function remove(node) {
        var i = this._nodes.indexOf(node);
        if (i >= 0) {
            this._nodes.splice(i, 1);
            node._parent = null;
            return node;
        }
        return null;
    },

    /**
     * 移除所有节点
     */
    removeAll: function removeAll() {
        if (this._nodes.length > 0) {
            for (var i = 0; i < this._nodes.length; i++) {
                this._nodes[i].removeAll();
                this._nodes[i]._parent = null;
            }
            this._nodes.splice(0, this._nodes.length);
        }
    },

    /**
     * 移除当前节点
     */
    removeSelf: function removeSelf() {
        if (this._parent) {
            this._parent.remove(this);
            this._parent = null;
        }
    },

    /**
     * 获取子节点的数量 
     */
    count: function count() {
        return this._nodes.length;
    },

    /**
     * 搜索指定子节点的索引
     */
    indexOf: function indexOf(node) {
        return this._nodes.indexOf(node);
    },

    /**
     * 获取节点的深度级别
     */
    level: function level() {
        var ret = 0;

        var temp = this;
        while (temp.parent()) {
            temp = temp.parent();

            ret++;
        }

        return ret;
    },

    /**
     * 获取根节点
     */
    root: function root() {
        var temp = this;

        while (temp.parent()) {
            temp = temp.parent();
        }

        return temp;
    },

    /**
     * 获取第一个子节点
     */
    firstChild: function firstChild() {
        if (this._nodes.length == 0) return null;

        return this._nodes[0];
    },

    /**
     * 获取同级的第一个节点
     */
    first: function first() {

        if (this._parent == null) return null;
        if (this._parent._nodes.length == 0) return null;

        return this._parent._nodes[0];
    },

    /**
     * 获取同级的最后一个节点
     */
    last: function last() {

        if (this._parent == null) return null;
        if (this._parent._nodes.length == 0) return null;

        return this._parent._nodes[this._parent._nodes.length - 1];
    },

    /**
     * 获取同级的上一个节点
     */
    prev: function prev() {

        if (this._parent == null) return null;
        var i = this._parent._nodes.indexOf(this);
        if (i <= 0) return null;

        return this._parent._nodes[i - 1];
    },

    /**
     * 获取同级的下一个节点
     */
    next: function next() {

        if (this._parent == null) return null;
        var i = this._parent._nodes.indexOf(this);
        if (i >= this._parent._nodes.length) return null;
        if (i < 0) return null;

        return this._parent._nodes[i + 1];
    },

    /**
     * 获取节点至根的逐级节点
     */
    parentNodes: function parentNodes() {
        var ret = new Array();

        var temp = this;

        while (temp) {
            ret.splice(0, 0, temp);
            temp = temp.parent();
        }
        return ret;
    },

    /**
     * 获取与另一个节点的共同父级节点
     */
    parentBy: function parentBy(node) {
        var p1 = this.parentNodes();
        var p2 = node.parentNodes();

        var ret = null;

        for (var i = 0; i < p1.length; i++) {
            var n1 = p1[i];
            var n2 = null;

            if (i < p2.length) {
                n2 = p2[i];
            }

            if (n1 == n2) ret = n1;else break;
        }

        return ret;
    }
}),

//──────────────────────────────────────────────────────────

/**
 * 状态节点
 */
FWS_MVC.FContext = cc.Class({
    name: "FContext",
    "extends": FWS_MVC.FNode,

    ctor: function ctor() {
        var id = arguments[0];
        this.modules = new Array();
    },

    setModules: function setModules() {
        if (this.modules) {} else this.modules = new Array();

        for (var i = 0; i < arguments.length; i++) {
            var m = arguments[i];
            if (this.modules.indexOf(m) >= 0) continue;
            this.modules.push(m);
        }
        return this;
    },

    onEnterNode: function onEnterNode() {
        FWS_MVC.FLog.data("状态", "onEnterNode: {0}", this.path());

        for (var i = 0; i < this.modules.length; i++) {
            var m = this.modules[i];

            try {
                m.onEnterNode();
            } catch (err) {}

            m.connect();
        }
    },

    onLeaveNode: function onLeaveNode() {
        FWS_MVC.FLog.data("状态", "onLeaveNode: {0}", this.path());

        for (var i = 0; i < this.modules.length; i++) {
            var m = this.modules[i];

            try {
                m.onLeaveNode();
            } catch (err) {}

            m.disconnect();
        }
    }
}),

//──────────────────────────────────────────────────────────

/**
 * 状态管理器
 */
FWS_MVC.FContextManager = cc.Class({
    name: "FContextManager",

    statics: {
        init: function init(rootContext) {
            FWS_MVC.FContextManager._root = rootContext;
            FWS_MVC.FContextManager._current = null;
            FWS_MVC.FContextManager._history = new Array();
        },
        root: function root() {
            return FWS_MVC.FContextManager._root;
        },
        current: function current() {
            return FWS_MVC.FContextManager._current;
        },
        back: function back() {
            if (FWS_MVC.FContextManager._history.length <= 1) return;
            var c = FWS_MVC.FContextManager._history.pop();
            c = FWS_MVC.FContextManager._history[FWS_MVC.FContextManager._history.length - 1];
            FWS_MVC.FContextManager.goto(c);
        },
        gotoID: function gotoID(id) {
            if (FWS_MVC.FContextManager._root) {
                var t = FWS_MVC.FContextManager._root.find(id);
                if (t) {
                    FWS_MVC.FContextManager.goto(t);
                }
            }
        },
        goto: function goto(context) {
            if (context && context.root() == FWS_MVC.FContextManager._root && FWS_MVC.FContextManager._current != context) {
                var theParentNode = null;

                //关闭之前的无关节点
                if (FWS_MVC.FContextManager._current) {
                    theParentNode = FWS_MVC.FContextManager._current.parentBy(context);

                    var closeList = FWS_MVC.FContextManager._current.parentNodes();
                    var closeListCount = closeList.length;

                    for (var i = closeListCount - 1; i >= 0; i--) {
                        var closeContext = closeList[i];

                        if (closeContext == theParentNode) break;

                        if (closeContext.onLeaveNode && typeof closeContext.onLeaveNode == "function") {
                            closeContext.onLeaveNode();
                        }
                    }
                }
                //打开需要的新节点
                var found = false;
                var openList = context.parentNodes();
                var theParentNodeIsNull = true;
                if (theParentNode) theParentNodeIsNull = false;
                for (var i = 0; i < openList.length; i++) {
                    var openContext = openList[i];
                    if (theParentNodeIsNull) {
                        if (openContext.onEnterNode && typeof openContext.onEnterNode == "function") {
                            openContext.onEnterNode();
                            continue;
                        }
                    }

                    if (found) {
                        if (openContext != theParentNode || theParentNodeIsNull) {
                            if (openContext.onEnterNode && typeof openContext.onEnterNode == "function") {
                                openContext.onEnterNode();
                            }
                        }
                    } else {
                        if (openContext == theParentNode) {
                            found = true;
                        }
                    }
                }

                FWS_MVC.FContextManager._current = context;
                FWS_MVC.FContextManager._history.push(context);
                FWS_MVC.FLog.info("状态", "切换至: {0}", context.path());
            }
        }
    }
});

//──────────────────────────────────────────────────────────

module.exports = FWS_MVC;

cc._RFpop();