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
import { searchingBooksInAPI } from "./searchBar";

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
    searchingBooksInAPI();
}
