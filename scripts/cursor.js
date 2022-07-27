const cursor = document.getElementById("cursor");
const isMobile = navigator.userAgentData.mobile;

document.addEventListener("mousemove", (e)=>{
    if (isMobile == true) {return}
    cursor.setAttribute("style","top: "+(e.pageY - window.scrollY - 7)+"px; left: "+(e.pageX)+"px");
})