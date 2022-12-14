// Global variable signup

let name = document.querySelector('#name');
let lName = document.querySelector('#lastName');
let email = document.querySelector('#email');
let subB = document.querySelector("#submitButton");
let pass = document.querySelector('#password');
let rPass = document.querySelector('#repeatPass');
let sReq = document.querySelectorAll("#smallRequired");

// Control Variable

let nameValidation = false;
let lNameValidation = false;
let emailValidation = false;
let passValidation = false;
let rPassValidation = false;

// Disable Submit Button
subB.setAttribute("disabled", true);
subB.style.backgroundColor = "var(--app-grey)";

// ----------Validation Submit ---------------


subB.addEventListener('click', function (e){
  
  if (nameValidation && lNameValidation && emailValidation && passValidation && rPassValidation){
    e.preventDefault();
    console.log('acerto mizeravi');
    
    let signupJs = {
      firstName: name.value,
      lastName : lName.value,
      email: email.value,
      password: pass.value
    }

    let signupJson = JSON.stringify(signupJs);
    signupApi(signupJson);
  }
  
});

function signupApi(jsonReceived){
  let configRequest = {
    method: 'POST',
    body:jsonReceived,
    headers: {
      "Content-Type": "application/json"
      
    }
  }
  fetch(`${baseUrl()}/users`, configRequest)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    sucessSignup(response);
  })
  .catch((error) => {
    errorSignup(error);
  });
}

function sucessSignup(answer){
  console.log(answer.jwt);

  window.location.href = "./index.html";
}

function errorSignup(answer){
  console.log(answer.jwt);
}

//        Validation Events

// --------- Name Events ---------------
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

  if (name.value.length >= 3 ){

    name.style.backgroundColor = "var(--primary)";
    sReq[0].innerText = "";
    nameValidation = true

    if(nameValidation){
      subB.removeAttribute('disabled');
      subB.style.backgroundColor = "var(--primary)";
    }
  }else {
    name.style.backgroundColor = "#FFCCCB";
    sReq[0].innerText = 'Min. 3 letras';
    subB.setAttribute('disabled', true);
    subB.style.backgroundColor = "var(--app-grey)";
  }

});

//out name input
name.addEventListener('blur', function(){
    name.style.backgroundColor = "var(--app-grey)";
    sReq[0].innerText = "";
});

// ---------Last  Name Events ---------------

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
      
      lNameValidation = true;
      if (lNameValidation) {
        subB.removeAttribute("disabled");
        subB.style.backgroundColor = "var(--primary)";
      }
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

// --------- Email Events ---------------

//in email input
email.addEventListener('focus', function(){
    email.style.backgroundColor = 'var(--secondary)';
});

email.addEventListener('keyup', function(){
     
    email.style.backgroundColor = "var(--app-grey)";

    if (emailRegex().test(email.value)) {
       email.style.backgroundColor = "var(--primary)";
       sReq[2].innerText = "";

      emailValidation = true;
      if (emailValidation) {
        subB.removeAttribute("disabled");
        subB.style.backgroundColor = "var(--primary)";
      }
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

// --------- Password Events ---------------

//in password input

pass.addEventListener("focus", function () {
  pass.style.backgroundColor = "var(--secondary)";
  sReq[3].innerText = "";
});

pass.addEventListener("keyup", function () {
  pass.style.backgroundColor = "var(--app-grey)";

  if (passRegex().test(pass.value)) {
    pass.style.backgroundColor = "var(--primary)";
    sReq[3].innerText = "";

    passValidation = true;
    if (passValidation) {
      subB.removeAttribute("disabled");
      subB.style.backgroundColor = "var(--primary)";
    }
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

// --------- Repeat Password Events ---------------
//in repeat password input

rPass.addEventListener("focus", function () {
  rPass.style.backgroundColor = "var(--secondary)";
});

rPass.addEventListener("keyup", function () {
  pass.style.backgroundColor = "var(--app-grey)";

  if (pass.value == rPass.value) {
    rPass.style.backgroundColor = "var(--primary)";
    sReq[4].innerText = "";

    rPassValidation = true;
    if (rPassValidation) {
      subB.removeAttribute("disabled");
      subB.style.backgroundColor = "var(--primary)";
    }
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


//            End Validation Events