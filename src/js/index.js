import firebaseConfig from "./firebaseConfig";
console.log(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";

//import { getFirestore } from "firebase/firstore";

// INITIALIZE FIREBASE
initializeApp(firebaseConfig);

// INITIALIZE AUTH SERVICE
const authService = getAuth();

// INITIALIZE FIRESTORE DATABASE
//const database = getFirestore();

// ACCESS THE SEARCH COLLECTION IN FIRESTORE
//const searchItemsCollection = collection(database, 'searchItems');

// IMPORTS
import { handleLoginPage } from "./login";
import { commonFunctionality } from "./common";

// Common functionality
document.addEventListener("DOMContentLoaded", () => {
    const bodyClass = document.body.classList;

    commonFunctionality(bodyClass);
    
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

const searchingBooksInAPI = () => {
  const searchBarInput = document.querySelector('.search-bar-input');
  const searchButtonIcon = document.querySelector('.search-button-container');

  //  HANDLING PERFORMING THE SEARCH THROUGHT THE API 
  const performSearch = () => {
      const query = searchBarInput.value.trim(); 
      if (query.length > 1) {
          fetchBooksData(query);
      }
  }

  searchButtonIcon.addEventListener('click', (e) => {
      performSearch();
  });


  // FETCH OPEN LIBRARY API BASED ON USERS SEARCH
  async function fetchBooksData(query){
      const response = await fetch(`https://openlibrary.org/search.json?q=${(query)}`)
      const results = await response.json();
      
      const limitedSearchResults = results.docs.slice(0, 10);
      console.log(limitedSearchResults);
      renderSearchResults(limitedSearchResults);
  }

  // RENDERING SEARCH RESULT TO PAGE
  function renderSearchResults(results) {
    const ul = document.querySelector('.render-list');

    results.forEach(result => {
      const div = document.createElement('div');
      div.classList.add('.products-book-item');

      const bookCover = document.createElement('div');
      const bookImg = document.createElement('img');
      const bookTitle = document.createElement('div');
      const bookAuthor = document.createElement('div');
      const bookReleaseYear = document.createElement('div');


      div.append(bookCover, bookTitle, bookAuthor, bookReleaseYear);
      bookCover.append(bookImg);
      ul.append(div);
      
      //  SETTING THE CREATED CONTENT OF THE CREATED ELEMENTS
      if (result.cover_i) {
        bookImg.src = `https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`;
      } else {
        bookImg.src = '';
      }

      bookTitle.textContent = result.title;
      bookAuthor.textContent = result.author_name;
      bookReleaseYear.textContent = result.publish_year[0];


      // ADDING CLASS TO THE ELEMENTS

      bookTitle.classList.add('.book-title');
      bookAuthor.classList.add('.book-author');
      bookReleaseYear.classList.add('.book-release-year');
      bookCover.classList.add('book-cover');
    })
  }
}
