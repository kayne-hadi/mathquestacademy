document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the username from localStorage
    const username = localStorage.getItem('username');
    const usernameElement = document.getElementById('username');

    if (username) {
        usernameElement.textContent = capitalizeFirst(username);
    } else {
        usernameElement.textContent = 'Guest';
    }

    // Helper function to capitalize the first letter of the username
    function capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // // Handle navigation to different pages
    // document.getElementById('arithmetic-btn').addEventListener('click', () => {
    //     // Navigate to Arithmetic page
    //     window.location.href = 'arithmetic.html';
    // });

    // document.getElementById('statistics-btn').addEventListener('click', () => {
    //     // Navigate to Statistics page
    //     window.location.href = 'statistics.html';
    // });

    document.getElementById('algebra-btn').addEventListener('click', () => {
        // Navigate to Algebra page
        window.location.href = 'algebra.html';
    });
});
