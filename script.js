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
});