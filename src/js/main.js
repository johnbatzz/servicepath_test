// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


export function openMobileMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

Array.from(document.querySelectorAll('.icon')).forEach((el => {
    el.addEventListener('click', () => {
        openMobileMenu();
    })
}));

Array.from(document.querySelectorAll('#myLinks > a')).forEach((el => {
    el.addEventListener('click', () => {
        openMobileMenu();
    })
}));
