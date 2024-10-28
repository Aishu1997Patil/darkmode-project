// Select the button
const toggleButton = document.getElementById('toggle-button');

// Check for saved theme in localStorage and apply it
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = 'Switch to Light Mode';
}

// Toggle dark mode
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Update button text and save preference to localStorage
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Switch to Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleButton.textContent = 'Switch to Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});
