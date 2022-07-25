/*const body = document.body,
scrollWrap = document.getElementsByClassName("smoothscroll")[0],
height = scrollWrap.getBoundingClientRect().height - 1,
speed = 0.12;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.cssText.transform = scroll;

    callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll(); */