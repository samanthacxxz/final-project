// IMPORTS
import { validateLoginForm } from "./loginValidation.js";

// SELECTING LOG IN FORM ELEMENTS

const loginForm = document.querySelector('.form-login');
const loginFormContainer = document.querySelector('.login-form-section');

const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const loginButton = document.querySelector('.login-button');

const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');
const submissionError = document.querySelector('.submission-error');

// SELECTING SIGN UP FORM ELEMENTS 

const signupForm = document.querySelector('.signup-form');
const signupFormContainer = document.querySelector('.signup-form-section');

const signupFirstnameInput = document.querySelector('.signup-firstname');
const signupLastnameInput = document.querySelector('.signup-lastname');
const signupEmailInput = document.querySelector('.signup-email');
const signupPasswordInput = document.querySelector('.signup-password');

const signupError = document.querySelector('.signup-error');
const closeSignupFormButton = document.querySelector('.signup-form-container__close');
const openSignupFormButton = document.querySelector('.signup-form-container__open ');

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