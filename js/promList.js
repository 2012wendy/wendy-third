function Banner(obj){
	let defaultObj={
		boxDom : null,
		width :400 ,
		height : 300,
		imgs : [],
		spans:[],
		endTimes:[]
	};
	for(let key in defaultObj){
		obj[key]!==undefined?(this[key] = obj[key]):(this[key] = defaultObj[key]);
	}

	this.createLI();
	
}



Banner.prototype.createLI = function(){
	this.boxDom.style.overflow="hidden";
	for(let i=0;i<this.imgs.length;i++){		
		let liDom = document.createElement("li");
		liDom.style.cssText = "float:left;margin-bottom:10px;";
		if(i%2==0){
			liDom.style.marginRight = "10px";
		}

		let aDom = document.createElement("a");
		aDom.href = "#";
		aDom.style.cssText = "font-family:Microsoft YaHei;border:1px solid #e9e7ea;display:block;position:relative;width:593px;height:208px;";
		liDom.appendChild(aDom);		
			

		let imgDom = document.createElement("img");
		imgDom.style.width = this.width+"px";
		imgDom.style.height = this.height+"px";
		imgDom.src = this.imgs[i];
		aDom.appendChild(imgDom);		


		for(let j = 4*i;j<4*(i+1);j++){
			let spanDom = document.createElement("span");
			spanDom.innerHTML = this.spans[j];
			spanDom.style.cssText = "position:absolute;left:0;width:200px;top:76px;color:#333;font-size:14px;line-height:18px;text-align:center;"
			if(j==(1+4*i)){
				spanDom.style.top ="94px";
			}else if(j==(2+4*i)){
				spanDom.style.top = "144px";
				spanDom.style.color = "#d70057";
				spanDom.style.fontSize = "20px";
				spanDom.style.fontWeight = "bold";

			}else if(j==(3+4*i)){
				spanDom.style.top = "174px";
				// spanDom.style.color = "";

				let mytimer = setInterval(()=>{
					var startTime = new Date();
					// var startTime = oTime.getTime();
					var dTime = this.endTimes[i];
					var endTime = new Date(dTime);
					var c = endTime - startTime;
					if(c<=0){
						spanDom.innerHTML = "sorry~活动结束";
						clearInterval(mytimer);						
					}else{
						var minSec = parseInt((c%1000)/100);
						c = c/1000;					
						var sec = parseInt(c%60);
						var min = parseInt((c/60)%60);
						var hour = parseInt((c/3600)%24);
						var day = parseInt(c/3600/24);

						spanDom.innerHTML =  day + " 天 " + hour +" 时 " + min +
						 " 分 " + sec + " 秒 " + minSec;
						};					
				},100)		
			}
			aDom.appendChild(spanDom);
//json用二维数组传参的效果
			/*for(let j = 0;j<this.spans.length;j++){
			let spanDom = document.createElement("span");
			spanDom.innerHTML = this.spans[i][j];
			spanDom.style.cssText = "position:absolute;top:0;width:200px;top:76px;color:#333;font-size:14px;line-height:18px;text-align:center;"
				if(j==1){
					spanDom.style.top ="94px";
				}else if(j==2){
					spanDom.style.top = "144px";
					spanDom.style.color = "#d70057";
					spanDom.style.fontSize = "20px";
					spanDom.style.fontWeight = "bold";

				}else if(j==3){
					
				}*/			
		}
//把span写死的效果
			/*let span1Dom = document.createElement("span");
			span1Dom.innerHTML = "特价鞋服";
			let span2Dom = document.createElement("span");
			span2Dom.innerHTML = "限时嗨购";
			let span3Dom = document.createElement("span");
			span3Dom.innerHTML = "299元封顶";
			let span4Dom = document.createElement("span");
			span4Dom.innerHTML = "";*/		

			/*aDom.appendChild(span1Dom);
			aDom.appendChild(span2Dom);
			aDom.appendChild(span3Dom);
			aDom.appendChild(span4Dom);*/
		this.boxDom.appendChild(liDom);			
	}
}

