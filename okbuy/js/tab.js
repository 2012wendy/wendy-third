function tabChange(tabname,showname){
	var tabs = document.getElementsByClassName(tabname);
	var shows = document.getElementsByClassName(showname);
	for(var i = 0;i<tabs.length;i++){
		tabs[i].onclick = function(){
			change(this);//调用改变函数，this代表当前事件源
		}
	}

	function change(obj){
		for(var i = 0;i<tabs.length;i++){
			if(tabs[i] ==obj){
				tabs[i].style.color = "#d70057";
				shows[i].style.display = "block";
			}else{
				tabs[i].style.color = "black";
				shows[i].style.display = "none";
			}
		}
	}
};
// 此方法HTML元素之间无嵌套关系，原理同方法三，区别在于将事件处理函数单独封装



function showMenu(fatherName){
	var fatDom = document.getElementById(fatherName);
	fatDom.onmouseover = function(event){
		var evt = event || window.event;
		//需要判断本事件的触发是不是来自子元素的冒泡
		var initDom = evt.target;		
		if(initDom.tagName.toLowerCase()=="li"){
			initDom.lastElementChild.style.display= "block";
			initDom.lastElementChild.onmouseover =function(event){
				var evt = event || window.event;
				if(evt.target.tagName.toLowerCase()=="a"){
					evt.target.style.cssText = "color:#d70057;transition:all .5s linear;"
				}
				initDom.lastElementChild.onmouseout = function(event){
					var evt = event || window.event;
					if(evt.target.tagName.toLowerCase()=="a"){
						evt.target.style.cssText = "color:#5a5a5a;"
					}
				}
			}
		}
		fatDom.onmouseout = function(event){
			var evt = event || window.event;
			if(evt.target.className =="myList"){
				evt.target.style.display ="none";
			}
			if(evt.target.tagName =="a"){
				evt.target.nextElementSibling.nextElementSibling.style.display ="none";
			}
		}
	}	
}
// 总结：以上通过事件的捕获和冒泡实现效果，HTML元素间有嵌套关系
// 需要利用事件的属性时，事件处理函数的参数event不能省略
// 需要调整叠放顺序

function showSub(hovername,showname){
	var hovers = document.getElementsByClassName(hovername);
	var shows = document.getElementsByClassName(showname);
	for(var i = 0;i<hovers.length ;i++){
		hovers[i].index = i;//这里是给节点增加一个index属性，并且给属性赋值。
		shows[i].index = i;
		hovers[i].onmouseover = function(){	//给每一个节点绑定鼠标滑过事件
			// console.log(this.index);//检验当前this是谁，体现了this在事件处理函数中出现时，this代表事件源。				
					
			shows[this.index].style.display ='block';//通过当前事件源的index值找到要展示的目标节点。

			shows[this.index].onmouseover = function(){	
				// console.log(this.index);						
				shows[this.index].style.display ='block';
				

				shows[this.index].onmouseout = function(){	
					// console.log(this.index);							
					shows[this.index].style.display ='none';		
				}					
			}							
		}	
		hovers[i].onmouseout = function(){	
			// console.log(this.index);	
			shows[this.index].style.display ='none';		
		}						
	}
	// 总结：onmouseenter、onmouseleave和onmouseover、onmouseout需要成对出现
	// 另外：该方法的HTML结果有没嵌套关系，故只用了事件绑定
	// 重点：函数闭包的进一步理解：1、事件处理函数没有被触发的情况下，必须等外层函数都执行完毕。2、事件一旦触发，注意变量当前的值是否已经累计完毕，如上面的i值

	
}