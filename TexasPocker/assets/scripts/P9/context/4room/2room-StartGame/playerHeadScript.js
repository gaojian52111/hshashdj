const MVC = require("FWS_MVC");
cc.Class({
    extends: MVC.FMessageConnection,

    properties: {
        icon:{
            default:null,
            type:cc.Node
        },
        playerName:{
            default:null,
            type:cc.Label
        },
        num:-1,//-1代表没人
        //其他数据自动获取
    },

    // use this for initialization
    onLoad: function () {
        if (this.num == -1){
            // this.name.string = "没有人";

        }
        else if(this.num == 0){
            // this.node.setPosition();
        }
        else if(this.num == 1){

        }
        else if(this.num == 2){

        }
        else if(this.num == 3){

        }
        else if(this.num == 4){

        }
        else if(this.num == 5){

        }
    },
    //头像被点击了会发送一个消息 player详情的layer
    headOnClick:function () {

    }

});
