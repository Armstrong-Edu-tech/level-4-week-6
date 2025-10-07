const fs = require('fs');

fs.unlink('unwanted.txt', function (err) {
  if (err) {
    console.log("ERROR: " + err.code + " (" + err.message + ")");
    return;
  }
  console.log("File deleted successfully.");
});

