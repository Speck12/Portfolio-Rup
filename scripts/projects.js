// project-boxes

// all elements with class "p"
var elem = document.getElementsByClassName("p");

// length of the element array
var length = elem.length;

// console.log(elem.length);

// open imageviewer
var ImgViewer = function(e) {

    // the clicked target
    let eventtarget = e.target || e.srcElement;

    // disabling imageviewer for devices with a width under 1000px
    if (window.screen.width <= 1000) {return}
    
    if (eventtarget.tagName != "DIV" ) {return}

    // prevention to set a hidden target in imageviewer
    eventtarget.classList.remove("hidden");

    // remove from imageviewer, if element contains its class
    if (eventtarget.classList.contains("imgviewer")) {

        eventtarget.classList.remove("imgviewer");
        eventtarget.classList.add("show");
    
    // target isn't in imageviewer, so add it to it! (+make it visible)
    } else if (!eventtarget.classList.contains("imgviewer")) {

        eventtarget.classList.add("imgviewer");
        eventtarget.classList.remove("show");

    }
}

var BlendOut = function(e) {

    // the clicked target
    let eventtarget = e.target || e.srcElement;

    // disabling blendout for devices with a width under 1000px
    if (window.screen.width <= 1000) {return}

    console.log(window.screen.width);

    if (eventtarget.tagName != "DIV" ) {return}

    // Hide and show the images on click
    for (var i = 1; i < length; i++) {

        if (elem[i].classList.contains("hidden")) {

            elem[i].classList.remove("hidden");
            elem[i].classList.add("show");

        } else if (elem[i].classList.contains("show")) {

            elem[i].classList.add("hidden");
            elem[i].classList.remove("show");

        }
    }
}

// adding eventlistener for every element with class = "p"
for (var i = 1; i < elem.length; i++) {

    elem[i].addEventListener("click", BlendOut, false);
    elem[i].addEventListener("click", ImgViewer, false);

}