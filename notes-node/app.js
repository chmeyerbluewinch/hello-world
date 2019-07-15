console.log("Starting app.js")

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");
const _ = require("lodash");

console.log("Result: ", notes.add(9, -2));

console.log(_.isString(true));
console.log(_.isString("Hallo"));

var filteredArray =_.uniq(["Christoph", 1, 2, "Christoph", 1, 3, 4, 5]);
console.log(filteredArray);


//var user = os.userInfo();
//
//// fs.appendFile("greetings.txt", "Hello " + user.username + "!\n", function (err) {
//fs.appendFile("greetings.txt", `Hello ${user.username}! You are ${notes.age} years old.\n`, function (err) {
//    if (err) {
//        console.log("Unable to write to file");
//    }
//});
