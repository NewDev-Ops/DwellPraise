document.addEventListener('DOMContentLoaded', function () {

  // ========== Page Load Entrance ==========
  document.body.classList.add('page-enter');

  // ========== Mobile Menu Toggle ==========
  var menuBtn = document.getElementById('mobile-menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      var nav = document.getElementById('mobile-nav');
      if (nav) nav.classList.toggle('hidden');
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
