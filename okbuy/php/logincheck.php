<?php
	header("Content-type:text/html;charset=utf-8");

	//recive
	$vipid = $_POST['vipId'];
	$vippw = $_POST['vipPass'];

	//deal
	//1.connect database server
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){

	}else{
		//2.choose database
		mysql_select_db("wendydb",$conn);

		//3.execute SQL

		$sqlstr = "select * from usertable where phoneNumber = '$vipid' and userpsaa = '$vippw'";
		$result = mysql_query($sqlstr,$conn);

		//close datebase

		mysql_close($conn);
		if(mysql_num_rows($result)==0){
			//responds
			echo "<script>alert('登录失败，请重新登录');window.location.href='../html/login.html'</script>";
		}else{
			echo "<script>alert('登录成功');window.location.href='../html/index.html'</script>";
		}
	}
	
?>