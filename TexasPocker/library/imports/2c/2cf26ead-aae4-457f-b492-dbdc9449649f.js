/*
 * 环境参数
 * @Author: thor.liu 
 * @Date: 2016-12-05 14:26:34 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-13 18:48:21
 */

var FEnvironment = cc.Class({
  name: "FEnvironment",
  ctor: function ctor() {},

  statics: {

    //────────────────────────────────────────────────────────── 参数定义

    /**
     * TCP服务器IP地址
     */
    tcpServerIP: "127.0.0.1",
    /**
     * TCP服务器端口
     */
    tcpServerPort: 4000,
    /**
     * WEB服务基础地址 (功能接口的基础地址)
     */
    httpApiBaseUrl: "http://localhost:8080/api/",

    /**
     * WEB页基础地址 (WEB界面或者网页的基础地址)
     */
    webPageBaseUrl: "http://api.nicefold.com/",

    //────────────────────────────────────────────────────────── 当前用户信息

    userInfo: {
      id: "", //当前用户id
      token: "", //当前用户身份标志
      display: { //<当前用户的显示信息> 
        name: "", //当前用户的昵称
        avatar: "" //当前用户的头像地址
        //...
      }
    },

    //────────────────────────────────────────────────────────── 方法定义

    getWebApiUrl: function getWebApiUrl(apiUrl) {
      return FEnvironment + apiUrl;
    }
  }
});

module.exports = FEnvironment;