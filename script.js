// Simple Lightbox Implementation
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const images = document.querySelectorAll('.lightbox-img');
    let isZoomed = false;

    // Open lightbox
    images.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
            document.body.style.overflow = 'hidden';
            isZoomed = false;
            lightboxImg.style.transform = 'scale(1)';
        });
    });

    // Toggle zoom on image click
    lightboxImg.addEventListener('click', (e) => {
        e.stopPropagation();
        isZoomed = !isZoomed;
        lightboxImg.style.transform = isZoomed ? 'scale(1.5)' : 'scale(1)';
    });

    // Close lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close on click outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Add arrow key navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            const currentImg = Array.from(images).find(img => img.src === lightboxImg.src);
            const currentIndex = Array.from(images).indexOf(currentImg);

            if (e.key === 'ArrowLeft' && currentIndex > 0) {
                lightboxImg.src = images[currentIndex - 1].src;
                isZoomed = false;
                lightboxImg.style.transform = 'scale(1)';
            }
            if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
                lightboxImg.src = images[currentIndex + 1].src;
                isZoomed = false;
                lightboxImg.style.transform = 'scale(1)';
            }
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 