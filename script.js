// Add your JavaScript code here
console.log('Welcome to your new project!');

// Example: Change the text color when clicking on the heading
document.querySelector('h1').addEventListener('click', function() {
    this.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
});