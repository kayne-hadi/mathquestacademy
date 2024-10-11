// script.js

document.querySelector('.button-txt').addEventListener('click', () => {
    const usernameInput = document.querySelector('.input-box');
    const username = usernameInput.value.trim();
    
    if (username === '') {
        alert('Please enter a username!');
    } else {
        // Navigate to home page or another action
        alert(`Welcome, ${username}!`);
        usernameInput.value = ''; // Clear the input
    }
});
