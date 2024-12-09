export function page4() {
    const performanceLi = document.querySelector('#nav-ul li:nth-child(4)');
    const systemLi = document.querySelector('#nav-ul li:nth-child(3)');
    const homePage = document.getElementById('home-page');
    const navOverlay = document.getElementById("nav-overlay");
    const entireDocument = document.getElementById('entire-document');
    const body = document.querySelector('body');
    const footer = document.querySelector('#footer-p1');
    const header = document.querySelector('header');
    const page2 = document.getElementById('page-2');
    const p3Container = document.getElementById('page-3');
    const page4 = document.getElementById('page-4');
    const page5 = document.getElementById('page-5');
    const page6 = document.getElementById('page-6');
    const page7 = document.getElementById('page-7');

    const p4HeaderContainer = document.createElement('div');
    p4HeaderContainer.id = 'header-container';

    const p4HeaderImg = document.createElement('img');
    p4HeaderImg.id = 'p4-header-img';
    p4HeaderImg.src = 'images/mindGymLabP4Img1.jpeg'
    p4HeaderImg.alt = 'mindGymLab';

    const p4HeaderText = document.createElement('h1');
    p4HeaderText.id = 'p4-header-text';
    p4HeaderText.textContent = 'Unlock your potential at Mind Gym'

    const p4HeaderText2 = document.createElement('h2');
    p4HeaderText2.id = 'p4-header-text2';
    p4HeaderText2.textContent = 'You Are Only As Fast As Your Neurons'

    page4.appendChild(p4HeaderContainer);
    p4HeaderContainer.appendChild(p4HeaderImg);
    p4HeaderContainer.appendChild(p4HeaderText);
    p4HeaderContainer.appendChild(p4HeaderText2);

    const p4DykSection = document.createElement('section');
    p4DykSection.id = 'p4-dyk-section';

    const p4DykText = document.createElement('p');
    p4DykText.id = 'p4-dyk-text';
    p4DykText.textContent = 'Did you know:';

    const p4DykParagraphContainer1 = document.createElement('div');
    p4DykParagraphContainer1.classList.add('p4-dyk-paragraph-container');

    const p4DykParagraphText1 = document.createElement('p');
    p4DykParagraphText1.classList.add('p4-dyk-paragraph-text');
    p4DykParagraphText1.textContent = 'When brain information (neurons) are stimulated, it generates an electrical impulse that travels from cell to cell up to about 350 km/h. So the neuron traveling along the central nervous system pathway from your brain to your hand swinging a racket or foot kicking a ball is going a bit faster than an F1 race car.';

    const p4DykParagraphContainer2 = document.createElement('div');
    p4DykParagraphContainer2.classList.add('p4-dyk-paragraph-container');

    const p4DykParagraphText2 = document.createElement('p');
    p4DykParagraphText2.classList.add('p4-dyk-paragraph-text');
    p4DykParagraphText2.textContent = 'To explain a very complex process simply, that stimulus must be quickly seen with your eyes first during a game, with that information instantly going through the optic nerve to the brain where it’s processed with a decision to act. That’s when the neurons take off on their neural pathways to the muscles to fire the available motor neurons there and create movement. It all happens in an instant every second of our lives.'

    const p4DykParagraphContainer3 = document.createElement('div');
    p4DykParagraphContainer3.classList.add('p4-dyk-paragraph-container');

    const p4DykParagraphText3 = document.createElement('p');
    p4DykParagraphText3.classList.add('p4-dyk-paragraph-text');
    p4DykParagraphText3.textContent = 'By optimizing the athlete’s vision to gather more information quicker, building focus and concentration to better respond under pressure, and creating stronger neural pathways that will recruit more muscle for explosive movement, the athlete can become quicker, and smarter as their brain processing speed is being improved. The world’s elite athletes can process huge amounts of information quickly and calmly make more right decisions under tremendous physical stress.';


    const p4DykParagraphContainer4 = document.createElement('div');
    p4DykParagraphContainer4.classList.add('p4-dyk-paragraph-container');

    const p4DykParagraphText4 = document.createElement('p');
    p4DykParagraphText4.classList.add('p4-dyk-paragraph-text');
    p4DykParagraphText4.textContent = 'This enhanced brain power is very different from IQ and it’s what sets Renaldo, Lebron James, Serena Williams, and Tiger Woods, apart from other players. They see faster than others and can act on it with laser focus while under extreme pressure for 90 minutes. The good news is that science has shown that we can also train our brains to improve many of these functions, both for sport and everyday life.';

    page4.appendChild(p4DykSection);
    p4DykSection.appendChild(p4DykText);
    p4DykSection.appendChild(p4DykParagraphContainer1);
    p4DykParagraphContainer1.appendChild(p4DykParagraphText1);
    p4DykSection.appendChild(p4DykParagraphContainer2);
    p4DykParagraphContainer2.appendChild(p4DykParagraphText2);
    p4DykSection.appendChild(p4DykParagraphContainer3);
    p4DykParagraphContainer3.appendChild(p4DykParagraphText3);
    p4DykSection.appendChild(p4DykParagraphContainer4);
    p4DykParagraphContainer4.appendChild(p4DykParagraphText4);

    const p4Section2 = document.createElement('section');
    p4Section2.id = 'p4-section2';

    const p4HighPerformanceText = document.createElement('p');
    p4HighPerformanceText.id = 'p4-high-performance-text';
    p4HighPerformanceText.textContent = 'High Performance Cognitive Programs For Athletes';

    const p4Section2BigContainer = document.createElement('div');
    p4Section2BigContainer.id = 'p4-section-2-big-container';

    const p4Section2ImgContainer = document.createElement('div');
    p4Section2ImgContainer.id = 'p4-section2-img-container';

    const p4Section2Img = document.createElement('img');
    p4Section2Img.src = 'images/heroImageMindGym.jpeg';
    p4Section2Img.alt = 'mindGymLab';
    p4Section2Img.id = 'p4-section2-img';
    p4Section2Img.loading = 'lazy';

    const p4Section2ParagraphContainer = document.createElement('div');
    p4Section2ParagraphContainer.classList.add('p4-dyk-paragraph-container');
    p4Section2ParagraphContainer.id = 'p4-section2-paragraph-container';

    const p4Section2ParagraphText = document.createElement('p');
    p4Section2ParagraphText.classList.add('p4-dyk-paragraph-text');
    p4Section2ParagraphText.id = 'p4-section2-paragraph-text';
    p4Section2ParagraphText.textContent = 'The creative integration of cognitive mental training with physical sport-specific drills helps young athletes to elevate their overall performance and gain a competitive edge. Many of our clients say that after about one month of Neuro Athletic training, they react faster with better focus thus making their game feel as if it has slowed down.';

    page4.appendChild(p4Section2);
    p4Section2.appendChild(p4HighPerformanceText);
    p4Section2.appendChild(p4Section2BigContainer);
    p4Section2BigContainer.appendChild(p4Section2ImgContainer);
    p4Section2ImgContainer.appendChild(p4Section2Img);
    p4Section2BigContainer.appendChild(p4Section2ParagraphContainer);
    p4Section2ParagraphContainer.appendChild(p4Section2ParagraphText);

    const p4SportsSection = document.createElement('section');
    p4SportsSection.id = 'p4-sport-section';

    const p4SportImgContainer = document.createElement('div');
    p4SportImgContainer.id = 'p4-sport-img-container-1';
    p4SportImgContainer.classList.add('p4-sport-img-container');

    const p4TennisImg = document.createElement('img');
    p4TennisImg.src = 'images/tennisMindGymPhoto.jpg';
    p4TennisImg.alt = 'mindGymLabTennis';
    p4TennisImg.id = 'p4-sport-img-1';
    p4TennisImg.classList.add('p4-sport-img');
    p4TennisImg.loading = 'lazy';

    const p4TennisText = document.createElement('p');
    p4TennisText.classList.add('p4-sport-label-text');
    p4TennisText.textContent = 'Neuro Tennis';

    const p4SportsParagraphContainer1 = document.createElement('div');
    p4SportsParagraphContainer1.classList.add('p4-sport-paragraph-container');

    const p4SportsParagraphText1 = document.createElement('p');
    p4SportsParagraphText1.classList.add('-4-sport-paragraph-text');
    p4SportsParagraphText1.textContent = 'Tennis players enhance crucial mental and physical skills essential for success on the court. The training improves focus and concentration, depth perception, multi-object tracking, spatial awareness, hand-eye coordination, improving reaction times, and explosive change of direction speed (COD)';

    const p4SportsParagraphContainer2 = document.createElement('div');
    p4SportsParagraphContainer2.classList.add('p4-sport-paragraph-container');


    const p4SportsParagraphText2 = document.createElement('p');
    p4SportsParagraphText2.classList.add('p4-sport-paragraph-text');
    p4SportsParagraphText2.textContent = 'Athletes engage in exercises that develop their peripheral vision and allowing them to anticipate opponents\' moves. Additionally, the training fosters mental endurance and resilience helping players maintain composure under pressure in a fast-paced long match.';

    const p4VideoBtnContainer1 = document.createElement('div');
    p4VideoBtnContainer1.classList.add('p4-video-btn-container');

    const p4VideoBtn1 = document.createElement('button');
    p4VideoBtn1.classList.add('p4-video-btn');
    p4VideoBtn1.textContent = 'Videos';

    page4.appendChild(p4SportsSection);
    p4SportsSection.appendChild(p4SportImgContainer);
    p4SportImgContainer.appendChild(p4TennisImg);
    p4SportsSection.appendChild(p4TennisText);
    p4SportsSection.appendChild(p4SportsParagraphContainer1);
    p4SportsParagraphContainer1.appendChild(p4SportsParagraphText1);
    p4SportsSection.appendChild(p4SportsParagraphContainer2);
    p4SportsParagraphContainer2.appendChild(p4SportsParagraphText2);
    p4SportsSection.appendChild(p4VideoBtnContainer1);
    p4VideoBtnContainer1.appendChild(p4VideoBtn1);


    const p4BasketballImgContainer = document.createElement('div');
    p4BasketballImgContainer.classList.add('p4-sport-img-container');
    p4BasketballImgContainer.id = 'p4-sport-img-container-1';

    const p4BasketballImg = document.createElement('img');
    p4BasketballImg.id = 'p4-sport-img-1';
    p4BasketballImg.classList.add('p4-sport-img');
    p4BasketballImg.alt = 'mindGymLab';
    p4BasketballImg.src = 'images/basketballMindGymImage.jpg';
    p4BasketballImg.loading = 'lazy';

    const p4BasketballLabel= document.createElement('p');
    p4BasketballLabel.classList.add('p4-sport-label-text');
    p4BasketballLabel.textContent = 'Neuro Basketball';

    const p4BasketballDescriptionContainer = document.createElement('div');
    p4BasketballDescriptionContainer.classList.add('p4-sport-paragraph-container');

    const p4BasketballDescription = document.createElement('p');
    p4BasketballDescription.classList.add('p4-sport-paragraph-text');
    p4BasketballDescription.textContent = 'Neuro Basketball training is tailored specifically for basketball players with specialized exercises to build reactive agility with change of direction speed, vertical jump, and core strength. Players develop better hand-eye coordination with the ball, the ability to track multiple moving objects such as teammates and opponents, and situational awareness, which are vital in a fast-paced environment like basketball.';

    const p4BasketballVideoBtnContainer = document.createElement('div');
    p4BasketballVideoBtnContainer.classList.add('p4-video-btn-container');

    const p4BasketballBtn = document.createElement('button');
    p4BasketballBtn.classList.add('p4-video-btn');
    p4BasketballBtn.textContent = 'Videos';

    p4SportsSection.appendChild(p4BasketballImgContainer);
    p4BasketballImgContainer.appendChild(p4BasketballImg);
    p4SportsSection.appendChild(p4BasketballLabel);
    p4SportsSection.appendChild(p4BasketballDescriptionContainer);
    p4BasketballDescriptionContainer.appendChild(p4BasketballDescription);
    p4SportsSection.appendChild(p4BasketballVideoBtnContainer);
    p4BasketballVideoBtnContainer.appendChild(p4BasketballBtn);


    // Neuro Soccer
const p4SoccerImgContainer = document.createElement('div');
p4SoccerImgContainer.classList.add('p4-sport-img-container');
p4SoccerImgContainer.id = 'p4-sport-img-container-2';

const p4SoccerImg = document.createElement('img');
p4SoccerImg.id = 'p4-sport-img-2';
p4SoccerImg.classList.add('p4-sport-img');
p4SoccerImg.alt = 'mindGymLab';
p4SoccerImg.src = 'images/soccerMindGymImage.jpg';
p4SoccerImg.loading = 'lazy';

const p4SoccerLabel = document.createElement('p');
p4SoccerLabel.classList.add('p4-sport-label-text');
p4SoccerLabel.textContent = 'Neuro Soccer';

const p4SoccerDescriptionContainer1 = document.createElement('div');
p4SoccerDescriptionContainer1.classList.add('p4-sport-paragraph-container');

const p4SoccerDescription1 = document.createElement('p');
p4SoccerDescription1.classList.add('p4-sport-paragraph-text');
p4SoccerDescription1.textContent = 'Soccer is a very demanding contact sport that combines both explosive change of direction sprint speed, fast feet agility, endurance to run for a 90-minute game, combined with fast chess-like decision making tactics with the ball. Cognitive abilities such as peripheral vision, depth perception, rapid decsion making, and mental endurance and resilience are critical to success.';

const p4SoccerDescriptionContainer2 = document.createElement('div');
p4SoccerDescriptionContainer2.classList.add('p4-sport-paragraph-container');

const p4SoccerDescription2 = document.createElement('p');
p4SoccerDescription2.classList.add('p4-sport-paragraph-text');
p4SoccerDescription2.textContent = 'Neuro Soccer at Mind Gym Lab is specifically designed for soccer players to integrate these cognitive skills with soccer-specific drills to to anticipate opponents\' movements, react faster, and build their explosive change of direction speed, balance, and stability.';

const p4SoccerVideoBtnContainer = document.createElement('div');
p4SoccerVideoBtnContainer.classList.add('p4-video-btn-container');

const p4SoccerBtn = document.createElement('button');
p4SoccerBtn.classList.add('p4-video-btn');
p4SoccerBtn.textContent = 'Videos';


p4SportsSection.appendChild(p4SoccerImgContainer);
p4SoccerImgContainer.appendChild(p4SoccerImg);
p4SportsSection.appendChild(p4SoccerLabel);
p4SportsSection.appendChild(p4SoccerDescriptionContainer1);
p4SoccerDescriptionContainer1.appendChild(p4SoccerDescription1);
p4SportsSection.appendChild(p4SoccerDescriptionContainer2);
p4SoccerDescriptionContainer2.appendChild(p4SoccerDescription2);
p4SportsSection.appendChild(p4SoccerVideoBtnContainer);
p4SoccerVideoBtnContainer.appendChild(p4SoccerBtn);



// Neuro Golf
const p4GolfImgContainer = document.createElement('div');
p4GolfImgContainer.classList.add('p4-sport-img-container');
p4GolfImgContainer.id = 'p4-sport-img-container-3';

const p4GolfImg = document.createElement('img');
p4GolfImg.id = 'p4-sport-img-3';
p4GolfImg.classList.add('p4-sport-img');
p4GolfImg.alt = 'mindGymLab';
p4GolfImg.src = 'images/p4MindGymLabGolf.jpg';
p4GolfImg.loading = 'lazy';

const p4GolfLabel = document.createElement('p');
p4GolfLabel.classList.add('p4-sport-label-text');
p4GolfLabel.textContent = 'Neuro Golf';

const p4GolfDescriptionContainer1 = document.createElement('div');
p4GolfDescriptionContainer1.classList.add('p4-sport-paragraph-container');

const p4GolfDescription1 = document.createElement('p');
p4GolfDescription1.classList.add('p4-sport-paragraph-text');
p4GolfDescription1.textContent = 'Neurocognitive athletic training at Mind Gym Lab is tailored for golfers to enhance essential mental skills combined with balance that are crucial for success on the course. This training focuses on improving focus, visualization, decision-making, which are vital for executing precise shots and maintaining mental stamina and resiliance throughout a round of 18 holes.';

const p4GolfDescriptionContainer2 = document.createElement('div');
p4GolfDescriptionContainer2.classList.add('p4-sport-paragraph-container');

const p4GolfDescription2 = document.createElement('p');
p4GolfDescription2.classList.add('p4-sport-paragraph-text');
p4GolfDescription2.textContent = 'Through targeted exercises, golfers develop better concentration and ability to block out distractions, allowing them to remain calm and composed during critical moments, such as putts or tee shots. And, overcoming emotional challenges to remain calm and focused after missed shots and setbacks.';

const p4GolfVideoBtnContainer = document.createElement('div');
p4GolfVideoBtnContainer.classList.add('p4-video-btn-container');

const p4GolfBtn = document.createElement('button');
p4GolfBtn.classList.add('p4-video-btn');
p4GolfBtn.textContent = 'Videos';


p4SportsSection.appendChild(p4GolfImgContainer);
p4GolfImgContainer.appendChild(p4GolfImg);
p4SportsSection.appendChild(p4GolfLabel);
p4SportsSection.appendChild(p4GolfDescriptionContainer1);
p4GolfDescriptionContainer1.appendChild(p4GolfDescription1);
p4SportsSection.appendChild(p4GolfDescriptionContainer2);
p4GolfDescriptionContainer2.appendChild(p4GolfDescription2);
p4SportsSection.appendChild(p4GolfVideoBtnContainer);
p4GolfVideoBtnContainer.appendChild(p4GolfBtn);

// Neuro Fencing
const p4FencingImgContainer = document.createElement('div');
p4FencingImgContainer.classList.add('p4-sport-img-container');
p4FencingImgContainer.id = 'p4-sport-img-container-4';

const p4FencingImg = document.createElement('img');
p4FencingImg.id = 'p4-sport-img-4';
p4FencingImg.classList.add('p4-sport-img');
p4FencingImg.alt = 'mindGymLab';
p4FencingImg.src = 'images/p4MindGymLabFencing.jpg';
p4FencingImg.loading = 'lazy';

const p4FencingLabel = document.createElement('p');
p4FencingLabel.classList.add('p4-sport-label-text');
p4FencingLabel.textContent = 'Neuro Fencing';

const p4FencingDescriptionContainer1 = document.createElement('div');
p4FencingDescriptionContainer1.classList.add('p4-sport-paragraph-container');

const p4FencingDescription1 = document.createElement('p');
p4FencingDescription1.classList.add('p4-sport-paragraph-text');
p4FencingDescription1.textContent = 'Neuro Athletic training for fencers, much like football, basketball, hockey, and boxing, is designed to enhance mental skills essential for success in this fast dynamic sport requiring lightening quick reactions and laser focus. Neuro fencing training focuses on improving reaction times, focus, and calm decision-making which are vital for anticipating opponents\' moves and executing precise attacks and defenses. Also explosive first step quickness.';

const p4FencingDescriptionContainer2 = document.createElement('div');
p4FencingDescriptionContainer2.classList.add('p4-sport-paragraph-container');

const p4FencingDescription2 = document.createElement('p');
p4FencingDescription2.classList.add('p4-sport-paragraph-text');
p4FencingDescription2.textContent = 'Through targeted exercises, fencers develop the ability to process information quickly, allowing them to respond effectively to fast-paced bouts.';

const p4FencingVideoBtnContainer = document.createElement('div');
p4FencingVideoBtnContainer.classList.add('p4-video-btn-container');

const p4FencingBtn = document.createElement('button');
p4FencingBtn.classList.add('p4-video-btn');
p4FencingBtn.textContent = 'Videos';

p4SportsSection.appendChild(p4FencingImgContainer);
p4FencingImgContainer.appendChild(p4FencingImg);
p4SportsSection.appendChild(p4FencingLabel);
p4SportsSection.appendChild(p4FencingDescriptionContainer1);
p4FencingDescriptionContainer1.appendChild(p4FencingDescription1);
p4SportsSection.appendChild(p4FencingDescriptionContainer2);
p4FencingDescriptionContainer2.appendChild(p4FencingDescription2);
p4SportsSection.appendChild(p4FencingVideoBtnContainer);
p4FencingVideoBtnContainer.appendChild(p4FencingBtn);

// Neuro Hockey
const p4HockeyImgContainer = document.createElement('div');
p4HockeyImgContainer.classList.add('p4-sport-img-container');
p4HockeyImgContainer.id = 'p4-sport-img-container-5';

const p4HockeyImg = document.createElement('img');
p4HockeyImg.id = 'p4-sport-img-5';
p4HockeyImg.classList.add('p4-sport-img');
p4HockeyImg.alt = 'mindGymLab';
p4HockeyImg.src = 'images/p4MindGymLabHockey.jpeg';
p4HockeyImg.loading = 'lazy';

const p4HockeyLabel = document.createElement('p');
p4HockeyLabel.classList.add('p4-sport-label-text');
p4HockeyLabel.textContent = 'Neuro Hockey';

const p4HockeyDescriptionContainer1 = document.createElement('div');
p4HockeyDescriptionContainer1.classList.add('p4-sport-paragraph-container');

const p4HockeyDescription1 = document.createElement('p');
p4HockeyDescription1.classList.add('p4-sport-paragraph-text');
p4HockeyDescription1.textContent = 'As with football and basketball, Neuro Hockey training at Mind Gym Lab is designed for hockey players to enhance the same key mental skills critical for performance in a fast-moving physical contact group sport. The unpredictable nature of hockey requires the same lightning-fast reactions, focus, explosive speed, rapid decision making, and sharp vision to track a small fast moving puck.';

const p4HockeyDescriptionContainer2 = document.createElement('div');
p4HockeyDescriptionContainer2.classList.add('p4-sport-paragraph-container');

const p4HockeyDescription2 = document.createElement('p');
p4HockeyDescription2.classList.add('p4-sport-paragraph-text');
p4HockeyDescription2.textContent = 'By integrating cognitive training with hockey-specific drills, players can enhance their mental acuity for a fast game with more explosive power for a competitive edge.';

const p4HockeyVideoBtnContainer = document.createElement('div');
p4HockeyVideoBtnContainer.classList.add('p4-video-btn-container');
p4HockeyVideoBtnContainer.id = 'p4-last-btn-container';

const p4HockeyBtn = document.createElement('button');
p4HockeyBtn.classList.add('p4-video-btn');
p4HockeyBtn.textContent = 'Videos';

p4SportsSection.appendChild(p4HockeyImgContainer);
p4HockeyImgContainer.appendChild(p4HockeyImg);
p4SportsSection.appendChild(p4HockeyLabel);
p4SportsSection.appendChild(p4HockeyDescriptionContainer1);
p4HockeyDescriptionContainer1.appendChild(p4HockeyDescription1);
p4SportsSection.appendChild(p4HockeyDescriptionContainer2);
p4HockeyDescriptionContainer2.appendChild(p4HockeyDescription2);
p4SportsSection.appendChild(p4HockeyVideoBtnContainer);
p4HockeyVideoBtnContainer.appendChild(p4HockeyBtn);



    performanceLi.addEventListener('click', function() {
        page2.style.display = "none";
        navOverlay.style.display = "none";
        entireDocument.style.display = "block";
        homePage.style.display = "none";
        p3Container.style.display = "none";
        body.style.backgroundColor = "black";
        page4.style.display = "block";
        page5.style.display = "none";
        page6.style.display = "none";
        page7.style.display = "none";

    })

    const videoBtns = document.querySelectorAll('.p4-video-btn');
    videoBtns.forEach(button => {
        button.addEventListener('click', function() {
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

             // Scroll to the top of the page
        window.scrollTo(0, 0);
        })
    })
}

