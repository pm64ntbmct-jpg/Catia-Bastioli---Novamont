const slider = document.querySelector('.slider-container');
const overlay = document.querySelector('.overlay');
const handle = document.querySelector('.slider-handle');

let dragging = false;

handle.addEventListener('mousedown', () => dragging = true);
window.addEventListener('mouseup', () => dragging = false);
window.addEventListener('mousemove', move);

handle.addEventListener('touchstart', () => dragging = true);
window.addEventListener('touchend', () => dragging = false);
window.addEventListener('touchmove', move);

function move(e) {
  if (!dragging) return;

  const rect = slider.getBoundingClientRect();
  const x = (e.clientX || e.touches[0].clientX) - rect.left;

  const position = Math.max(0, Math.min(x, rect.width));

  overlay.style.width = position + 'px';
  handle.style.left = position + 'px';
}