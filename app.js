const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const firstNameError = document.querySelector("em");
const lastNameError = document.querySelector(".lastName_error");
const emailError = document.querySelector(".email_error");
const passwordError = document.querySelector(".password_error");
const firstImage = document.querySelector(".fristname_image");
const lastImage = document.querySelector(".lastName_image");
const emailImage = document.querySelector(".email_image");
const passwordImage = document.querySelector(".password_image");
const toggle = document.getElementById("toggle_password");



console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    Errormessage.innerHTML = "First Name cannot be empty";
    Errormessage.classList.add("em");
    firstimage.classList.remove("hide");
  } else {
    firstName.classList.remove('error');
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    lastNameError.innerHTML = "Last Name cannot be empty";
    errormessage.classList.add("em");
    lastImage.classList.remove("hide");
  } else {
    lastName.classList.remove('error');
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    emailError.innerHTML = "Looks like this is not an email";
    Errormessage.classList.add("em");
    EmailImage.classList.remove("hide");

  } else {
    email.classList.remove('error');
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    passwordError.innerHTML = "password cannot be empty";
    Errormessage.classList.add("em");
    passwordImage.classList.remove("hide");
  } else {
    password.classList.remove('error');
  }
});

toggle.addEventListener("click", function() {
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
  
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
