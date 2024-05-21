import { handleHomePage } from ".";

export function commonFunctionality(bodyClass){
    const homePageButton = document.querySelector('.header-title');
    const myAccountButton = document.querySelector('.icon-log-container');

    // HANDLING BUTTOM REDIRECTING TO HOME PAGE
    homePageButton.addEventListener('click', (e) => {
        if (bodyClass.contains('home-page')) {
            handleHomePage();
        } else {
            // Redirect to the home page
            window.location.href = 'http://127.0.0.1:3000/dist/index.html'; // Replace '/' with the actual URL of your home page
        }
    });

    // HANDLING REDIRECTING TO LOG IN PAGE

    
};