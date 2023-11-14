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

document.addEventListener("DOMContentLoaded", function() {
    numbers.forEach(e =>{
        e.addEventListener('click', () => {
            if(isFirstInput){
                result.innerHTML = e.value;
                isFirstInput = false
            } else {
                result.innerHTML += e.value;
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
                } else if (e.value === "%") {
                    firstValue /= 100;
                    result.innerHTML = firstValue;
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
    });

    clear.addEventListener('click', () => {
        firstValue = 0;
        secondValue = "";
        isFirstInput = true;
        opValue = "";
        result.innerHTML = 0;
    });

    comma.addEventListener('click', () => {
        result.innerHTML += comma.value;
        isFirstInput = false
    });
    
});