import { displayHomepage } from "./homepage";
import { displayMenuPage } from "./menu";
import { displayContactPage } from "./contact";

const parentDiv = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

window.addEventListener("load", displayHomepage);

homeBtn.addEventListener("click", function () {
	parentDiv.innerHTML = "";
	displayHomepage();
});

menuBtn.addEventListener("click", function () {
	parentDiv.innerHTML = "";

	displayMenuPage();
});

contactBtn.addEventListener("click", function () {
	parentDiv.innerHTML = "";
	displayContactPage();
});
