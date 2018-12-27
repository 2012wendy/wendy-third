
//我方战机
function MyPlane(obj){
	//继承
	MoveObj.call(this,obj);
	this.score = 0;
	this.hp = obj.hp;
	this.bullets = [];
}

MyPlane.prototype = new MoveObj();

MyPlane.prototype.addEvent = function(){
	let myplane = this;
	this.map.domObj.onmousemove = function(event){
		let evt = event || window.event;
		//1、
		myplane.left1 = evt.pageX-this.offsetLeft-myplane.width/2;
		myplane.top1 = evt.pageY-this.offsetTop-myplane.height/2;

		if(myplane.left1<=0){
			myplane.left1=0;
		}else if(myplane.left1>=this.offsetWidth-myplane.width){
			myplane.left1=this.offsetWidth-myplane.width;
		}


		if(myplane.top1<=0){
			myplane.top1=0;
		}else if(myplane.top1>=this.offsetHeight-myplane.height){
			myplane.top1=this.offsetHeight-myplane.height;
		}

		myplane.domObj.style.left = myplane.left1+"px";
		myplane.domObj.style.top = myplane.top1+"px";
	}

}

MyPlane.prototype.shoot = function(){

	setInterval(()=>{
		let b1 = new Bullet({
			myplane:this,
			map : this.map,
			width : 6,
			height : 14,
			imgUrl : "img/bullet1.png",

			left1 : this.left1+(this.width-6)/2,//??
			top1 : this.top1-14,
			leftInc : 0,
			topInc : 28,
			leftDirection : 0,
			topDirection :-1,
			timeSpace : 100
		});
		b1.go();

		this.bullets.push(b1);
		// console.log("添加一个："+this.bullets.length);

	},100);
}

//加分
MyPlane.prototype.addScore = function(score){
	this.score += score;
	this.map.scoreDom.innerHTML = "积分："+this.score;
}