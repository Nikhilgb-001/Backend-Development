const http = require('http');
const fs = require('fs');

// write file
fs.writeFile("hey.txt", "hey hello", (err) => {
    if (err) console.error(err);
    else console.log("success");
})

// append file
fs.appendFile("hey.txt", " How are you ", (err) => {
    if (err) console.error(err);
    else console.log("success");
})

// rename existing file 
fs.rename("hey.txt", "hello.txt", (err) => {
    if (err) console.error(err);
    else console.log("success");
})

// copy file to new folder
fs.copyFile("hello.txt", "./copyFiles/copy.text", (err) => {
    if (err) console.error(err);
    else console.log("success");
})

// delete file
fs.unlink("hello.txt", (err) => {
    if (err) console.error(err);
    else console.log("File removed...");
})

// removing a folder
fs.rm("./copyFiles", { recursive: true }, (err) => {
    if (err) console.error(err);
    else console.log("Folder removed...");
})

// create folder
fs.mkdir("./copyFile2", (err) => {
    if (err) console.error(err);
    else console.log("Folder created...");
})

// create server using nodejs
const server = http.createServer((req, res) => {
    res.end("hello world")
})

server.listen(3000)