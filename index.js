function settmax(){
    var myVar=document.querySelector(".headmenu");
    myVar.classList.add("headmenu-ax");
    document.querySelector(".xmark").style.visibility = "visible";
    document.querySelector(".bars").style.visibility = "hidden";
}
function settmin(){
    var myVar=document.querySelector(".headmenu");
    myVar.classList.remove("headmenu-ax");
    document.querySelector(".xmark").style.visibility = "hidden";
    document.querySelector(".bars").style.visibility = "visible";
}
