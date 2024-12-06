export function page6() {
    const educationLi = document.querySelector('#nav-ul li:nth-child(6)')
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


    const p6HeaderDiv = document.createElement('div');
    p6HeaderDiv.id = 'p6-header-div';

    const p6HeaderText = document.createElement('h3');
    p6HeaderText.id = 'p6-header-text';
    p6HeaderText.textContent = 'Learning in Motion';

    const p6ParagraphDiv1 = document.createElement('div');
    p6ParagraphDiv1.classList.add('p6-paragraph-div');
    p6ParagraphDiv1.id = 'p6-paragraph-div-1';

    const p6ParagraphText1 = document.createElement('p');
    p6ParagraphText1.classList.add('p6-paragraph-text');
    p6ParagraphText1.textContent = 'Using the SpeedCourt system, learning in motion transforms education by combining physical activity with interactive learning experiences. This approach enhances focus, memory, and overall academic performance while encouraging teamwork and critical thinking. Integrating movement into lessons makes students more engaged and motivated, leading to a more effective and enjoyable educational experience.';

    const p6ParagraphDiv2 = document.createElement('div');
    p6ParagraphDiv2.id = 'p6-aragraph-div-2';
    p6ParagraphDiv2.classList.add('p6-paragraph-div');

    const p6ParagraphText2 = document.createElement('p');
    p6ParagraphText2.classList.add('p6-paragraph-text');
    p6ParagraphText2.textContent = 'Mind Gym Lab currently also has a complete English, math, and geography curriculum integrated into its cognitive technology systems for a unique “Learning and Movement” program for schools. This innovative approach to merging physical fitness and academics is currently being employed in select German schools.';

    page6.appendChild(p6HeaderDiv);
    p6HeaderDiv.appendChild(p6HeaderText);
    page6.appendChild(p6ParagraphDiv1);
    p6ParagraphDiv1.appendChild(p6ParagraphText1);
    page6.appendChild(p6ParagraphDiv2);
    p6ParagraphDiv2.appendChild(p6ParagraphText2);

    educationLi.addEventListener('click', function() {
        page2.style.display = "none";
        navOverlay.style.display = "none";
        entireDocument.style.display = "block";
        homePage.style.display = "none";
        p3Container.style.display = "none";
        body.style.backgroundColor = "black";
        page4.style.display = "none";
        page5.style.display = "none";
        page6.style.display = "flex";
        page7.style.display = "none";
    })
}

/*
  <div id="page-6">


    <div id="p6-header-div">
        <h3 id="p6-header-text">Learning in Motion</h3>
    </div>
    <div class="p6-paragraph-div" id="p6-paragraph-div-1">
        <p class="p6-paragraph-text">Using the SpeedCourt system, learning in motion transforms education by combining physical activity with interactive learning experiences. This approach enhances focus, memory, and overall academic performance while encouraging teamwork and critical thinking. Integrating movement into lessons makes students more engaged and motivated, leading to a more effective and enjoyable educational experience.</p>
    </div>


    <div class="p6-paragraph-div" id="p6-paragraph-div-2">
        <p class="p6-paragraph-text"> Mind Gym Lab currently also has a complete English, math, and geography curriculum integrated into its cognitive technology systems for a unique “Learning and Movement” program for schools. This innovative approach to merging physical fitness and academics is currently being employed in select German schools.</p>
    </div>
   </div>

   */