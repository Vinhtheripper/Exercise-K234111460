
function getInput() {
    return document.getElementById('inputData').value;
}

function showResult(text) {
    document.getElementById('resultData').value = text;
}


function enterData() {
    const data = prompt("Please enter your data:", "");
    if (data !== null) {
        document.getElementById('inputData').value = data;
    }
}


function toUpperCaseDisplay() {
    const text = getInput();
    showResult(text.toUpperCase());
}


function toLowerCaseDisplay() {
    const text = getInput();
    showResult(text.toLowerCase());
}


function countLowercase() {
    const text = getInput();
    const matches = text.match(/[a-z]/g);
    const count = matches ? matches.length : 0;
    showResult(`Total lowercase characters: ${count}`);
}


function countUppercase() {
    const text = getInput();
    const matches = text.match(/[A-Z]/g);
    const count = matches ? matches.length : 0;
    showResult(`Total uppercase characters: ${count}`);
}


function outputOneWordPerLine() {
    const text = getInput().trim();
    if (text === "") {
        showResult("");
        return;
    }
    const words = text.split(/\s+/);
    showResult(words.join('\n'));
}


function wordCount() {
    const text = getInput().trim();
    if (text === "") {
        showResult("Word count: 0");
        return;
    }
    const words = text.split(/\s+/);
    showResult(`Word count: ${words.length}`);
}


function printVowelsConsonants() {
    const text = getInput();
    const vowels = text.match(/[aeiou]/gi) || [];
    const consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
    const result = `Vowels: ${vowels.length}\nConsonants: ${consonants.length}`;
    showResult(result);
}


function goToW3C() {

    window.open('https://www.w3.org/', '_blank');
}
