const hamburger = document.querySelectorAll('hamburger')[0];
const hamburgerTop = hamburger.children[0];
const hamburgerMiddle = hamburger.children[1];
const hamburgerBottom = hamburger.children[2];

const state = {
		NAVDRAWER:false
	};

	const toggleHamburger = () => {
		if (state.NAVDRAWER){
			requestAnimationFrame(() => {
				//filter.classList.remove('filter-active');
				hamburger.classList.remove('hamburger-active');
				hamburgerTop.classList.remove('hamburger-top-active');
				hamburgerMiddle.classList.remove('hamburger-middle-active');
				hamburgerBottom.classList.remove('hamburger-bottom-active');
				//navdrawer.classList.remove('navdrawer-active');
			});
			state.NAVDRAWER = false;
		}
		else{
			requestAnimationFrame(() => {
				//filter.classList.add('filter-active');
				hamburger.classList.add('hamburger-active');
				hamburgerTop.classList.add('hamburger-top-active');
				hamburgerMiddle.classList.add('hamburger-middle-active');
				hamburgerBottom.classList.add('hamburger-bottom-active');
				//navdrawer.classList.add('navdrawer-active');
			});
			state.NAVDRAWER = true;
		}
	}
