document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Sticky navigation bar with scroll animation
    window.onscroll = function () {
      stickyNavbar();
    };
  
    const navbar = document.getElementById("nav-bar");
    const sticky = navbar.offsetTop;
  
    function stickyNavbar() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("fixed");
      } else {
        navbar.classList.remove("fixed");
      }
    }
  
    // Form submission alert
    const form = document.getElementById("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = document.getElementById("email").value;
      alert(`Thank you for subscribing with the email: ${emailInput}`);
      // You can add additional logic for form submission here
    });
  });