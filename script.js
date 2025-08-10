const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

function removeActiveClasses() {
  navLinks.forEach(link => link.classList.remove('active'));
}

function activateNavLink() {
  let scrollPos = window.scrollY + 120; // adjust offset for fixed header height

  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      const id = section.getAttribute('id');
      removeActiveClasses();
      const activeLink = document.querySelector(`.navbar a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}

window.addEventListener('scroll', activateNavLink);

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    removeActiveClasses();
    link.classList.add('active');
  });
});

window.addEventListener('load', activateNavLink);
