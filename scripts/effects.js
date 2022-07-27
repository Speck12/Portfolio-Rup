
/* FOR SECTION 1 */

const target0 = document.getElementById("par1"); // ? Background
const target1 = document.getElementById("par2"); // ? Planets 1
const target2 = document.getElementById("par3"); // ? Planets 2
const target3 = document.getElementById("par4"); // ? Stones
const target4 = document.getElementById("par5"); // ? Astronaut
const target5 = document.getElementById("par6"); // ? Example text

target5.style.transform = 'scale(0)';

window.addEventListener("scroll", function(e) {

    var scrolled = window.pageYOffset;
    let rate = scrolled * .4;

    // disabling imageviewer for devices with a width under 1000px
    if (window.screen.width <= 700) {
        target5.style.transform = 'translate3d(0px, -' + rate + 'px, 0px)';
        target4.style.transform = 'translate3d(' + .08 * rate + 'px, -' + rate + 'px, 0px) rotate('+ .1 * rate +'deg) scale(1.9)';
        return
    }

    target1.style.transform = 'translate3d(0px, -' + rate + 'px, 0px) rotate('+ .0015 * rate +'deg)';

    rate = scrolled * .2;

    target5.style.transform = 'translate3d(0px, -' + rate + 'px, 0px)';

    target2.style.transform = 'translate3d(0px, -' + rate + 'px, 0px) rotate('+ .001 * rate +'deg)';

    rate = scrolled * .1;

    target3.style.transform = 'translate3d(0px, -' + rate + 'px, 0px) rotate('+ .001 * rate +'deg)';

    rate = scrolled * .56;

    target0.style.transform = 'translate3d(0px, -' + .05 * rate + 'px, 0px) rotate('+ .001 * rate +'deg)';

    target4.style.transform = 'translate3d(' + .08 * rate + 'px, -' + rate + 'px, 0px) rotate('+ .1 * rate +'deg)';

    if (rate>= 184) {return} else if (rate<= 184) {target5.style.transform = 'scale(' + .0052 * rate + ')';}

});

/* FOR SECTION 2 */

const target10 = document.getElementById("aboutmeheader1"); // ? About Me - Header 1
const target11 = document.getElementById("aboutmeheader2"); // ? About Me - Header 2
const target12 = document.getElementById("aboutmeheader3"); // ? About Me - Header 2

const target13 = document.getElementById("skills"); // ? Skill-box

const target14 = document.getElementById("projectheader1"); // ? Projects - Header 1
const target15 = document.getElementById("projectheader2"); // ? Projects - Header 2
const target16 = document.getElementById("projectheader3"); // ? Projects - Header 2

const blend_in_about_me = 1.8;
const blend_in_skill_box = 2.3;
const blend_in_project = 5.3;
const blend_in_parallax = 2.5;

window.addEventListener("scroll", function(e) {
    var scrolled = Math.round(window.pageYOffset / window.innerHeight * 1450);
    var rate = scrolled * .05;

    // ! About me Section
    if (scrolled > blend_in_about_me) {

        target10.style.transform = 'translate3d(' + rate + 'px, 0px, 0px)';

        rate = scrolled * .08;

        target11.style.transform = 'translate3d(-' + rate + 'px, 0px, 0px) rotate(180deg)';

        rate = scrolled * .05;

        target12.style.transform = 'translate3d(' + rate + 'px, 0px, 0px)';

    } else {return}

    // ! Project Section
    if (scrolled > blend_in_project) {

        target14.style.transform = 'translate3d(' + rate + 'px, 0px, 0px)';

        rate = scrolled * .08;

        target15.style.transform = 'translate3d(-' + rate + 'px, 0px, 0px) rotate(180deg)';

        rate = scrolled * .05;

        target16.style.transform = 'translate3d(' + rate + 'px, 0px, 0px)';

    } else {return}

});

const target17 = document.getElementById("par1_2"); // ? Background
const target18 = document.getElementById("par2_2"); // ? Planet
const target19 = document.getElementById("par3_2"); // ? Mountains
const target20 = document.getElementById("par4_2"); // ? Ground
const target21 = document.getElementById("par5_2"); // ? Ground Front

window.addEventListener("scroll", function(e) {
    var scrolled = Math.round(window.pageYOffset / window.innerHeight * 1450);
    var rate = scrolled;

    console.log(scrolled);

    rate = scrolled * .03;

    target17.style.transform = 'translate3d(-150px, -' + rate + 'px, 0px) rotate(-'+ rate/18 +'deg) scale(1.2)';

    rate = scrolled * .1;

    target18.style.transform = 'translate3d(0px, -' + rate * 1.5 + 'px, 0px) scale(.75)';

    target20.style.transform = 'translate3d(0px, -' + rate + 'px, 0px)';
    target19.style.transform = 'translate3d(0px, -' + rate * .7 + 'px, 0px)';

    rate = scrolled * .08;

    target21.style.transform = 'translate3d(0px, -' + rate + 'px, 0px)';

});

/* FOR BLEND IN EFFECTS */

const target22 = document.getElementById("projectlist"); // ? Project-list of SECTION 4

window.addEventListener("scroll", function(e) {
    var scrolled = window.pageYOffset / window.innerHeight;

    if (scrolled > blend_in_parallax) { 
        target17.style.setProperty("--show", "flexbox");
        target18.style.setProperty("--show", "flexbox");
        target19.style.setProperty("--show", "flexbox");
        target20.style.setProperty("--show", "flexbox");
        target21.style.setProperty("--show", "flexbox");

        target0.style.setProperty("--show", "none");
        target1.style.setProperty("--show", "none");
        target2.style.setProperty("--show", "none");
        target3.style.setProperty("--show", "none");
        target4.style.setProperty("--show", "none");
        target5.style.setProperty("--show", "none");
    }
    
    if (scrolled < blend_in_parallax) {
        target17.style.setProperty("--show", "none");
        target18.style.setProperty("--show", "none");
        target19.style.setProperty("--show", "none");
        target20.style.setProperty("--show", "none");
        target21.style.setProperty("--show", "none");

        target0.style.setProperty("--show", "flexbox");
        target1.style.setProperty("--show", "flexbox");
        target2.style.setProperty("--show", "flexbox");
        target3.style.setProperty("--show", "flexbox");
        target4.style.setProperty("--show", "flexbox");
        target5.style.setProperty("--show", "flexbox");
    }

    if (scrolled > blend_in_about_me) { // blending in the headers of SECTION 2
        target10.style.setProperty("--show", "flex"); target10.style.animation = "blend_in 2s";
        target11.style.setProperty("--show", "flex"); target11.style.animation = "blend_in3 2s";
        target12.style.setProperty("--show", "flex"); target12.style.animation = "blend_in4 2s";
    }

    if (scrolled > blend_in_skill_box) { // blending int the skill-box
        target13.style.setProperty("--show", "flex"); target13.style.animation = "blend_in3 2s"
    } 

    if (scrolled > blend_in_project) { // blending int the projects
        target14.style.setProperty("--show", "flex"); target14.style.animation = "blend_in 2s";
        target15.style.setProperty("--show", "flex"); target15.style.animation = "blend_in 2s";
        target16.style.setProperty("--show", "flex"); target16.style.animation = "blend_in 2s";
        target22.style.setProperty("--show", "flex"); target22.style.animation = "blend_in2 2s";

        target10.style.setProperty("--show", "none");
        target11.style.setProperty("--show", "none");
        target12.style.setProperty("--show", "none");
        target13.style.setProperty("--show", "none")
    }

});