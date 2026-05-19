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

});
