// script.js

document.querySelector('.button-txt').addEventListener('click', () => {
    const usernameInput = document.querySelector('.input-box');
    const username = usernameInput.value.trim();
    
    if (username === '') {
        alert('Please enter a username!');
    } else {
        // Store the username in localStorage to use on the home page
        localStorage.setItem('username', username);
        
        // Navigate to home page
        window.location.href = 'home-index.html'; // Adjust this to the correct path of your home page
    }
});
