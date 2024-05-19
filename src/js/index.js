import firebaseConfig from "./firebaseConfig";
console.log(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";

// INITIALIZE FIREBASE
initializeApp(firebaseConfig);

// INITIALIZE AUTH SERVICE
const authService = getAuth();

// IMPORTS
import { validateLoginForm } from "./loginValidation";
import { validateSignupForm } from "./signupValidation";

// SELECTING LOG IN FORM ELEMENTS
const loginForm = document.querySelector('.login-form');
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

const signoutButton = document.querySelector('.signout-button');

const signoutButtonIcon = document.querySelector('.button-log_out');
const loginButtonIcon = document.querySelector('.button-log_in');

// EVENT LISTENER - OPEN SIGN UP FORM 
openSignupFormButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Open Signup Form Button clicked");
    signupFormContainer.style.display = 'flex';
    loginFormContainer.style.display = 'none';

});

// EVENT LISTENER - CLOSE SIGN UP FORM
closeSignupFormButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Sign In form closed!');
    signupFormContainer.style.display = 'none';
    loginFormContainer.style.display = 'flex';

});

// HANDLE TO CREATE NEW USER AND ADD TO FIREBASE
function signupUser() {
    const { signupErrorStatus } = validateSignupForm(
        signupFirstnameInput.value.trim(),
        signupLastnameInput.value.trim(),
        signupEmailInput.value.trim(),
        signupPasswordInput.value.trim(),
        signupError
    );
    if (signupErrorStatus()){
        return
    } else {
        const newUser = {
            firstname: signupFirstnameInput.value.trim(),
            lastname: signupLastnameInput.value.trim(),
            signupEmail: signupEmailInput.value.trim(),
            signupPassword: signupPasswordInput.value.trim()
        }
        createUserWithEmailAndPassword(authService,newUser.signupEmail,newUser.signupPassword)
        .then(()=> {
            signupForm.reset();
            signupFormContainer.style.display = 'none';
            loginFormContainer.style.display = 'flex';
        })
        .catch((err)=> console.log(err.message))
    };
};

// EVENT LISTENER - SIGNUP BUTTON
signupButton.addEventListener('click', (e)=> {
    e.preventDefault();
    signupUser();
    signoutButtonIcon.style.display = 'block',
    loginButtonIcon.style.display = 'none';
})

// HANDLE SIGN OUT ACTION

function signoutUser(){
    signOut(authService)
    .then(()=> {
        console.log('signed out!');
        signoutButtonIcon.style.display = 'none';
        loginButtonIcon.style.display = 'block';
        
        loginFormContainer.style.display = 'flex';
        
    })
    .catch((err)=> console.log(err.message))

}

// EVENT LISTENER - SIGNOUT BUTTON/ICON

signoutButton.addEventListener('click', (e) =>{
    e.preventDefault();
    signoutUser();
})

// HANDLE LOG IN ACTION

function loginUser(){
    const {loginFormStatus} = validateLoginForm(
        emailInput.value,
        passwordInput.value,
        emailError,
        passwordError
    );
    if(loginFormStatus()) {
        return
    } else {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        signInWithEmailAndPassword(authService, email, password)
        .then(()=> {
            loginForm.reset();
            console.log('you are now logged in! :)');
        })
        .catch((err)=>{
            submissionError.textContent = err.message
        })
    };
};

loginButton.addEventListener('click', (e)=>{
    e.preventDefault();
    loginUser();
    loginButtonIcon.style.display = 'none';
    signoutButtonIcon.style.display = 'block';
})