// Simulate asynchronous tasks with modularized code
function calculateTask(input, callback) {
    setTimeout(() => {
        const result = input * 2; // Simple task: multiply by 2
        callback(result);
    }, 1000);
}
function addTask(result, callback) {
    setTimeout(() => {
        const newResult = result + 5; // Add 5 to the result
        callback(newResult);
    }, 1000);
}
function multiplyTask(result, callback) {
    setTimeout(() => {
        const newResult = result * 3; // Multiply the result by 3
        callback(newResult);
    }, 1000);
}
// Modularized code with named functions to handle callbacks
function onCalculate(result1) {
    addTask(result1, onAdd);
}
function onAdd(result2) {
    multiplyTask(result2, onMultiply);
}
function onMultiply(result3) {
    console.log(`Final result: ${result3}`); // Output the final result
}
// Start the process
calculateTask(2, onCalculate);




