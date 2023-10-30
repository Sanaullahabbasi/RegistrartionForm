function formRegister() {
  event.preventDefault();
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phoneNumber = document.getElementById("number");
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirmPassword");
  var firstNameError = document.getElementById("firstNameError");
  var lastNameError = document.getElementById("lastNameError");
  var userNameError = document.getElementById("userNameError");
  var emailError = document.getElementById("emailError");
  var phoneError = document.getElementById("phoneError");
  var passwordError = document.getElementById("passwordError");
  var cPasswordError = document.getElementById("cPasswordError");

  if (firstName.value === "") {
    firstNameError.innerHTML = `
  <p class="err">*first name is required</p>`;
  } else if (lastName.value === "") {
    lastNameError.innerHTML = `
  <p class="err">*last name is required</p>`;
  } else if (name.value === "") {
    userNameError.innerHTML = `
  <p class="err">*user name is required</p>`;
  } else if (email.value === "") {
    emailError.innerHTML = `
  <p class="err">*email is required</p>`;
  } else if (phoneNumber.value === "") {
    phoneError.innerHTML = `
  <p class="err">*Phone number is required</p>`;
  } else if (password.value === "" && confirmPassword.value === "") {
    passwordError.innerHTML = `
  <p class="err">*password is required</p>`;
    cPasswordError = `
  <p class="err">*password is required</p>`;
  } else if (password.value !== confirmPassword.value) {
    cPasswordError.innerHTML = `
  <p class="err">*password is not matched</p>`;
  } else {
    Swal.fire({
      icon: "success",
      title: `registered sucessfully <br/> Thank You ${name.value.toUpperCase()}`,
      showConfirmButton: false,
      timer: 2000,
    });
    var userData = {
      name: name.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    var getUserData = JSON.parse(localStorage.getItem("userData"));
    console.log(getUserData);
  
    setTimeout(() => {
      window.location.href = "./dashboard.html";
    }, 2000);
  }


}

function checkPassword() {
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirmPassword");
  var cPasswordError = document.getElementById("cPasswordError");
  if (password.value === confirmPassword.value) {
    cPasswordError.innerHTML = `
  <p class="succes">*password matched</p>`;
  } else {
    cPasswordError.innerHTML = `
  <p class="err">*password is not matched</p>`;
  }
}

function welcome() {
  var welcome = document.getElementById("welcome");
  var getUserData = JSON.parse(localStorage.getItem("userData"));
  welcome.innerHTML = `
  <h1>Welcome to SMIT</h1>
  <h6>Hi ${getUserData.name} </h6>
  <p>your provided information are as follows </p>
  <ul>
    <li>Name : ${getUserData.name} </li>
    <li>Email : ${getUserData.email} </li>
    <li>Phone : ${getUserData.phoneNumber} </li>
  </ul>
  `;
}

welcome();

function redirect(){
  window.location.href = "./index.html"
}
function logout(){
 .com.com.com.com.com // localStorage.clear();
  setTimeout(redirect, 2000)
}