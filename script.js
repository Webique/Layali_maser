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


// Lightbox Feature
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.createElement('div');
const lightboxImg = document.createElement('img');
const closeLightbox = document.createElement('span');

// Create Lightbox Elements
lightbox.className = 'lightbox';
closeLightbox.className = 'close-lightbox';
closeLightbox.innerHTML = '&times;';
lightbox.appendChild(lightboxImg);
lightbox.appendChild(closeLightbox);
document.body.appendChild(lightbox);

// Open Lightbox
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.classList.add('show');
        lightboxImg.src = item.src;
    });
});

// Close Lightbox
closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
});

// Close Lightbox When Clicking Outside Image
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('show');
    }
});

// Toggle Gallery Visibility
const galleryToggleButton = document.querySelector('.gallery-toggle-button');
const galleryGrid = document.querySelector('.gallery-grid');

galleryToggleButton.addEventListener('click', () => {
    galleryGrid.classList.toggle('active');
    galleryToggleButton.textContent = galleryGrid.classList.contains('active') ? "Hide Gallery" : "View Gallery";
});