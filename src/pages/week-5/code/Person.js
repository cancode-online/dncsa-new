// define a function to hold data for a Person
function Person(name, ghID, classOf) {
	this.name = name;
	this.ghID = ghID;
	this.classOf = classOf;
	this.role = '';
}

// define a setter for role in Person data
Person.prototype.setRole = function (role) {
	this.role = role;
};

// define a JSON conversion "method" associated with Person
Person.prototype.toJSON = function () {
	const obj = { name: this.name, ghID: this.ghID, classOf: this.classOf, role: this.role };
	const json = JSON.stringify(obj); // json/string is useful when passing data on internet
	return json;
};

// make a new Person and assign to variable teacher
var teacher = new Person('Mr M', 'jm1021', 1977); // object type is easy to work with in JavaScript
logItType(teacher); // before role
logItType(teacher.toJSON()); // ok to do this even though role is not yet defined

// output of Object and JSON/string associated with Teacher
teacher.setRole('Teacher'); // set the role
logItType(teacher);
logItType(teacher.toJSON());
