/* particlesJS() configuration for a blue flame/gas effect */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#3ab4ff", "#0080ff", "#0056b3", "#88c0ff"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.6,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "top",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});

// Add animations and interactive elements
document.addEventListener('DOMContentLoaded', function() {
  // Make logo floating animation more pronounced
  const logo = document.querySelector('.logo-area img');
  if (logo) {
    setInterval(() => {
      logo.style.transform = 'translateY(-8px)';
      setTimeout(() => {
        logo.style.transform = 'translateY(0)';
      }, 800);
    }, 2000);
  }

  // Add hover effects for service icons
  const serviceIcons = document.querySelectorAll('.service-icon');
  serviceIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.classList.add('animated');
    });
    
    icon.addEventListener('mouseout', () => {
      setTimeout(() => {
        icon.classList.remove('animated');
      }, 1000);
    });
  });
  
  // Add pulse effect to the registered badge
  const badge = document.querySelector('.registered-badge');
  if (badge) {
    setInterval(() => {
      badge.classList.add('highlight');
      setTimeout(() => {
        badge.classList.remove('highlight');
      }, 700);
    }, 3000);
  }

  // Make social icons interactive
  const socialIcons = document.querySelectorAll('.social-link i, .contact-row i.fab');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.transform = 'scale(1.2) rotate(360deg)';
    });
    
    icon.addEventListener('mouseout', () => {
      icon.style.transform = 'scale(1) rotate(0deg)';
    });
  });
  
  // Add synchronized animation to paired service icons
  const serviceRows = document.querySelectorAll('.service-row');
  serviceRows.forEach(row => {
    const icons = row.querySelectorAll('.service-icon');
    const text = row.querySelector('.service-text');
    
    row.addEventListener('mouseover', () => {
      icons.forEach(icon => {
        icon.style.filter = 'drop-shadow(0 0 12px rgba(0, 165, 255, 1))';
      });
      
      if (text) {
        text.style.color = '#88c0ff';
      }
    });
    
    row.addEventListener('mouseout', () => {
      icons.forEach(icon => {
        icon.style.filter = 'drop-shadow(0 0 8px rgba(0, 123, 255, 0.8))';
      });
      
      if (text) {
        text.style.color = '';
      }
    });
  });

  // Make contact row icons interactive
  const contactIcons = document.querySelectorAll('.contact-row i:not(.fab)');
  contactIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.filter = 'drop-shadow(0 0 10px rgba(0, 165, 255, 1))';
      icon.style.transform = 'scale(1.2)';
    });
    
    icon.addEventListener('mouseout', () => {
      icon.style.filter = '';
      icon.style.transform = '';
    });
  });

  // Add animation to sample icons
  const sampleIcons = document.querySelectorAll('.sample-icon');
  sampleIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
      // Pause the current animation by setting animation to 'none'
      const currentAnimation = window.getComputedStyle(icon).animationName;
      icon.style.animation = 'none';
      
      // Force reflow
      void icon.offsetWidth;
      
      // Apply a quick pulse effect
      icon.style.transform = 'scale(1.3)';
      icon.style.filter = 'drop-shadow(0 0 15px rgba(0, 165, 255, 1))';
      
      // Reset to original animation after the pulse
      setTimeout(() => {
        icon.style.transform = '';
        icon.style.filter = '';
        icon.style.animation = currentAnimation;
      }, 500);
    });
  });
  
  // Fix for potentially missing elements when the DOM structure changes
  document.addEventListener('click', function() {
    // This ensures any DOM changes are recognized
    const registeredBadge = document.querySelector('.registered-badge-container');
    if (registeredBadge) {
      if (window.innerHeight < document.body.scrollHeight) {
        // If content extends beyond viewport, ensure the badge is visible
        registeredBadge.style.marginTop = '20px';
        registeredBadge.style.position = 'relative';
      }
    }
  });

  // Back to top button functionality
  const backToTopButton = document.querySelector('.back-to-top');
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'flex';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
    
    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Initially hide the button
    backToTopButton.style.display = 'none';
  }
});