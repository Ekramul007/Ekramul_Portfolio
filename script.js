// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Scroll to the target section smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional JavaScript animations (you can add more if needed)
window.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('.about');
    
    if (aboutSection) { // Ensure the section exists
        const aboutPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.8; // Adjusted to 0.8 for better effect

        // Add class if the section is in view
        if (aboutPosition < screenPosition) {
            aboutSection.classList.add('about-appear');
        } else {
            aboutSection.classList.remove('about-appear'); // Optional: remove class when out of view
        }
    }
});
