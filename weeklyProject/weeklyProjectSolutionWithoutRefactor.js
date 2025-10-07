
const fs = require('fs');  // Import the fs module to simulate file reading
const tasksFile = './tasks.json'; // Path to the tasks JSON file

// Simulate reading tasks asynchronously
function fetchTasks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.readFile(tasksFile, 'utf8', (err, data) => {
        if (err) {
          reject("Error reading tasks file.");
        } else {
          resolve(JSON.parse(data));  // Convert JSON string to a JavaScript object
        }
      });
    }, 2000);  // Simulate a 2-second delay
  });
}

// Simulate processing each task asynchronously
function processTask(task) {
  return new Promise((resolve) => {
    setTimeout(() => {
      task.status = "completed";  // Update task status to "completed"
      console.log(`${task.name} is completed.`);
      resolve(task);
    }, 1000);  // Simulate processing time
  });
}
// Process all tasks
async function processTasks(tasks) {
  for (let task of tasks) {
    await processTask(task);  // Wait for each task to be processed
  }
}
// Handle errors during task fetching and processing
async function executeTaskManager() {
  try {
    const tasks = await fetchTasks();  // Fetch tasks asynchronously
    await processTasks(tasks);
        console.log("All tasks are completed.");  // Output when all tasks are completed         // Process tasks asynchronously
  } catch (error) {
    console.error("Error:", error);     // Log any errors that occur
  }
}
executeTaskManager();  // Run the task manager
