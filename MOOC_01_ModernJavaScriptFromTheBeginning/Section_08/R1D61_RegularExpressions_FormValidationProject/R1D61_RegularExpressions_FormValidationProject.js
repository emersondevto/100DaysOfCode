console.log("R1D61_RegularExpressions_FormValidationProject");
document.getElementById("name").addEventListener("blur", validateName);

document.getElementById("zipcode").addEventListener("blur", validateZipcode);

document.getElementById("email").addEventListener("blur", validateEmail);

document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName(e) {
  const name = e.target;
  const re = /^[a-zA-z]{2,10}$/;

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

function validateZipcode(e) {
  const zipcode = e.target;
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if (!re.test(zipcode.value)) {
    zipcode.classList.add("is-invalid");
  } else {
    zipcode.classList.remove("is-invalid");
  }
}

function validateEmail(e) {
  const email = e.target;
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}

function validatePhone(e) {
  const phone = e.target;
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}
