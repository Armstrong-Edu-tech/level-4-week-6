// Incorrect:
// async function fetchData() {
//   let response = await fetch('https://nonexistent-url.com');
//   let data = await response.json();
//   console.log(data);
// }
// Correct:
async function fetchData() {
  try {
    let response = await fetch('https://nonexistent-url.com');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error occurred:', error.message);
  }
}
fetchData();