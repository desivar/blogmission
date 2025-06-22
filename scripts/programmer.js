// Activating Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId);
        const nav = document.getElementById(navId);

        if(toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
                // Toggle aria-expanded for accessibility
                const isExpanded = nav.classList.contains('show');
                toggle.setAttribute('aria-expanded', isExpanded);
            });
        }
    }

    showMenu('nav-toggle', 'nav-menu');

    // Toggling Menu by clicking mobile menu links
    const navLinks = document.querySelectorAll('.nav-link');

    function linkAction() {
        navLinks.forEach(n => n.classList.remove('active'));
        this.classList.add('active');

        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show');
        document.getElementById('nav-toggle').setAttribute('aria-expanded', 'false');
    }

    navLinks.forEach(n => n.addEventListener('click', linkAction));

    // Changing Active Menu section while scrolling
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector(`.nav-menu a[href*="${sectionId}"]`).classList.add('active');
            } else {
                document.querySelector(`.nav-menu a[href*="${sectionId}"]`).classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

    // Initialize ScrollReveal if it exists
    if(typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 2000,
            reset: true
        });

        // Configure animations
        sr.reveal('.home-title', {});
        sr.reveal('.home-scroll', {delay: 200});
        sr.reveal('.home-img', {origin: 'right', delay: 400});

        sr.reveal('.about-img', {delay: 500});
        sr.reveal('.about-subtitle', {delay: 300});
        sr.reveal('.about-profession', {delay: 400});
        sr.reveal('.about-text', {delay: 500});
        sr.reveal('.about-social-icon', {delay: 600, interval: 200});

        sr.reveal('.skills-subtitle', {});
        sr.reveal('.skills-name', {distance: '20px', delay: 50, interval: 100});
        sr.reveal('.skills-img', {delay: 400});

        sr.reveal('.portfolio-img', {interval: 200});

        sr.reveal('.contact-subtitle', {});
        sr.reveal('.contact-text', {interval: 200});
        sr.reveal('.contact-input', {delay: 400});
        sr.reveal('.contact-button', {delay: 600});
    } else {
        console.warn('ScrollReveal is not loaded. Animations will not work.');
    }

    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});