document.addEventListener("DOMContentLoaded", function() {
    // Add Entrance Animations for each section when in view
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const fadeInOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        fadeInOnScroll.observe(section);
    });

    // Change Navbar Color on Scroll
    const navbar = document.querySelector('.navbar');
    window.onscroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    };
});