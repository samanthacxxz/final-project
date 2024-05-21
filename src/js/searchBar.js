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


    // FETCH OPEN LIBRARY API 
    async function fetchBooksData(query){
        const response = await fetch(`https://openlibrary.org/search.json?q=${(query)}`)
        const data = await response.json();

        const limitedBooksFetched = data.docs.slice(0, 10);
        console.log(limitedBooksFetched);

        // SAVING EACH SEARCH WITH MAX. 10 ITEMS

        const saveSearchResult = () => {
            const savedResult = limitedBooksFetched;
            
            console.log('Results saved to storage!', savedResult)
        }
        saveSearchResult();
        return limitedBooksFetched;

    }
    

}

export default searchingBooksInAPI