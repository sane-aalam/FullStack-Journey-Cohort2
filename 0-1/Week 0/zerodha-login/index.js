console.log("connected with javascript!");

const loginButton = document.getElementById("logbut");

function isValidPassword(password) {
  console.log(email);
  console.log(password);
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>\-_+=;']).{8,20}$/;
  return passwordRegex.test(password);
}

function isvalidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

loginButton.addEventListener("click", function () {
  const email = document.getElementById("emailId").value;
  const password = document.getElementById("passwordId").value;
  console.log(email);
  console.log(password);
  // event.preventDefault() - in future we will mix it
  if (isvalidEmail(email) && isValidPassword(password)) {
    alert("Yes!");
  } else {
    alert("No!");
  }
});
