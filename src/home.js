import { page6 } from "./page6";

export function homeJs() {
    const homeLi = document.querySelector('#nav-ul li:nth-child(1)');
    const homePage = document.getElementById('home-page');
    const navOverlay = document.getElementById("nav-overlay");
    const entireDocument = document.getElementById('entire-document');
    const body = document.querySelector('body');
    const footer = document.querySelector('#footer-p1');
    const page2 = document.getElementById('page-2');
    const page3 = document.getElementById('page-3');
    const page4 = document.getElementById('page-4');
    const page5 = document.getElementById('page-5');
    const page6 = document.getElementById('page-6');
    const page7 = document.getElementById('page-7');
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const navHeaderHome = document.getElementById('nav-text-home');
    const navHeaderAbout = document.getElementById('nav-text-about');
    const navHeaderSystem = document.getElementById('nav-text-system');
    const navHeaderPerformance = document.getElementById('nav-text-performance');
    const navHeaderWellness = document.getElementById('nav-text-wellness');
    const navHeaderEducation = document.getElementById('nav-text-education');
    const navHeaderVideos = document.getElementById('nav-text-videos');
    const mindGymLabLogo = document.getElementById('logo-img');
    homeLi.addEventListener('click', function() {
        navOverlay.style.display = "none";
        page2.style.display = "none";
        entireDocument.style.display = "block";
        homePage.style.display = "block";
        body.style.backgroundColor = "black";
        page3.style.display = "none";
        page4.style.display = "none";
        page5.style.display = "none";
        page6.style.display = "none";
        page7.style.display = "none";
    })
    learnMoreBtn.addEventListener('click', function() {
        homePage.style.display = "none";
        page4.style.display = "block";
    })

    navHeaderHome.addEventListener('click', function() {
        homePage.style.display = "block";
        page2.style.display = "none";
        page3.style.display = "none";
        page4.style.display = "none";
        page5.style.display = "none";
        page6.style.display = "none";
        page7.style.display = "none";
    })


    navHeaderAbout.addEventListener('click', function() {
        homePage.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "none";
        page4.style.display = "none";
        page5.style.display = "none";
        page6.style.display = "none";
        page7.style.display = "none";
    })

    navHeaderSystem.addEventListener('click', function() {
        homePage.style.display = "none";
        page2.style.display = "none";
        page3.style.display = "block";
        page4.style.display = "none";
        page5.style.display = "none";
        page6.style.display = "none";
        page7.style.display = "none";
    })

    navHeaderPerformance.addEventListener('click', function() {
        homePage.style.display = "none";
        page2.style.display = "none";
        page3.style.display = "none";
        page4.style.display = "block";
        page5.style.display = "none";
        page6.style.display = "none";
        page7.style.display = "none";
    })
    navHeaderWellness.addEventListener('click', function() {
        homePage.style.display = "none";
        page2.style.display = "none";
        page3.style.display = "none";
        page4.style.display = "none";
        page5.style.display = "block";
        page6.style.display = "none";
        page7.style.display = "none";
    })
    navHeaderEducation.addEventListener('click', function() {
        homePage.style.display = "none";
        page2.style.display = "none";
        page3.style.display = "none";
        page4.style.display = "none";
        page5.style.display = "none";
        page6.style.display = "flex";
        page7.style.display = "none";
    })
    navHeaderVideos.addEventListener('click', function() {
        homePage.style.display = "none";
        page2.style.display = "none";
        page3.style.display = "none";
        page4.style.display = "none";
        page5.style.display = "none";
        page6.style.display = "none";
        page7.style.display = "flex";
    })

    mindGymLabLogo.addEventListener('click', function() {
        homePage.style.display = "block";
        page2.style.display = "none";
        page3.style.display = "none";
        page4.style.display = "none";
        page5.style.display = "none";
        page6.style.display = "none";
        page7.style.display = "none";
    })

    const videoElement = document.getElementById('hero-img');
const heroMainText = document.getElementById('hero-main-text-container');
const heroSmallText = document.getElementById('hero-small-text-container');

// Add an event listener to monitor video playback
videoElement.addEventListener('timeupdate', () => {
    if (videoElement.currentTime >= 25) {
        // Hide the text elements at 25 seconds
        heroMainText.style.display = 'none';
        heroSmallText.style.display = 'none';
    } else {
        // Show the text elements before 25 seconds
        heroMainText.style.display = 'block';
        heroSmallText.style.display = 'block';
    }
});
}


