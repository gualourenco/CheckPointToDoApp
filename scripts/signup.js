// Global variable signup

let name = document.querySelector('#name');
let lName = document.querySelector('#lastName');
let email = document.querySelector('#email');
let subB = document.querySelector("#submitButton");
let pass = document.querySelector('#password');
let rPass = document.querySelector('#repeatPass');
let sReq = document.querySelectorAll("#smallRequired");

// Regex
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;


subB.setAttribute("disabled", true);
subB.style.backgroundColor = "var(--app-grey)";
// --------- Validation Events ---------------


// Name Validation

//on name input
name.addEventListener('focus', function(){
    name.style.backgroundColor = "var(--secondary)";
});

//out name input
name.addEventListener('blur', function(){
    name.style.backgroundColor = "var(--app-grey)";
});

name.addEventListener('keyup', function(){

    name.value = name.value.replace(/[0-9]*/g, "");
    

    name.style.backgroundColor = "var(--app-grey)";

    if (name.value.length >= 2 ){
        name.style.backgroundColor = "var(--primary)";
        sReq[0].innerText = "";
        subB.removeAttribute('disabled');
        subB.style.backgroundColor = "var(--primary)";
    }
    else {
        name.style.backgroundColor = "#FFCCCB";
        sReq[0].innerText = 'Min. 2 letras';
        subB.setAttribute('disabled', true);
        subB.style.backgroundColor = "var(--app-grey)";
    }
});

//out name input
name.addEventListener('blur', function(){
    name.style.backgroundColor = "var(--app-grey)";
    sReq[0].innerText = "";
});

//Last Name Validation

//in last name input
lName.addEventListener('focus', function(){
    lName.style.backgroundColor = "var(--secondary)";
})

lName.addEventListener('keyup', function(){

    lName.value = lName.value.replace(/[0-9]*/g, "");
    lName.style.backgroundColor = "var(--app-grey)";

    if (lName.value.length >= 3) {
      lName.style.backgroundColor = "var(--primary)";
      sReq[1].innerText = "";
      subB.removeAttribute("disabled");
      subB.style.backgroundColor = "var(--primary)";
    } else {
      lName.style.backgroundColor = "#FFCCCB";
      sReq[1].innerText = "Min. 3 letras";
      subB.setAttribute("disabled", true);
      subB.style.backgroundColor = "var(--app-grey)";
    }
});

//out last name input
lName.addEventListener('blur', function(){
    lName.style.backgroundColor = "var(--app-grey)";
    sReq[1].innerText = "";
});

// Email Validation

//in email input
email.addEventListener('focus', function(){
    email.style.backgroundColor = 'var(--secondary)';
});

email.addEventListener('keyup', function(){
     
    email.style.backgroundColor = "var(--app-grey)";

    if (emailRegex.test(email.value)) {
       email.style.backgroundColor = "var(--primary)";
       sReq[2].innerText = "";
       subB.removeAttribute("disabled");
       subB.style.backgroundColor = "var(--primary)";
    } else {
       email.style.backgroundColor = "#FFCCCB";
       sReq[2].innerText = "Insira um email válido";
       subB.setAttribute("disabled", true);
       subB.style.backgroundColor = "var(--app-grey)";
    }
});

//out email input
email.addEventListener('blur', function(){
    email.style.backgroundColor = "var(--app-grey)";
});

//Password Validation

//in password input

pass.addEventListener("focus", function () {
  pass.style.backgroundColor = "var(--secondary)";
  sReq[2].innerText = "";
});

pass.addEventListener("keyup", function () {
  pass.style.backgroundColor = "var(--app-grey)";

  if (passRegex.test(pass.value)) {
    pass.style.backgroundColor = "var(--primary)";
    sReq[3].innerText = "";
    subB.removeAttribute("disabled");
    subB.style.backgroundColor = "var(--primary)";
  } else {
    pass.style.backgroundColor = "#FFCCCB";
    sReq[3].innerText =
      "Min. 8 caracteres, uma letra maiuscula, uma minuscula e um carct especial.";
    subB.setAttribute("disabled", true);
    subB.style.backgroundColor = "var(--app-grey)";
  }
});

//out password input
pass.addEventListener("blur", function () {
  pass.style.backgroundColor = "var(--app-grey)";
  sReq[3].innerText = "";
});

//in repeat password input

rPass.addEventListener("focus", function () {
  rPass.style.backgroundColor = "var(--secondary)";
});

rPass.addEventListener("keyup", function () {
  pass.style.backgroundColor = "var(--app-grey)";

  if (pass.value == rPass.value) {
    rPass.style.backgroundColor = "var(--primary)";
    sReq[4].innerText = "";
    subB.removeAttribute("disabled");
    subB.style.backgroundColor = "var(--primary)";
  } else {
    rPass.style.backgroundColor = "#FFCCCB";
    sReq[4].innerText =
      "As senhas devem ser iguais";
    subB.setAttribute("disabled", true);
    subB.style.backgroundColor = "var(--app-grey)";
  }
});

//out password input
rPass.addEventListener("blur", function () {
  rPass.style.backgroundColor = "var(--app-grey)";
  sReq[4].innerText = "";
});

