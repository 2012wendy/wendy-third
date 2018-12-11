function Advert(obj){
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



Advert.prototype.createLI = function(){
	this.boxDom.style.overflow="hidden";
	for(let i=0;i<this.imgs.length;i++){		
		let liDom = document.createElement("li");
		liDom.style.cssText = "float:left;margin-bottom:10px;";
		if(i%3==1){
			liDom.style.marginRight = "10px";
			liDom.style.marginLeft = "10px";
		}

		let aDom = document.createElement("a");
		aDom.style.cssText = "font-family:Microsoft YaHei;border:1px solid #e9e7ea;display:block;position:relative;";
		aDom.style.width = this.width +"px";
		aDom.style.height = this.height +"px";
		aDom.href = "#";				
		liDom.appendChild(aDom);		
			

		let imgDom = document.createElement("img");
		imgDom.style.width = this.width+"px";
		imgDom.style.height = this.height+"px";
		imgDom.src = this.imgs[i];
		aDom.appendChild(imgDom);		


		// for(let j = 3*i;j<3*(i+1);j++){
		let pDom = document.createElement("p");
			pDom.innerHTML = this.spans[3*i];
			pDom.style.cssText = "position:absolute;left:20px;bottom:50px;color:#333;font-size:18px;line-height:18px;text-align:center;"
			aDom.appendChild(pDom);	

		let spanDom = document.createElement("span");
			spanDom.innerHTML = this.spans[(i*3)+1];
			spanDom.style.cssText = "color:#d70057;font-weight:bold;" 	
			pDom.appendChild(spanDom);	
			
		this.boxDom.appendChild(liDom);			
	}
}

