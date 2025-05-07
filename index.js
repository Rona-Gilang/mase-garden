document.getElementById('form-open').addEventListener('click', function() {
  const form = document.getElementById('form-offer');
  form.style.display = (form.style.display === 'grid') ? 'none' : 'grid';
  // On click check form style display, if grid change to none, else change to grid. 
});
