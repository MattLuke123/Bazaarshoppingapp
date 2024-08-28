document.addEventListener('DOMContentLoaded', function () {
    // Get the search bar and buttons
    const searchBar = document.getElementById('search-bar');
    const buttons = document.querySelectorAll('#site-selector button');

    // Function to handle search
    function handleSearch(query) {
        // Default search engine
        const searchEngine = 'https://www.google.com/search?q=';

        // Open a new tab with search results
        chrome.tabs.create({ url: searchEngine + encodeURIComponent(query) });
    }

    // Add event listener for the search bar
    searchBar.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            handleSearch(searchBar.value);
        }
    });

    // Add event listeners for the buttons
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            let site;
            switch (this.id) {
                case 'amazon':
                    site = 'https://www.amazon.com';
                    break;
                case 'ebay':
                    site = 'https://www.ebay.com';
                    break;
                case 'daraz':
                    site = 'https://www.daraz.pk';
                    break;
                case 'mega':
                    site = 'https://www.mega.pk';
                    break;
                case 'techbazaar':
                    site = 'https://www.techbazaar.pk';
                    break;
                default:
                    site = 'https://www.google.com';
            }
            handleSearch(searchBar.value);
            chrome.tabs.create({ url: site });
        });
    });
});
