//This function displays the value

var firstNumber;
var secondNumber;
var operator;


function switchFunction(event){
    switch (event.key) {
        case value:
            
            break;
    
        default:
            break;
    }
}


function display(val){
    document.getElementById("result").value +=val
}

function myFunction(event){
    if(event.key =='0' ||event.key =='1' ||
        event.key =='2' ||event.key =='3' ||
        event.key =='4' ||event.key =='5' ||
        event.key =='6' ||event.key =='7' ||
        event.key =='8' ||event.key =='9')
    document.getElementById("result").value += event.key;

    else if(event.key == '+'){
        
    }

    else if(event.key =='-'){

    }

    else if(event.key == '/'){

    }

    else if(event.key == '*'){

    }

    else if(event.key == '^'){

    }

    else if(event.key == 'c'){

    }
    else{

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