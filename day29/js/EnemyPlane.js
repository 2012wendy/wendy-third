
//敌机
function EnemyPlane(obj){
	//继承
	MoveObj.call(this,obj);

	this.hp = obj.hp;

	this.score = obj.score;//敌方战机值多少分

	this.boomImgs = obj.boomImgs;
}

EnemyPlane.prototype = new MoveObj();


EnemyPlane.prototype.subDo = function(){
	//???
}

EnemyPlane.prototype.boom = function(){
	//删除敌机(敌机数组，外观)
	//1)、删除敌机数组
	let index = this.map.enemyPlanes.indexOf(this);
	this.map.enemyPlanes.splice(index,1);//删除敌机数组的里敌机
	

	//2)、删除外观
	let ord = -1;
	let timer = setInterval(()=>{
		ord++;
		if(ord>=this.boomImgs.length){
			window.clearInterval(timer);
			this.domObj.remove();
			return;
		}
		this.domObj.src=this.boomImgs[ord];
	},100)

	//3、清除定时器
	window.clearInterval(this.timer);
}

EnemyPlane.prototype.edge = function(){
	if(this.top1>this.map.height){

		//删除敌机(敌机数组，外观)
		//1)、删除敌机数组
		let index = this.map.enemyPlanes.indexOf(this);
		this.map.enemyPlanes.splice(index,1);//删除敌机数组的里敌机
		console.log("删除一个敌机："+index+"，剩下："+this.map.enemyPlanes.length);
		//2)、删除外观
		this.domObj.remove();
		return true;
	}
	return false;
}
