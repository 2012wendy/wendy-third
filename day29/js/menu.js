
//定义一个类：菜单项类(相当于dom节点)

function MenuItem(obj) {
	this.domObj = null;

	this.className = obj.className;//代替了width，height等等
	this.title = obj.title;//菜单上的文字
	this.href =  obj.href;
	
	this.children = [];//dom的孩子
	this.ulClass =  obj.ulClass;//子菜单容器的class
}

MenuItem.prototype.appendChild = function(menuItemObj){
	this.children.push(menuItemObj);
}


MenuItem.prototype.removeChild = function(menuItemObj){
	let index = this.children.indexOf(menuItemObj);
	this.children.splice(index,1);
}

MenuItem.prototype.createUI = function(ulDom) {
	//1、创建自身的li
	this.domObj = document.createElement("li");
	this.domObj.className = this.className;	
	let aDom = document.createElement("a");
	aDom.href = this.href;
	aDom.innerHTML = this.title;
	this.domObj.appendChild(aDom);

	//把this.domObj放入ul里
	ulDom.appendChild(this.domObj);

	if(this.children.length>0){
		//2、创建子节点
		//1)、创建子节点的容器
		let ulDom = document.createElement("ul");
		ulDom.className = this.ulClass;
		this.domObj.appendChild(ulDom);

		for(let i in this.children){
			this.children[i].createUI(ulDom);
		}
	}
};

function RootMenu(obj){
	this.children = [];//dom的孩子
	this.ulClass =  obj.ulClass;//子菜单容器的class
}

RootMenu.prototype.appendChild = function(menuItemObj){
	this.children.push(menuItemObj);
}

RootMenu.prototype.createUI = function(boxDom){
	if(this.children.length>0){
		//2、创建子节点
		//1)、创建子节点的容器
		let ulDom = document.createElement("ul");
		ulDom.className = this.ulClass;
		boxDom.appendChild(ulDom);
		for(let i in this.children){
			this.children[i].createUI(ulDom);
		}
	}
}