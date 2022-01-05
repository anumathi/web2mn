function vfun() {
	var name=document.forms["form1"]["name"].value;
	var ename=document.forms["form1"]["ename"].value;
	var pass1=document.forms["form1"]["pass1"].value;
	var pass2=document.forms["form1"]["pass2"].value;

	if (name==null  || name=="") {
		document.getElementById("errorbox").innerHTML="Enter Name";
		return false;
	}
	if (ename==null || ename=="") {
		document.getElementById("errorbox").innerHTML="Enter Email";
		return false;
	}
	if (pass1==null || pass1=="") {
		document.getElementById("errorbox").innerHTML="Enter Password";
		return false;
	}
	if (pass2==null || pass2=="") {
		document.getElementById("errorbox").innerHTML="Enter Password2";
		return false;
	}
if (pass1!=pass2) {
	document.getElementById("errorbox").innerHTML="Do not match the Password";
	return false;
}

	if (name!='' && ename!='' && pass1!='' && pass2!='') {
		alert("Register successfully");
	}
}