/* <div id="page-4">
        
 <div id="header-container">
                <img src="images/mindGymLabP4Img1.jpeg" alt="mindGymLab" id="p4-header-img">
                <h1 id="p4-header-text">Unlock your potential at Mind Gym</h1>
                <h2 id="p4-header-text2">You Are Only As Fast As Your Neurons</h2>
            </div>
            
            <section id="p4-dyk-section">
                <p id="p4-dyk-text">Did You Know:</p>
                <div class="p4-dyk-paragraph-container">
                    <p class="p4-dyk-paragraph-text">When brain information (neurons) are stimulated, it generates an electrical impulse that travels from cell to cell up to about 350 km/h. So the neuron traveling along the central nervous system pathway from your brain to your hand swinging a racket or foot kicking a ball is going a bit faster than an F1 race car.</p>
                </div>
                <div class="p4-dyk-paragraph-container">
                    <p class="p4-dyk-paragraph-text">To explain a very complex process simply, that stimulus must be quickly seen with your eyes first during a game, with that information instantly going through the optic nerve to the brain where it’s processed with a decision to act. That’s when the neurons take off on their neural pathways to the muscles to fire the available motor neurons there and create movement. It all happens in an instant every second of our lives.</p>
                </div>
                <div class="p4-dyk-paragraph-container">
                    <p class="p4-dyk-paragraph-text">By optimizing the athlete’s vision to gather more information quicker, building focus and concentration to better respond under pressure, and creating stronger neural pathways that will recruit more muscle for explosive movement, the athlete can become quicker, and smarter as their brain processing speed is being improved. The world’s elite athletes can process huge amounts of information quickly and calmly make more right decisions under tremendous physical stress.</p>
                </div>
                <div class="p4-dyk-paragraph-container">
                    <p class="p4-dyk-paragraph-text">This enhanced brain power is very different from IQ and it’s what sets Renaldo, Lebron James, Serena Williams, and Tiger Woods, apart from other players. They see faster than others and can act on it with laser focus while under extreme pressure for 90 minutes. The good news is that science has shown that we can also train our brains to improve many of these functions, both for sport and everyday life.</p>
                </div>
            </section>


            <section id="p4-section2">
                <p id="p4-high-performance-text">High Performance Cognitive Programs For Athletes</p>
                <div id="p4-section-2-big-container">
                <div id="p4-section2-img-container">
                    <img src="images/heroImageMindGym.jpeg" alt="mindGymLab" id="p4-section2-img">
                </div>
                <div class="p4-dyk-paragraph-container" id="p4-section2-paragraph-container">
                    <p class="p4-dyk-paragraph-text" id="p4-section2-paragraph-text">The creative integration of cognitive mental training with physical sport-specific drills helps young athletes to elevate their overall performance and gain a competitive edge. Many of our clients say that after about one month of Neuro Athletic training, they react faster with better focus thus making their game feel as if it has slowed down.</p>
                </div>
                </div>
            </section>


            <section id="p4-sport-section">
                <div class="p4-sport-img-container" id="p4-sport-img-container-1">
                    <img src="images/tennisMindGymPhoto.jpg" alt="mindGymLab" class="p4-sport-img" id="p4-sport-img-1">
                </div>
                <p class="p4-sport-label-text">Neuro Tennis</p>
                <div class="p4-sport-paragraph-container">
                    <p class="p4-sport-paragraph-text">Tennis players enhance crucial mental and physical skills essential for success on the court. The training improves focus and concentration, depth perception, multi-object tracking, spatial awareness, hand-eye coordination, improving reaction times, and explosive change of direction speed (COD)</p>
                </div>
                <div class="p4-sport-paragraph-container">
                    <p class="p4-sport-paragraph-text">Athletes engage in exercises that develop their peripheral vision and allowing them to anticipate opponents' moves. Additionally, the training fosters mental endurance and resilience helping players maintain composure under pressure in a fast-paced long match.</p>
                </div>
                <div class="p4-video-btn-container">
                    <button class="p4-video-btn">Videos</button>
                </div>
                <div class="p4-sport-img-container" id="p4-sport-img-container-1">
                    <img src="images/basketballMindGymImage.jpg" alt="mindGymLab" class="p4-sport-img" id="p4-sport-img-1">
                </div>
                <p class="p4-sport-label-text">Neuro Basketball</p>
                <div class="p4-sport-paragraph-container">
                    <p class="p4-sport-paragraph-text">Neuro Basketball training is tailored specifically for basketball players with specialized exercises to build reactive agility with change of direction speed, vertical jump, and core strength. Players develop better hand-eye coordination with the ball, the ability to track multiple moving objects such as teammates and opponents, and situational awareness, which are vital in a fast-paced environment like basketball.</p>
                </div>
                <div class="p4-video-btn-container">
                    <button class="p4-video-btn">Videos</button>
                </div>


                <div class="p4-sport-img-container" id="p4-sport-img-container-1">
                    <img src="images/soccerMindGymImage.jpg" alt="mindGymLab" class="p4-sport-img" id="p4-sport-img-1">
                </div>
                <p class="p4-sport-label-text">Neuro Soccer</p>
                <div class="p4-sport-paragraph-container">
                    <p class="p4-sport-paragraph-text">Soccer is a very demanding contact sport that combines both explosive change of direction sprint speed, fast feet agility, endurance to run for a 90-minute game, combined with fast chess-like decision making tactics with the ball. Cognitive abilities such as peripheral vision, depth perception, rapid decsion making, and mental endurance and resilience are critical to success.</p>
                </div>
                <div class="p4-sport-paragraph-container">
                    <p class="p4-sport-paragraph-text">Neuro Soccer at Mind Gym Lab is specifically designed for soccer players to integrate these cognitive skills with soccer-specific drills to to anticipate opponents' movements, react faster, and build their explosive change of direction speed, balance, and stability.</p>
                </div>
                <div class="p4-video-btn-container">
                    <button class="p4-video-btn">Videos</button>
                </div>

                <div class="p4-sport-img-container" id="p4-sport-img-container-1">
                    <img src="images/p4MindGymLabGolf.jpg" alt="mindGymLab" class="p4-sport-img" id="p4-sport-img-1">
                </div>
                <p class="p4-sport-label-text">Neuro Golf</p>
                <div class="p4-sport-paragraph-container">
                    <p class="p4-sport-paragraph-text">Neurocognitive athletic training at Mind Gym Lab is tailored for golfers to enhance essential mental skills combined with balance that are crucial for success on the course. This training focuses on improving focus, visualization, decision-making, which are vital for executing precise shots and maintaining mental stamina and resiliance throughout a round of 18 holes.</p>
                </div>
                <div class="p4-sport-paragraph-container">
                    <p class="p4-sport-paragraph-text">Through targeted exercises, golfers develop better concentration and ability to block out distractions, allowing them to remain calm and composed during critical moments, such as putts or tee shots. And, overcoming emotional challenges to remain calm and focused after missed shots and setbacks.</p>
                </div>
                <div class="p4-video-btn-container">
                    <button class="p4-video-btn">Videos</button>
                </div>

                <div class="p4-sport-img-container" id="p4-sport-img-container-1">
                    <img src="images/p4MindGymLabFencing.jpg" alt="mindGymLab" class="p4-sport-img" id="p4-sport-img-1">
                </div>
                <p class="p4-sport-label-text">Neuro Fencing</p>
                <div class="p4-sport-paragraph-container">
                    <p class="p4-sport-paragraph-text">Neuro Athletic training for fencers, much like football, basketball, hockey, and boxing, is designed to enhance mental skills essential for success in this fast dynamic sport requiring lightening quick reactions and laser focus. Neuro fencing training focuses on improving reaction times, focus, and calm decision-making which are vital for anticipating opponents' moves and executing precise attacks and defenses. Also explosive first step quickness.</p>
                </div>
                <div class="p4-sport-paragraph-container">
                    <p class="p4-sport-paragraph-text">Through targeted exercises, fencers develop the ability to process information quickly, allowing them to respond effectively to fast-paced bouts.</p>
                </div>
                <div class="p4-video-btn-container">
                    <button class="p4-video-btn">Videos</button>
                </div>

                <div class="p4-sport-img-container" id="p4-sport-img-container-1">
                    <img src="images/p4MindGymLabHockey.jpeg" alt="mindGymLab" class="p4-sport-img" id="p4-sport-img-1">
                </div>
                <p class="p4-sport-label-text">Neuro Hocker</p>
                <div class="p4-sport-paragraph-container">
                    <p class="p4-sport-paragraph-text">As with football and basketball, Neuro Hockey training at Mind Gym Lab is designed for hockey players to enhance the same key mental skills critical for performance in a fast-moving physical contact group sport. The unpredictable nature of hockey requires the same lightning-fast reactions, focus, explosive speed, rapid decision making, and sharp vision to track a small fast moving puck.</p>
                </div>
                <div class="p4-sport-paragraph-container">
                    <p class="p4-sport-paragraph-text">By integrating cognitive training with hockey-specific drills, players can enhance their mental acuity for a fast game with more explosive power for a competitive edge.</p>
                </div>
                <div class="p4-video-btn-container" id="p4-last-btn-container">
                    <button class="p4-video-btn">Videos</button>
                </div>

            </section>
               
       
    </div> 

















           
    */