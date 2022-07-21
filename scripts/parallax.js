
/* FOR SECTION 1 */

const target0 = document.getElementById("par1"); // Background
const target1 = document.getElementById("par2"); // Planets 1
const target2 = document.getElementById("par3"); // Planets 2
const target3 = document.getElementById("par4"); // Stones
const target4 = document.getElementById("par5"); // Astronaut
const target5 = document.getElementById("par6"); // Example text

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

const target10 = document.getElementById("aboutmeheader1"); // About Me - Header 1
const target11 = document.getElementById("aboutmeheader2"); // About Me - Header 2
const target12 = document.getElementById("aboutmeheader3"); // About Me - Header 2

window.addEventListener("scroll", function(e) {

    var scrolled = window.pageYOffset;
    let rate = scrolled * .03;

    console.log(scrolled);

    if (scrolled > 700) {

        target10.style.transform = 'translate3d(' + rate + 'px, ' + rate / 7  + 'px, 0px)';

        rate = scrolled * .08;

        target11.style.transform = 'translate3d(-' + rate + 'px, 70px, 0px) rotate(180deg)';

        rate = scrolled * .05;

        target12.style.transform = 'translate3d(' + rate + 'px, 70px, 0px)';
    }

});