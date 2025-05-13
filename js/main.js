document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  if (dropdown) {
    dropdown.addEventListener("click", function () {
      this.classList.toggle("open");
    });
  }
//masonry layout//  
document.addEventListener("DOMContentLoaded", function () {
  // Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const zoomInBtn = document.getElementById('zoom-in');
  const zoomOutBtn = document.getElementById('zoom-out');
  const fullscreenBtn = document.getElementById('fullscreen');
  const closeBtn = document.querySelector('.lightbox .close');
  const shareTwitter = document.getElementById('share-twitter');
  const shareFacebook = document.getElementById('share-facebook');
  const detailLink = document.getElementById('detail-link');

  let currentScale = 1;
  let isFullscreen = false;

  // Open lightbox on image click
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
      const fullImage = item.getAttribute('data-full');
      const detailPage = item.getAttribute('data-detail');
      lightboxImg.src = fullImage;
      detailLink.href = detailPage;
      lightbox.style.display = 'flex';
    });
  });

  // Close lightbox
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Zoom-in and zoom-out functionality
  zoomInBtn.addEventListener('click', () => {
    currentScale += 0.1;
    lightboxImg.style.transform = `scale(${currentScale})`;
  });

  zoomOutBtn.addEventListener('click', () => {
    currentScale = Math.max(1, currentScale - 0.1);  // Prevent zooming out too far
    lightboxImg.style.transform = `scale(${currentScale})`;
  });

  // Toggle fullscreen mode
  fullscreenBtn.addEventListener('click', () => {
    if (!isFullscreen) {
      if (lightbox.requestFullscreen) {
        lightbox.requestFullscreen();
      } else if (lightbox.mozRequestFullScreen) { // Firefox
        lightbox.mozRequestFullScreen();
      } else if (lightbox.webkitRequestFullscreen) { // Chrome, Safari and Opera
        lightbox.webkitRequestFullscreen();
      }
      isFullscreen = true;
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      }
      isFullscreen = false;
    }
  });

  // Social share functionality (simplified)
  shareTwitter.addEventListener('click', () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Check out this map!`, '_blank');
  });

  shareFacebook.addEventListener('click', () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  });
});
