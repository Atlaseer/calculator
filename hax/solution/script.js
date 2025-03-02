// Selecting the display input field
let display = document.getElementById("display");

// State variables for exponentiation handling
let baseValue = null;
let exponentMode = false;

// Append characters to the display
function appendToDisplay(value) {
    display.value += value ?? ""; // Nullish coalescing to prevent invalid input
}

// Clear the display
function clearDisplay() {
    display.value = "";
    baseValue = null;
    exponentMode = false;
}

// Compute and display result
function calculateResult() {
    try {
        if (exponentMode) {
            // If exponent mode is active, calculate base^exponent
            let exponent = parseFloat(display.value) ?? 1; // Default to 1 if invalid
            let powerFunction = exponentiation(exponent); // Create closure function
            display.value = powerFunction(baseValue); // Compute base^exponent
            exponentMode = false;
            baseValue = null;
            return;
        }

        if (!display.value.trim()) {
            throw new Error("No input provided!"); // Guard clause: Prevents empty evaluations
        }

        if (display.value.includes("/0")) {
            throw new Error("Cannot divide by zero!"); // Guard clause: Prevents division by zero
        }

        let result = eval(display.value) ?? "Error"; // Nullish coalescing for safety
        display.value = result;
    } catch (error) {
        display.value = error.message;
    }
}

// Closure-based exponentiation function
const exponentiation = (exp) => {
    return (base) => {
        return base ** exp;
    };
};

// Power function using closure (Handles exponentiation mode)
function usePowerFunction() {
    if (display.value.trim() === "") return; // Prevents invalid exponentiation

    baseValue = parseFloat(display.value) ?? 0; // Store the base value
    exponentMode = true; // Activate exponent mode
    display.value = ""; // Clear display for exponent input
}
