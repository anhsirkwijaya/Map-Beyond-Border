document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  if (dropdown) {
    dropdown.addEventListener("click", function () {
      this.classList.toggle("open");
    });
  }
//masonry layout//  
});
const masonryItems = document.querySelectorAll('.masonry-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const detailLink = document.getElementById('detail-link');
const closeBtn = document.querySelector('.lightbox .close');
const zoomIn = document.getElementById('zoom-in');
const zoomOut = document.getElementById('zoom-out');
const fullscreenBtn = document.getElementById('fullscreen');
const shareTwitter = document.getElementById('share-twitter');
const shareFacebook = document.getElementById('share-facebook');

let scale = 1;

masonryItems.forEach(item => {
  item.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = item.dataset.full;
    detailLink.href = item.dataset.detail;
    scale = 1;
    lightboxImg.style.transform = `scale(${scale})`;
  });
});

closeBtn.onclick = () => {
  lightbox.style.display = 'none';
};

zoomIn.onclick = () => {
  scale += 0.1;
  lightboxImg.style.transform = `scale(${scale})`;
};

zoomOut.onclick = () => {
  if (scale > 0.2) {
    scale -= 0.1;
    lightboxImg.style.transform = `scale(${scale})`;
  }
};

fullscreenBtn.onclick = () => {
  if (!document.fullscreenElement) {
    lightbox.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

shareTwitter.onclick = () => {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/intent/tweet?url=${url}`, '_blank');
};

shareFacebook.onclick = () => {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
};

