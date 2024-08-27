// script.js

function changeGallery(galleryNumber, selectedItem) {
  const gallery = document.getElementById("service-gallery");
  let images = [];
  let count = [0, 29, 28, 34, 41];

  // Create image paths dynamically based on the gallery number
  // for (let i = 1; i <= count[galleryNumber]; i++) {
  //   // Assuming 60 images per gallery
  //   images.push(
  //     `thumbs/garment${galleryNumber}/garment${galleryNumber}-${i}.jpg`
  //   );
  // }

  for (let i = 1; i <= count[galleryNumber]; i++) {
    let imagePath = `thumbs/garment${galleryNumber}/garment${galleryNumber}-${String(
      i
    ).padStart(3, "0")}.jpg`;
    console.log(imagePath); // Debugging line to check the generated paths
    images.push(imagePath);
  }

  // Update the images in the service section
  gallery.innerHTML = "";
  images.forEach((src) => {
    const imageItem = document.createElement("div");
    imageItem.className = "image-item";
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Garment ${galleryNumber} Image ${src.split("-")[1]}`;
    imageItem.appendChild(img);
    gallery.appendChild(imageItem);
  });

  // Highlight the selected image item
  const allItems = document.querySelectorAll(
    ".image-grid-intro .image-item-intro"
  );
  allItems.forEach((item) => {
    item.classList.remove("selected");
  });
  selectedItem.classList.add("selected");

  // Scroll to the services section
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });

  // Show the floating button to return to the introduction section
  document.getElementById("back-to-intro").style.display = "block";
}

// Call the function initially to populate the first gallery by default
document.addEventListener("DOMContentLoaded", () => {
  changeGallery(1, document.querySelector(".image-item"));
});

// Add an event listener to hide the button when clicking on it
document.getElementById("back-to-intro").addEventListener("click", function () {
  this.style.display = "none";
  document
    .getElementById("introduction")
    .scrollIntoView({ behavior: "smooth" });
});
