const MVC = require("FWS_MVC");
var roomHandSignController;
var FaShouPaiTestLayer;
roomHandSignController = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function() {


    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {
        FaShouPaiTestLayer.removeFromParent(true);
    }

});
module.exports = roomHandSignController;