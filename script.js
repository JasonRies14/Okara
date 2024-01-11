document.addEventListener("DOMContentLoaded", function () {
    // Common variables
    var DivForHeaderAndNav = document.getElementById("DivForHeaderAndNav");
    var logoImg = document.getElementById("logoimg");
    var navMenuToggle = document.querySelector('.nav-menu-toggle');
    var navLinks = document.querySelector('.nav-links');

    // Function to debounce scroll event
    function debounce(func, wait) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Function to handle scroll event
    function handleScroll() {
        if (window.scrollY > 0) {
            DivForHeaderAndNav.classList.add("scrolled");
            logoImg.classList.add("scrolled");
        } else {
            DivForHeaderAndNav.classList.remove("scrolled");
            logoImg.classList.remove("scrolled");
        }

        // Additional scroll handling for nav-links
        if (window.scrollY > 0) {
            navLinks.classList.add('scrolled');
        } else {
            navLinks.classList.remove('scrolled');
        }
    }

    // Debounce the scroll event
    var debouncedScroll = debounce(handleScroll, 1);

    // Event listener for scroll
    window.addEventListener("scroll", debouncedScroll);

    // Event listener for menu toggle
    navMenuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});
