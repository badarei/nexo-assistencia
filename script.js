(function(){
  const burger = document.querySelector('.burger');
  const mobileNav = document.querySelector('.mobile-nav');
  if(!burger || !mobileNav) return;

  const closeNav = () => {
    burger.setAttribute('aria-expanded','false');
    mobileNav.hidden = true;
  };

  burger.addEventListener('click', () => {
    const isOpen = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.hidden = isOpen;
  });

  mobileNav.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', closeNav);
  });
})();
