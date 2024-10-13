// algebra.js

document.addEventListener('DOMContentLoaded', () => {
  const usernameNewbie = localStorage.getItem('usernameNewbie') || 'Newbie';

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Handle button presses for different algebra lessons
  document.querySelector('#algebra1').addEventListener('click', () => {
    window.location.href = 'unlocking-algebra.html';
  });

  document.querySelector('#algebra2').addEventListener('click', () => {
    window.location.href = 'keep-it-simple.html';
  });

  // Update the text with the username
  document.querySelector('#username-greeting').textContent = `Hey there Newbie, heard your name was ${capitalizeFirst(usernameNewbie)}`;
});
