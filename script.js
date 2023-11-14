const numbers = document.querySelectorAll(".number");
const ops = document.querySelectorAll(".op");
const result = document.getElementById("result");
const equ = document.getElementById("equ");
const clear = document.getElementById("clear");
const comma = document.getElementById("comma");
let firstValue = 0;
let secondValue = "";
let isFirstInput = true;
let opValue = "";
let resultValue = "";
let commaExist = false;

document.addEventListener("DOMContentLoaded", function() {
    numbers.forEach(e =>{
        e.addEventListener('click', () => {
            if(isFirstInput){
                if(firstValue != 0){
                    result.style.fontSize = "100px";
                }
                result.innerHTML = e.value;
                if(e.value != 0){
                    isFirstInput = false;
                }
                checkLength();
            } else {
                result.innerHTML += e.value;
                checkLength();
            }
            if(opValue == ""){
                firstValue = parseFloat(result.innerHTML);
            } else {
                secondValue = parseFloat(result.innerHTML);
            }
        });
        
    });
    function getOp () {
        ops.forEach(e => {
            e.addEventListener('click', () => {
                if (e.value === "+/-"){
                    firstValue = -firstValue;
                    result.innerHTML = firstValue;
                    checkLength();
                } else if (e.value === "%") {
                    firstValue /= 100;
                    result.innerHTML = firstValue;
                    checkLength();
                } else {
                    isFirstInput = true;
                    opValue = e.value;
                }
                
    
            });
        });
    }

    getOp();
    
    equ.addEventListener('click', () => {
        if (opValue === "+"){
            resultValue = firstValue + secondValue;
        } else if (opValue === "-"){
            resultValue = firstValue - secondValue;
        } else if (opValue === "x"){
            resultValue = firstValue * secondValue;
        } else if (opValue === "/"){
            resultValue = firstValue / secondValue;
        } else if (opValue === ""){
            if (firstValue === ""){
                firstValue = 0;
            }
            resultValue = firstValue;
        }
        firstValue = resultValue;
        secondValue = "";
        result.innerHTML = resultValue;
        opValue = "";
        checkLength();
    });

    clear.addEventListener('click', () => {
        result.style.fontSize = "100px";
        firstValue = 0;
        secondValue = "";
        isFirstInput = true;
        opValue = "";
        result.innerHTML = 0;
        commaExist = false;
        checkLength();
    });

    comma.addEventListener('click', () => {
        if (!commaExist){
            result.innerHTML += comma.value;
            isFirstInput = false;
            commaExist = true;
            checkLength();
        }
    });
    
    function checkLength(){
        if(result.innerHTML.length > 6){
            result.style.fontSize = "50px"
        }
        if(result.innerHTML.length > 12){
            result.innerHTML = parseFloat(result.innerHTML).toExponential(4);
        }
    }
});
