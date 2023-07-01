"use strict";

const hamburgerMenu = document.querySelector(".hamburger-menu");
const checkbox = document.getElementById("checkbox");
const nav = document.querySelector("nav");

const openMenu = () => {
	const aside = document.querySelector(".aside-options");

	aside.classList.toggle("hidden-hamburger");
};

checkbox.addEventListener("click", openMenu);
