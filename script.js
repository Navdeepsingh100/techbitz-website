/*
 * JavaScript for TechBitz.io
 * Handles mobile navigation toggling and other interactive features.
 */

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    if (navToggle && navList) {
        navToggle.addEventListener('click', function () {
            navList.classList.toggle('show');
            // Animate hamburger into X
            navToggle.classList.toggle('open');
        });
    }

    // Hero slider functionality
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        };
        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        };
        showSlide(0);
        // Cycle slides every 6 seconds
        setInterval(nextSlide, 6000);
    }
});