// --- Projects filtering by category ---
function showCategory(category) {
  const boxes = document.querySelectorAll('.portfolio-box');
  boxes.forEach(box => {
    if (category === 'all' || box.classList.contains(category)) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });

  // Update active tab button styles
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(btn => {
    if (btn.textContent.toLowerCase() === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// --- Navbar scroll highlighting ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

function removeActiveClasses() {
  navLinks.forEach(link => link.classList.remove('active'));
}

function activateNavLink() {
  let scrollPos = window.scrollY + 120; // offset for fixed header

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

window.addEventListener('load', () => {
  activateNavLink();
  showCategory('visualization'); // Show visualization category by default, change as needed
});
