// Example of a synchronous task (e.g., simple math)
const result1 = 5 + 3;
console.log("Result of math:", result1); // Output: Result of math: 8

// Example of an asynchronous task (e.g., API call using fetch)
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("Fetched Data:", data); 
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

console.log("This message runs immediately after the synchronous task");