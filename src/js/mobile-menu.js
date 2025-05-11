// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-button]');
//   const mobileMenuRef = document.querySelector('[data-menu]');
//   const menuLinks = document.querySelectorAll('[data-menu-link]');
//   const body = document.body;

//   menuBtnRef.addEventListener('click', () => {
//     const expanded =
//       menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
//     menuBtnRef.classList.toggle('is-open');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);
//     mobileMenuRef.classList.toggle('is-open');
//     body.classList.toggle('no-scroll');
//   });
// })();

// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-button]');
//   const mobileMenuRef = document.querySelector('[data-menu]');
//   const menuLinks = document.querySelectorAll('[data-menu-link]');
//   const body = document.body;

//   const toggleMenu = () => {
//     const expanded =
//       menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     menuBtnRef.classList.toggle('is-open');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);
//     mobileMenuRef.classList.toggle('is-open');
//     body.classList.toggle('no-scroll');
//   };

//   menuBtnRef.addEventListener('click', toggleMenu);

//   menuLinks.forEach(link => {
//     link.addEventListener('click', () => {
//       // Закрываем меню при клике по ссылке
//       if (mobileMenuRef.classList.contains('is-open')) {
//         toggleMenu();
//       }
//     });
//   });
// })();

// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-button]');
//   const mobileMenuRef = document.querySelector('[data-menu]');
//   const menuLinks = document.querySelectorAll('[data-menu-link]');
//   const body = document.body;

//   const openMenu = () => {
//     mobileMenuRef.classList.remove('is-closing');
//     mobileMenuRef.classList.add('is-open');
//     menuBtnRef.classList.add('is-open');
//     menuBtnRef.setAttribute('aria-expanded', true);
//     body.classList.add('no-scroll');
//   };

//   const closeMenu = () => {
//     mobileMenuRef.classList.remove('is-open');
//     mobileMenuRef.classList.add('is-closing');
//     menuBtnRef.classList.remove('is-open');
//     menuBtnRef.setAttribute('aria-expanded', false);
//     body.classList.remove('no-scroll');

//     setTimeout(() => {
//       mobileMenuRef.classList.remove('is-closing');
//     }, 500); // должен совпадать с transition в CSS
//   };

//   menuBtnRef.addEventListener('click', () => {
//     const isOpen = mobileMenuRef.classList.contains('is-open');
//     if (isOpen) {
//       closeMenu();
//     } else {
//       openMenu();
//     }
//   });

//   menuLinks.forEach(link => {
//     link.addEventListener('click', () => {
//       if (mobileMenuRef.classList.contains('is-open')) {
//         closeMenu();
//       }
//     });
//   });

//   window.addEventListener('load', () => {
//     document.body.classList.add('is-ready');
//   });
// })();

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const menuLinks = document.querySelectorAll('[data-menu-link]');
  const body = document.body;

  const addTransitions = () => {
    mobileMenuRef.style.transition = 'transform 0.5s ease, opacity 0.4s ease';
  };

  const openMenu = () => {
    mobileMenuRef.classList.remove('is-closing');
    mobileMenuRef.classList.add('is-open');
    menuBtnRef.classList.add('is-open');
    menuBtnRef.setAttribute('aria-expanded', true);
    body.classList.add('no-scroll');
  };

  const closeMenu = () => {
    mobileMenuRef.classList.remove('is-open');
    mobileMenuRef.classList.add('is-closing');
    menuBtnRef.classList.remove('is-open');
    menuBtnRef.setAttribute('aria-expanded', false);
    body.classList.remove('no-scroll');

    setTimeout(() => {
      mobileMenuRef.classList.remove('is-closing');
    }, 500);
  };

  menuBtnRef.addEventListener('click', () => {
    const isOpen = mobileMenuRef.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenuRef.classList.contains('is-open')) {
        closeMenu();
      }
    });
  });

  // Reliable transition activation after full rendering
  window.addEventListener('load', () => {
    requestAnimationFrame(() => {
      addTransitions();
    });
  });
})();
