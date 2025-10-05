function fetchData(callback) {
    // Simulate fetching data
    setTimeout(() => {
        const data = { name: "John Doe" };
        callback(data);
    }, 1000);
}
function processData(data, callback) {
    // Process data
    const processedData = data.name.toUpperCase();
    callback(processedData);
}
function onFetchData(data) {
    processData(data, onProcessData);
}
function onProcessData(result) {
    console.log(result); // Output: JOHN DOE
}
fetchData(onFetchData);
