function tabChange(tabname,showname){
	var tabs = document.getElementsByClassName(tabname);
	var shows = document.getElementsByClassName(showname);
	for(var i = 0;i<tabs.length;i++){
		tabs[i].onclick = function(){
			change(this);
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
}