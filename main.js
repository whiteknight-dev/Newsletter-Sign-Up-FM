const form = document.querySelector(".info__form");
const emailInput = document.querySelector("#email");

function validateEmail(email) {
  if (!email) return "Email is required";

  const isValidEmail = /^\S+@\S+$/g;
  if (!isValidEmail.test(email)) {
    return "Enter a valid email";
  }

  return "";
}

function handleSubmit(event) {
  event.preventDefault();

  const formEntries = new FormData(event.target).entries();
  const { email } = Object.fromEntries(formEntries);

  const emailErrorMessage = validateEmail(email);

  const errorMessageElement = document.querySelector(".form-messages");
  if (emailErrorMessage) {
    errorMessageElement.innerText = emailErrorMessage;
    emailInput.classList.add("error");
    emailInput.innerText = email;
  } else {
    errorMessageElement.innerText = "";
    emailInput.classList.remove("error");
    window.location.href = "/success.html";
  }
}

form.addEventListener("submit", handleSubmit);
