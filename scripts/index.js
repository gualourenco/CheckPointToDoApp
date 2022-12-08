//Global Variable index
let emailIndex = document.querySelector('#emailIndex');
let passIndex = document.querySelector('#passIndex');
let subB = document.querySelector('#signIn');
let sReq = document.querySelectorAll("#smallRequired");

// Regex
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  //Control Variable

let emailValidation = false;
let passValidation = false;

// Disable Submit Button
subB.setAttribute("disabled", true);
subB.style.backgroundColor = "var(--app-grey)";

subB.addEventListener("click", function (e) {
  if (
    emailValidation &&
    passValidation 
  ) {
    e.preventDefault();
    console.log("acerto mizeravi"); 

    let loginJs = {
      email: emailIndex.value,
      password: passIndex.value,
    };

    let loginJson = JSON.stringify(loginJs);
    loginApi(loginJson);
  }
});

function loginApi(jsonReceived) {
  let configRequest = {
    method: "POST",
    body: jsonReceived,
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("http://todo-api.ctd.academy:3000/v1/users/login", configRequest)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      sucessLogin(response);
    })
    .catch((error) => {
      errorLogin(error);
    });
}

function sucessLogin(answer) {
  console.log(answer.jwt);
}

function errorLogin(answer) {
  console.log(answer.jwt);
}

  // --------- Email Events ---------------

//in email input
emailIndex.addEventListener("focus", function () {
  emailIndex.style.backgroundColor = "var(--secondary)";
});

emailIndex.addEventListener("keyup", function () {
  emailIndex.style.backgroundColor = "var(--app-grey)";

  if (emailRegex.test(emailIndex.value)) {
    emailIndex.style.backgroundColor = "var(--primary)";
    sReq[0].innerText = "";

    emailValidation = true;
    if (emailValidation) {
      subB.removeAttribute("disabled");
      subB.style.backgroundColor = "var(--primary)";
    }
  } else {
    emailIndex.style.backgroundColor = "#FFCCCB";
    sReq[0].innerText = "Insira um email válido";
    subB.setAttribute("disabled", true);
    subB.style.backgroundColor = "var(--app-grey)";
  }
});

// --------- Password Events ---------------

//in password input

passIndex.addEventListener("focus", function () {
  passIndex.style.backgroundColor = "var(--secondary)";
  sReq[1].innerText = "";
});

passIndex.addEventListener("keyup", function () {
  passIndex.style.backgroundColor = "var(--app-grey)";

  if (passRegex.test(passIndex.value)) {
    passIndex.style.backgroundColor = "var(--primary)";
    sReq[1].innerText = "";

    passValidation = true;
    if (passValidation) {
      subB.removeAttribute("disabled");
      subB.style.backgroundColor = "var(--primary)";
    }
  } else {
    passIndex.style.backgroundColor = "#FFCCCB";
    sReq[1].innerText =
      "Min. 8 caracteres, uma letra maiuscula, uma minuscula e um carct especial.";
    subB.setAttribute("disabled", true);
    subB.style.backgroundColor = "var(--app-grey)";
  }
});

//out password input
passIndex.addEventListener("blur", function () {
  passIndex.style.backgroundColor = "var(--app-grey)";
  sReq[1].innerText = "";
});