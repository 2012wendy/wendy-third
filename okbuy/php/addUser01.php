<?php	
	header("content-type:text/html;charset=utf-8");
	
	//一、接收前端传来的数据
	$phoneNumber = $_POST["phoneNumber"];
	$passWord = $_POST["passWord"];
	
	//二、保存数据
	//1、建立连接并选择数据库
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		//die("连接失败".mysql_error());
		echo "0";	
	}	
	mysql_select_db("wendydb",$con);
	
	//2、执行SQL语句
	$sqlStr = "insert into usertable(phoneNumber,userpsaa)
              values('".$phoneNumber."','".$passWord."')";
	//echo $sqlStr;
	
	$result = mysql_query($sqlStr,$con);
	
	//3、关闭数据库
	mysql_close($con);
	
	//三、给前端响应
//	echo "1";
	if($result==1){
			echo "<script>alert('注册成功，请登录');window.location.href='../html/login.html'</script>";
		}else{
			echo "<script>alert('注册失败，请重新注册');window.location.href='../html/reg.html'</script>";
		}

?>