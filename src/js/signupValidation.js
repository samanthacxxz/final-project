const validateSignupForm = (firstname, lastname, email, password, errorMessage) => {
    let errorStatus = false;
    if (!firstname || !lastname || !email | !password) {
        errorStatus = true;
        errorMessage.style.visiibility = 'visible';
        errorMessage.textContent = 'Please fill in all input fields!'
    } else {
        errorStatus = false;
        errorMessage.style.visiibility = 'hidden';
        errorMessage.textContent = '';
    }

    const signupErrorStatus = () => {
        return errorStatus;
    }
    return { signupErrorStatus }
}

export {validateSignupForm};