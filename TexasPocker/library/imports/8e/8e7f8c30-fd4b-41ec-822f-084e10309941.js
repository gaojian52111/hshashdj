cc.Class({
    "extends": cc.Component,

    properties: {
        prefab: {
            "default": null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function onLoad() {

        this.node.setContentSize(cc.director.getVisibleSize());
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },