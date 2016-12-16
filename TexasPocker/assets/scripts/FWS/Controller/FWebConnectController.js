const FWS_MVC = require("FWS_MVC");
const FWebConnectController = cc.Class({
    extends: FWS_MVC.FMessageConnection,

    properties: {
        URL:"https://game.smzy.cc/user/"
    },

    onFMessage_SendWebMSG: function(msg) {


        var xhr = cc.loader.getXMLHttpRequest();
        var url = this.URL + this.getMsgData(msg) ;
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {

                var httpStatus = xhr.statusText;
                var response = xhr.responseText.substring(0, 100) + "...";
                this.onReceiveMsg(httpStatus,response);
            }
        };
        xhr.send();
        msg.complete();
    },

    getMsgData:function (msg) {

        var data;
        if (msg.args.msgType === "register"){
            data = "register?"+
                    "appid="+msg.args.appid+"&"+
                    "time=" + msg.args.time +"&"+
                    "mobile"+msg.args.mobile+"&"+
                    "type"+msg.args.type+"&"+
                    "sms"+msg.args.sms+"&"+
                    "password" + msg.args.password;
        }
        else if(msg.args.msgType === "sendsms"){
            data = "sendsms?"+
                    "appid="+msg.args.appid+"&"+
                    "time=" + msg.args.time +"&"+
                    "mobile"+msg.args.mobile;
        }
        else if(msg.args.msgType === "login"){
            data = "login?"+
                "appid="+msg.args.appid+"&"+
                "sign=" + msg.args.sign +"&"+
                "time=" + msg.args.time +"&"+
                "mobile=" + msg.args.mobile +"&"+
                "type=" + msg.args.type +"&"+
                "password=" + msg.args.password +"&"+
                "appdevtoken=" + msg.args.appdevtoken +"&"+
                "version=" + msg.args.version;

        }
        return data;
    },

    onReceiveMsg:function (httpStatus,response) {
        if (httpStatus == 4){
            console.log(response);
        }
    },

        // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
module.exports = FWebConnectController;
