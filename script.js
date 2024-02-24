const input = document.getElementById("input");
const output = document.getElementById("output");

function factorial(num){
    let result = 1;
    for(let i = 2; i <= num; i++){
        result *= i;
    }
    return result;
}

function calculate() {
    const inputValue = parseInt(input.value);
    if (!isNaN(inputValue) && inputValue >= 0) {
        const result = factorial(inputValue);
        output.value = result;
    } else {
        output.value = "Invalid input";
    }
}
