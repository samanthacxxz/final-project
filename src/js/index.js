import firebaseConfig from "./firebaseConfig";
console.log(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";

// INITIALIZE FIREBASE
initializeApp(firebaseConfig);

// INITIALIZE AUTH SERVICE
const authService = getAuth();

// IMPORTS
import { handleLoginPage } from "./login";
/*
import { validateLoginForm } from "./loginValidation";
import { validateSignupForm } from "./signupValidation";
*/
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


// Common functionality
document.addEventListener("DOMContentLoaded", () => {

    const bodyClass = document.body.classList;
    
    if (bodyClass.contains('login-page')) {
      handleLoginPage(authService, signOut);
    } else if (bodyClass.contains('products-page')) {
      handleProductsPage();
    } else if (bodyClass.contains('home-page')) {
        handleHomePage();
    }
});

// FETCH BOOKS FROM API

async function fetchData(){
    const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyA7Fg_QwQmZNakl3c1wX94vzhygunyTaf0');
    const data = await response.json();
    console.log(data)
}

fetchData();

// FETCH OPEN LIBRARY API

async function fetchOpenLibraryData() {
    const response = await fetch('https://openlibrary.org/search.json?author=tolkien&sort=new')
    const data = await response.json();
    console.log(data);
}

fetchOpenLibraryData();