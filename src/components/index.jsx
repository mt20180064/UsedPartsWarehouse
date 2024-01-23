import React from 'react';
import logo from '../img/logo.jpg';
import '../style/index.css';
import comp from '../img/m.jpg';
import p1 from '../img/1.jpg';
import p2 from '../img/2.jpg';
import p3 from '../img/3.jpg';
import { useNavigate } from "react-router-dom";

const Index = () => {


    let navigate= useNavigate();
    const goToWebShop = () => {
            navigate('/WebShop');
        }

        document.addEventListener("DOMContentLoaded", function() {
            let slideIndex = 1;
            showSlides(slideIndex);
        
            window.moveSlide = function(n) {
                showSlides(slideIndex += n);
            }
        
            function showSlides(n) {
                let i;
                let slides = document.getElementsByClassName("slide");
                if (n > slides.length) { slideIndex = 1 }
                if (n < 1) { slideIndex = slides.length }
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slides[slideIndex - 1].style.display = "block";
            }
        });

    
  return (
    <>
    <body>
      <div className="container">
      {/* Navbar */}
      <nav className="navbar">
      <ul>
      <li class="pics"><img className = "photo" src = {logo}></img></li>
      <li class="pics"><img className = "photo" src = {comp}></img></li>
      <div className="icon-container">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

</div>
      
    </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content" style={{ position: 'relative', overflow: 'hidden' }}>
      <h1>GRUNDFOS</h1>
      <h2>Magacin polovnih delova</h2>
      <div className="image-slider">
        <div className="slide">
            <img src={p1} alt="Image 1"></img>
        </div>
        <div className="slide">
            <img src={p2} alt="Image 2"></img>
        </div>
        <div className="slide">
            <img src={p3} alt="Image 3"></img>
        </div>
        <a className="prev" onclick="moveSlide(-1)">&#10094;</a>
        <a className="next" onclick="moveSlide(1)">&#10095;</a>
    </div>
      <div className="boxes">
      <div className="box" id="box1">
        <h2>Uzmi sa stanja</h2>
        <p>Pogledajte katalog nаših proizvoda i poručite baš onaj koji vam je potreban!</p>
        <button className="buttonInBox" onClick = {goToWebShop}>Katalog</button>
      </div>
  <div className="box" id="box2">
    <h2>Vrati na stanje</h2>
    <p>Ukoliko deo koji ste poručili ne odgovara, brzo i jednostavno ga zamenite ili vratite!</p>
    <button className="buttonInBox" onClick = {goToWebShop}>Vraćanje</button>
  </div>
  <div className="box" id="box3">
    <h2>Poruči servis</h2>
    <p>Imaš pokvaren deo kom je potrebna popravka? Poruči servis dela!</p>
    <button className="buttonInBox" onClick = {goToWebShop}>Servis</button>
  </div>
  </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-icons">
        <a href="mailto:support@gmail.com" className="email-link">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
support@gmail.com
</a>
<a href="tel:+38112345567" className="phone-link">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
  +38112345567
</a>

</div>

      </footer>
    </div>
    </body>
    </>
  )
}

export default Index;