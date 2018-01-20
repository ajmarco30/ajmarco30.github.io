let state = {
  MENU:'CLOSED'
}

const hamburger = document.querySelectorAll('hamburger')[0];
const hamburgerTop1 = hamburger.children[0];
const hamburgerTop2 = hamburger.children[1];
const hamburgerMiddle1 = hamburger.children[2];
const hamburgerMiddle2 = hamburger.children[3];
const hamburgerBottom1 = hamburger.children[4];
const hamburgerBottom2 = hamburger.children[5];
const mobileMenu = document.querySelectorAll('mobile-menu')[0];

const toggleHamburger = () => {
  switch(state.MENU) {
    case 'CLOSED':
        requestAnimationFrame(() => {
          hamburgerTop1.classList.add('hamburger-top1-active');
          hamburgerTop2.classList.add('hamburger-top2-active');
          hamburgerMiddle1.classList.add('hamburger-middle1-active');
          hamburgerMiddle2.classList.add('hamburger-middle2-active');
          hamburgerBottom1.classList.add('hamburger-bottom1-active');
          hamburgerBottom2.classList.add('hamburger-bottom2-active');
          mobileMenu.classList.add('mobile-menu-active');
        });
        state.MENU = 'OPEN';
        console.log(state.MENU);
        break;
    case 'OPEN':
        requestAnimationFrame(() => {
          hamburgerTop1.classList.remove('hamburger-top1-active');
          hamburgerTop2.classList.remove('hamburger-top2-active');
          hamburgerMiddle1.classList.remove('hamburger-middle1-active');
          hamburgerMiddle2.classList.remove('hamburger-middle2-active');
          hamburgerBottom1.classList.remove('hamburger-bottom1-active');
          hamburgerBottom2.classList.remove('hamburger-bottom2-active');
          mobileMenu.classList.remove('mobile-menu-active');
        });
        state.MENU = 'CLOSED';
        console.log(state.MENU);
        break;
  }
}
