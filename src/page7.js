export function page7() {
    const videoLi = document.querySelector('#nav-ul li:nth-child(7)');
    const homePage = document.getElementById('home-page');
    const navOverlay = document.getElementById("nav-overlay");
    const entireDocument = document.getElementById('entire-document');
    const body = document.querySelector('body');
    const page2 = document.getElementById('page-2');
    const p3Container = document.getElementById('page-3');
    const page4 = document.getElementById('page-4');
    const page5 = document.getElementById('page-5');
    const page6 = document.getElementById('page-6');
    const page7 = document.getElementById('page-7');
    
    const p7HeadContainer = document.createElement('div');
    p7HeadContainer.id = 'p7-head-container';

    const p7HeadText = document.createElement('p');
    p7HeadText.id = 'p7-head-text';
    p7HeadText.textContent = 'Videos';

    const p7CardsContainer = document.createElement('div');
    p7CardsContainer.id = 'p7-card-section-container';

    const p7Card1 = document.createElement('div');
    p7Card1.classList.add('p7-card');
    p7Card1.id = 'p7-card-1';

    const p7Card1VideoContainer = document.createElement('div');
    p7Card1VideoContainer.classList.add('p7-card-video-div');

    const p7Video1 = document.createElement('video');
    p7Video1.classList.add('p7-video');
    p7Video1.src = 'images/unlockSpeed.mp4';
    p7Video1.type = 'video/mp4';
    p7Video1.controls = 'true';
    p7Video1.preload = 'metadata';

    const p7CardTypeContainer1 = document.createElement('div');
    p7CardTypeContainer1.classList.add('p7-card-type-container');

    const p7CardType1 = document.createElement('p');
    p7CardType1.classList.add('p7-card-type-text');
    p7CardType1.textContent = 'High Performance';

    const p7CardDescriptionContainer1 = document.createElement('div');
    p7CardDescriptionContainer1.classList.add('p7-card-description-container');

    const p7CardDescriptionText1 = document.createElement('p');
    p7CardDescriptionText1.classList.add('p7-card-description-text');
    p7CardDescriptionText1.textContent = 'Unlock Your Speed with Neurocognitive Training at Mind Gym Lab';


    page7.appendChild(p7HeadContainer);
    p7HeadContainer.appendChild(p7HeadText);
    page7.appendChild(p7CardsContainer);
    p7CardsContainer.appendChild(p7Card1);
    p7Card1.appendChild(p7Card1VideoContainer);
    p7Card1VideoContainer.appendChild(p7Video1);
    p7Card1.appendChild(p7CardTypeContainer1);
    p7CardTypeContainer1.appendChild(p7CardType1);
    p7Card1.appendChild(p7CardDescriptionContainer1);
    p7CardDescriptionContainer1.appendChild(p7CardDescriptionText1);

    // Card 2
const p7Card2 = document.createElement('div');
p7Card2.classList.add('p7-card');
p7Card2.id = 'p7-card-2';

const p7Card2VideoContainer = document.createElement('div');
p7Card2VideoContainer.classList.add('p7-card-video-div');

const p7Video2 = document.createElement('video');
p7Video2.classList.add('p7-video');
p7Video2.src = 'images/peripheralVision.mp4';
p7Video2.type = 'video/mp4';
p7Video2.controls = 'true';
p7Video2.preload = 'metadata';

const p7CardTypeContainer2 = document.createElement('div');
p7CardTypeContainer2.classList.add('p7-card-type-container');

const p7CardType2 = document.createElement('p');
p7CardType2.classList.add('p7-card-type-text');
p7CardType2.textContent = 'High Performance';

const p7CardDescriptionContainer2 = document.createElement('div');
p7CardDescriptionContainer2.classList.add('p7-card-description-container');

const p7CardDescriptionText2 = document.createElement('p');
p7CardDescriptionText2.classList.add('p7-card-description-text');
p7CardDescriptionText2.textContent = 'Peripheral vision under high-intensity movement';

p7CardsContainer.appendChild(p7Card2);
p7Card2.appendChild(p7Card2VideoContainer);
p7Card2VideoContainer.appendChild(p7Video2);
p7Card2.appendChild(p7CardTypeContainer2);
p7CardTypeContainer2.appendChild(p7CardType2);
p7Card2.appendChild(p7CardDescriptionContainer2);
p7CardDescriptionContainer2.appendChild(p7CardDescriptionText2);

// Card 3
const p7Card3 = document.createElement('div');
p7Card3.classList.add('p7-card');
p7Card3.id = 'p7-card-3';

const p7Card3VideoContainer = document.createElement('div');
p7Card3VideoContainer.classList.add('p7-card-video-div');

const p7Video3 = document.createElement('video');
p7Video3.classList.add('p7-video');
p7Video3.src = 'images/mental wellness.mp4';
p7Video3.type = 'video/mp4';
p7Video3.controls = 'true';
p7Video3.preload = 'metadata';

const p7CardTypeContainer3 = document.createElement('div');
p7CardTypeContainer3.classList.add('p7-card-type-container');

const p7CardType3 = document.createElement('p');
p7CardType3.classList.add('p7-card-type-text');
p7CardType3.textContent = 'Mental Wellness';

const p7CardDescriptionContainer3 = document.createElement('div');
p7CardDescriptionContainer3.classList.add('p7-card-description-container');

const p7CardDescriptionText3 = document.createElement('p');
p7CardDescriptionText3.classList.add('p7-card-description-text');
p7CardDescriptionText3.textContent = 'MGL meets Mental Wellness';

p7CardsContainer.appendChild(p7Card3);
p7Card3.appendChild(p7Card3VideoContainer);
p7Card3VideoContainer.appendChild(p7Video3);
p7Card3.appendChild(p7CardTypeContainer3);
p7CardTypeContainer3.appendChild(p7CardType3);
p7Card3.appendChild(p7CardDescriptionContainer3);
p7CardDescriptionContainer3.appendChild(p7CardDescriptionText3);


videoLi.addEventListener('click', function() {
        page2.style.display = "none";
        navOverlay.style.display = "none";
        entireDocument.style.display = "block";
        homePage.style.display = "none";
        p3Container.style.display = "none";
        body.style.backgroundColor = "black";
        page4.style.display = "none";
        page5.style.display = "none";
        page6.style.display = "none";
        page7.style.display = "flex";
})
}

