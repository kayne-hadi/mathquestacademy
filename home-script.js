document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the username from localStorage
    const username = localStorage.getItem('username');
    const usernameElement = document.getElementById('username');

    if (username && usernameElement) {
        usernameElement.textContent = capitalizeFirst(username);
    } else if (usernameElement) {
        usernameElement.textContent = 'Guest';
    }

    // Helper function to capitalize the first letter of the username
    function capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Fixing the button selection to use ID with #
    document.querySelector('#algebra-btn').addEventListener('click', () => {
        // Navigate to Algebra page
        console.log('Algebra button clicked!');
        window.location.href = 'algebra-index.html'; // Adjust this to the correct path of your page
    });
});

    // // Handle navigation to different pages
    // document.getElementById('arithmetic-btn').addEventListener('click', () => {
    //     // Navigate to Arithmetic page
    //     window.location.href = 'arithmetic.html';
    // });

    // document.getElementById('statistics-btn').addEventListener('click', () => {
    //     // Navigate to Statistics page
    //     window.location.href = 'statistics.html';
    // });
