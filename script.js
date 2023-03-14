"use strict";

const inputField = document.getElementById("email");
const button = document.querySelector(".subscribe-btn");
const errorMessage = document.querySelector(".error-message");
let validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateEmail(input, error) {
  if (!input.value.match(validRegex)) {
    error.style.display = "block";
  } else if (input.value == "") {
    error.style.display = "none";
  }
}
