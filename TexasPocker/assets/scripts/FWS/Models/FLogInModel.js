const MVC = require("FWS_MVC");
const MODEL = require("FWS_MODEL");
var loginModel ;
loginModel  = cc.Class({
    extends: MVC.FMessageConnection,

    onFMessage_Login: function(msg) {
        cc.log("我收到登录消息啦"+msg);
        msg.complete();
        var msg2 = new MVC.FMessage("loginResult","loginScene");
        msg2.args.loginState = true;
        msg2.send();

    }

});

module.exports = loginModel;
