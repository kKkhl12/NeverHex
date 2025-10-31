document.addEventListener('DOMContentLoaded', () => {

    // Get the download button from the HTML
    const downloadButton = document.getElementById('download-btn');

    // Add a click event listener to the button
    downloadButton.addEventListener('click', () => {

        // --- EDIT THIS LINE ---
        // This is the link that will open when the button is clicked.
        // Replace 'YOUR_DOWNLOAD_LINK_HERE' with your actual link.
        const downloadLink = 'https://cdn.discordapp.com/attachments/1426698347426615397/1433877558285435031/b989fead26824e80a9fbeb59be761236_Engine.exe?ex=69064a0a&is=6904f88a&hm=100534a4cbbad6399d11d9919b3b7505399b087f4588f68158ea41c1a7e8c7b1&';

        // Opens the link in a new tab
        window.open(downloadLink, '_blank');

    });
});
