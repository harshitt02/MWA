function formValidation()
{
	var uname = document.registration.username;
	var upswd = document.registration.password;
	var ucnfpswd = document.registration.cnfpassword;
	var ucountry = document.registration.country;
	var uzip = document.registration.zip;
	var uemail = document.registration.email;
	var upancard = document.registration.pancard;
	var uaadhar = document.registration.aadharcard;
	var umsex = document.registration.msex;
	var ufsex = document.registration.fsex; 
	var en = document.registration.en;
	var nonen = document.registration.nonen;


	if(allLetter(uname)){
		if(checkPswd(upswd)){
			if(confirmPswd(ucnfpswd,upswd)){
				if(countryselect(ucountry)){
					if(allnumeric(uzip)){
						if(ValidateEmail(uemail)){
							if(ValidPan(upancard)){
								if(ValidAadhar(uaadhar)){
									if(validsex(umsex,ufsex)){
										if(validLang(en,nonen)){
										
										}
									}
								}
							}
						} 
					}
				}
			}
		}
	}
	return false;
} 


function allLetter(uname){ 
	var letters = /^[A-Za-z]+$/;
	if(uname.value.match(letters)){
		return true;
	}
	else{
		document.getElementById("usererror").innerHTML="Username must have alphabet characters only";
		// alert('Username must have alphabet characters only');
		uname.focus();
		return false;
	}
}

function checkPswd(upswd){
	var pswdformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
	if(upswd.value.match(pswdformat)){
		return true;
	}
	else{
		document.getElementById("pswderror").innerHTML="Password must at least have eight characters, including at least one number and includes both lower & uppercase letters";
		// alert('User address must have alphanumeric characters only');
		upswd.focus();
		return false;
	}
}

function confirmPswd(ucnfpswd,upswd){
	if(ucnfpswd.value==upswd.value){
		return true;
	}
	else{
		document.getElementById("cnfpswderorr").innerHTML="Password does not match";
		// alert('User address must have alphanumeric characters only');
		ucnfpswd.focus();
		return false;
	}
}

function countryselect(ucountry){
	if(ucountry.value == "Default"){
		document.getElementById("countryerror").innerHTML="Select your country from the list";
		// alert('Select your country from the list');
		ucountry.focus();
		return false;
	}
	else{
		return true;
	}
}
function allnumeric(uzip){ 
	var numbers = /^[0-9]+$/;
	if(uzip.value.match(numbers)){
		return true;
	}
	else{
		document.getElementById("ziperror").innerHTML="Invalid Zip Code"
		// alert('ZIP code must have numeric characters only');
		uzip.focus();
		return false;
	}
}

function ValidateEmail(uemail){
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(uemail.value.match(mailformat)){
		return true;
	}
	else{
		document.getElementById("emailerror").innerHTML="Invalid Email Address"
		// alert("You have entered an invalid email address!");
		uemail.focus();
		return false;
	}
}

function ValidPan(upancard){
	var panformat=/^[A-Z]{5}\d{4}[A-Z]$/;
	if(upancard.value.match(panformat)){
		return true;
	}
	else{
		document.getElementById("panerror").innerHTML="Invalid Pan ID";
		// alert("You have entered an invalid Pan ID!");
		upancard.focus();
		return false;
	}
}

function ValidAadhar(uaadhar){
	var aadharformat=/^[2-9][0-9]{11}$/;
	if(uaadhar.value.match(aadharformat)){
		return true;
	}
	else{
		document.getElementById("aadharerror").innerHTML="Invalid Aadhar Number";
		// alert("You have entered an invalid Aadhar ID!");
		uaadhar.focus();
		return false;
	}
}


function validsex(umsex,ufsex){
	x=0;
	if(umsex.checked) {
		x++;
	} 
	if(ufsex.checked){
		x++; 
	}
	if(x==0){
		alert('Select Male/Female');
		umsex.focus();
		return false;
	}
	else{
		return true;
	}
}
function validLang(en,nonen){
	y=0;
	if(en.checked) {
		y++;
	} 
	if(nonen.checked){
		y++; 
	}
	if(y==0){
		alert('Select a Language');
		en.focus();
		return false;
	}
	else{
		alert('Form Succesfully Submitted');
		window.location.reload();
	}
}
