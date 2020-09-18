import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../dist/style.css";

function displayContactPage() {
	const parentDiv = document.getElementById("content");
	const contactDiv = document.createElement("div");
	contactDiv.innerHTML = `<div class="container">
    <div class="row">
      <div class="col-sm-7" id="contact-padding">
        <table>
          <h1>Contact</h1>
          <br />
          <br />
          <tr>
            <th width="120px">Email:</th>
            <td>info@huntdavid.com</td>
          </tr>
            <th>Hotline:</th>
            <td>4569-72890</td>
          </tr>
          
          <tr>
            <th>Address:</th>
            <td>Flat D, 31/F, Billion Plaza 2, 10 Cheung Yue Street, Cheung Sha Wan, Kowloon, Hong Kong</td>
          </tr>
   </table>
   </div>
      
      <div class="col-sm-5" id="map-padding">
        <h1>Visit Us</h1>
        <br />
        <br />
  
        <div class="embed-responsive embed-responsive-4by3">
        <iframe width="350" height="475" frameborder="0" scrolling="no"
   marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;h1=en&amp;geocode=&amp;q=billion+plaza+2+cheung+yue+street+hong+kong&amp;output=embed" class="embed-responsive-item">
   </iframe>
          </div>
      
          </div>
    </div>
    </div>
  `;

	parentDiv.appendChild(contactDiv);
}

export { displayContactPage };
