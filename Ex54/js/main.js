function getNumbers() {
    const a = parseFloat(document.getElementById('numA').value);
    const b = parseFloat(document.getElementById('numB').value);
    const c = parseFloat(document.getElementById('numC').value);
    return { a, b, c };
}

function displayResult(value) {
    if (isNaN(value)) {
        document.getElementById('result').value = 'Invalid Input';
    } else {
        document.getElementById('result').value = value;
    }
}

function calculateMax() {
    const { a, b, c } = getNumbers();
    const maxResult = Math.max(a, b, c);
    displayResult(maxResult);
}

function calculateMin() {
    const { a, b, c } = getNumbers();
    const minResult = Math.min(a, b, c);
    displayResult(minResult);
}


function calculateSin() {
    const { a } = getNumbers();
    const sinResult = Math.sin(a);
    displayResult(sinResult);
}


function calculateCos() {
    const { a } = getNumbers();
    const cosResult = Math.cos(a);
    displayResult(cosResult);
}


function calculatePower() {
    const { a, b } = getNumbers();
    const powerResult = Math.pow(a, b);
    displayResult(powerResult);
}
