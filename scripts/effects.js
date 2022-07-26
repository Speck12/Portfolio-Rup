
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
const blend_in_skill_box = 2.6;
const blend_in_project = 5.3;

window.addEventListener("scroll", function(e) {
    var scrolled = Math.round(window.pageYOffset / window.innerHeight * 1450);
    var rate = scrolled * .05;

    console.log(rate);

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

/* FOR BLEND IN EFFECTS */

window.addEventListener("scroll", function(e) {
    var scrolled = window.pageYOffset / window.innerHeight;

    if (scrolled > blend_in_about_me) { // blending in the headers of SECTION 2
        target10.style.setProperty("--show", "flex"); target10.style.animation = "blend_in 2s";
        target11.style.setProperty("--show", "flex"); target11.style.animation = "blend_in 2s";
        target12.style.setProperty("--show", "flex"); target12.style.animation = "blend_in 2s";
    } else {return}

    if (scrolled > blend_in_skill_box) { // blending int the skill-box
        target13.style.setProperty("--show", "flex"); target13.style.animation = "blend_in 2s"
    } else {return}

    if (scrolled > blend_in_project) { // blending int the projects
        target14.style.setProperty("--show", "flex"); target14.style.animation = "blend_in 2s";
        target15.style.setProperty("--show", "flex"); target15.style.animation = "blend_in 2s";
        target16.style.setProperty("--show", "flex"); target16.style.animation = "blend_in 2s";
    } else {return}

});