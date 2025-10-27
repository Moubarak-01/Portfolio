// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener("scroll", () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Highlight navbar links
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');

            // Animate section
            sec.classList.add('show-animate');
        } else {
            // Remove animation if you want it to repeat
            sec.classList.remove('show-animate');
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    // Remove toggle icon and navbar on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Footer animation
    let footer = document.querySelector('footer');
    footer.classList.toggle(
        'show-animate',
        window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight
    );
});
