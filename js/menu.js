function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
}

// Add event listener to handle window resize
window.addEventListener('resize', function() {
    const navbar = document.getElementById('navbar');
    if (window.innerWidth > 995) {
        navbar.style.display = 'flex';
    } else {
        navbar.style.display = 'none';
    }
}); 