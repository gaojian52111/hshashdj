"use strict";
cc._RFpush(module, '3eea4HIuQVE1r1HASmnj4iD', 'FLanguage');
// scripts/FWS/Utils/FLanguage.js

/*
 * 多语言支持
 * @Author: thor.liu 
 * @Date: 2016-12-05 17:57:50 
 * @Last Modified by: thor.liu
 * @Last Modified time: 2016-12-05 18:50:05
 */
var FLanguage = cc.Class({
    name: "FLanguage",
    ctor: function ctor() {},

    statics: {
        data: {},
        init: function init() {
            if (FLanguage.inited) return;
            FLanguage.inited = true;
            FLanguage.data = new Object();
        },

        /**
         * 加载一行文本
         */
        load: function load(ini_line) {
            if (ini_line) {

                //移除ini注释
                var line = ini_line.replace(/#[^\r\n]*/g, "");

                //移除前面的空白
                line = line.replace(/^\s+/g, "");

                //移除后面的空白
                line = line.replace(/\s+$/g, "");

                //转换\n
                line = line.replace(/(\\n)+/g, "\n");

                var i = line.indexOf("=");
                if (i > 0) {
                    var k = line.substr(0, i);
                    var v = line.substr(i + 1);
                    FLanguage.data[k] = v;
                }
            }
        },

        /**
         * 加载语言文件的内容
         */
        loadFile: function loadFile(ini_file) {
            if (ini_file && typeof ini_file == "string") {
                var lines = ini_file.split(/[\r\n]+/g);

                for (var i = 0; i < lines.length; i++) {
                    var line = lines[i];
                    FLanguage.load(line);
                }
            }
        },

        /**
         * 获取指定key的文本
         */
        text: function text(targetKey, defaultKey) {
            if (targetKey && FLanguage.data[targetKey]) {
                return FLanguage.data[targetKey];
            }

            if (defaultKey && FLanguage.data[defaultKey]) {
                return FLanguage.data[defaultKey];
            }

            return "";
        },

        /**
         * 根据key以及参数格式化文本
         */
        format: function format() {
            if (arguments.length == 1) return FLanguage.text(arguments[0]);else if (arguments.length == 2) return FLanguage.text(arguments[0], arguments[1]);else {
                var targetKey = arguments[0];
                var defaultKey = arguments[1];
                var ret = FLanguage.text(targetKey, defaultKey);

                for (var i = 2; i < arguments.length; i++) {
                    var index = i - 1; //参数从{1}开始
                    var re = new RegExp("\\{" + index.toString() + "\\}", "gm");

                    ret = ret.replace(re, arguments[i]);
                }

                return ret;
            }
        }
    }
});

module.exports = FLanguage;

cc._RFpop();