// Refactor to use async/await
async function runTasks() {
    try {
        const result1 = await calculateTask(2); // Wait for result of calculateTask
        const result2 = await addTask(result1); // Wait for result of addTask
        const result3 = await multiplyTask(result2); // Wait for result of multiplyTask
        console.log(`Final result: ${result3}`); // Output: Final result: 21
    } catch (error) {
        console.log("Error occurred:", error);
    }
}
// Execute the async function
runTasks();

// Functions returning Promises (unchanged)
function calculateTask(input) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = input * 2; // Simple task: multiply by 2
            resolve(result);
        }, 1000);
    });
}
function addTask(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newResult = result + 5; // Add 5 to the result
            resolve(newResult);
        }, 1000);
    });
}
function multiplyTask(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newResult = result * 3; // Multiply the result by 3
            resolve(newResult);
        }, 1000);
    });
}

