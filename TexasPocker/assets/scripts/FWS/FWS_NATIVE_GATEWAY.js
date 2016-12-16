/*
 * 与原生模块, 或者C++模块的接口通道
 * @Author: thor.liu 
 * @Date: 2016-12-02 10:46:31 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-02 11:05:15
 */


/*
    参数以及返回内容
    {
        name: "socketConnect",
        index: 0,
        args: { //map
            ip: 192.18.1.1
            port: 1000
        }
    }
 */


const FWS_MVC = require("FWS_MVC");

const FWS_NATIVE_GATEWAY = {
    FNativeGateway: cc.Class({
        name: "FNativeGateway",
        ctor: function() {},
        statics: {
            ///调用native
            to: function(name, args) {
                if (FWS_NATIVE_GATEWAY.FNativeGateway.nextIndex) {
                    FWS_NATIVE_GATEWAY.FNativeGateway.nextIndex++;
                } else {
                    FWS_NATIVE_GATEWAY.FNativeGateway.nextIndex = 0;
                }


                var obj = {};
                obj.name = "aaa";
                // obj.index = FWS_NATIVE_GATEWAY.FNativeGateway.nextIndex;
                // obj.args = args;

                // var str = JSON.stringify(obj);

                //sangsang add
                // obj.str = str;
                // //TODO: 调用桑桑接口
                jsCppConnect.testlog("发送了");

                jsCppConnect.jsToCpp(obj);

            },
            ///来自native调用
            from: function(msg) {
                // let req = JSON.parse(strJson);
                // if (req.name && req.args && reg.index) {
                //     let handler = FWS_NATIVE_GATEWAY.FNativeGateway["from_" + req.name];
                //     if (handler && typeof(handler) == "function") {
                //
                //     } else {
                //         FWS_MVC.FLog.err("FNativeGateway", "未识别的调用 {0}", strJson);
                //     }
                // }
                var obj = new Object();
                obj.name = "我接收到消息了";
                obj.msg = msg;
                jsCppConnect.testlog("我接收到消息了");

                jsCppConnect.jsToCpp(obj);

            }
        }
    })
}


window.cppTojs=function(obj)
{
    FWS_NATIVE_GATEWAY.FNativeGateway.from(obj);
};



module.exports = FWS_NATIVE_GATEWAY;