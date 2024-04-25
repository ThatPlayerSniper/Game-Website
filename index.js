//Nav Bar resposive behavior

function myNavBar() {
    var x = document.getElementById("navBarResposive");
    if (x.className === "navBarNavi") {
        x.className += " responsive";
    } else {
        x.className = "navBarNavi";
    }
}


//Carrosel Responsive

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("SlidePart");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Muda a cada 5 segundos
}

