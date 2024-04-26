document.addEventListener('DOMContentLoaded', function () {
    var navbarToggle = document.querySelector('[data-collapse-toggle="navbar-default"]');
    var navbar = document.getElementById('navbar-default');

    navbarToggle.addEventListener('click', function () {
        navbar.classList.toggle('hidden');
    });
});