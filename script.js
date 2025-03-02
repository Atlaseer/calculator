//This function displays the value
let display = document.getElementById("display");
let firstNumber=null;
let exponentMode=false;

function appendToDisplay(value){
    display.value +=value ?? "";
}

function clearDisplay(){
    display.value = "";
    firstNumber = null;
    exponentMode = false;
}


function calculateResult(){
    try{
        if(exponentMode){
            let exponent = parseFloat(display.value) ?? 1;
            let powerFunction = exponentiation(exponent);
            display.value = powerFunction(firstNumber);
            exponentMode = false;
            firstNumber = null;
            return;
        }

        if(!display.value.trim){
            throw new Error("No input provided!")
        }

        if(display.value.includes("/0")){
            throw new Error("Cannot divide by zero")            
        }

        let result = (eval(display.value)) ?? "Error"
        display.value = result;

    } catch(error){
        display.value = error.message;
    }

}

const exponentiation = (exp) => {
    return(base)=> {
        return base**exp;
    }
}

function solve(){
    let x = document.getElementById("result").value
    let y = math.evaluate(x)
    document.getElementById("result").value =y
}