var ue;
var up;
var upan;
var uaadhaar;
var uemail;
var ucountry;
var usports;
var uconfpass;

function validuser(ue) {
  var un = document.getElementById("username").value;
  let regex = /^[a-zA-Z0-9]{5,10}$/;
  if (un.length == 0) {
    ue.innerHTML = "Username cannot be empty";
    return false;
  }
  if (!un.match(regex)) {
    ue.innerHTML = "Username must contain only alphabets and min 5 and max 7";
    return false;
  }
  ue.innerHTML = "Valid";
  ue.style.color = "green";
  return true;
}

function checkpass(up) {
  var pass = document.getElementById("password").value;
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
  if (pass.length == 0) {
    up.innerHTML = "Password cannot be empty";
    return false;
  }
  if (!pass.match(regex)) {
    up.innerHTML =
      "Password must contain a lowercase letter, a number, uppercase letter, a number, a special character and minimum 8 characters";
    up.style.color = "red";
    return false;
  }
  up.innerHTML = "Valid";
  up.style.color = "green";
  return true;
}

function checkconfpass(uconfpass) {
  var passerror = document.getElementById("passerror");
  var pass1 = document.getElementById("password").value;
  var confpass = document.getElementById("confpassword").value;
  if (checkpass(passerror)) {
    if (pass1 == confpass) {
      uconfpass.innerHTML = "Password matches";
      uconfpass.style.color = "green";
      return true;
    } else {
      uconfpass.innerHTML = "Password does not match";
      uconfpass.style.color = "red";
      return false;
    }
  } else {
    uconfpass.innerHTML = "Original password is invalid";
    uconfpass.style.color = "red";
    return false;
  }
}

function validatepan(upan) {
  var pan = document.getElementById("pannum").value;
  let regex = /^[A-Z]{5}\d{4}[A-Z]$/;
  if (pan.length == 0) {
    upan.innerHTML = "Pan cannot be empty";
    return false;
  }
  if (!pan.match(regex)) {
    upan.innerHTML =
      "PAN must contain 5 characters in the beginning, followed by 4 numbers and ending with one character";
    return false;
  } else {
    upan.innerHTML = "Valid";
    upan.style.color = "green";
    return true;
  }
}

function validateaadhaar(uaadhaar) {
  var aadhaar = document.getElementById("aadhaarnum").value;
  let regex = /^\d{12}/;
  if (aadhaar.length == 0) {
    uaadhaar.innerHTML = "Aadhaar cannot be empty";
    return false;
  }
  if (!aadhaar.match(regex)) {
    uaadhaar.innerHTML = "Aadhaar must be a 12 digit number";
    return false;
  } else {
    uaadhaar.innerHTML = "Valid";
    uaadhaar.style.color = "green";
    return true;
  }
}

function checkemail(uemail) {
  var email = document.getElementById("uemail").value;
  let regex = /^[a-zA-Z0-9_.+]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.]+$/;
  if (email.length == 0) {
    uemail.innerHTML = "Email cannot be empty";
    return false;
  }
  if (!email.match(regex)) {
    uemail.innerHTML = "Email must contain @ and . in between";
    return false;
  } else {
    uemail.innerHTML = "Valid";
    uemail.style.color = "green";
    return true;
  }
}

function validatelocation(uloc) {
  selection = document.getElementById("sportselect");
  if (selection.value == "Default") {
    uloc.innerHTML = "Select a location!";
    return false;
  } else {
    uloc.innerHTML = "";
    return true;
  }
}

function validategender() {
  var options = document.getElementsByName("gender");

  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      document.getElementById("gendererror").innerHTML = "You may proceed!! ";
      document.getElementById("gendererror").style.color = "green";
      return true;
    }
  }

  document.getElementById("gendererror").innerHTML = "Select a Gender!";
  document.getElementById("gendererror").style.color = "red";
  return false;
}

function validatesports(usport) {
  var selection = document.getElementsByName("interest");
  for (var i = 0; i < selection.length; i++) {
    if (selection[i].checked) {
      usport.innerHTML = "Checkbox validated ";
      usport.style.color = "green";
      return true;
    }
  }
  usport.innerHTML = "Select atleast one sport!!";
  usport.style.color = "red";
  return false;
}

function handleCheck(checkbox) {
  error_checker = document.getElementById("sportserror");

  if (checkbox.checked == true) {
    error_checker.innerHTML = "You may proceed!! ";
    error_checker.style.color = "green";
  } else {
    error_checker.innerHTML = "You have to select one option";
    error_checker.style.color = "red";
  }
}

function validform() {
  var unerror = document.getElementById("usererror");
  var passerror = document.getElementById("passerror");
  var upanerror = document.getElementById("panerror");
  var uaadhaarerror = document.getElementById("aadhaarerror");
  var uemailerror = document.getElementById("emailerror");
  var ulocerror = document.getElementById("locerror");
  var buttonerror = document.getElementById("button-error");
  var sporterror = document.getElementById("sportserror");
  var confpasserror = document.getElementById("confpasserror");

  var a = validuser(unerror);
  var b = checkpass(passerror);
  var c = validatepan(upanerror);
  var d = validateaadhaar(uaadhaarerror);
  var e = checkemail(uemailerror);
  var f = validategender();
  var g = validatelocation(ulocerror);
  var h = validatesports(sporterror);
  var i = checkconfpass(confpasserror);

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
  console.log("For gender: " + f);
  console.log("For location: " + g);
  console.log("For sports: " + h);
  console.log("For conf pass: " + i);

  if (
    a == true &&
    b == true &&
    c == true &&
    d == true &&
    e == true &&
    f == true &&
    g == true &&
    h == true &&
    i == true
  ) {
    buttonerror.innerHTML = "Registration successfull!!";
    buttonerror.style.color = "green";
    return true;
  } else {
    buttonerror.style.display = "block";
    buttonerror.innerHTML = "Invalid details";
    return false;
  }
}
