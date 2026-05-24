document.addEventListener('DOMContentLoaded', function () {

  // ========== Page Load Entrance ==========
  document.body.classList.add('page-enter');

  // ========== Scroll Progress Bar ==========
  var progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.prepend(progressBar);
  var progressTicking = false;
  window.addEventListener('scroll', function () {
    if (!progressTicking) {
      requestAnimationFrame(function () {
        var scrollTop = window.scrollY;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
        progressTicking = false;
      });
      progressTicking = true;
    }
  }, { passive: true });

  // ========== Dynamic Copyright Year ==========
  var yearEls = document.querySelectorAll('.copyright-year');
  var currentYear = new Date().getFullYear().toString();
  yearEls.forEach(function (el) { el.textContent = currentYear; });

  // ========== Navbar Scroll Effect ==========
  var nav = document.querySelector('nav.sticky');
  if (nav) {
    var navBgThreshold = 50;
    var ticking = false;
    function updateNav() {
      if (window.scrollY > navBgThreshold) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateNav);
        ticking = true;
      }
    }, { passive: true });
    updateNav();
  }

  // ========== Back to Top Button ==========
  var backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.setAttribute('aria-label', 'Back to top');
  backToTop.setAttribute('type', 'button');
  backToTop.innerHTML = '<span class="material-symbols-outlined">keyboard_arrow_up</span>';
  document.body.appendChild(backToTop);

  var bttThreshold = 400;
  var bttTicking = false;
  function updateBackToTop() {
    if (window.scrollY > bttThreshold) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
    bttTicking = false;
  }
  window.addEventListener('scroll', function () {
    if (!bttTicking) {
      requestAnimationFrame(updateBackToTop);
      bttTicking = true;
    }
  }, { passive: true });

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ========== Mobile Menu Toggle ==========
  var menuBtn = document.getElementById('mobile-menu-btn');
  var mobileNav = document.getElementById('mobile-nav');
  var menuIcon = document.getElementById('menu-icon');
  var lastFocusedElement = null;

  if (menuBtn && mobileNav) {
    function openMenu() {
      lastFocusedElement = document.activeElement;
      mobileNav.classList.add('open');
      mobileNav.setAttribute('aria-hidden', 'false');
      menuBtn.setAttribute('aria-expanded', 'true');
      if (menuIcon) {
        menuIcon.textContent = 'close';
        menuIcon.classList.add('open');
      }
      // Focus first link
      var firstLink = mobileNav.querySelector('a');
      if (firstLink) setTimeout(function () { firstLink.focus(); }, 100);
      // Trap focus
      document.addEventListener('keydown', trapFocus);
    }

    function closeMenu() {
      mobileNav.classList.remove('open');
      mobileNav.setAttribute('aria-hidden', 'true');
      menuBtn.setAttribute('aria-expanded', 'false');
      if (menuIcon) {
        menuIcon.textContent = 'menu';
        menuIcon.classList.remove('open');
      }
      document.removeEventListener('keydown', trapFocus);
      // Restore focus
      if (lastFocusedElement) lastFocusedElement.focus();
    }

    function trapFocus(e) {
      if (e.key !== 'Tab') return;
      var focusable = mobileNav.querySelectorAll('a[href], button');
      if (focusable.length === 0) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    menuBtn.addEventListener('click', function () {
      var isOpen = mobileNav.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on link click
    var navLinks = mobileNav.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });

    // Close on ESC
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (mobileNav.classList.contains('open') && !mobileNav.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMenu();
      }
    });
  }

  // ========== Scroll-Triggered Reveal ==========
  var revealElements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-scale, .border-reveal, .scale-in'
  );

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    revealElements.forEach(function (el) { observer.observe(el); });
  } else {
    revealElements.forEach(function (el) { el.classList.add('visible'); });
  }

  // ========== Stagger Children Observer ==========
  var staggerElements = document.querySelectorAll('.stagger-children');
  if (staggerElements.length > 0 && 'IntersectionObserver' in window) {
    var staggerObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            staggerObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    staggerElements.forEach(function (el) { staggerObserver.observe(el); });
  }

  // ========== Split Reveal Observer ==========
  var splitElements = document.querySelectorAll('.split-reveal');
  if (splitElements.length > 0 && 'IntersectionObserver' in window) {
    var splitObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            splitObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    splitElements.forEach(function (el) { splitObserver.observe(el); });
  }

  // ========== Content Fade Observer ==========
  var fadeElements = document.querySelectorAll('.content-fade');
  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    var fadeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeElements.forEach(function (el) { fadeObserver.observe(el); });
  }

  // ========== Image Parallax on Scroll ==========
  var imgParallaxElements = document.querySelectorAll('.img-parallax img');
  if (imgParallaxElements.length > 0) {
    var imgParallaxTicking = false;
    function updateImgParallax() {
      imgParallaxElements.forEach(function (img) {
        var rect = img.parentElement.getBoundingClientRect();
        var offset = rect.top * 0.08;
        img.style.transform = 'translateY(' + offset + 'px)';
      });
      imgParallaxTicking = false;
    }
    window.addEventListener('scroll', function () {
      if (!imgParallaxTicking) {
        requestAnimationFrame(updateImgParallax);
        imgParallaxTicking = true;
      }
    }, { passive: true });
    updateImgParallax();
  }

  // ========== Smooth Page Transitions ==========
  var internalLinks = document.querySelectorAll('a[href]');
  var isTransitioning = false;

  internalLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (
      href &&
      !href.startsWith('http') &&
      !href.startsWith('#') &&
      !href.startsWith('mailto:') &&
      !href.startsWith('tel:') &&
      !href.startsWith('javascript:') &&
      !link.hasAttribute('download')
    ) {
      link.addEventListener('click', function (e) {
        if (isTransitioning) return;
        var target = href;
        e.preventDefault();
        isTransitioning = true;
        document.body.classList.remove('page-enter');
        document.body.classList.add('page-exit');
        setTimeout(function () {
          window.location.href = target;
        }, 300);
      });
    }
  });

  // ========== Active Nav Highlight ==========
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var navItems = document.querySelectorAll('nav a[href]');
  navItems.forEach(function (link) {
    var linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('text-primary', 'border-b-2', 'border-primary', 'pb-1');
      link.classList.remove('text-on-surface-variant', 'nav-link');
    }
  });

  // ========== Ripple Effect ==========
  var rippleElements = document.querySelectorAll('.ripple');
  rippleElements.forEach(function (el) {
    el.addEventListener('pointerdown', function (e) {
      var rect = el.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width) * 100;
      var y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--ripple-x', x + '%');
      el.style.setProperty('--ripple-y', y + '%');
    });
  });

  // ========== Magnetic Button Effect ==========
  var magneticElements = document.querySelectorAll('.magnetic-area');
  magneticElements.forEach(function (el) {
    el.addEventListener('mousemove', function (e) {
      var rect = el.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
    });
    el.addEventListener('mouseleave', function () {
      el.style.transform = 'translate(0, 0)';
    });
  });

  // ========== Parallax on Scroll ==========
  var parallaxContainers = document.querySelectorAll('.parallax-container');
  if (parallaxContainers.length > 0) {
    var parallaxTicking = false;
    function updateParallax() {
      parallaxContainers.forEach(function (container) {
        var rect = container.getBoundingClientRect();
        var centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
        var speed = parseFloat(container.dataset.parallaxSpeed) || 0.05;
        var child = container.querySelector(':scope > *');
        if (child) {
          child.style.transform = 'translateY(' + (centerOffset * speed) + 'px)';
        }
      });
      parallaxTicking = false;
    }
    window.addEventListener('scroll', function () {
      if (!parallaxTicking) {
        requestAnimationFrame(updateParallax);
        parallaxTicking = true;
      }
    }, { passive: true });
  }

  // ========== Count-up Animation ==========
  var countElements = document.querySelectorAll('.count-up');
  if (countElements.length > 0 && 'IntersectionObserver' in window) {
    var countObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var target = parseInt(el.dataset.target) || 0;
            var duration = parseInt(el.dataset.duration) || 2000;
            var start = 0;
            var startTime = null;
            function animate(currentTime) {
              if (!startTime) startTime = currentTime;
              var progress = Math.min((currentTime - startTime) / duration, 1);
              var eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.floor(eased * target).toLocaleString();
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                el.textContent = target.toLocaleString();
              }
            }
            requestAnimationFrame(animate);
            countObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    countElements.forEach(function (el) { countObserver.observe(el); });
  }

  // ========== Tilt Effect on Cards ==========
  var tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width;
      var y = (e.clientY - rect.top) / rect.height;
      var rotateX = (y - 0.5) * -8;
      var rotateY = (x - 0.5) * 8;
      card.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';
    });
    card.addEventListener('mouseleave', function () {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
      card.style.transition = 'transform 0.5s var(--ease-out-expo)';
      setTimeout(function () { card.style.transition = ''; }, 500);
    });
  });

});
