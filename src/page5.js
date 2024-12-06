import { domainToUnicode } from "url";


export function page5() {
    const wellnessLi = document.querySelector('#nav-ul li:nth-child(5)');
    const performanceLi = document.querySelector('#nav-ul li:nth-child(4)');
    const systemLi = document.querySelector('#nav-ul li:nth-child(3)');
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


    const p5Header = document.createElement('section');
    p5Header.id = 'p5-header';

    const p5TextTitle = document.createElement('h1');
    p5TextTitle.id = 'p5-text-title';
    p5TextTitle.textContent = 'Train your mind for a healthier, happier you.';

    const p5HeaderSmallText = document.createElement('h2');
    p5HeaderSmallText.id = 'p5-header-small-text';
    p5HeaderSmallText.textContent = 'Mind Gym Lab - where cognitive training meets mental wellness';

    page5.appendChild(p5Header);
    p5Header.appendChild(p5TextTitle);
    p5Header.appendChild(p5HeaderSmallText);

    const p5Section2 = document.createElement('section');
    p5Section2.id = 'p5-section-2';

    const p5Section2Container = document.createElement('div');
    p5Section2Container.id = 'p5-section-2-container';

    const p5Section2MainText = document.createElement('h2');
    p5Section2MainText.id = 'p5-section-2-main-text';
    p5Section2MainText.textContent = 'Your mental health is just as important as your physical health';

    const p5BigScreenDiv = document.createElement('div');
    p5BigScreenDiv.id = 'p5-big-screen-div';

    const p5Section2Text = document.createElement('p');
    p5Section2Text.id = 'p5-section-2-text';
    p5Section2Text.textContent = 'Mind Gym Lab improves mental health through neurocognitive training by building resilience, reducing stress, and enhancing emotional regulation. Participants develop better-coping strategies and boost their cognitive functioning, leading to increased confidence and a positive outlook.';

    const p5VideoContainer = document.createElement('div');
    p5VideoContainer.id = 'p5-video-container';

    const p5Video = document.createElement('video');
    p5Video.id = 'p5-video';
    p5Video.src = 'images/30s.mp4';
    p5Video.type = 'video/mp4';
    p5Video.controls = true;

    const p5LastText = document.createElement('p');
    p5LastText.id = 'p5-last-text';
    p5LastText.textContent = 'From children with learning challenges to seniors looking for prevention of age-related diseases like dementia and Alzheimer\'s, post-injury rehab, neurocognitive training at Mind Gym Lab is not just for athletes.';

    page5.appendChild(p5Section2);
    p5Section2.appendChild(p5Section2Container);
    p5Section2Container.appendChild(p5Section2MainText);
    p5Section2.appendChild(p5BigScreenDiv);
    p5BigScreenDiv.appendChild(p5Section2Text);
    p5BigScreenDiv.appendChild(p5VideoContainer);
    p5VideoContainer.appendChild(p5Video);
    p5Section2.appendChild(p5LastText);

    wellnessLi.addEventListener('click', function() {
        page2.style.display = "none";
        navOverlay.style.display = "none";
        entireDocument.style.display = "block";
        homePage.style.display = "none";
        p3Container.style.display = "none";
        body.style.backgroundColor = "black";
        page4.style.display = "none";
        page6.style.display = "none";
        page5.style.display = "block";
        page7.style.display = "none";
        
    })
}








/*

<div id="page-5">
        <section id="p5-header">
            <h1 id="p5-text-title">Train your mind for a healthier, happier you.</h1>
            <h2 id="p5-header-small-text">Mind Gym Lab - where cognitive training meets mental wellness</h2>
        </section>
        <section id="p5-section-2">
            <div id="p5-section-2-container">
                <h2 id="p5-section-2-main-text">Your mental health is just as important as your physical health</h2>
                <div id="p5-big-screen-div">
                <p id="p5-section-2-text">Mind Gym Lab improves mental health through neurocognitive training by building resilience, reducing stress, and enhancing emotional regulation. Participants develop better-coping strategies and boost their cognitive functioning, leading to increased confidence and a positive outlook.</p>
               
               
               
                <div id="p5-video-container">
                <video controls id="p5-video">
                    <source src="images/30s.mp4" type="video/mp4">
                  </video>
                  </div>
                </div>
                <p id="p5-last-text">From children with learning challenges to seniors looking for prevention of age-related diseases like dementia and Alzheimer's, post-injury rehab, neurocognitive training at Mind Gym Lab is not just for athletes.</p>
            </div>
        </section>
    </div>
   */