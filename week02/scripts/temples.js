document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    const lastUpdated = document.lastModified;
    document.getElementById('lastUpdated').textContent = lastUpdated;

    const menuLinks = document.querySelectorAll('nav ul li a');
    const currentMenuHeading = document.getElementById('currentMenu');

    // Add event listeners to each menu link
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const menuText = link.getAttribute('data-menu');
            currentMenuHeading.textContent = menuText; // Update the heading
        });
    });

    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        const isVisible = navMenu.style.display === 'block';
        navMenu.style.display = isVisible ? 'none' : 'block';
        hamburger.textContent = isVisible ? '☰' : 'X';
    });
});
