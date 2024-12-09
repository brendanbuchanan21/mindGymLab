// this page once clicked from home page, 
// will dynamically create elements for the 
// second page
// first create function 
// remove the display of page
// dynamically render the pages elements.

export function page2() {
    const aboutLi = document.querySelector('#nav-ul li:nth-child(2)');
    const homePage = document.getElementById('home-page');
    const navOverlay = document.getElementById("nav-overlay");
    const entireDocument = document.getElementById('entire-document');
    const body = document.querySelector('body');
    const footer = document.querySelector('#footer-p1');
    const header = document.querySelector('header');

    const page2Container = document.getElementById('page-2');

    const p2SectionMainAbout = document.createElement('section');
    p2SectionMainAbout.id = 'p2-main-about';

    const p2Title = document.createElement('h1');
    p2Title.classList.add('p2-titles');
    p2Title.textContent = "About";

    const p2FirstDescriptionContainer = document.createElement('div');
    p2FirstDescriptionContainer.classList.add('p2-description-container');
    
    const p2FirstDescriptionTextBold = document.createElement('h3');
    p2FirstDescriptionTextBold.classList.add('p2-description');
    p2FirstDescriptionTextBold.textContent = 'Mind Gym Lab is the first and only neurocognitive training center in China.'

    header.insertAdjacentElement('afterend', page2Container);
    
    page2Container.appendChild(p2SectionMainAbout);
    p2SectionMainAbout.appendChild(p2Title);
    p2SectionMainAbout.appendChild(p2FirstDescriptionContainer);
    p2FirstDescriptionContainer.appendChild(p2FirstDescriptionTextBold);


    const p2Paragraph1Container = document.createElement('div');
    p2Paragraph1Container.classList.add('p2-text-container');

    const p2FirstParagraphText = document.createElement('p');
    p2FirstParagraphText.classList.add('p2-paragraph');
    p2FirstParagraphText.textContent = 'Here you will discover a new and powerful way of training that simultaneously works the body\'s muscular, brain, and nervous systems. Scientifically proven cognitive methodologies at Mind Gym Lab can unlock the brain’s potential and improve physical fitness, gameplay, and brain health. With neurocognitive training, the speed at which the brain processes information can be improved to optimize performance in sports, education, and wellness.'

    const p2Paragraph2Container = document.createElement('div');
    p2Paragraph2Container.classList.add('p2-text-container');

    const p2SecondParagraphText = document.createElement('p');
    p2SecondParagraphText.classList.add('p2-paragraph');
    p2SecondParagraphText.textContent = 'Our Mind Gym Lab team is comprised of former competitive athletes from a variety of sports: China competitive swimmers and coaches, US sports scholarship athletes, basketball, American football, hockey, and martial arts. Our high-performance coaches have a combined 40+ years of training experience both in China and internationally.';

    const p2Paragraph3Container = document.createElement('div');
    p2Paragraph3Container.classList.add('p2-text-container');

    const p2ThirdParagraphText = document.createElement('p');
    p2ThirdParagraphText.classList.add('p2-paragraph');
    p2ThirdParagraphText.textContent = 'The founders of Mind Gym Lab also bring many years of experience in the sports and fitness industry, having previously founded M-Fit in Beijing, China, a high-end women\'s private training fitness facility for CrossFit and boxing. They also pioneered the first customized infant swim facility design in China, with specially designed graduated depth pools that would eventually become accepted as the nationwide standard for infant swimming facilities.';

    const p2Paragraph4Container = document.createElement('div');
    p2Paragraph4Container.classList.add('p2-text-container');

    const p2FourthParagraphText = document.createElement('p');
    p2FourthParagraphText.classList.add('p2-paragraph');
    p2FourthParagraphText.textContent = 'Shane and Sunny Novak are parents of three children and strongly believe in an active healthy sporting lifestyle for the family. It’s in this spirit of physical, emotional, and mental health for the whole family that they launched Mind Gym Lab as a high-performance facility for young athletes wanting to improve and families.';

    const p2ourMissionText = document.createElement('h1');
    p2ourMissionText.classList.add('p2-titles');
    p2ourMissionText.textContent = 'Our Mission';

    const p2OurMissionDescriptionContainer = document.createElement('div');
    p2OurMissionDescriptionContainer.classList.add('p2-description-container');
    p2OurMissionDescriptionContainer.id = 'p2-our-mission-container';

    const ourMissionDescriptionText = document.createElement('h3');
    ourMissionDescriptionText.classList.add('p2-description');
    ourMissionDescriptionText.textContent = 'At Mind Gym Lab we aim to offer a revolutionary training environment to advance human performance by optimizing the relationship between the brain, body, and heart.';
    

        // Appending paragraphs to the main section
p2SectionMainAbout.appendChild(p2Paragraph1Container);
p2Paragraph1Container.appendChild(p2FirstParagraphText);

p2SectionMainAbout.appendChild(p2Paragraph2Container);
p2Paragraph2Container.appendChild(p2SecondParagraphText);

p2SectionMainAbout.appendChild(p2Paragraph3Container);
p2Paragraph3Container.appendChild(p2ThirdParagraphText);

p2SectionMainAbout.appendChild(p2Paragraph4Container);
p2Paragraph4Container.appendChild(p2FourthParagraphText);

// Appending "Our Mission" title and description
p2SectionMainAbout.appendChild(p2ourMissionText);

p2SectionMainAbout.appendChild(p2OurMissionDescriptionContainer);
p2OurMissionDescriptionContainer.appendChild(ourMissionDescriptionText);

const p2PictureSection = document.createElement('section');
p2PictureSection.id = 'p2-picture-section';

const p2ImagesContainer = document.createElement('div');
p2ImagesContainer.id = 'p2-img-container';

const p2Img1 = document.createElement('img');
p2Img1.src = 'images/mindGymLabP2Img1.jpeg';
p2Img1.alt = 'mindGymLab';
p2Img1.classList.add('p2-images');
p2Img1.loading = 'lazy';

const p2Img2 = document.createElement('img');
p2Img2.src = 'images/mindGymLabp2Img2.jpeg';
p2Img2.alt = 'mindGymLab';
p2Img2.classList.add('p2-images');
p2Img2.loading = 'lazy';

const p2Img3 = document.createElement('img');
p2Img3.src = 'images/mindGymLabp2Img3.jpeg';
p2Img3.alt = 'mindGymLab';
p2Img3.classList.add('p2-images');
p2Img3.loading = 'lazy';

const p2Img4 = document.createElement('img');
p2Img4.src = 'images/mindGymLabp2Img4.jpeg';
p2Img4.alt = 'mindGymLab';
p2Img4.classList.add('p2-images');
p2Img4.loading = 'lazy';

const p2Img5 = document.createElement('img');
p2Img5.src = 'images/mindGymLabp2Img5.jpeg';
p2Img5.alt = 'mindGymLab';
p2Img5.classList.add('p2-images');
p2Img5.loading = 'lazy';

const p2Img6 = document.createElement('img');
p2Img6.src = 'images/mindGymLabp2Img6.jpeg';
p2Img6.alt = 'mindGymLab';
p2Img6.classList.add('p2-images');
p2Img6.loading = 'lazy';

page2Container.appendChild(p2PictureSection);
p2PictureSection.appendChild(p2ImagesContainer);
p2ImagesContainer.appendChild(p2Img1);
p2ImagesContainer.appendChild(p2Img2);
p2ImagesContainer.appendChild(p2Img3);
p2ImagesContainer.appendChild(p2Img4);
p2ImagesContainer.appendChild(p2Img5);
p2ImagesContainer.appendChild(p2Img6);



const p2CognitiveBenefitsSection = document.createElement('section');
p2CognitiveBenefitsSection.id = 'p2-cognitive-benefits';

const p2LastDescriptionContainer = document.createElement('div');
p2LastDescriptionContainer.classList.add('p2-description-container');

const p2LastDescriptionText = document.createElement('h3');
p2LastDescriptionText.classList.add('p2-description');
p2LastDescriptionText.id = 'p2-last-description';
p2LastDescriptionText.textContent = 'Neuro Athletic Training integrates the muscular system with the central nervous system simultaneously to develop various cognitive functions such as:';

const p2FirstListContainer = document.createElement('div');
p2FirstListContainer.id = "p2-ul-list-container";

const p2FirstUl = document.createElement('ul');
p2FirstUl.classList.add('p2-list');

const coordinationText = document.createElement('li');
coordinationText.textContent = 'Coordination';

const reactionSpeedText = document.createElement('li');
reactionSpeedText.textContent = 'Reaction Speed';

const anticipationText = document.createElement('li');
anticipationText.textContent = 'Anticipation';

const explosiveQuicknessText = document.createElement('li');
explosiveQuicknessText.textContent = 'Explosive quickness';

const shortTermMemoryText = document.createElement('li');
shortTermMemoryText.textContent = 'Short-term memory';

const multiObectTrackingText = document.createElement('li');
multiObectTrackingText.textContent = 'Multi-object tracking';

const patternRecognitionText = document.createElement('li');
patternRecognitionText.textContent = 'Pattern recognition';

const p2ArrowContainer = document.createElement('div');
p2ArrowContainer.id = 'p2-arrow-container';

const svgElement = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D3D3D3">
                      <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/>
                    </svg>`;
    p2ArrowContainer.innerHTML = svgElement;

const p2SecondListContainer = document.createElement('div');
p2SecondListContainer.id = 'p2-ul-list-container2';

const p2SecondUl = document.createElement('ul');
p2SecondUl.classList.add('p2-list');

const spatialSenseText = document.createElement('li');
spatialSenseText.textContent = 'Spatial sense';

const splitAttentionText = document.createElement('li');
splitAttentionText.textContent = 'Split attention';

const concentrationText = document.createElement('li');
concentrationText.textContent = 'Concentration';

const peripheralVisionText = document.createElement('li');
peripheralVisionText.textContent = 'Peripheral vision';

const depthPerception = document.createElement('li');
depthPerception.textContent = 'Depth perception';

const rapidDecisionMaking = document.createElement('li');
rapidDecisionMaking.textContent = 'Rapid decision-making';

page2Container.appendChild(p2CognitiveBenefitsSection);
p2CognitiveBenefitsSection.appendChild(p2LastDescriptionContainer);
p2LastDescriptionContainer.appendChild(p2LastDescriptionText);
p2CognitiveBenefitsSection.appendChild(p2FirstListContainer);
p2FirstListContainer.appendChild(p2FirstUl);
p2FirstUl.appendChild(coordinationText);
p2FirstUl.appendChild(reactionSpeedText);
p2FirstUl.appendChild(anticipationText);
p2FirstUl.appendChild(explosiveQuicknessText);
p2FirstUl.appendChild(shortTermMemoryText);
p2FirstUl.appendChild(multiObectTrackingText);
p2FirstUl.appendChild(patternRecognitionText);
p2CognitiveBenefitsSection.appendChild(p2ArrowContainer);

p2CognitiveBenefitsSection.appendChild(p2SecondListContainer);
p2SecondListContainer.appendChild(p2SecondUl);
p2SecondUl.appendChild(spatialSenseText);
p2SecondUl.appendChild(splitAttentionText);
p2SecondUl.appendChild(concentrationText);
p2SecondUl.appendChild(peripheralVisionText);
p2SecondUl.appendChild(depthPerception);
p2SecondUl.appendChild(rapidDecisionMaking);


const page3 = document.getElementById('page-3');
const page4 = document.getElementById('page-4');
const page5 = document.getElementById('page-5');
const page6 = document.getElementById('page-6');
const page7 = document.getElementById('page-7');

    aboutLi.addEventListener('click', function() {
        navOverlay.style.display = "none";
        entireDocument.style.display = "block";
        homePage.style.display = "none";
        page2Container.style.display = "block";
        body.style.backgroundColor = "black";
        page3.style.display = "none";
        page4.style.display = "none";
        page5.style.display = "none";
        page6.style.display = "none";
        page7.style.display = "none";
    })
}
/* 
 
    <div id="page-2">
    <section id="p2-main-about">
        <h1 class="p2-titles">About</h1>
        <div class="p2-description-container">
            <h3 class="p2-description">Mind Gym Lab is the first and only neurocognitive training center in China.</h3>
        </div>

        <div id="p2-paragraph1-container" class="p2-text-container">
            <p class="p2-paragraph">Here you will discover a new and powerful way of training that simultaneously works the body's muscular, brain, and nervous systems. Scientifically proven cognitive methodologies at Mind Gym Lab can unlock the brain’s potential and improve physical fitness, gameplay, and brain health. With neurocognitive training, the speed at which the brain processes information can be improved to optimize performance in sports, education, and wellness.</p>
        </div>

        <div id="p2-paragraph2-container" class="p2-text-container">
            <p class="p2-paragraph">Our Mind Gym Lab team is comprised of former competitive athletes from a variety of sports: China competitive swimmers and coaches, US sports scholarship athletes, basketball, American football, hockey, and martial arts. Our high-performance coaches have a combined 40+ years of training experience both in China and internationally.</p>
        </div>

        <div id="p2-paragraph3-container" class="p2-text-container">
            <p class="p2-paragraph">The founders of Mind Gym Lab also bring many years of experience in the sports and fitness industry, having previously founded M-Fit in Beijing, China, a high-end women's private training fitness facility for CrossFit and boxing. They also pioneered the first customized infant swim facility design in China, with specially designed graduated depth pools that would eventually become accepted as the nationwide standard for infant swimming facilities.</p>
        </div>

        <div id="p2-paragraph4-container" class="p2-text-container">
            <p class="p2-paragraph">Shane and Sunny Novak are parents of three children and strongly believe in an active healthy sporting lifestyle for the family. It’s in this spirit of physical, emotional, and mental health for the whole family that they launched Mind Gym Lab as a high-performance facility for young athletes wanting to improve and families.</p>
        </div>

        <h1 class="p2-titles">Our Mission</h1>
        <div class="p2-description-container">
            <h3 class="p2-description">At Mind Gym Lab we aim to offer a revolutionary training environment to advance human performance by optimizing the relationship between the brain, body, and heart.</h3>
        </div>
    </section>

    <section id="p2-picture-section">
        <div id="p2-img-container">
       <img src="images/mindGymLabP2Img1.jpeg" alt="mindGymLab" class="p2-images">
        <img src="images/mindGymLabp2Img2.jpeg" alt="mindGymLab" class="p2-images">
        <img src="images/mindGymLabp2Img3.jpeg" alt="mindGymLab" class="p2-images">
        <img src="images/mindGymLabp2Img4.jpeg" alt="mindGymLab" class="p2-images">
        <img src="images/mindGymLabp2Img5.jpeg" alt="mindGymLab" class="p2-images">
        <img src="images/mindGymLabp2Img6.jpeg" alt="mindGymLab" class="p2-images">
        </div>
    </section>

    <section id="p2-cognitive-benefits">
        <div class="p2-description-container">
            <h3 class="p2-description" id="p2-last-description">Neuro Athletic Training integrates the muscular system with the central nervous system simultaneously to develop various cognitive functions such as:</h3>
        </div>
        <div id="p2-ul-list-container">
            <ul class="p2-list">
                <li>Coordination</li>
                <li>Reaction speed</li>
                <li>Anticipation</li>
                <li>Explosive quickness</li>
                <li>Short-term memory</li>
                <li>Multi-object tracking</li>
                <li>Pattern recognition</li>
            </ul>
        </div>
        <div id="p2-arrow-container">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D3D3D3"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
        </div>
        <div id="p2-ul-list-container2">
            <ul class="p2-list">
                <li>Spatial sense</li>
                <li>Split attention</li>
                <li>Concentration</li>
                <li>Peripheral vision</li>
                <li>Depth perception</li>
                <li>Rapid decision-making</li>
            </ul>
        </div>
    </section>
    </div>

    */