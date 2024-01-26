document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetSectionId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetSectionId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Collapse navbar on link click for small screens
    const navbar = document.getElementById('navbar');
    const navbarLinks = document.querySelectorAll('nav a');
  
    navbarLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 600) {
          navbar.style.display = 'none';
        }
      });
    });
  
    // Toggle navbar for small screens
    const navbarToggle = document.createElement('div');
    navbarToggle.className = 'navbar-toggle';
    navbarToggle.innerHTML = '<i class="fas fa-bars"></i>';
  
    document.body.appendChild(navbarToggle);
  
    navbarToggle.addEventListener('click', function() {
      if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
      } else {
        navbar.style.display = 'block';
      }
    });
  
    // Close navbar when clicking outside on small screens
    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 600 && e.target !== navbarToggle && !navbar.contains(e.target)) {
        navbar.style.display = 'none';
      }
    });
  });