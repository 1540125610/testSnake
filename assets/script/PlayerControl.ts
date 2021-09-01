// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerControl extends cc.Component {
    private speed:number = 200;       //速度

    private Xspeed:number = 0;      // x速度
    private Yspeed:number = 0;      // y速度

    @property(cc.Node)
    camera:cc.Node = null;


    //进入房间时执行
    onLoad(){
        // 初始化键盘输入监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onDestroy () {
        // 取消键盘输入监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    //按下按键
    onKeyDown (event) {
        // set a flag when key pressed
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.Xspeed = this.speed*-1;
                break;
            case cc.macro.KEY.d:
                this.Xspeed = this.speed;
                break;
            case cc.macro.KEY.w:
                this.Yspeed = this.speed;
                break;
            case cc.macro.KEY.s:
                this.Yspeed = this.speed*-1;
                break;
        }
    }

    //按下抬起按键
    onKeyUp (event) {
        // unset a flag when key released
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.Xspeed = 0;
                break;
            case cc.macro.KEY.d:
                this.Xspeed = 0;
                break;
            case cc.macro.KEY.w:
                this.Yspeed = 0;
                break;
            case cc.macro.KEY.s:
                this.Yspeed = 0;
                break;
        }
    }

    update(dt){
        this.node.x += this.Xspeed * dt;
        this.node.y += this.Yspeed * dt;
    }
    

}
