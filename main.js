const galleryImages = document.querySelectorAll(".gallery-image");
let currentIndex = 0;

function showNextImage() {
  galleryImages[currentIndex].classList.add("hidden");
  currentIndex = (currentIndex + 1) % galleryImages.length;
  galleryImages[currentIndex].classList.remove("hidden");
}

galleryImages.forEach((image) => {
  image.addEventListener("click", showNextImage);
});

// Initially hide all images except the first one
for (let i = 1; i < galleryImages.length; i++) {
  galleryImages[i].classList.add("hidden");
}
