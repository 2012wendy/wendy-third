let mapSingleton = (function(){
	function Map(width,height,background){
		this.domObj = null;//地图的div
		this.moveBox = null;

		this.width = width;
		this.height = height;
		this.background = background;	
		this.enemyPlanes = [];//敌机数组
		this.myPlanes = [];//我方战机数组

		this.createUI();
		this.moveBg();
	}

	//853  600
	Map.prototype.createUI = function() {
		//1、地图的div
		this.domObj = document.createElement("div");
		this.domObj.style.cssText = `margin:20px auto;position: relative;width:${this.width}px;height:${this.height}px;overflow:hidden`;

		document.body.appendChild(this.domObj);

		//2、移动的div

		this.moveBox = document.createElement("div");
		this.moveBox.style.cssText = `position: absolute;
					top:-1106px;
					width: 480px;
					height: 1706px;`;
		this.domObj.appendChild(this.moveBox);				

		//3、图片
		for(var i=0;i<2;i++){
			let img01 = document.createElement("img");
			img01.src = this.background;
			img01.style.cssText = `display: block`;
			this.moveBox.appendChild(img01);
		}
		
		//4、积分板：
		this.scoreDom = document.createElement("div");
		this.scoreDom.style.cssText = "position:absolute;left:0px;top:0px;width:100px;height:35px;z-index:999";
		this.scoreDom.innerHTML = 0;
		this.domObj.appendChild(this.scoreDom);
	};

	Map.prototype.moveBg = function(){
		let top1 = -1106;

		setInterval(()=>{
			top1++;

			if(top1>=-253){
				top1 = -1106;
			}

			this.moveBox.style.top = top1+"px";

		},50);
	}

	var instance;

	return {
		getInstance:function(width,height,background){
			if(instance==undefined){
				instance = new Map(width,height,background);
			}else{
				instance.width = width;
				instance.height = height;
				instance.background = background;
				instance.domObj.style.width=this.width+"px";
				instance.domObj.style.height=this.height+"px";
				instance.moveBox.children[0].src=this.background;
				instance.moveBox.children[1].src=this.background;
			}
			return instance;
		}
	}
})();


