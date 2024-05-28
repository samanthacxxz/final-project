import { handleHomePage } from "./index";
import { handleLoginPage } from "./login";

export function commonFunctionality(bodyClass){
    const homePageButton = document.querySelector('.header-title');
    const myAccountButton = document.querySelector('.icon-account-container');

    // HANDLING BUTTOM REDIRECTING TO HOME PAGE
    homePageButton.addEventListener('click', (e) => {
        if (bodyClass.contains('home-page')) {
            handleHomePage();
        } else {
            // Redirect to the home page
            window.location.href = 'file:///Users/SamanthaCruz/sacr001/Sites/11/final-project/dist/index.html'; // Replace '/' with the actual URL of your home page
        }
    });

    myAccountButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (bodyClass.contains('login-page')) {
            handleLoginPage();
        } else {
            window.location.href = 'file:///Users/SamanthaCruz/sacr001/Sites/11/final-project/dist/login.html';
        }
    })
};