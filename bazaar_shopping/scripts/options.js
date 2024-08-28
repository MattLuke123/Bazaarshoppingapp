// Save options to chrome.storage
document.getElementById('save-options').addEventListener('click', function() {
    const favoriteSite = document.getElementById('favorite-site').value;
    chrome.storage.sync.set({favoriteSite: favoriteSite}, function() {
        console.log('Options saved.');
    });
});

// Restore options from chrome.storage
document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get('favoriteSite', function(data) {
        if (data.favoriteSite) {
            document.getElementById('favorite-site').value = data.favoriteSite;
        }
    });
});
