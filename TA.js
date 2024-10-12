document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.custom-navbar');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});