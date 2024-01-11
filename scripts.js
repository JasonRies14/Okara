document.addEventListener("DOMContentLoaded", function () {
    // Common variables
    var lolw = document.getElementById("lolw");
    var logoImg = document.getElementById("logoimg");
    var navMenuToggle = document.querySelector('.nav-menu-toggle');
    var navLinks = document.querySelector('.nav-links');

    // Function to handle scroll event
    function handleScroll() {
        if (window.scrollY > 0) {
            lolw.classList.add("scrolled");
            logoImg.classList.add("scrolled");
        } else {
            lolw.classList.remove("scrolled");
            logoImg.classList.remove("scrolled");
        }

        // Additional scroll handling for nav-links
        if (window.scrollY > 0) {
            navLinks.classList.add('scrolled');
        } else {
            navLinks.classList.remove('scrolled');
        }
    }

    // Event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Event listener for menu toggle
    navMenuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});
