const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const formObject = {};

  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  if (formObject.email === "" || formObject.password.trim() === "") {
    alert("Please fill in all the fields!");
  } else {
    console.log("Form Data:", formObject);
    form.reset();
  }
}
