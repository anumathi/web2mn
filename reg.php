<?php

$name=$_POST['name'];
$ename=$_POST['ename'];
$pass1=$_POST['pass1'];
$pass2=$_POST['pass2'];

if ( !empty($name) || !empty($ename) || !empty($pass1) || !empty($pass2)) {
	
	$host="localhost";
	$dbusername="root";
	$dbpassword="";
	$dbname="dummy";

	$conn=new mysqli($host,$dbusername,$dbpassword,$dbname);

	if (mysqli_connect_error()) {
		die('Connect Error('.mysqli_connect_errno() .')' .mysqli_connect_error());
	}

	else{
		$SELECT="SELECT ename from register where ename=? Limit 1";
	

	$INSERT="INSERT into register(name,ename,pass1,pass2) values(?,?,?,?)";

	$stmt=$conn->prepare($SELECT);
	$stmt->bind_param("s",$ename);
	$stmt->execute();
	$stmt->bind_result($ename);
	$stmt->store_result();
	$rnum=$stmt->num_rows;

	if ($rnum==0) {

		$stmt->close();
		$stmt=$conn->prepare($INSERT);
		$stmt->bind_param("ssss",$name,$ename,$pass1,$pass2);
		$stmt->execute();
		echo "New Record Inserted Successfully";
	}
	else{
		echo "Someone already registered email";
	}
	$stmt->close();
	$conn->close();
}
}else{
echo "All fields are required";
die();
}
?>