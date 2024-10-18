function clearOutput() {
    const output = document.getElementById("output");
    if (output instanceof HTMLInputElement) { // Check if it's an input element
        output.value = ""; // Clear the input field
    }
}

function backspace() {
    const output = document.getElementById("output");
    if (output instanceof HTMLInputElement) { // Check if it's an input element
        output.value = output.value.slice(0, -1); // Remove the last character
    }
}

function appendToOutput(value) {
    const output = document.getElementById("output");
    if (output instanceof HTMLInputElement) { // Check if it's an input element
        output.value += value; // Append the clicked value
    }
}

function calculateResult() {
    const output = document.getElementById("output");
    if (output instanceof HTMLInputElement) { // Check if it's an input element
        try {
            output.value = eval(output.value.replace(/X/g, '*').replace(/%/g, '/100')); // Evaluate the expression
        } catch (e) {
            output.value = "Error"; // Handle errors
        }
    }
}
