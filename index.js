let color=0;
let mode=localStorage.getItem("mode");
//alert(mode);
if(mode!="dark"){
    
    document.querySelector("body").classList.add("body-light");
        document.querySelector(".header").classList.add("header-light");
        document.querySelector(".headmenu").classList.add("headmenu-light");
        document.querySelector(".banner").classList.add("banner-light");
        document.querySelector(".motto").classList.add("motto-light");
        //document.querySelector(".place-bar").classList.add("place-bar-light");
        document.querySelector(".srvc").classList.add("srvc-light");
        document.querySelector(".ab").classList.add("ab-light");
        document.querySelector(".ot").classList.add("ot-light");
        document.querySelector(".con").classList.add("con-light");
        document.querySelector(".footer").classList.add("footer-light");
        document.querySelector('.footer').getElementsByTagName('h1')[0].style.color="black";
        document.querySelector('.dataInputForm').classList.add("dataInputForm-light");
        /*var blogpost=document.querySelectorAll(".blogpost");
        for(let i=0;i<blogpost.length;i++) {
            blogpost[i].classList.add("blogpost-light");
        }*/


        if (window.innerWidth>=0 && window.innerWidth<992){
            
            ainside = document.querySelector('.headmenu').getElementsByTagName('i');
            for(i=0;i<ainside.length;i++) {
                ainside[i].style.color="black";
            }
        }
        document.querySelector(".dark").style.visibility = "visible";
        document.querySelector(".light").style.visibility = "hidden";
}

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
//document.querySelectorAll(".modebut").addEventListener("click", ()=>{
function settmode(){
    /*color++;
    color%=2;*/
    let mode=localStorage.getItem("mode");
    if(mode=="dark"){
        localStorage.setItem("mode","light");
        document.querySelector("body").classList.add("body-light");
        document.querySelector(".header").classList.add("header-light");
        document.querySelector(".headmenu").classList.add("headmenu-light");
        document.querySelector(".banner").classList.add("banner-light");
        document.querySelector(".motto").classList.add("motto-light");
        //document.querySelector(".place-bar").classList.add("place-bar-light");
        document.querySelector(".srvc").classList.add("srvc-light");
        document.querySelector(".ab").classList.add("ab-light");
        document.querySelector(".ot").classList.add("ot-light");
        document.querySelector(".con").classList.add("con-light");
        document.querySelector(".footer").classList.add("footer-light");
        document.querySelector('.footer').getElementsByTagName('h1')[0].style.color="black";
        document.querySelector('.dataInputForm').classList.add("dataInputForm-light");
    
        if (window.innerWidth>=0 && window.innerWidth<992){
            var ainside = document.querySelector('.headmenu').getElementsByTagName('a');
            for(i=0;i<ainside.length;i++) {
                ainside[i].style.color="black";
            }
            ainside = document.querySelector('.headmenu').getElementsByTagName('i');
            for(i=0;i<ainside.length;i++) {
                ainside[i].style.color="black";
            }
        }
        
        document.querySelector(".dark").style.visibility = "visible";
        document.querySelector(".light").style.visibility = "hidden";
                
        /*var blogpost=document.querySelectorAll(".blogpost");
        for(i=0;i<blogpost.length;i++) {
            blogpost[i].classList.add("blogpost-light");
        }*/
    }
    else{
        localStorage.setItem("mode","dark");
        document.querySelector("body").classList.remove("body-light");
        document.querySelector(".header").classList.remove("header-light");
        document.querySelector(".headmenu").classList.remove("headmenu-light");
        document.querySelector(".banner").classList.remove("banner-light");
        document.querySelector(".motto").classList.remove("motto-light");
        //document.querySelector(".place-bar").classList.remove("place-bar-light");
        document.querySelector(".srvc").classList.remove("srvc-light");
        document.querySelector(".ab").classList.remove("ab-light");
        document.querySelector(".ot").classList.remove("ot-light");
        document.querySelector(".con").classList.remove("con-light");
        document.querySelector(".footer").classList.remove("footer-light");
        document.querySelector('.footer').getElementsByTagName('h1')[0].style.color="white";
        document.querySelector('.dataInputForm').classList.remove("dataInputForm-light");
    
        if (window.innerWidth>=0 && window.innerWidth<992){
            var ainside = document.querySelector('.headmenu').getElementsByTagName('a');
            for(i=0;i<ainside.length;i++) {
                ainside[i].style.color="white";
            }
            ainside = document.querySelector('.headmenu').getElementsByTagName('i');
            for(i=0;i<ainside.length;i++) {
                ainside[i].style.color="white";
            }
        }
    
        document.querySelector(".dark").style.visibility = "hidden";
        document.querySelector(".light").style.visibility = "visible";
                
        /*var blogpost=document.querySelectorAll(".blogpost");
        for(i=0;i<blogpost.length;i++) {
            blogpost[i].classList.remove("blogpost-light");
        }*/

    }
}



