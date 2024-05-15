const validateSignupForm = (firstname, lastname, email, password, errorMessage) => {
    let errorStatus = false;
    if (!firstname || !lastname || !email || !password) {
        errorStatus = true;
        errorMessage.style.visibility = 'visible';
        errorMessage.textContent = 'Please fill in all input fields!';
        console.log('fill in!');
    } else {
        errorStatus = false;
        errorMessage.style.visiibility = 'hidden';
        errorMessage.textContent = '';
        console.log('all good!')
    }

    const signupErrorStatus = () => {
        return errorStatus;
    }
    return { signupErrorStatus }
}

export {validateSignupForm};