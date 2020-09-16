import 'bootstrap';
// import './scss/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const parentDiv = document.getElementById("content");
const header = document.createElement('nav');
header.classList.add('navbar', 'navbar-light', 'bg-light');
header.innerHTML = `<a class="navbar-brand">Navbar</a>
<form class="form-inline">
  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form>`

parentDiv.appendChild(header)