// create a function that allows me to interact with 
// the hamburger-icon
//get the element by id
import { page2 } from "./page2";

export function displayNavigation() {
    const navBtn = document.getElementById('hamburger-container');
    const entireDocument = document.getElementById('entire-document');
    const body = document.querySelector('body');
    navBtn.addEventListener('click', function() {
        entireDocument.style.display = "none";
        navOverlay.style.display = "flex";
        body.style.backgroundColor = "white";
    })


    const closeNavButton = document.getElementById("close-nav-btn-container");
    const navOverlay = document.getElementById("nav-overlay");
    
    closeNavButton.addEventListener('click', function() {
    navOverlay.style.display = "none";
    entireDocument.style.display = "block";
    body.style.backgroundColor = "black";
    })

   
}

