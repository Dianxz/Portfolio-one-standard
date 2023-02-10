// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika humburger menu di klik 
const hamburger = document.querySelector('#humberger-menu');

hamburger.onclick = () => {
    navbarNav.classList.toggle('active');
}

// klik diluar sidebar untuk menghilangkan nav
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});