import { displayHomepage } from "./homepage";
import { displayMenuPage } from "./menu";
import { displayContactPage } from "./contact";

const parentDiv = document.getElementById("content");
const allMenuBtn= document.querySelectorAll(".nav-link")
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

window.addEventListener("load", displayHomepage);

homeBtn.addEventListener("click", function (e) {
	removeActiveBtn();
	e.target.classList.add('active');
	parentDiv.innerHTML = "";
	displayHomepage();
});

menuBtn.addEventListener("click", function (e) {
	removeActiveBtn();
	e.target.classList.add('active');
	parentDiv.innerHTML = "";

	displayMenuPage();
});

contactBtn.addEventListener("click", function (e) {
	removeActiveBtn();
	e.target.classList.add('active');
	parentDiv.innerHTML = "";
	displayContactPage();
});

function removeActiveBtn() {
	allMenuBtn.forEach(function(btn) {
		btn.classList.remove('active')
	})
}
