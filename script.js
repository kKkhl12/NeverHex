document.addEventListener('DOMContentLoaded', () => {

    // Get the download button from the HTML
    const downloadButton = document.getElementById('download-btn');

    // Add a click event listener to the button
    downloadButton.addEventListener('click', () => {

        // --- EDIT THIS LINE ---
        // This is the link that will open when the button is clicked.
        // Replace 'YOUR_DOWNLOAD_LINK_HERE' with your actual link.
        const downloadLink = 'YOUR_DOWNLOAD_LINK_HERE';

        // Opens the link in a new tab
        window.open(downloadLink, '_blank');

    });
});
