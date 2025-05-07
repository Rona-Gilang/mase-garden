// document.getElementById('form-open').addEventListener('click', function() {
//   const form = document.getElementById('form-offer');
//   form.style.display = (form.style.display === 'grid') ? 'none' : 'grid';
//   // On click check form style display, if grid change to none, else change to grid. 
// });
// document.getElementById('form-offer').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the form from refreshing the page.
//   document.getElementById('submit-message').style.display = 'inline'; // Show the message.
//   document.getElementById('form-offer').reset(); // Reset form after submit.
// });

// Toggle form visibility on click.
document.getElementById('form-open').addEventListener('click', function() {
  const form = document.getElementById('form-offer');
  const currentDisplay = window.getComputedStyle(form).display;
  form.style.display = (currentDisplay === 'grid') ? 'none' : 'grid';
});
// Handle form submission.
document.getElementById('form-offer').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission.
  document.getElementById('submit-message').style.display = 'inline'; // Show submit message.
  this.reset(); // Reset form after submission.
});
