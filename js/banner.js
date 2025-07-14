const slider = document.getElementById('banner_container');
const slides = slider.querySelector('.banner');
const totalSlides = slides.children.length;

let startX = 0;
let currentX = 0;
let currentIndex = 0;
let isDragging = false;

function setSlidePosition(index) {
  slides.style.transform = `translateX(-${index * 100}vw)`;
}

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

slider.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  currentX = e.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
  const diff = startX - currentX;
  if (Math.abs(diff) > 50) {
    if (diff > 0 && currentIndex < totalSlides - 1) currentIndex++;
    else if (diff < 0 && currentIndex > 0) currentIndex--;
  }
  setSlidePosition(currentIndex);
  isDragging = false;
});

let isMouseDown = false;

slider.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.clientX;
});

slider.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  currentX = e.clientX;
});

slider.addEventListener('mouseup', () => {
  if (!isMouseDown) return;
  const diff = startX - currentX;
  if (Math.abs(diff) > 50) {
    if (diff > 0 && currentIndex < totalSlides - 1) currentIndex++;
    else if (diff < 0 && currentIndex > 0) currentIndex--;
  }
  setSlidePosition(currentIndex);
  isMouseDown = false;
});

slider.addEventListener('mouseleave', () => {
  isMouseDown = false;
});






