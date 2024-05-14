// IMPORTS

import { validateLoginForm } from "./loginValidation.js";



// SELECTING LOG IN FORM ELEMENTS

const loginForm = document.querySelector('.form-login');

const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const loginButton = document.querySelector('.login-button');

const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');
const submissionError = document.querySelector('.submission-error');

// EVENT LISTENER TO LOG IN BUTTON

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    validateLoginForm(
        emailInput.value,
        passwordInput.value,
        emailError,
        passwordError
    );
});

validateLoginForm(emailInput.value, passwordInput.value, emailError, passwordError)