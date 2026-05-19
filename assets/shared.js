document.addEventListener('DOMContentLoaded', function () {

  // ========== Page Load Entrance ==========
  document.body.classList.add('page-enter');

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
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
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
        }, 250);
      });
    }
  });

});
