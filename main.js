'use strict';
import './sass/main.scss';

// Variables
const primaryHeader = document.querySelector('.primary-header');
const navBtnToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

// Accessible Mobile Menu
navBtnToggle.addEventListener('click', () => {
	if (primaryNav.hasAttribute('data-visible')) {
		navBtnToggle.setAttribute('aria-expanded', false);
	} else {
		navBtnToggle.setAttribute('aria-expanded', true);
	}

	primaryNav.toggleAttribute('data-visible');
	primaryHeader.toggleAttribute('data-overlay');
});
