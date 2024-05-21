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
import { commonFunctionality } from "./common";

// Common functionality
document.addEventListener("DOMContentLoaded", () => {
    const bodyClass = document.body.classList;

    commonFunctionality(bodyClass, handleHomePage());
    
    if (bodyClass.contains('login-page')) {
      handleLoginPage(authService, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword);
    } else if (bodyClass.contains('products-page')) {
      handleProductsPage();
    } else if (bodyClass.contains('home-page')) {
        handleHomePage();
    }
});

// HANDLING EVERYTHING WITHIN HOME PAGE

export function handleHomePage() {
    fetchBooksData();
    const searchInput = document.querySelector('.search-bar-input');
    const searchButtonIcon = document.querySelector('.search-button-container');



}
handleHomePage();

// FETCH OPEN LIBRARY API 

async function fetchBooksData(){
    const response = await fetch(`https://openlibrary.org/search.json?q=kawakami`)
    const data = await response.json();
    console.log(data);
}