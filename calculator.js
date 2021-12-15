let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        if(buttonText=='X'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='C'){
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=='='){
            screen.value=eval(screenValue);
        }
        else if((buttonText>='0' && buttonText<='9') || (buttonText=='+' || buttonText=='-' || buttonText=='/' || buttonText=='%')){
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else{
            screenValue=screenValue.slice(0, -1);
            screen.value=screenValue;
        }
    })
    
}