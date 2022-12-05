let form = document.querySelector("#formulary");
let inputReq = document.querySelector("#inputReq");
let inputEmail = document.querySelector("#inputEmail");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let inputPass = document.querySelector("#inputPassword");
let submit = document.querySelector("#submit");

form.addEventListener(
    'submit', (e) =>{
        e.preventDefault();
        emailValidate();
        alert('testando');
    }
)

function setError(index){
    inputReq[index].style.border = "2px solid #e63636";
    inputReq[index].style.backgroundColor = " #FFCCCB";
    inputReq[index].style.color = " #000";
    submit.style.backgroundColor = "#6c6B6B";
    submit.setAttribute("disabled", true);
}

function removeError(index) {
  inputReq[index].style.border = "1px solid #000";
  inputReq[index].style.backgroundColor = " #FFFF";
  inputReq[index].style.color = " #000";
  btnSubmit.style.backgroundColor = "#279DF3";
  btnSubmit.removeAttribute("disabled", false);
}

function emailValidate(){
    inputReq[0].value != emailRegex? setError(0): removeError(0);
};
