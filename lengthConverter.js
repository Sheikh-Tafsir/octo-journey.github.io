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
    inputTypeValue=inputType.value;
    resultTypeValue=resultType.value;

    /*result.value = input.value;*/
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
        result.value = Number(input.value)*10000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue==="feet"){
        result.value = Number(input.value)*3280.8399;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue==="inch"){
        result.value = Number(input.value)*39.3700787*1000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue==="miles"){
        result.value = Number(input.value)*0.000621371192*1000;
    }

    else if(inputTypeValue === "centimeter" && resultTypeValue==="meter"){
        result.value = Number(input.value)*0.01;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) *0.00001;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue==="centimeter"){
        result.value = input.value;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue==="feet"){
        result.value = Number(input.value) *0.032808399;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue==="inch"){
        result.value = Number(input.value) *0.393700787;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue==="miles"){
        result.value = Number(input.value) *0.00000621371192;
    }

    else if(inputTypeValue === "inch" && resultTypeValue==="meter"){
        result.value = Number(input.value)*0.0254;
    }
    else if(inputTypeValue === "inch" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) *0.0000254;
    }
    else if(inputTypeValue === "inch" && resultTypeValue==="centimeter"){
        result.value = Number(input.value)*2.54;
    }
    else if(inputTypeValue === "inch" && resultTypeValue==="feet"){
        result.value = Number(input.value) *0.0833333333;
    }
    else if(inputTypeValue === "inch" && resultTypeValue==="inch"){
        result.value = input.value;
    }
    else if(inputTypeValue === "inch" && resultTypeValue==="miles"){
        result.value = Number(input.value) *0.000157828283;
    }

    else if(inputTypeValue === "feet" && resultTypeValue==="meter"){
        result.value = Number(input.value)*0.3048;
    }
    else if(inputTypeValue === "feet" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) *0.0003048;
    }
    else if(inputTypeValue === "feet" && resultTypeValue==="centimeter"){
        result.value = Number(input.value)*30.48;
    }
    else if(inputTypeValue === "feet" && resultTypeValue==="feet"){
        result.value = input.value;
    }
    else if(inputTypeValue === "feet" && resultTypeValue==="inch"){
        result.value = Number(input.value)*12;
    }
    else if(inputTypeValue === "feet" && resultTypeValue==="miles"){
        result.value = Number(input.value) *0.000189393939;
    }

    else if(inputTypeValue === "miles" && resultTypeValue==="meter"){
        result.value = Number(input.value)*1609.344;
    }
    else if(inputTypeValue === "miles" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) *1.609344;
    }
    else if(inputTypeValue === "miles" && resultTypeValue==="centimeter"){
        result.value = Number(input.value)*160934.4;
    }
    else if(inputTypeValue === "miles" && resultTypeValue==="feet"){
        result.value = Number(input.value)*5280;
    }
    else if(inputTypeValue === "miles" && resultTypeValue==="inch"){
        result.value = Number(input.value)*5280*12;
    }
    else if(inputTypeValue === "miles" && resultTypeValue==="miles"){
        result.value = input.value;
    }



}
