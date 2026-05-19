document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.getElementById('mobile-menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      var nav = document.getElementById('mobile-nav');
      nav.classList.toggle('hidden');
    });
  }
});
