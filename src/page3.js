import { page4 } from "./page4";


export function page3() {
    const systemLi = document.querySelector('#nav-ul li:nth-child(3)');
    const homePage = document.getElementById('home-page');
    const navOverlay = document.getElementById("nav-overlay");
    const entireDocument = document.getElementById('entire-document');
    const body = document.querySelector('body');
    const footer = document.querySelector('#footer-p1');
    const header = document.querySelector('header');
    const page2 = document.getElementById('page-2');
    const page4 = document.getElementById('page-4');
    const page5 = document.getElementById('page-5');
    const page6 = document.getElementById('page-6');
    const page7 = document.getElementById('page-7');

    const p3Container = document.getElementById('page-3');

    const p3MainSection = document.createElement('section');
    p3MainSection.id = 'page-3-main-section';

    const p3Header = document.createElement('h1');
    p3Header.id = 'p3-header';
    p3Header.textContent = 'Neuro Athletic Training';

    const p3MainDescriptionContainer = document.createElement('div');
    p3MainDescriptionContainer.id = 'p3-main-description-container';

    const p3MainDescriptionText = document.createElement('h3');
    p3MainDescriptionText.id = 'p3-main-description-text';
    p3MainDescriptionText.textContent = 'In the world of competitive sports, all good coaches know that success hinges not just on physical abilities but also on mental strengths. Traditional training regimens primarily focus on developing an athlete\'s physical strength and endurance. However scientific data now shows that the mind is equally vital in determining an athlete\'s overall performance.'

    p3Container.appendChild(p3MainSection);
    p3MainSection.appendChild(p3Header);
    p3MainSection.appendChild(p3MainDescriptionContainer);
    p3MainDescriptionContainer.appendChild(p3MainDescriptionText);



    const p3ParagraphContainer1 = document.createElement('div');
    p3ParagraphContainer1.classList.add('p3-paragraph-container');

    const p3FirstParagraphText = document.createElement('p');
    p3FirstParagraphText.id = 'p3-first-paragraph-text';
    p3FirstParagraphText.classList.add('p3-paragraph');
    p3FirstParagraphText.textContent = 'With new understandings of the brain’s neuroplasticity and ability to continue growing throughout our lives, cognitive training is beginning to revolutionize athletic training, brain health, and education.';

    const p3SecondParagraphContainer = document.createElement('div');
    p3SecondParagraphContainer.classList.add('p3-paragraph-container');

    const p3SecondParagraphText = document.createElement('p');
    p3SecondParagraphText.id = 'p3-second-paragraph-text';
    p3SecondParagraphText.classList.add('p3-paragraph');
    p3SecondParagraphText.textContent = 'Mind Gym Lab’s many neuro-training technologies are the same as those used by professional teams such as Bayern Munich, Man United, Minnesota Timberwolves, NFL players, and professional fighters to optimize their performance. Every neurocognitive technology and protocol we train with has also been backed by published peer-reviewed science research studies.';

    const p3ThirdParagraphContainer = document.createElement('div');
    p3ThirdParagraphContainer.classList.add('p3-paragraph-container');

    const p3ThirdParagraphText = document.createElement('p');
    p3ThirdParagraphText.id = 'p3-third-paragraph-text';
    p3ThirdParagraphText.classList.add('p3-paragraph');
    p3ThirdParagraphText.textContent = 'Unlike running agility ladders, cones, sprints, and obstacle courses, where points are predictable and fixed, training at Mind Gym Lab is focused on “Reactive Agility” for the unexpected and the various types of speed. Reactive Agility has proven to have the highest level of transference of skill from practice to the actual game or match.';

    
const videoContainer = document.createElement('div');
videoContainer.id = 'video-container';


const videoElement = document.createElement('video');
videoElement.width = 320; 
videoElement.height = 240; 
videoElement.controls = true; 
videoElement.id = 'p3-video'; 
videoElement.preload = 'metadata';


const sourceElement = document.createElement('source');
sourceElement.src = 'images/30s.mp4'; 
sourceElement.type = 'video/mp4';


p3MainSection.appendChild(p3ParagraphContainer1);
p3ParagraphContainer1.appendChild(p3FirstParagraphText);

p3MainSection.appendChild(p3SecondParagraphContainer);
p3SecondParagraphContainer.appendChild(p3SecondParagraphText);

p3MainSection.appendChild(p3ThirdParagraphContainer);
p3ThirdParagraphContainer.appendChild(p3ThirdParagraphText);

videoElement.appendChild(sourceElement);
videoContainer.appendChild(videoElement);
p3MainSection.appendChild(videoContainer);


const p3Section2 = document.createElement('section');
p3Section2.id = 'p3-section-2';

const p3SecondSectionHeaderContainer = document.createElement('div');
p3SecondSectionHeaderContainer.id = 'p3-second-section-header-container';

const p3SecondSectionHeaderText = document.createElement('h1');
p3SecondSectionHeaderText.id = "p3-second-section-header-text";
p3SecondSectionHeaderText.textContent = 'Global Speed';

const p3SecondSectionMainDescriptionContainer = document.createElement('div');
p3SecondSectionMainDescriptionContainer.id = 'p3-section-2-main-description-container';

const p3SecondSectionMainDescriptionText = document.createElement('h3');
p3SecondSectionMainDescriptionText.id = 'p3-section-2-main-description-text';
p3SecondSectionMainDescriptionText.textContent = 'In the world of competitive sports, all good coaches know that success hinges not just on physical abilities but also on mental strengths. Traditional training regimens primarily focus on developing an athlete\'s physical strength and endurance. However scientific data now shows that the mind is equally vital in determining an athlete\'s overall performance.'

const p3SecondSectionParagraphContainer1 = document.createElement('div');
p3SecondSectionParagraphContainer1.classList.add('p3-paragraph-container');

const p3SecondSectionParagraphText1 = document.createElement('p');
p3SecondSectionParagraphText1.id = 'p3-section-2-first-paragraph-text';
p3SecondSectionParagraphText1.classList.add('p3-paragraph');
p3SecondSectionParagraphText1.textContent = 'Global Speed’s innovative measurement and training system significantly enhances and improves reactive agility and athletic performance for individuals of all ages and skill levels, particularly high-performance athletes striving for excellence.';

const p3SecondSectionParagraphContainer2 = document.createElement('div');
p3SecondSectionParagraphContainer2.classList.add('p3-paragraph-container');

const p3SecondSectionParagraphText2 = document.createElement('p');
p3SecondSectionParagraphText2.id = 'p3-section-2-first-paragraph-text';
p3SecondSectionParagraphText2.classList.add('p3-paragraph');
p3SecondSectionParagraphText2.textContent = 'By integrating the SpeedCourt along with several other science-proven cognitive training technologies and methodologies we offer advanced neurocognitive training programs that ensure a comprehensive unique training experience for a wide range of needs from sports to rehab and brain wellness.';

const p3LearnMoreBtnContainer = document.createElement('div');
p3LearnMoreBtnContainer.id = 'learn-more-btn-p3-container';

const p3LearnMoreBtn = document.createElement('button');
p3LearnMoreBtn.id = 'learn-more-btn-p3';
p3LearnMoreBtn.textContent = 'Learn more';

const p3Hr = document.createElement('hr');
p3Hr.classList.add('p3-hr');

p3Container.appendChild(p3Section2);
p3Section2.appendChild(p3SecondSectionHeaderContainer);
p3SecondSectionHeaderContainer.appendChild(p3SecondSectionHeaderText);
p3Section2.appendChild(p3SecondSectionMainDescriptionContainer);
p3SecondSectionMainDescriptionContainer.appendChild(p3SecondSectionMainDescriptionText);
p3Section2.appendChild(p3SecondSectionParagraphContainer1);
p3SecondSectionParagraphContainer1.appendChild(p3SecondSectionParagraphText1);
p3Section2.appendChild(p3SecondSectionParagraphContainer2);
p3SecondSectionParagraphContainer2.appendChild(p3SecondSectionParagraphText2);
p3Section2.appendChild(p3LearnMoreBtnContainer);
p3LearnMoreBtnContainer.appendChild(p3LearnMoreBtn);
p3Section2.appendChild(p3Hr);





const p3pictureSection = document.createElement('section');
p3pictureSection.id = 'p3-picture-section';

const p3FirstPictureContainer = document.createElement('div');
p3FirstPictureContainer.classList.add('p3-section-3-main-img-containers');

const p3FirstImg = document.createElement('img');
p3FirstImg.classList.add('p3-img');
p3FirstImg.alt = 'mindGymLab';
p3FirstImg.src = 'images/mindGymLabP3Img1.jpeg'
p3FirstImg.id = 'p3-1st-img';
p3FirstImg.loading = 'lazy';

const p3SecondImg = document.createElement('img');
p3SecondImg.classList.add('p3-img');
p3SecondImg.alt = 'mindGymLab';
p3SecondImg.src = 'images/mindGymLabP3Img2.jpeg';
p3SecondImg.id = 'p3-3rd-img';
p3SecondImg.loading = 'lazy';

const p3SecondPictureContainer = document.createElement('div');
p3SecondPictureContainer.classList.add('p3-section-3-main-img-containers');
p3SecondPictureContainer.id = 'p3-section-3-main-img-container2';

const p3ThirdImg = document.createElement('img');
p3ThirdImg.classList.add('p3-img');
p3ThirdImg.alt = 'mindGymLab';
p3ThirdImg.src = 'images/mindGymLabp3Img3.jpeg';
p3ThirdImg.loading = 'lazy';

const p3FourthImg = document.createElement('img');
p3FourthImg.classList.add('p3-img');
p3FourthImg.alt = 'mindGymLab';
p3FourthImg.src = 'images/mindGymLabp3Img4.jpeg';
p3FourthImg.id = 'p3-4th-img';
p3FourthImg.loading = 'lazy';

p3Container.appendChild(p3pictureSection);
p3pictureSection.appendChild(p3FirstPictureContainer);
p3FirstPictureContainer.appendChild(p3FirstImg);
p3FirstPictureContainer.appendChild(p3SecondImg);
p3pictureSection.appendChild(p3SecondPictureContainer);
p3SecondPictureContainer.appendChild(p3ThirdImg);
p3SecondPictureContainer.appendChild(p3FourthImg);

const p3LastHeadTextContainer = document.createElement('div');
p3LastHeadTextContainer.id = 'p3-last-head-text-container';

const p3LastHeadText = document.createElement('h1');
p3LastHeadText.id = 'p3-last-head-text';
p3LastHeadText.textContent = 'You can\'t train what you can\'t measure.'

const p3LastTextContainer = document.createElement('div');
p3LastTextContainer.id = 'p3-last-text-container';

const p3LastText = document.createElement('p');
p3LastText.id = 'p3-last-text';
p3LastText.textContent = 'A powerful benefit of neurocognitive training is the measurable digital training data from each training session. At Mind Gym Lab we create a Neuro Athletic Performance Report which details multiple cognition, coordination, balance, reaction, and vision assessments for clients.'

const p3spaceDiv = document.createElement('div');
p3spaceDiv.id = 'p3-space';

p3Container.appendChild(p3LastHeadTextContainer);
p3LastHeadTextContainer.appendChild(p3LastHeadText);
p3Container.appendChild(p3LastTextContainer);
p3LastTextContainer.appendChild(p3LastText);
p3Container.appendChild(p3spaceDiv);


    systemLi.addEventListener('click', function() {
        page2.style.display = "none";
        page4.style.display = "none";
        page5.style.display = "none";
        page6.style.display = "none";
        page7.style.display = "none";
        navOverlay.style.display = "none";
        entireDocument.style.display = "block";
        homePage.style.display = "none";
        p3Container.style.display = "block";
        body.style.backgroundColor = "black";
    })

}





