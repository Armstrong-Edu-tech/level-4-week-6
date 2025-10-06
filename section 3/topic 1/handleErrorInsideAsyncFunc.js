async function fetchData() {
  try {
    let response = await fetch('https://invalid-url.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}
fetchData();