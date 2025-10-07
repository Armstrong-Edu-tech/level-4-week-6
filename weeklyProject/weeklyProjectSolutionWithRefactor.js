
const fs = require('fs');  // Import the fs module to simulate file reading
const tasksFile = './tasks.json'; // Path to the tasks JSON file


// Refactored version with Promises
function fetchTasks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.readFile(tasksFile, 'utf8', (err, data) => {
        if (err) {
          reject("Error reading tasks file.");  // Reject the Promise on error
        } else {
          resolve(JSON.parse(data));  // Resolve the Promise with parsed data
        }
      });
    }, 2000);  // Simulate a 2-second delay
  });
}
// Refactored version with Promises
function processTask(task) {
  return new Promise((resolve) => {
    setTimeout(() => {
      task.status = "completed";  // Update task status to "completed"
      console.log(`${task.name} is completed.`);
      resolve(task);  // Resolve the Promise after task is completed
    }, 1000);  // Simulate processing time
  });
}
// Refactored version with async/await
async function processTasks(tasks) {
  for (let task of tasks) {
    await processTask(task);  // Wait for each task to be processed
  }
}
// Handle errors during task fetching and processing using async/await
async function executeTaskManager() {
  try {
    const tasks = await fetchTasks();  // Fetch tasks asynchronously
    await processTasks(tasks);         // Process tasks asynchronously
    console.log("All tasks are completed.");  // Output when all tasks are completed
  } catch (error) {
    console.error("Error:", error);     // Log any errors that occur
  }
}
executeTaskManager();  // Run the task manager