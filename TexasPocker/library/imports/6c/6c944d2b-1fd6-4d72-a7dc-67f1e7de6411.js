

cc.Class({
    "extends": cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        this.node.setContentSize(cc.director.getVisibleSize());
    }

});