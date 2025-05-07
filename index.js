document.getElementById('form-open').addEventListener('click', function() {
  const form = document.getElementById('form-offer');
  form.style.display = (form.style.display === 'grid') ? 'none' : 'grid';
  // On click check form style display, if grid change to none, else change to grid. 
});
document.getElementById('form-offer').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from refreshing the page.
  document.getElementById('submit-message').style.display = 'inline'; // Show the message.
  document.getElementById('form-offer').reset(); // Reset form after submit.
});
