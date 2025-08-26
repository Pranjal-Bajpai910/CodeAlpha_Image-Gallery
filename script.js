let currentIndex = 0;
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "block";
  lightboxImg.src = images[currentIndex].src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeSlide(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

// Bonus: Filtering
function filterSelection(category) {
  images.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
