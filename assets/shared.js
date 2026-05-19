document.addEventListener('DOMContentLoaded', function () {

  // ========== Page Load Entrance ==========
  document.body.classList.add('page-enter');

  // ========== Dynamic Copyright Year ==========
  var yearEls = document.querySelectorAll('.copyright-year');
  var currentYear = new Date().getFullYear().toString();
  yearEls.forEach(function (el) { el.textContent = currentYear; });

  // ========== Navbar Scroll Effect ==========
  var nav = document.querySelector('nav.sticky');
  if (nav) {
    var navBgThreshold = 50;
    function updateNav() {
      if (window.scrollY > navBgThreshold) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  // ========== Back to Top Button ==========
  var backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.setAttribute('aria-label', 'Back to top');
  backToTop.innerHTML = '<span class="material-symbols-outlined">keyboard_arrow_up</span>';
  document.body.appendChild(backToTop);

  var bttThreshold = 400;
  function updateBackToTop() {
    if (window.scrollY > bttThreshold) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', updateBackToTop, { passive: true });

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ========== Mobile Menu Toggle ==========
  var menuBtn = document.getElementById('mobile-menu-btn');
  var mobileNav = document.getElementById('mobile-nav');
  var menuIcon = document.getElementById('menu-icon');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      var isOpen = mobileNav.classList.contains('open');
      if (isOpen) {
        mobileNav.classList.remove('open');
        if (menuIcon) {
          menuIcon.textContent = 'menu';
          menuIcon.classList.remove('open');
        }
      } else {
        mobileNav.classList.add('open');
        if (menuIcon) {
          menuIcon.textContent = 'close';
          menuIcon.classList.add('open');
        }
      }
    });

    // Close mobile nav on link click
    var navLinks = mobileNav.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        if (menuIcon) {
          menuIcon.textContent = 'menu';
          menuIcon.classList.remove('open');
        }
      });
    });
  }

  // ========== Scroll-Triggered Reveal ==========
  var revealElements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-scale, .border-reveal'
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

});
