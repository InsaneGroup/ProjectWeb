document.addEventListener('DOMContentLoaded', () => {

    // Handle form submission for the contact form
    const contactForm = document.querySelector('.contact-form form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = contactForm.querySelector('input[name="name"]').value.trim();
        const email = contactForm.querySelector('input[name="email"]').value.trim();
        const message = contactForm.querySelector('textarea[name="message"]').value.trim();

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    const navLinks = document.querySelectorAll('.header-nav .nav-tab');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const target = document.querySelector(event.target.getAttribute('href'));
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Update active tab on click
    const tabs = document.querySelectorAll('.header-nav .nav-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(item => item.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Handle newsletter submission
    const newsletterForm = document.querySelector('.top-content .form');
    const newsletterSubmit = newsletterForm.querySelector('a');
    newsletterSubmit.addEventListener('click', () => {
        const name = newsletterForm.querySelector('input[placeholder="Name"]').value.trim();
        const email = newsletterForm.querySelector('input[placeholder="Email"]').value.trim();

        if (name && email) {
            alert(`Thank you, ${name}! You've subscribed with ${email}.`);
        } else {
            alert('Please provide both name and email.');
        }
    });

});
