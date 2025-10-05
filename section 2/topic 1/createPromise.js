const myPromise = new Promise((resolve, reject) => {
  let success = true; // Simulate a condition
  if (success) {
    resolve("Task completed successfully!");
  } else {
    reject("Something went wrong!");
  }
});
myPromise.then((result) => {
  console.log(result); // Output: Task completed successfully!
});
myPromise.catch((error) => {
  console.log(error); // Output: Something went wrong!
});
  myPromise.finally(() => console.log("Task completed")); // Always runs