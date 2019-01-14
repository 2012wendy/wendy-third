<?php
	header("Content-type:text/html;charset=utf-8");

	

	$link = mysql_connect("localhost","root","root");

	if(!$link){
		echo "fail";
	}else{
		mysql_select_db("wendydb",$link);

		$sqlstr = "select * from morebanner ";
		$result = mysql_query($sqlstr,$link);

		mysql_close($link);

		$str = "[";
		$query_row = mysql_fetch_array($result);

		while($query_row){

			$str = $str.'{"imgadd":"'.$query_row[1].'","prowords":"'.$query_row[2].'"}';
			$query_row = mysql_fetch_array($result);
			if($query_row){
				$str = $str.",";
			}
		}
		$str = $str."]";
		echo $str;
	}
?>