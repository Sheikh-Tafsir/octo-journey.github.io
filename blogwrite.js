document.querySelector(".blogReadGoBut").addEventListener("click",()=>{
    x=document.querySelector(".blogInOut");
    x.style.marginLeft="-100vw"; 
});

document.querySelector(".blogWriteGoBut").addEventListener("click",()=>{
    x=document.querySelector(".blogInOut");
    x.style.marginLeft="0"; 
    document.body.scrollTop = document.documentElement.scrollTop = 0;
});

document.querySelector('.dataInputbase').addEventListener('wheel', preventScroll, {passive: false});

function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}