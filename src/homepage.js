import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../dist/style.css";

function displayHomepage() {
	const parentDiv = document.getElementById("content");
	const sliderHeroDiv = document.createElement("main");
	const footer = document.createElement("footer");

	sliderHeroDiv.classList.add("inner", "cover");
	sliderHeroDiv.id = "homepage";
	sliderHeroDiv.innerHTML = `<h1 class="cover-heading">AMPM Restaurant</h1>
  <p class="lead">AM&PM is the quintessential Breakfast Spot by day and a chic-yet-casual Sports Bar at night! AM is now open and brings the best of American-style breakfast to Accra. At AM, we put a twist on the classics by serving up fan favorites such as Pumpkin Spice Pancakes, Eggs in a Basket and Red Velvet Waffles. When you dine at AM it’s more than just fantastic food – it’s sunshine and conversation!</p>
  <p class="lead">
    <a href="#" class="btn btn-lg btn-secondary">Make an Order</a>
  </p>`;

	footer.classList.add("mast-foot", "mt-auto");
	footer.innerHTML = `<div class="inner">
  <p>Website by Hunt David @HD</a>.</p>
</div>`;

	parentDiv.appendChild(sliderHeroDiv);
	parentDiv.appendChild(footer);
}

export { displayHomepage };
