const target0 = document.getElementById("par1"); // Background
const target1 = document.getElementById("par2"); // Planets 1
const target2 = document.getElementById("par3"); // Planets 2
const target3 = document.getElementById("par4"); // Stones
const target4 = document.getElementById("par5"); // Astronaut
const target5 = document.getElementById("par6"); // Example text

target5.style.transform = 'scale(0)';

window.addEventListener("scroll", function(e) {

    var scrolled = window.pageYOffset;
    var rate = scrolled * .4;

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