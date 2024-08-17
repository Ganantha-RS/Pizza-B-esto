// toogle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika humberger menu di click
document.querySelector('#hamburger-menu').onclick = () => {
navbarNav.classList.toggle('active');
};

// klick di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classlist.remove('active');
    }
}); 

// Animasi
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
    });

  });
  
  const hiddenElement1 = document.querySelectorAll('.animasi')
  const hiddenElement = document.querySelectorAll('.animasi')
  hiddenElement.forEach((el) => observer.observe(el));