//File system
const fs = require("fs");
const path = require("path");

//Folder create
// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Folder created");
// });

//File Create
const filepath = path.join(__dirname, "test", "text.txt");
// fs.writeFile(filepath, "Hello NodeJS", (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log("File Created");

//   fs.appendFile(filepath, "\nHello again", (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("File Created");
//   });
// });

//File Read

fs.readFile(filepath, "utf-8", (err, content) => {
  if (err) {
    throw err;
  }
  console.log(content);
  //   const data = Buffer.from(content);
  //   console.log("Content: ", data.toString());
});
