document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('header nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.error(`Target element with id '${targetId}' not found.`);
            }
        });
    });

    // Menu toggle
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };
    } else {
        console.error('Menu icon or navbar element not found.');
    }
});
