var input=document.getElementById('input');
var result=document.getElementById('result');

inputType=document.getElementById('inputType');
resultType=document.getElementById('resultType');

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue=inputType.value;
resultTypeValue=resultType.value;

function myResult(){
    //alert(resultTypeValue);
    inputTypeValue=inputType.value;
    resultTypeValue=resultType.value;

    if(inputTypeValue === "meter" && resultTypeValue==="meter"){
        result.value = input.value;
    }
    else if(inputTypeValue === "meter" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) *0.001;
    }
    else if(inputTypeValue === "meter" && resultTypeValue==="centimeter"){
        result.value = Number(input.value) *100;
    }
    else if(inputTypeValue === "meter" && resultTypeValue==="feet"){
        result.value = Number(input.value) *3.2808399;
    }
    else if(inputTypeValue === "meter" && resultTypeValue==="inch"){
        result.value = Number(input.value) *39.3700787;
    }
    else if(inputTypeValue === "meter" && resultTypeValue==="miles"){
        result.value = Number(input.value) *0.000621371192;
    }

    else if(inputTypeValue === "kilometer" && resultTypeValue==="meter"){
        result.value = input.value*1000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue==="kilometer"){
        result.value = Number(input.value);
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue==="centimeter"){
        result.value = Number(input.value) *10000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue==="feet"){
        result.value = Number(input.value) *3 280.8399;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue==="inch"){
        result.value = Number(input.value) *39 370.0787;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue==="miles"){
        result.value = Number(input.value) *0.621371192;
    }

}
