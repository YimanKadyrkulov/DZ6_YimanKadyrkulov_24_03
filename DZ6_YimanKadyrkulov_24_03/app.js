
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const divide = document.getElementById("divide");
const equals = document.getElementById("equals");
const result = document.getElementById("result");

add.onclick = function() {
    const val1 = parseFloat(num1.value);
    const val2 = parseFloat(num2.value);
    result.textContent = val1 + val2;
};

subtract.onclick = function() {
    const val1 = parseFloat(num1.value);
    const val2 = parseFloat(num2.value);
    result.textContent = val1 - val2;
};

divide.onclick = function() {
    const val1 = parseFloat(num1.value);
    const val2 = parseFloat(num2.value);
    result.textContent = val1 / val2;
};

equals.onclick = function() {
    const val1 = parseFloat(num1.value);
    const val2 = parseFloat(num2.value);
    const operator = document.querySelector('input[name="operator"]:checked').value;

    if (operator === '+') {
        result.textContent = val1 + val2;
    } else if (operator === '-') {
        result.textContent = val1 - val2;
    } else if (operator === '/') {
        result.textContent = val1 / val2;
    }
};
