// const tocToggle = document.getElementById('toc-toggle');
// const tocList = document.getElementById('toc-list');
// tocToggle.addEventListener('click', () => {
//   tocList.classList.toggle('show');
// });

document.getElementById('toc-toggle').addEventListener('click', function() {
  const form = document.getElementById('toc');
  form.style.display = (form.style.display === 'block') ? 'none' : 'block';
  // On click check form style display, if block change to none, else change to block. 
});

const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-img");

document.querySelectorAll(".imgpop").forEach(img => {
  img.onclick = () => {
    viewerImg.src = img.src;
    viewer.showModal();
  };
});

viewer.addEventListener("click", () => {
  viewer.close();
});
