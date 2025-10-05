const getData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched"), 1000);
});

getData
  .then((result) => {
    console.log(result); // Output: Data fetched
    return "Processing data";
  })
  .then((result) => {
    console.log(result); // Output: Processing data
  })
  .catch((error) => console.error(error));