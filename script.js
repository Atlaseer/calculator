//This function displays the value

var firstNumber="";
var secondNumber="";
var operator=null;


function display(val){
    document.getElementById("result").value +=val
}


function myFunction(event){
    let key = event.key

    switch(true){
        case/[0-9]/.test(key):
            if(operator===null){
                firstNumber +=key;
                document.getElementById("result").value =firstNumber
            } else {
                secondNumber+=key;
                document.getElementById("result").value=secondNumber;
            }
            break;

        case['+', '-', '*', '/', '^']:
            operator=key;
            document.getElementById("result").value ="";
            break;
            
        }
    if(event.key =='0' ||event.key =='1' ||
        event.key =='2' ||event.key =='3' ||
        event.key =='4' ||event.key =='5' ||
        event.key =='6' ||event.key =='7' ||
        event.key =='8' ||event.key =='9'){
            if (operator == null){
                firstNumber += event.key;
                display(firstNumber);
                return
            }

            else{
                secondNumber += event.key;
                display(secondNumber);
                return
            }

            document.getElementById("result").value += event.key;

        }



    else if(event.key == 'c'){
        operator == 'c'
    }
    else if(event.key == '='){
        var result = 0;
        
        if(operator == '+'){
            result = (firstNumber+secondNumber)
            return result;
        }

        else if(operator == '-'){
            result = (firstNumber-secondNumber)
            return result;
        }

        else if(operator == '/'){
            result = (firstNumber/secondNumber)
            return result;
        }

        else if(operator == '*'){
            result = (firstNumber*secondNumber)
            return result;
        }

        else if(operator=='^'){
            result = (firstNumber^secondNumber)
            return result;
        }
    }
}

var cal = document.getElementById("calc");
cal.onkeyup = function (event) {
    if(event.keyCode===13){
        console.log("Enter");
        let x = document.getElementById("result").value
        console.log(x)
        solve();
    }
}





function solve(){
    let x = document.getElementById("result").value
    let y = math.evaluate(x)
    document.getElementById("result").value =y
}

function clear(){
    document.getElementById("result").value = ""
}