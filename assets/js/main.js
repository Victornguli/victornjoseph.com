let menuBtn = document.querySelector('.menu-btn');
let siteNav = document.querySelector('.site-nav');
let navItems = document.querySelectorAll('.nav-item');

menuBtn.addEventListener('click', openMenu);


function openMenu() {
    menuBtn.classList.toggle('close');
    siteNav.classList.toggle('show');

    navItems.forEach(item => {
        item.classList.toggle('show')
    });
}