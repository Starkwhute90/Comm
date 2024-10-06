let memory = {};

function performOperation(operation) {
    const input = document.getElementById('inputField').value;
    const numbers = input.split(' ').map(Number);

    if (numbers.length !== 2 || numbers.some(isNaN)) {
        displayResult("Please provide two valid numbers.");
        return;
    }

    let result;

    switch (operation) {
        case 'add':
            result = numbers[0] + numbers[1];
            break;
        case 'subtract':
            result = numbers[0] - numbers[1];
            break;
        case 'multiply':
            result = numbers[0] * numbers[1];
            break;
        case 'divide':
            result = numbers[1] !== 0 ? (numbers[0] / numbers[1]) : "Error: Division by zero";
            break;
    }

    displayResult(result);
}

function displayResult(result) {
    document.getElementById('resultDisplay').innerText = `Result: ${result}`;
}

function storeValue() {
    const input = document.getElementById('inputField').value;
    const parts = input.split(' ');
    
    if (parts.length === 2) {
        const name = parts[0];
        const value = Number(parts[1]);
        
        if (!isNaN(value)) {
            memory[name] = value;
            displayResult(`Stored ${value} in memory as '${name}'.`);
        } else {
            displayResult("Please provide a valid number to store.");
        }
    } else {
        displayResult("Please provide a name and a value to store.");
    }
}

function retrieveValue() {
    const name = document.getElementById('inputField').value;
    const value = memory[name];

    if (value !== undefined) {
        displayResult(`Retrieved '${name}': ${value}`);
    } else {
        displayResult(`Error: Name '${name}' not found in memory.`);
    }
}

function clearMemory() {
    memory = {};
    displayResult("Memory cleared.");
}

function listMemory() {
    const memoryList = Object.entries(memory).map(([name, value]) => `${name}: ${value}`).join(', ') || "Memory is empty.";
    displayResult(`Memory: { ${memoryList} }`);
}
