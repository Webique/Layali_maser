// Select Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a'); // Individual navigation links

// Toggle Dropdown Menu
hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the document
    hamburger.classList.toggle('active'); // Animates the hamburger
    navLinks.classList.toggle('active'); // Slides down/up the menu
});

// Close Menu When Clicking a Navigation Link
navLinksItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').slice(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);

        // Calculate dynamic offset based on viewport size
        const headerHeight = document.querySelector('.main-header').offsetHeight; // Get header height
        let offset = headerHeight;

        // Add extra offset for smaller screens (adjust value as needed)
        if (window.innerWidth <= 768) {
            offset += 20; // Add 10px for phones and smaller devices
        }

        // Scroll to the target section with adjusted offset
        const sectionPosition = targetSection.offsetTop - offset;
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });

        // Close the dropdown menu
        hamburger.classList.remove('active'); // Reset hamburger animation
        navLinks.classList.remove('active'); // Close dropdown
    });
});

// Close Menu When Clicking Outside
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active')) {
        hamburger.classList.remove('active'); // Reset hamburger animation
        navLinks.classList.remove('active'); // Close dropdown
    }
});
// Gallery Slider Logic
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.gallery-slider .slides');
    const slideImages = document.querySelectorAll('.gallery-slider img');
    let currentIndex = 0;

    const slideCount = slideImages.length;

    // Automatic slide transition
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000); // Change slide every 3 seconds
});

// JavaScript for slideshow gallery navigation
const images = [
    'assets/pic1.jpg', 'assets/pic2.jpg', 'assets/pic3.jpg',
    'assets/pic4.jpg', 'assets/pic5.jpg', 'assets/pic6.jpg',
    'assets/pic7.jpg', 'assets/pic8.jpg', 'assets/pic9.jpg',
    'assets/pic10.jpg'
];

let currentImageIndex = 0;
let slideshowInterval;

// Update the displayed image
function updateImage() {
    const galleryImage = document.getElementById('gallery-image');
    galleryImage.src = images[currentImageIndex];
    galleryImage.alt = `Gallery Image ${currentImageIndex + 1}`;
}

// Move to the previous image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

// Move to the next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

// Start automatic slideshow
function startSlideshow() {
    slideshowInterval = setInterval(nextImage, 4000); // Change image every 4 seconds
}

// Stop the slideshow when the user interacts
function stopSlideshow() {
    clearInterval(slideshowInterval);
}

// Add event listeners for buttons to pause the slideshow
document.querySelector('.left-button').addEventListener('click', () => {
    stopSlideshow();
    prevImage();
    startSlideshow(); // Restart slideshow after interaction
});

document.querySelector('.right-button').addEventListener('click', () => {
    stopSlideshow();
    nextImage();
    startSlideshow(); // Restart slideshow after interaction
});

// Start the slideshow on page load
window.addEventListener('load', startSlideshow);
