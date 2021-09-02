// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class camera extends cc.Component {
    @property(cc.SpriteFrame)
    map:cc.SpriteFrame = null;

    public cameraWidth = null;      //摄像机宽
    public cameraHeight = null;     //摄像机高

    public _bufferImage:cc.RenderTexture = new cc.RenderTexture();

    onLoad(){
        // let camera = cc.view.getVisibleSize();      //初始化摄像机宽高
        // this.cameraWidth = camera.width;
        // this.cameraHeight = camera.height;

        //this._bufferImage = this.map.getTexture();
        //createImageBitmap()
        this._bufferImage.initWithSize(800,800);

        this._bufferImage.drawTextureAt(this.map.getTexture(),0,0);
        this._bufferImage.drawTextureAt(this.map.getTexture(),400,0);
        this._bufferImage.drawTextureAt(this.map.getTexture(),0,400);
        this._bufferImage.drawTextureAt(this.map.getTexture(),400,400);

        let i =this.node.getComponent(cc.Camera);
        
        i.targetTexture = this._bufferImage;

        console.log(i);
        
    }

    public scrollMap1(distanceX:number,distanceY:number){
        if(distanceX ==0 && distanceY==0 ){     //不移动时 
            return;
        }

        if(distanceX  < this.cameraWidth && distanceY < this.cameraHeight){     //矩形是否相交

        }
        else{
            console.log("位移超过摄像机宽高")
        }
    }

    // public scrollMap(distanceX, distanceY) {
	// 	// TODO Auto-generated method stub
	// 	//触摸位移灵敏度
	// 	let newScrLeft = screenInMapLoc.x + (int)distanceX/5;
	// 	let newScrTop = screenInMapLoc.y + (int)distanceY/5;
		
		
		
	// 	//设置后则是考虑相交区域
	// 	lastScrInMapLoc = new Point(screenInMapLoc.x,screenInMapLoc.y);

	// 	if(newScrLeft>0 && newScrLeft + SCREEN_WIDTH<mapWidth){
	// 		screenInMapLoc.x = newScrLeft;
	// 	}
	// 	else if(newScrLeft<=0){
	// 		screenInMapLoc.x = 0;
	// 	}
	// 	else{
	// 		screenInMapLoc.x = mapWidth - SCREEN_WIDTH;
	// 	}
		
	// 	if(newScrTop>0 && newScrTop + SCREEN_HEIGHT<mapHeight){
	// 		screenInMapLoc.y = newScrTop;
	// 	}
	// 	else if(newScrTop<=0){
	// 		screenInMapLoc.y = 0;
	// 	}
	// 	else{
	// 		screenInMapLoc.y = mapHeight - SCREEN_HEIGHT;
	// 	}
		
	// 	Long begin = System.currentTimeMillis();
	// 	bufferImage = drawBufferImage();
	// 	Long end = System.currentTimeMillis();
		
	// 	Log.d("cramack","耗时:" + (end - begin) + "ms");
	// }

}

