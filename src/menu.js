import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import css from "./../dist/style.css";

function displayMenuPage() {
	const parentDiv = document.getElementById("content");
	const contentSection = document.createElement("div");
	contentSection.classList.add("inner", "cover");
	contentSection.id = "menu";

	contentSection.innerHTML = `<div class="container py-5">
  <div class="row">
      <div class="col-lg-10 mx-auto col-12 text-center mb-3">
          <h1 class="mt-0 text-primary">Our Menu</h1>
          <p class="lead">Begin with a selection from our award winning beverage menu or choose a wine from our extensive wine list. Our wine list features over 100 different vintages and has received the chamber of commerce award of excellence.</p>
      </div>
      <div class="col-12 mt-4">
          <h3 class="text-center">Cocktails</h3>
          <hr class="accent my-5">
      </div>
      <div class="card-columns">
          <div class="card card-body">
              <span class="float-right font-weight-bold">$10</span>
              <h6 class="text-truncate">Chocolate Martini</h6>
              <p class="small">Tito's Vodka and White Créme de Cacao dusted with hand shaved chocolate.</p>
          </div>
          <div class="card card-body">
              <span class="float-right font-weight-bold">$9</span>
              <h6 class="text-truncate">Summer Breeze Martini</h6>
              <p class="small">Hendrick’s Gin, St. Germain Elderflower Liqueur and Brancot Sauvignon Blanc with a floater of Cristalino Cava Brut.</p>
          </div>
          <div class="card card-body">
              <span class="float-right font-weight-bold">$9</span>
              <h6 class="text-truncate">Sweet Heat Margarita</h6>
              <p class="small">Jalapeño infused tequila, triple sec, pineapple juice, lime.</p>
          </div>
          <div class="card card-body">
              <span class="float-right font-weight-bold">$10</span>
              <h6 class="text-truncate">Prickly Pear</h6>
              <p class="small">New Amsterdam Vodka and Pear liquer in a sugar rimmed glass.</p>
          </div>
          <div class="card card-body">
              <span class="float-right font-weight-bold">$9</span>
              <h6>Classic Martini</h6>
              <p class="small">Seagrams Gin, Dry Vermouth, pickle juice, olive juice.</p>
          </div>
          <div class="card card-body">
              <span class="float-right font-weight-bold">$10</span>
              <h6 class="text-truncate">Ruby Red Rosemary Refresher</h6>
              <p class="small">House infused rosemary vodka, St. Germaine Elderflower liqueur, grapefruit juice and a splash of soda.</p>
          </div>
      </div>
      <div class="col-12 mt-4">
          <h3 class="text-center">Starters</h3>
          <hr class="accent my-5">
      </div>
      <div class="card-columns">
          <div class="card card-body">
              <span class="float-right font-weight-bold">$9.95</span>
              <h6 class="text-truncate">Fried Shrimp</h6>
              <p class="small">Sustainably raised Argentine red shrimp, fried golden brown and served with chipotle mayonnaise for dipping.</p>
              <span class="font-weight-bold small">Add marinara or tartar: $2</span>
          </div>
          <div class="card card-body">
              <span class="float-right font-weight-bold">$8.95</span>
              <h6 class="text-truncate">Tuscan Bruschetta</h6>
              <p class="small">Crusty sliced Italian bread topped with basil, extra virgin olive oil, chopped tomatoes, garlic and fresh mozzarella cheese. Baked until it is nice and crispy and served with a side of balsamic reduction.</p>
          </div>
          <div class="card card-body">
              <span class="float-right font-weight-bold">$7.95</span>
              <h6 class="text-truncate">Quesadilla</h6>
              <p class="small">Jack and cheddar cheese, chopped mild green chilies in a pan grilled flour tortilla. Served with sour cream, guacamole and fresh pico de gallo.</p>
              <div class="font-weight-bold small">Add Chili: $2</div>
              <div class="font-weight-bold small">Add BBQ Pulled Pork: $2</div>
          </div>
          <div class="card card-body">
              <span class="float-right font-weight-bold">$9.95</span>
              <h6 class="text-truncate">Wings</h6>
              <p class="small">A dozen of our crispy, tasty chicken wings. Select 1 of our 4 seasonings.</p>
              <div class="font-weight-bold small">Classic Sweet BBQ</div>
              <div class="font-weight-bold small">Hot Buffalo Sauce</div>
              <div class="font-weight-bold small">Sriracha Honey Fish Sauce</div>
              <div class="font-weight-bold small">Scorching Hot Habanero</div>
          </div>
          <div class="card card-body">
              <span class="float-right font-weight-bold">$8.95</span>
              <h6 class="text-truncate">Ultimate Nacho Platter</h6>
              <p class="small"> House made corn tortilla chips, melted cheddar-Jack cheese, mild Anaheim chile salsa, refried beans, guacamole &amp; sour cream</p>
          </div>
          <div class="card card-body">
              <span class="float-right font-weight-bold">$10</span>
              <h6 class="text-truncate">Stuffed Clams</h6>
              <p class="small">Three large stuffies with chopped clams, medium spiced chouriço Portuguese sausage, chopped bacon, onions, peppers, a touch of crushed red pepper, bread crumbs and spices, topped with bacon.</p>
          </div>
      </div>
      <div class="col-12 mt-4">
          <h3 class="text-center">Main Plates</h3>
          <hr class="accent my-5">
      </div>
      <div class="card-columns">
          <div class="card card-body">
              <span class="float-right font-weight-bold">$17.95</span>
              <h6 class="text-underline">Fat Tuesday Salad</h6>
              <p class="small">New Orleans style hot sliced Cajun chicken breast with mixed greens, tomatoes, cucumbers and hard-cooked eggs with warm, spicy honey mustard dressing topped with crumbled bacon..</p>
              <span class="font-weight-bold small"></span>
          </div>
          <div class="card card-body">
              <span class="float-right font-weight-bold">$25.95</span>
              <h6>Braised Boneless Beef Short Ribs</h6>
              <p class="small"> Braised low and slow, resulting in meat that is deeply flavored, sublimely succulent and tender as can be imagined, yet maintaining a wonderful texture. Served on a bed of garlic smashed potatoes. Served with choice of additional side. </p>
          </div>
          <div class="card card-body">
              <span class="float-right font-weight-bold">$15.95</span>
              <h6>Jambalaya</h6>
              <p class="small"> Shrimp, chicken, andouille sausage, rice and traditional jambalaya vegetables and spices. Garnished with sweet red and yellow pepper confetti.</p>
          </div>
          <div class="card card-body">
              <span class="float-right font-weight-bold">$12.95</span>
              <h6>Stuffed Jumbo Shrimp</h6>
              <p class="small"> Crabmeat, chopped scallops, mushrooms, Jack cheese, seasoned bread crumbs, white wine and butter stuffing. </p>
          </div>
          <div class="card card-body">
              <span class="float-right font-weight-bold">$25.95</span>
              <h6>Sirloin Steak Tips</h6>
              <p class="small"> Chunks of tender, flavorful marinated sirloin sautéed with garlic and black pepper, finished with button mushrooms and a beef demi-glace. (Degree of doneness will vary slightly due to variations in size of chunks). Accompanied by Gorgonzola spiked garlic smashed potatoes. Served with choice of additional side.</p>
          </div>
          <div class="card card-body">
              <span class="float-right font-weight-bold">$14.95</span>
              <h6>Pasta Pomodoro</h6>
              <p class="small"> Fresh roasted garlic rigatoni with a light sauce of extra virgin California olive oil, fresh chopped tomatoes, basil, garlic, black pepper and a dash of crushed red pepper. Garnished with sun dried tomatoes and shaved parmesan. </p>
          </div>
      </div>
      <div class="col-12 mt-4">
          <hr class="accent my-5">
      </div>
      <div class="col-6 mx-auto">
          <div class="card card-body text-center">
              <h5 class="text-uppercase">Tuesday Only!</h5>
              <h6>Albondigas Soup</h6>
              <p class="small"> A steaming cup or bowl of Mexican meatball &amp; vegetable soup garnished with crispy tortilla strips and fresh cheddar-Jack cheese. If you like Mexican food try this!</p>
              <span class="float-right font-weight-bold">$7</span>
          </div>
      </div>
      <div class="col-12 mt-5 border border-right-0 border-left-0">
          <div class="row">
              <div class="col h5">Jack's Diner</div>
              <div class="col h5 text-right">1 800-889-Jack</div>
          </div>
      </div>
  </div>
</div>`;

	parentDiv.appendChild(contentSection);
}

export { displayMenuPage };
