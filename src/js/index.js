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

// Common functionality
document.addEventListener("DOMContentLoaded", () => {

    const bodyClass = document.body.classList;
    
    if (bodyClass.contains('login-page')) {
      handleLoginPage(authService, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword);
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