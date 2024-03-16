//Importing filesystem
const fs = require("fs");

/* fs.writeFile("hello.txt", "Hello from Node", (err) => {
    if (err) throw err;
    console.log("The file was added!");
}); 
 */
fs.readFile("hello.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});