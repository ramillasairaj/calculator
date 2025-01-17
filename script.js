function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function backspace() {
    let display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch {
        display.innerText = 'Error';
    }
}
