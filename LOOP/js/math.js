function sum() {
    const num= document.getElementById('number').value;

    const display= document.getElementById('display');

    let answer = "";
    let sum = 0;
    for(let a=1; a <=num; a++) {
        answer += a + "<br/>";
        sum += a;

}
    answer += "The sum is" +sum;
    display.innerHTML = answer;
}
function factorial() {
    let number= document.getElementById('number').value;
    const display= document.getElementById('display');
    let answer = '';
    let product = number;
    let num = number;
    while (num > 1) {
        answer += num + "<br/>";
        product *= (num - 1);
        num--;

}
    answer += num + "<br/>"
    answer += "The factorial of" + number + "is" + product;
    display.innerHTML = answer;
}
function odd() {
    const num= document.getElementById('number').value;
    const display= document.getElementById('display');
    
    let answer = '';
    for (let a = 1; a <= num; a ++){
        if (a % 2 !== 0)
        answer += a + "<br/>"
    }
    display.innerHTML = answer;
}
function even() {
    const num = document.getElementById('number').value;
    const display = document.getElementById('display');
    
    let answer = '';
    for (let a = 1; a <= num; a ++) {
        if (a % 2 === 0)
        answer += a + "<br/>";
    }

    display.innerHTML = answer;
}
