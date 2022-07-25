var loadingbar1 = document.getElementById("loadingbar1");
var skillblock1 = document.getElementById("skillblock1");

var loadingbar2 = document.getElementById("loadingbar2");
var skillblock2 = document.getElementById("skillblock2");

var loadingbar3 = document.getElementById("loadingbar3");
var skillblock3 = document.getElementById("skillblock3");

var loadingbar4 = document.getElementById("loadingbar4");
var skillblock4 = document.getElementById("skillblock4");

var loadingbar5 = document.getElementById("loadingbar5");
var skillblock5 = document.getElementById("skillblock5");


var timer = 30;
var timeout1 = false;
var timeout2 = false;
var timeout3 = false;
var timeout4 = false;
var timeout5 = false;

var Reset1 = function() {
    loadingbar1.style.width = "0px";
    timeout1 = false;
}

var Reset2 = function() {
    loadingbar2.style.width = "0px";
    timeout2 = false;
}

var Reset3 = function() {
    loadingbar3.style.width = "0px";
    timeout3 = false;
}

var Reset4 = function() {
    loadingbar4.style.width = "0px";
    timeout4 = false;
}

var Reset5 = function() {
    loadingbar5.style.width = "0px";
    timeout5 = false;
}


skillblock1.addEventListener("click", (e)=> {
    loadingbar1.style.width = "190px";

    if (timeout1 == false) { 
        setTimeout(Reset1, 1000 * timer);
        timeout1 = true;
    } else if (timeout1 == true) {
        return
    }
});

skillblock2.addEventListener("click", (e)=> {
    loadingbar2.style.width = "60px";

    if (timeout2 == false) { 
        setTimeout(Reset2, 1000 * timer);
        timeout2 = true;
    } else if (timeout2 == true) {
        return
    }
});

skillblock3.addEventListener("click", (e)=> {
    loadingbar3.style.width = "120px";

    if (timeout3 == false) { 
        setTimeout(Reset3, 1000 * timer);
        timeout3 = true;
    } else if (timeout3 == true) {
        return
    }
});

skillblock4.addEventListener("click", (e)=> {
    loadingbar4.style.width = "100px";

    if (timeout4 == false) { 
        setTimeout(Reset4, 1000 * timer);
        timeout4 = true;
    } else if (timeout4 == true) {
        return
    }
});

skillblock5.addEventListener("click", (e)=> {
    loadingbar5.style.width = "160px";

    if (timeout5 == false) { 
        setTimeout(Reset5, 1000 * timer);
        timeout5 = true;
    } else if (timeout5 == true) {
        return
    }
});

// Scale boxes by resolution 

/*
function ScreenSizing() {
    var box_loader = document.getElementById("box_loader");

    var scw = window.screen.width;
    var sizing = .0004 * scw;

    if (window.screen.width > 1024) {
        console.log(sizing);
        box_loader.style.setProperty("--ressizing", sizing);
    }
}

window.addEventListener("resize", (e)=> {
    ScreenSizing();
})

ScreenSizing(); */
