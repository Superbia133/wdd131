// Function to show the correct page and hide others
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none'); // Hide all pages

    const activePage = document.getElementById(pageId);
    activePage.style.display = 'block'; // Show the selected page
}

// Set the default page to be displayed
window.onload = function() {
    showPage('golden-guild');
};
