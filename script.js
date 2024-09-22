// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations for About section
window.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('.about');
    const aboutPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight * 0.8;

    if (aboutPosition < screenPosition) {
        aboutSection.classList.add('about-appear');
    } else {
        aboutSection.classList.remove('about-appear');
    }
});
