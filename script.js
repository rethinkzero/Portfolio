// Hide logo on scroll, keep navbar visible
window.addEventListener('scroll', function() {
    const logoHeader = document.getElementById('logoHeader');
    const navbar = document.getElementById('navbar');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        logoHeader.classList.add('hidden');
        navbar.style.top = '1rem';
    } else {
        logoHeader.classList.remove('hidden');
        navbar.style.top = '12rem';
    }
});

// Initialize navbar position when page loads
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.style.top = '12rem';
    }
});
