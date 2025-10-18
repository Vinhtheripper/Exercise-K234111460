function findSolution() {

    const a = parseFloat(document.getElementById('coeffA').value);
    const b = parseFloat(document.getElementById('coeffB').value);
    const c = parseFloat(document.getElementById('coeffC').value);
    const resultSpan = document.getElementById('result');


    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultSpan.textContent = "Please enter valid numbers.";
        return;
    }

    if (a === 0) {
        if (b === 0) {
            resultSpan.textContent = c === 0 ? "Infinite solutions" : "No solution";
        } else {
            const x = -c / b;
            resultSpan.textContent = `Linear equation: x = ${x}`;
        }
        return;
    }

    const delta = (b * b) - (4 * a * c);

    let solution = '';

    if (delta > 0) {

        const x1 = (-b - Math.sqrt(delta)) / (2 * a);
        const x2 = (-b + Math.sqrt(delta)) / (2 * a);
        solution = `x1 = ${x1} ; x2 = ${x2}`;
    } else if (delta === 0) {

        const x = -b / (2 * a);
        solution = `One root: x = ${x}`;
    } else {
        solution = "No real solution";
    }

    resultSpan.textContent = solution;
}

function clearFields() {
    document.getElementById('coeffA').value = '';
    document.getElementById('coeffB').value = '';
    document.getElementById('coeffC').value = '';
    document.getElementById('result').textContent = '';
}