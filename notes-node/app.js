console.log("Starting app.js")

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");

console.log("Result: ", notes.add(9, -2));


//var user = os.userInfo();
//
//// fs.appendFile("greetings.txt", "Hello " + user.username + "!\n", function (err) {
//fs.appendFile("greetings.txt", `Hello ${user.username}! You are ${notes.age} years old.\n`, function (err) {
//    if (err) {
//        console.log("Unable to write to file");
//    }
//});
