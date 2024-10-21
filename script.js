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
    const myAnimSection = document.querySelector('.myanim'); // Select My Animations section
    const aboutPosition = aboutSection.getBoundingClientRect().top;
    const myAnimPosition = myAnimSection.getBoundingClientRect().top; // Get position of My Animations section
    const screenPosition = window.innerHeight * 0.8;

    // Check if About section is in view
    if (aboutPosition < screenPosition) {
        aboutSection.classList.add('about-appear');
    } else {
        aboutSection.classList.remove('about-appear');
    }

    // Check if My Animations section is in view
    if (myAnimPosition < screenPosition) {
        myAnimSection.classList.add('myanim-appear'); // Add class for animation
    } else {
        myAnimSection.classList.remove('myanim-appear'); // Remove class if out of view
    }
});
