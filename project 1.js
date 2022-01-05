function vfun() {
	var uname=document.forms["form"]["uname"].value;
	var upass=document.forms["form"]["upass"].value;

	if (uname==null || uname=="") {
		document.getElementById("errorbox").innerHTML="Enter Username";
		return false;
	}
 
 if(upass==null || upass==""){

 	document.getElementById("errorbox").innerHTML="Enter Password";
 	return false;
 }     
 if (uname!='' && upass!='') {
 	alert("Login successfully");
 }
}