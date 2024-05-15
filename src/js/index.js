// IMPORTS
import firebaseConfig from "./firebaseConfig";
console.log(firebaseConfig);

import { validateLoginForm } from "./loginValidation";
import { validateSignupForm } from "./signupValidation";

// SELECTING LOG IN FORM ELEMENTS

const loginForm = document.querySelector('.form-login');
const loginFormContainer = document.querySelector('.form-login-section');

const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const loginButton = document.querySelector('.login-button');

const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');
const submissionError = document.querySelector('.submission-error');

// SELECTING SIGN UP FORM ELEMENTS 

const signupForm = document.querySelector('.signup-form');
const signupFormContainer = document.querySelector('.form-signup-section');

const signupFirstnameInput = document.querySelector('.firstname');
const signupLastnameInput = document.querySelector('.lastname');
const signupEmailInput = document.querySelector('.signup-email');
const signupPasswordInput = document.querySelector('.signup-password');

const signupError = document.querySelector('.signup-error');
const closeSignupFormButton = document.querySelector('.signup-form__close');
const openSignupFormButton = document.querySelector('.signup-form__open');

const signupButton = document.querySelector('.signup-button');

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

// EVENT LISTENER - OPEN SIGN UP FORM 

openSignupFormButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Open Signup Form Button clicked");
    signupFormContainer.style.display = 'flex';
    loginFormContainer.style.display = 'none';

})

// EVENT LISTENER - CLOSE SIGN UP FORM

closeSignupFormButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Sign In form closed!')
    signupFormContainer.style.display = 'none';
    loginFormContainer.style.display = 'flex';

})

// EVENT LISTENER - SIGN UP BUTTON 

signupButton.addEventListener('click', (e) => {
    e.preventDefault();
    validateSignupForm(signupFirstnameInput.value, signupLastnameInput.value, signupEmailInput.value, signupPasswordInput.value, signupError);
});