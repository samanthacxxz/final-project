import firebaseConfig from "./firebaseConfig";
console.log(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";

// INITIALIZE FIREBASE
initializeApp(firebaseConfig);

// INITIALIZE AUTH SERVICE
const authService = getAuth();

// INITIALIZE FIRESTORE DATABASE
const database = getFirestore();

// CONNECT REVIEWS COLLECTION ON FIRESTORE
const reviewsCollection = collection(database, 'reviews')

// IMPORTS
import { handleLoginPage } from "./login";
import { commonFunctionality } from "./common";
import { reviewValidation, validateReviewComment } from "./reviewValidation"; 

let reviewsArray = [];

// Common functionality
document.addEventListener("DOMContentLoaded", () => {
    const bodyClass = document.body.classList;

    commonFunctionality(authService);
    
    if (bodyClass.contains('login-page')) {
      handleLoginPage(authService, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword);
    } else if (bodyClass.contains('home-page')) {
        handleHomePage();
    }
});


// HANDLING EVERYTHING WITHIN HOME PAGE
export function handleHomePage() {
  commonFunctionality();
  searchingBooksInAPI();
  intoReviewSection();
  submitReviewForm();
  fetchReviews();
}

const searchingBooksInAPI = () => {
  const searchBarInput = document.querySelector('.search-bar-input');
  const searchButtonIcon = document.querySelector('.search-button-container');

  const filterSelect = document.querySelector('.filter-select');

  //  HANDLING PERFORMING THE SEARCH THROUGHT THE API 
  const performSearch = () => {
      const query = searchBarInput.value.trim(); 
      if (query.length > 0) {
        fetchBooksData(query);
      }
  }

  // SCROLLING TO SEARCH RESULTS SECTION
  const scrollToResultsSection = document.querySelector('.section-products-display');
  searchButtonIcon.addEventListener('click', function() {
    performSearch();
    scrollToResultsSection.scrollIntoView({ behavior: 'smooth'});
  });

  // FILTER SELECT EVENT LISTENER
  filterSelect.addEventListener('change', () => {
    const query = searchBarInput.value.trim();
    if (query.length > 1) {
      fetchBooksData(query);
    }
  });

  // FETCH OPEN LIBRARY API BASED ON USERS SEARCH
  async function fetchBooksData(query){
    const response = await fetch(`https://openlibrary.org/search.json?q=${(query)}`)
    const results = await response.json();
    
    const limitedSearchResults = results.docs.slice(0, 10);
    filterSortingSearchResults(limitedSearchResults, query);
    console.log(limitedSearchResults);
  }

  // FILTERING AND SORTING THE RESULTS BASED ON SELECT VALUE
  function filterSortingSearchResults(results) { 
    let filteredResults = results;
    if (filterSelect.value === 'author_a-z') {
      filteredResults.filter(item => item.author_name);
      filteredResults.sort((a, b) => {
        const authorA = (a.author_name && a.author_name[0].toLowerCase() || '');
        const authorB = (b.author_name && b.author_name[0].toLowerCase() || '');
        return authorA.localeCompare(authorB);
      });
    } else if (filterSelect.value === 'title_a-z') {
      filteredResults.filter (item => item.title);
      filteredResults.sort ((a, b) => a.title.toLowerCase().localeCompare(b.title));
    } else if (filterSelect.value === 'oldest-recent') {
      filteredResults.filter (item => item.publish_year && item.publish_year.length > 0)
      filteredResults.sort ((a, b) => {
        const yearA = Math.min(...a.publish_year);
        const yearB = Math.min(...b.publish_year);
        return yearA - yearB;
      });
    } else if (filterSelect.value === 'recent-oldest') {
      filteredResults.filter (item => item.publish_year && item.publish_year.length > 0);
      filteredResults.sort ((a, b) => {
        const yearA = Math.max(...a.publish_year);
        const yearB = Math.max(...b.publish_year);
        return yearB - yearA;
      });
    }
    renderSearchResults(filteredResults)
  };

  // RENDERING SEARCH RESULT TO PAGE
  function renderSearchResults(results) {
    const ul = document.querySelector('.render-list');
    const filterContainer = document.querySelector('.results-filter-container');

    ul.innerHTML = '';
    filterContainer.style.visibility = 'visible';

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
      bookReleaseYear.textContent = result.first_publish_year;

      // ADDING CLASS TO THE ELEMENTS
      bookTitle.classList.add('.book-title');
      bookAuthor.classList.add('.book-author');
      bookReleaseYear.classList.add('.book-release-year');
      bookCover.classList.add('book-cover');
    })
  }
}

