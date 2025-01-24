function plus() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    let answer;
    if (display2 !== "0") {
        answer = Number(display2) + Number(display1);
        document.getElementById('display2').value = answer;
    } else {
        document.getElementById('display2').value = display1;
    }

    document.getElementById('display1').value = "0";
    document.getElementById('operator').value = "+";
}

function minus() {
    const num = document.getElementById('display1').value;
    const numm = document.getElementById('display2').value;

    let answer;
    if (numm !== "0") {
        answer = Number(num) - Number(numm);
        document.getElementById('display2').value = answer;
    } else {
        document.getElementById('display2').value = num;
    }

    document.getElementById('display1').value = "0";
    document.getElementById('operator').value = "-";
}

function times() { 
    const num = document.getElementById('display1').value;
    const numm = document.getElementById('display2').value;

    let answer;
    if (numm !== "0") {
        answer = Number(numm) * Number(num);
        document.getElementById('display2').value = answer;
    } else {
        document.getElementById('display2').value = num;
    }

    document.getElementById('display1').value = "0";
    document.getElementById('operator').value = "*";
}

function divide() {
    const num = document.getElementById('display1').value;
    const numm = document.getElementById('display2').value;

    let answer;
    if (numm !== "0") {
        answer = Number(numm) / Number(num);
        document.getElementById('display2').value = answer;
    } else {
        document.getElementById('display2').value = num;
    }

    document.getElementById('display1').value = "0";
    document.getElementById('operator').value = "/";
}

function equal() {
    const num1 = document.getElementById('display1').value;
    const num2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    let answer = 0;

    if (operator === "+") {
        answer = Number(num2) + Number(num1);
    } else if (operator === "-") {
        answer = Number(num2) - Number(num1);
    } else if (operator === "*") {
        answer = Number(num2) * Number(num1);
    } else if (operator === "/") {
        answer = Number(num2) / Number(num1);
    }

    document.getElementById('display1').value = answer;
    document.getElementById('display2').value = "0";
    document.getElementById('operator').value = "";
}
