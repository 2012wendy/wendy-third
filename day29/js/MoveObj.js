
//移动的物体
function MoveObj(obj){
	if(obj){
		this.map = obj.map;
		this.domObj = null;//当前对象所对应的DOM对象
		this.width = obj.width;
		this.height = obj.height;
		this.imgUrl = obj.imgUrl;

		//移动相关的属性
		this.left1 = obj.left1;
		this.top1 = obj.top1;
		this.leftInc = obj.leftInc;
		this.topInc = obj.topInc;
		this.leftDirection = obj.leftDirection;
		this.topDirection =obj.topDirection;
		this.timeSpace = obj.timeSpace;

		this.timer = null;
		this.createUI();
	}

}

MoveObj.prototype.createUI = function(){
	this.domObj = document.createElement("img");
	this.domObj.src = this.imgUrl;
	this.domObj.style.cssText = `position:absolute;width:${this.width}px;height:${this.height}px;left:${this.left1}px;top:${this.top1}px;`;

	this.map.domObj.appendChild(this.domObj);

}

MoveObj.prototype.go =function(){
	this.timer = setInterval(()=>{
		this.left1 = this.left1+this.leftDirection*this.leftInc;
		this.top1 = this.top1+this.topDirection*this.topInc;

		if(this.edge){
			if(this.edge()){
				window.clearInterval(this.timer);
				return;
			}
		}

		this.subDo&&this.subDo();//子类所干的事情；

		this.domObj.style.left = this.left1+"px";
		this.domObj.style.top = this.top1+"px";

	},this.timeSpace);
}