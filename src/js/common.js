import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { handleHomePage } from "./index";
import { handleLoginPage } from "./login";

export function commonFunctionality(){
    const authService = getAuth();
    
    const homePageButton = document.querySelector('.header-title');
    const myAccountButton = document.querySelector('.icon-account-container');
    const signoutButtonIcon = document.querySelector('.button-log_out')

    const bodyClass = document.body.classList;

    // HANDLING BUTTOM REDIRECTING TO HOME PAGE
    homePageButton.addEventListener('click', (e) => {
        console.log('Home page button clicked!')
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
            handleLoginPage(authService);
        } else {
            window.location.href = 'file:///Users/SamanthaCruz/sacr001/Sites/11/final-project/dist/login.html';
        }
    })

    signoutButtonIcon.addEventListener('click', (e) => {
        e.preventDefault();
        signOut(authService)
            .then(() => {
                console.log('Signed out!');
                signoutButtonIcon.style.display = 'none';
                const loginButtonIcon = document.querySelector('.button-log_in');
                loginButtonIcon.style.display = 'block';
                window.location.href = 'login.html'; // Redirect to login page after signing out
            })
            .catch((err) => console.log(err.message));
    });

    onAuthStateChanged(authService, (user) => {
        const signoutButtonIcon = document.querySelector('.button-log_out');
        const loginButtonIcon = document.querySelector('.button-log_in');

        if (user) {
            // User is signed in
            signoutButtonIcon.style.display = 'block';
            loginButtonIcon.style.display = 'none';
        } else {
            // User is signed out
            signoutButtonIcon.style.display = 'none';
            loginButtonIcon.style.display = 'block';
        }
    });
};