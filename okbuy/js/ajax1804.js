
//封装ajax
//参数:
//请求方式：get或post
//url：
//请求参数：
//是否异步
//回调函数

function ajax1804(method,url,sendStr,isAsync,func){
	let xhr = new XMLHttpRequest();
	let urlStr = url;
	if(method.toLowerCase()=="get" && sendStr!=""){	
		urlStr+="?"+sendStr;
	}
	xhr.open(method,urlStr,isAsync);
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){			
			func(xhr.responseText);
		}
	}
	if(method.toLowerCase()=="post"){	
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(sendStr);
	}else{
		xhr.send();
	}
}

function ajax1804UseObj(obj){
	
	
	let xhr = new XMLHttpRequest();
	let urlStr = obj.url;
	if(obj.method.toLowerCase()=="get" && obj.sendStr!=""){	
		urlStr+="?"+obj.sendStr;
	}
	xhr.open(obj.method,urlStr,obj.isAsync);
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){			
			obj.func&&obj.func(xhr.responseText);
		}
	}
	if(obj.method.toLowerCase()=="post"){	
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(obj.sendStr);
	}else{
		xhr.send();
	}
}


function ajax1804UseObjAndDefault(obj){
	
	let defaultObj = {
		"method":"get",
		"func":null,
		"url":"#",
		"sendStr":"",
		"isAsync":true
	};
	
	for(let key in obj){
		defaultObj[key] = obj[key];
	}
	
	let xhr = new XMLHttpRequest();
	let urlStr = defaultObj.url;
	if(defaultObj.method.toLowerCase()=="get" && defaultObj.sendStr!=""){	
		urlStr+="?"+defaultObj.sendStr;
	}
	xhr.open(defaultObj.method,urlStr,defaultObj.isAsync);
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){			
			defaultObj.func&&defaultObj.func(xhr.responseText);
		}
	}
	if(defaultObj.method.toLowerCase()=="post"){	
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.sendStr);
	}else{
		xhr.send();
	}
}




function ajax1804UsePromise(obj){
	
	let defaultObj = {
		"method":"get",
		"func":null,
		"url":"#",
		"sendStr":"",
		"isAsync":true
	};
	
	for(let key in obj){
		defaultObj[key] = obj[key];
	}
	
	let xhr = new XMLHttpRequest();
	let urlStr = defaultObj.url;
	if(defaultObj.method.toLowerCase()=="get" && defaultObj.sendStr!=""){	
		urlStr+="?"+defaultObj.sendStr;
	}
	xhr.open(defaultObj.method,urlStr,defaultObj.isAsync);
	
	let p = new Promise(function(resolve,reject){
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){			
				//defaultObj.func&&defaultObj.func(xhr.responseText);
				resolve&&resolve(xhr.responseText);
			}
		}	
	});
	
	if(defaultObj.method.toLowerCase()=="post"){	
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.sendStr);
	}else{
		xhr.send();
	}
	return p;
}


