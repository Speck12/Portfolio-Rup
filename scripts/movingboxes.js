
var elem = document.getElementsByClassName("dragbox");

var length = elem.length;

console.log(elem);

var Drag = function(e){
    let eventtarget = e.target || e.srcElement;

    if (eventtarget.tagName != "SPAN" ) {return}

    console.log(eventtarget);
}

for (var i = 1; i < elem.length; i++) {
    console.log(elem);
    
    elem[i].addEventListener("mousedown", Drag, false)
    elem[i].addEventListener("mousemove", Drag, false)

}