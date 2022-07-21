
window.addEventListener("DOMMouseScroll", function(e) {

    var scrolled = window.pageYOffset;
    var elem = document.getElementById("aboutmeheader");

    console.log(scrolled);

    if (scrolled => 600) {
        elem.classList.add(".hidden");
    }
    
})


var typed = new Typed(".auto-type1", {
    strings: ["^1000 a Software Engineer!^3000", "^1000 an UI/UX-Designer!^3000"],
    typeSpeed: 140,
    backSpeed: 50,
    startDelay: 0,
    shuffle: false,
    showCursor: false,
    loop: true
})

var typed = new Typed(".auto-type3", {
    strings: ["Projects^5000"],
    typeSpeed: 340,
    backSpeed: 200,
    startDelay: 0,
    shuffle: false,
    showCursor: false,
    loop: true
})
