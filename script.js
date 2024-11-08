const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header navbar');

window.onscroll = () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = window.offsetTop - 150;
    const height = window.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
      })
    }
  })
}

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});