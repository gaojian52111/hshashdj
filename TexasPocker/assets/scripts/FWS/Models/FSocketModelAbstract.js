const MVC = require("FWS_MVC");
const FSocketPack = require("FSocketPack");
const FSocketModelAbstract = cc.Class({
    extends: MVC.FMessageConnection,

    addPackHandler: function(msgid, handler){
        if(this.packHandlers) {} else
        {
            this.packHandlers = new Object();
        }

        if(this.packHandlers[msgid])
        {
            MVC.FLog.warn("SocketModel", "重复的数据包处理函数 = {0}", msgid);
        }

        this.packHandlers[msgid] = handler;
    },

    applyPackHandler: function(pack){
        var msgid = pack.msgid;
        if(this.packHandlers)
        {
            if(this.packHandlers[msgid])
            {
                var apiId = FSocketPack.getHeaderMsgId(msgid);
                MVC.FLog.info("Socket", "处理数据包 = {0} ({1})", FSocketPack.getMsgIdDesc(msgid), apiId);
                this.packHandlers[msgid](pack);

                return true;
            }
        }

        return false;
    },

    initHandlers: function() {

    },

    onFMessage_socketOnReceive: function(msg) {

        if(this._handlers_inited_) {} else{
            this._handlers_inited_ = true;
            this.initHandlers();
        }
        
        var handled = this.applyPackHandler(msg.args.pack);
        if(handled)
        {
            msg.complete();
        }
    },

    createPack: function() {
        var c = FSocketPack;
        return new c();
    },

    sendPack: function(pack) {

        //TODO: 发送数据包
    }
});

module.exports = FSocketModelAbstract;