const StringUtils = cc.Class({
    name: "StringUtils",
    statics: {
        //去除前面的空白字符
        ltrim: function(src) {
            if (src) {
                return src.replace(/^\s+/g, "");
            } else {
                return "";
            }
        },
        //去除后面的空白字符
        rtrim: function(src) {
            if (src) {
                return src.replace(/\s+$/g, "");
            } else {
                return "";
            }
        },
        //去除前面和后面的空白字符
        trim: function(src) {
            return StringUtils.ltrim(StringUtils.rtrim(src));
        },
        //格式化字符串:  "{0},{1},{2}...", ...
        format: function() {
            if (arguments.length > 0 && arguments[0]) {
                var ret = arguments[0] + "";
                for (var i = 0; i < arguments.length; i++) {
                    var a = arguments[i];
                    var re = new RegExp("\\{" + (i - 1) + "\\}", "gm");
                    ret = ret.replace(re, a);
                }
                return ret;
            } else {
                return "";
            }
        },
        //格式化字符串: "{key1},{key2},{key3}..."
        formatEx: function(template, data) {
            if (template) {
                var ret = template + "";
                if (data) {
                    for (var k in data) {
                        var v = data[k];
                        var re = new RegExp("\\{" + k + "\\}", "gm");
                        ret = ret.replace(re, v);
                    }
                }
                return ret;
            }
            return "";
        }
    }
});

module.exports = StringUtils;