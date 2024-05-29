const reviewValidation = (authorName, titleName, comment, authorNameErrElement, titleNameErrElement, commentErrElement)  => {
    const errors = {
        errorStatus: false,
        authorNameError: '',
        titleNameError: '',
        commentError: ''
    }
    authorNameErrElement.style.visibilty = 'hidden';
    titleNameErrElement.style.visibilty = 'hidden';
    commentErrElement.style.visibilty = 'hidden';

    if (!authorName && !titleName && !comment) {
        errors.errorStatus = true,
        errors.authorNameError = '',
        errors.titleNameError = '',
        errors.commentError = ''

        authorNameErrElement.style.visibilty = 'visible';
        titleNameErrElement.style.visibilty = 'visible';
        commentErrElement.style.visibilty = 'visible';

    } else if (!authorName) {
        errors.errorStatus = true,
        errors.authorNameError = 'You must write an author here!',
        errors.titleNameError = '',
        errors.commentError = ''

        authorNameErrElement.style.visibilty = 'visible';
        titleNameErrElement.style.visibilty = 'hidden';
        commentErrElement.style.visibilty = 'hidden';
    } else if (!titleName) {
        errors.errorStatus = true,
        errors.authorNameError = '',
        errors.titleNameError = 'You must write a book title here!',
        errors.commentError = ''

        authorNameErrElement.style.visibilty = 'hidden';
        titleNameErrElement.style.visibilty = 'visible';
        commentErrElement.style.visibilty = 'hidden';
    } else if (!comment) {
        errors.errorStatus = true,
        errors.authorNameError = '',
        errors.titleNameError = '',
        errors.commentError = 'You must write a review here!'

        authorNameErrElement.style.visibilty = 'hidden';
        titleNameErrElement.style.visibilty = 'hidden';
        commentErrElement.style.visibilty = 'visible';
    } else {
        errors.errorStatus = false,
        errors.authorNameError = '',
        errors.titleNameError = '',
        errors.commentError = ''

        authorNameErrElement.style.visibilty = 'hidden';
        titleNameErrElement.style.visibilty = 'hidden';
        commentErrElement.style.visibilty = 'hidden';
    }
    const reviewFormStatus = () => {
        return errors.errorStatus;
    }

    return { reviewFormStatus }
}

export { reviewValidation }