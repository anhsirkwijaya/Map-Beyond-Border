const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const detailLink = document.getElementById("detail-link");
const closeBtn = document.querySelector(".close");
const zoomIn = document.getElementById("zoom-in");
const zoomOut = document.getElementById("zoom-out");
const fullscreen = document.getElementById("fullscreen");
const shareBtn = document.getElementById("share");

let scale = 1;

document.querySelectorAll('.masonry img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    scale = 1;
    lightboxImg.style.transform = `scale(${scale})`;
    detailLink.href = img.dataset.detail || '#';
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = "none";
});

zoomIn.addEventListener('click', () => {
  scale += 0.1;
  lightboxImg.style.transform = `scale(${scale})`;
});

zoomOut.addEventListener('click', () => {
  scale = Math.max(0.1, scale - 0.1);
  lightboxImg.style.transform = `scale(${scale})`;
});

fullscreen.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    lightbox.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

shareBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(lightboxImg.src);
  alert("Image URL copied to clipboard!");
});
