function vfun() {
	var name=document.forms["form3"]["name"].value;
	var dno=document.forms["form3"]["dno"].value;
	var ename=document.forms["form3"]["ename"].value;
	var pno=document.forms["form3"]["pno"].value;
	var address=document.forms["form3"]["address"].value;
	var qname=document.forms["form3"]["qname"].value;
	var iname=document.forms["form3"]["iname"].value;
	var tname=document.forms["form3"]["tname"].value;
	var dname=document.forms["form3"]["dname"].value;
	var sname=document.forms["form3"]["sname"].value;
	var cname=document.forms["form3"]["cname"].value;
	var pname=document.forms["form3"]["pname"].value;
	var resume=document.forms["form3"]["resume"].value;

	if (name==null || name=="") {
		document.getElementById("errorbox").innerHTML="Enter your Fullname";
		return false;
	}
	if (dno==null || dno=="") {
		document.getElementById("errorbox").innerHTML="Enter DOB";
		return false;
	}
	if (ename==null  || ename=="") {
		document.getElementById("errorbox").innerHTML="Enter Email";
		return false;
	}
	if (pno==null || pno=="") {
		document.getElementById("errorbox").innerHTML="Enter Phone Number";
		return false;
	}
	if (address==null || address=="") {
		document.getElementById("errorbox").innerHTML="Enter your Address";
		return false;
	}
	if (qname==null || qname=="") {
		document.getElementById("errorbox").innerHTML="Enter your Qualification";
		return false;
	}
	if (iname==null || iname=="") {
		document.getElementById("errorbox").innerHTML="Enter your Institudename";
		return false;
	}
	if (tname==null || tname=="") {
		document.getElementById("errorbox").innerHTML="Enter your Town";
		return false;
	}
	if (dname==null || dname=="") {
		document.getElementById("errorbox").innerHTML="Enter your District";
		return false;
	}
	if (sname==null || sname=="") {
		document.getElementById("errorbox").innerHTML="Enter your State";
		return false;
	}
	if (cname==null || cname=="") {
		document.getElementById("errorbox").innerHTML="Enter your Country";
		return false;
	}
	if (pname==null || pname=="") {
		document.getElementById("errorbox").innerHTML="Enter your Pincode";
		return false;
	}
	if (resume==null || resume=="") {
		document.getElementById("errorbox").innerHTML="Please including your resume";
		return false;
	}
	if (name!='' && dno!='' && ename!='' && pno!='' && address!='' && qname!='' && iname!='' && tname!='' && dname!='' && sname!='' && cname!='' && pname!='' && resume!='') {
		alert(" You have Applied Successfully");
	}
}