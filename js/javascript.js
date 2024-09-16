// Example: Adding a click event to navigation links
const navLinks = document.querySelectorAll('.sidebar ul li');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Handle navigation logic here, e.g., update content or URL
    console.log('Clicked:', link.textContent);
  });
});