/* <div id="page-7">


        <div id="p7-head-container">
            <p id="p7-head-text">Videos</p>
        </div>

        <div id="p7-card-section-container">
        <div class="p7-card" id="p7-card-1">
            <div class="p7-card-video-div">
                <video class="p7-video" controls>
                    <source src="images/unlockSpeed.mp4" type="video/mp4">
                </video>
            </div>
            <div class="p7-card-type-container">
                <p class="p7-card-type-text">High Performance</p>
            </div>

            <div class="p7-card-description-container">
                <p class="p7-card-description-text">Unlock Your Speed with Neurocognitive Training at Mind Gym Lab</p>
            </div>
            
        </div>

        <div class="p7-card" id="p7-card-2">
            <div class="p7-card-video-div">
                <video class="p7-video" controls>
                    <source src="images/peripheralVision.mp4" type="video/mp4">
                </video>
            </div>
            <div class="p7-card-type-container">
                <p class="p7-card-type-text">High Performance</p>
            </div>
            <div class="p7-card-description-container">
                <p class="p7-card-description-text">Peripheral vision under high-intesity movement</p>
            </div>
        </div>

        <div class="p7-card" id="p7-card-3">
            <div class="p7-card-video-div">
                <video class="p7-video" controls>
                    <source src="images/peripheralVision.mp4" type="video/mp4">
                </video>
            </div>
            <div class="p7-card-type-container">
                <p class="p7-card-type-text">High Performance</p>
            </div>
            <div class="p7-card-description-container">
                <p class="p7-card-description-text">How do athletes warm up at MGL?</p>
            </div>
        </div>

        <div class="p7-card" id="p7-card-4">
            <div class="p7-card-video-div">
                <video class="p7-video" controls>
                    <source src="images/peripheralVision.mp4" type="video/mp4">
                </video>
            </div>
            <div class="p7-card-type-container">
                <p class="p7-card-type-text">Mental Wellness</p>
            </div>
            <div class="p7-card-description-container">
                <p class="p7-card-description-text">MGL meets Mental Wellness</p>
            </div>
        </div>
        </div>
    </div>
    */