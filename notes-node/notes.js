console.log("Starting notes.js");


module.exports.addNote = () => {
	console.log("addNote called");
	return "new Note";
}

module.exports.add = (a, b) => {
	console.log("add called");
	return a+b;
}