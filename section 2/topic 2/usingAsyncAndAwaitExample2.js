// A simple function that returns a promise after a delay
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000); // Simulates a 2-second delay
  });
}

// Async function that uses await to pause until fetchData resolves
async function getData() {
  console.log("Fetching data...");
  
  // Waits for the promise from fetchData to resolve
  const result = await fetchData();
  
  console.log(result); // Logs the resolved value after 2 seconds
}

// Call the async function
getData();