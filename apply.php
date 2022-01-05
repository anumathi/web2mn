<?php
$name=$_POST['name'];
$dno=$_POST['dno'];
$ename=$_POST['ename'];
$pno=$_POST['pno'];
$address=$_POST['address'];
$qname=$_POST['qname'];
$iname=$_POST['iname'];
$tname=$_POST['tname'];
$dname=$_POST['dname'];
$sname=$_POST['sname'];
$cname=$_POST['cname'];
$pname=$_POST['pname'];
$resume=$_POST['resume'];

if (!empty($name) || !empty($dno) || !empty($ename) || !empty($pno) || !empty($address) || !empty($qname) || !empty($iname) || !empty($tname) || !empty($dname)|| !empty($sname)|| !empty($cname) || !empty($pname) || !empty($resume)) {

	$host="localhost";
	$dbusername="root";
	$dbpassword="";
	$dbname="rose";

	$conn=new mysqli($host,$dbusername,$dbpassword,$dbname);

	if (mysqli_connect_error()) {
		die('Connect Error(' . mysqli_connect_errno() .')' . mysqli_connect_error());
		# code...
	}

	else{

		$SELECT="SELECT ename from apply where ename=? Limit 1";

		$INSERT="INSERT Into apply(name,dno,ename,pno,address,qname,iname,tname,dname,sname,cname,pname,resume) values(?,?,?,?,?,?,?,?,?,?,?,?,?)";


		$stmt=$conn->prepare($SELECT);
		$stmt->bind_param("s",$ename);
		$stmt->execute();
		$stmt->bind_result($ename);
		$stmt->store_result();
		$rnum=$stmt->num_rows;

		if ($rnum==0) {

			$stmt->close();
			$stmt=$conn->prepare($INSERT);
			$stmt->bind_param("sisisssssssis",$name,$dno,$ename,$pno,$address,$qname,$iname,$tname,$dname,$sname,$cname,$pname,$resume);
			$stmt->execute();
			echo "New Record Inserted Successfully";
			# code...
		}
		else{
			echo "Someone already applied ";
		}
		$stmt->close();
		$conn->close();
	}
}
	else{
		echo "All Fields Recuried";
		die();
	}
	?>