// EVENT LISTENER - SCROLLING DOWN TO REVIEW SECTION
function intoReviewSection() {
  const scrollToReviewFormButton = document.querySelector('.write-review');
  const reviewFormSection = document.querySelector('.review-section-container');

  scrollToReviewFormButton.addEventListener('click', function(){
    reviewFormSection.scrollIntoView({ behavior: 'smooth'});
  })

  const scrollToRenderedReviewsButton = document.querySelector('.read-reviews');
  const renderedReviewsSection = document.querySelector('.rendered-reviews-container');

  scrollToRenderedReviewsButton.addEventListener('click', function(){
    renderedReviewsSection.scrollIntoView({ behavior: 'smooth'})
  })
}

// HANDLING THE REVIEW FORM
const submitReviewForm = () => {
  const authorName = document.querySelector('.author-name');
  const titleName = document.querySelector('.title-name');
  const reviewText = document.querySelector('.review-text');
  const charCount = document.querySelector('.char-count');

  const reviewForm = document.querySelector('.review-form');

  const authorNameError = document.querySelector('.error-author');
  const titleNameError = document.querySelector('.error-title');
  const reviewTextError = document.querySelector('.error-review-text');

  const successMessage = document.querySelector('.success-message');

  const submitReviewButton = document.querySelector('.submit-review-button');

  // CALLING FUNCTION TO VALIDATE COMMENT INPUT
  validateReviewComment(reviewText, charCount, reviewTextError);

  // HANDLE SUBMIT REVIEW FORM
  submitReviewButton.addEventListener('click', (e) => {
    e.preventDefault();

    const { reviewErrorStatus } = reviewValidation(authorName.value, titleName.value, reviewText.value, authorNameError, titleNameError, reviewTextError);
    if (reviewErrorStatus()) {
      return
    } else {
      const newReview = {
        reviewAuthor: authorName.value,
        reviewTitle: titleName.value,
        reviewComment: reviewText.value
      }
      addDoc(reviewsCollection, newReview)
      .then(()=> {
        reviewForm.reset();
        successMessage.style.visibility = '';
        successMessage.textContent = 'Review submitted successfully!';
        setTimeout(() => {
          successMessage.style.visibility = 'hidden';
        }, 2000)
      }).catch(() => {
        successMessage.textContent = 'Review submission failed';
      });
    };
  });
};

function fetchReviews() {
  onSnapshot(reviewsCollection, (snapshot) => {
    reviewsArray = [];
    snapshot.docs.forEach((review) => {
      reviewsArray.push({id: review.id, ...review.data()})
    });
    console.log(reviewsArray)
    renderReviews(reviewsArray);
  });
};

const renderReviews = (reviewsArray) => {
  const ul = document.querySelector('.rendered-reviews-ul');
  ul.textContent =  '';


  reviewsArray.forEach((review) => {

    //
    const div = document.createElement('div');
    div.classList.add('review-box');

    const reviewTitleName = document.createElement('div');
    const reviewAuthorName = document.createElement('div');
    const reviewComment = document.createElement('div');
    const reviewID = document.createElement('div');

    // 
    div.append(reviewTitleName, reviewAuthorName, reviewID, reviewComment);
    ul.append(div);
    //
    reviewTitleName.textContent = review.reviewTitle;
    reviewAuthorName.textContent = review.reviewAuthor;
    reviewID.textContent = `review ID: ${review.id}`;
    reviewComment.textContent = review.reviewComment;    
    //
    reviewTitleName.classList.add('review-book-title');
    reviewAuthorName.classList.add('review-author');
    reviewID.classList.add('review-id');
    reviewComment.classList.add('review-comment');
  })

}