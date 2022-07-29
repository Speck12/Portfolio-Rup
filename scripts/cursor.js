const cursor = document.getElementById("cursor");
const isMobile = navigator.userAgentData.mobile;

/* ANCHOR MouseMove-Animation */

document.addEventListener("mousemove", (e)=>{
    if (isMobile == true) {
        cursor.style.display = "none";
        return
    }
    cursor.setAttribute("style","top: "+(e.pageY - window.scrollY - 7)+"px; left: "+(e.pageX)+"px");
})

/* ANCHOR Clicking-Animation */

const animation_click = [
    { transform: 'translateX(-7px) scale(1)' },
    { transform: 'translateX(-7px) scale(.2)' },
    { transform: 'translateX(-7px) scale(1)' }
];

const animation_click_timing = {
    duration: 300,
    iterations: 1,
}

document.addEventListener("click", (e)=>{
    if (isMobile == true) {
        cursor.style.display = "none";
        return
    }
    cursor.animate(animation_click, animation_click_timing);
})


/* ANCHOR Hover-Buttons-Animation */

/*
const bt1 = document.getElementById("logo");
const bt2 = document.getElementById("aboutme-button");
const bt3 = document.getElementById("projects-button");
const bt4 = document.getElementById("contact-button");

const animation_mouseover = [
    { transform: 'translateX(-7px) scale(1)' },
    { transform: 'translateX(-7px) scale(1.8)' },
    { transform: 'translateX(-7px) scale(1)' }
];

const animation_mouseover_timing = {
    duration: 1500,
    iterations: 1,
}

bt1.addEventListener("mouseover", (e)=>{
    if (isMobile == true) {
        cursor.style.display = "none";
        return
    }
    cursor.style.transform = "translateX(-7px) scale(1.8)";
})*/