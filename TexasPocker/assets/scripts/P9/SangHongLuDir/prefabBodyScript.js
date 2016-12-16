

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        this.node.setContentSize(cc.director.getVisibleSize());
        
    },

});
