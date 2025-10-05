// Simulate asynchronous tasks with nested callbacks
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
// Simulating callback hell with deeply nested callbacks
calculateTask(2, (result1) => {
    addTask(result1, (result2) => {
        multiplyTask(result2, (result3) => {
            console.log(`Final result: ${result3}`); // Output the final result
        });
    });
});
