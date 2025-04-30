const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg'
];

let currentIndex = 0;

// Initialize gallery
document.addEventListener('DOMContentLoaded', () => {
    const thumbnailsContainer = document.getElementById('thumbnails-container');
    
    // Generate thumbnails
    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        if (index === 0) thumbnail.classList.add('active');
        thumbnail.addEventListener('click', () => setCurrentImage(index));
        thumbnailsContainer.appendChild(thumbnail);
    });
});

// Change image on button click
function changeImage(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    updateDisplay();
}

// Set image by index
function setCurrentImage(index) {
    currentIndex = index;
    updateDisplay();
}

// Update main image and active thumbnail
function updateDisplay() {
    const currentImage = document.getElementById('current-image');
    currentImage.src = images[currentIndex];
    currentImage.alt = `Gallery Image ${currentIndex + 1}`;

    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach((thumbnail, index) => {
        thumbnail.classList.toggle('active', index === currentIndex);
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
});