/* <div id="page-3">
        <section id="page-3-main-section">
            <h1 id="p3-header">Neuro Athletic Training</h1>
            <div id="p3-main-description-container">
                <h3 id="p3-main-description-text">In the world of competitive sports, all good coaches know that success hinges not just on physical abilities but also on mental strengths. Traditional training regimens primarily focus on developing an athlete's physical strength and endurance. However scientific data now shows that the mind is equally vital in determining an athlete's overall performance.</h3>
            </div>

            <div class="p3-paragraph-container">
                <p id="p3-first-paragraph-text" class="p3-paragraph">With new understandings of the brain’s neuroplasticity and ability to continue growing throughout our lives, cognitive training is beginning to revolutionize athletic training, brain health, and education.</p>
            </div>

            <div class="p3-paragraph-container">
                <p id="p3-second-paragraph-text" class="p3-paragraph">Mind Gym Lab’s many neuro-training technologies are the same as those used by professional teams such as Bayern Munich, Man United, Minnesota Timberwolves, NFL players, and professional fighters to optimize their performance. Every neurocognitive technology and protocol we train with has also been backed by published peer-reviewed science research studies.</p>
            </div>

            <div class="p3-paragraph-container">
                <p id="p3-third-paragraph-text" class="p3-paragraph">Unlike running agility ladders, cones, sprints, and obstacle courses, where points are predictable and fixed, training at Mind Gym Lab is focused on “Reactive Agility” for the unexpected and the various types of speed. Reactive Agility has proven to have the highest level of transference of skill from practice to the actual game or match.</p>
            </div>

            <div id="video-container">
                <video width="320" height="240" controls id="p3-video">
                    <source src="images/30s.mp4" type="video/mp4">
                  </video>
            </div>

    <!-- 
            <div id="p3-scope-img-container">
                <img src="images/mindGymLabScopeImg.jpg" alt="calculated image" id="p3-scope-img">
            </div>
        -->
       
        </section>


        <section id="p3-section-2">
            <div id="p3-second-section-header-container">
                <h1 id="p3-second-section-header-text">Global Speed</h3>
            </div>

            <div id="p3-section-2-main-description-container">
                <h3 id="p3-section-2-main-description-text">In the world of competitive sports, all good coaches know that success hinges not just on physical abilities but also on mental strengths. Traditional training regimens primarily focus on developing an athlete's physical strength and endurance. However scientific data now shows that the mind is equally vital in determining an athlete's overall performance.</h3>
            </div>
            

            <div class="p3-paragraph-container">
                <p id="p3-section-2-first-paragraph-text" class="p3-paragraph">With new understandings of the brain’s neuroplasticity and ability to continue growing throughout our lives, cognitive training is beginning to revolutionize athletic training, brain health, and education.</p>
            </div>

            <div class="p3-paragraph-container">
                <p id="p3-section-2-first-paragraph-text" class="p3-paragraph">Mind Gym Lab’s many neuro-training technologies are the same as those used by professional teams such as Bayern Munich, Man United, Minnesota Timberwolves, NFL players, and professional fighters to optimize their performance. Every neurocognitive technology and protocol we train with has also been backed by published peer-reviewed science research studies.</p>
            </div>

            <div id="learn-more-btn-p3-container">
                <button id="learn-more-btn-p3">Learn more</button>
            </div>
            <hr class="p3-hr">
        </section>

       

        <section id="p3-picture-section">
            <div class="p3-section-3-main-img-containers">
                    <img src="images/mindGymLabP3Img1.jpeg" alt="mindGymLab" class="p3-img" id="p3-1st-img">
                    <img src="images/mindGymLabP3Img2.jpeg" alt="mindGymLab" class="p3-img" id="p3-3rd-img">    
            </div>

            <div class="p3-section-3-main-img-containers" id="p3-section-3-main-img-container2">
                <img src="images/mindGymLabp3Img3.jpeg" alt="mindGymLab" class="p3-img">
                <img src="images/mindGymLabp3Img4.jpeg" alt="mindGymLab" class="p3-img" id="p3-4th-img">
            </div>
        </section>
        <div id="p3-last-head-text-container"> 
            <h1 id="p3-last-head-text">You can't train what you can't measure.</h1>
        </div>
        <div id="p3-last-text-container">
            <p id="p3-last-text">A powerful benefit of neurocognitive training is the measurable digital training data from each training session. At Mind Gym Lab we create a Neuro Athletic Performance Report which details multiple cognition, coordination, balance, reaction, and vision assessments for clients.</p>
        </div>

        <div id="p3-space"></div>
        
        </div>
        */