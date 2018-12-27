
//子弹
function Bullet(obj){
	//继承
	MoveObj.call(this,obj);
	this.myplane = obj.myplane;//子弹所属的战机
	this.power = obj.power;//10;杀伤力

}

Bullet.prototype = new MoveObj();

Bullet.prototype.subDo = function(){
	this.ishit();

}

Bullet.prototype.edge = function(){	
	if(this.top1<-1*this.height){
		this.remove();
		return true;
	}
	return false;
}

//删除敌机(包括删除数组的元素，外观)
Bullet.prototype.remove = function(){
	
	//删除子弹(子弹数组，外观)
	//1)、删除子弹数组
	let index = this.myplane.bullets.indexOf(this);
	this.myplane.bullets.splice(index,1);//删除子弹数组的里子弹

	//2)、删除外观
	this.domObj.remove();

}

Bullet.prototype.dispear = function(){	
	this.remove();
	window.clearInterval(this.timer);
}

//击中
Bullet.prototype.ishit = function(){
	for(let i in this.map.enemyPlanes){
		let enempPlane = this.map.enemyPlanes[i];
		if(enempPlane.top1<0){
			continue;
		}
		//判断碰撞
		//横向区域：子弹right>=敌机的left  子弹left<=敌机的right
		//纵向区域：子弹bottom>=敌机的top  子弹top<=敌机的bottom
		let bRight = this.left1+this.width;
		let bLeft = this.left1;
		let bTop = this.top1;
		let bBottom = this.top1+this.height;

		let eRight = enempPlane.left1+enempPlane.width;
		let eLeft = enempPlane.left1;
		let eTop = enempPlane.top1;
		let eBottom = enempPlane.top1+enempPlane.height;

		if((bRight>=eLeft && bLeft<=eRight)&&(bBottom>=eTop && bTop<=eBottom)){
			this.dispear();
			enempPlane.boom();
			this.myplane.addScore(enempPlane.score);			
			break;
		}
	}
}