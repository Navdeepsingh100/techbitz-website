// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navUl = document.querySelector('nav ul');

    hamburger?.addEventListener('click', () => {
        navUl?.classList.toggle('open');
        hamburger.classList.toggle('open');
    });
});

// Contact form handler
function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById('form-status');
    status.textContent = 'Thank you for reaching out! We will get back to you soon.';
    // Reset form fields
    event.target.reset();
    return false;
}