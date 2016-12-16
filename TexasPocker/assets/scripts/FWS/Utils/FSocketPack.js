/*
 * Socket数据包信息
 * @Author: thor.liu 
 * @Date: 2016-12-06 16:46:25 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-15 15:19:30
 */


const FSocketPack = cc.Class({
    name: "FSocketPack",
    ctor: function () {

    },

    statics: {

        version: 0,

        ///消息号类型
        FHeaderType: cc.Enum({
            Notify:                 0x00000000,         //广播消息
            Req:                    0x10000000,         //请求消息
            Ack:                    0x20000000          //应答消息
        }),

        ///消息号掩码
        FHeaderMark: cc.Enum({
            Mask:                   0xF0000000,         //类型
            MSG:                    0x0FFFFFFF          //接口号
        }),

        ///协议消息号定义
        MsgIDs: [
            {
                Reply:              0,                  //回复

                HeartBeat:          5001,               //心跳
                Ping:               5002,               //链路检测包
                Relogin:            5003,               //异地登录后的下线通知
                Verify:             5004,               //客户端身份认证
            }
        ],

        ///获取消息号的掩码部分
        getHeaderMark: function (id) {
            return (id & FSocketPack.FHeaderMark.Mask);
        },

        ///获取消息号的接口号部分
        getHeaderMsgId: function (id) {
            return (id & FSocketPack.FHeaderMark.MSG);
        },

        ///获取消息号的文本信息
        getMsgIdDesc: function (id) {
            var a = FSocketPack.getHeaderMark(id);
            var b = FSocketPack.getHeaderMsgId(id);

            var sz_a = FSocketPack.getEnumByValue(FSocketPack.FHeaderType, a);
            var sz_b = FSocketPack.getEnumByValueEx(FSocketPack.MsgIDs, b);

            if (sz_a && sz_a.length) {
                return sz_a + " | " + sz_b;
            }
            else {
                return sz_b;
            }
        },

        ///获取枚举值的名称
        getEnumByValue: function (e, v) {
            for (var k in e) {
                if (e[k] == v) return k;
            }
            return "";
        },

        ///获取枚举值的名称
        getEnumByValueEx: function (es, v) {
            for (var i = 0; i < es.length; i++) {
                var e = es[i];
                for (var k in e) {
                    if (e[k] == v) return k;
                }
            }
            return "";
        }
    },

    properties: {
        //-----
        type: 0,
        msgid: 0,

        //-----
        retcode: 0,
        extra: "",
        router: "",

        //-----
        body: null
    }

});

module.exports = FSocketPack;