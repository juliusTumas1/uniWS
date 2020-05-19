const _ = require("lodash");
const extend = require("extend");

//Create initial data elements
const data = {
	1: { first_name: "Julius", balance: 123, items: [] },
	2: { first_name: "Tomas", balance: 555, items: [] },
	3: { first_name: "Petras", balance: 323, items: [] },
	4: { first_name: "Tester", balance: 1561, items: [] }
};

//Validate user
function userPropExistValidator(user) {
	if (!user.first_name) throw new Error("first_name argument is missing!");
	if (!user.balance) throw new Error("balance argument is missing!");
}
function userPropTypeValidator(user) {
	if (user.first_name && !_.isString(user.first_name)) throw new Error("Argument first_name is missing or not string!");
	if (user.balance && !_.isNumber(user.balance)) throw new Error("Balance is missing or not an integer!");
}

//Create new user
function set(key, val) {
	if (!key) {
		keys = _.orderBy(Object.keys(data), "asc");
		key = Number(keys[keys.length - 1]) + 1;
	}

	if (data[key]) throw new Error("User already exists!");
	data[key] = val;
	return key;
}

//Get single user depending on id
function get(key) {
	return data[key];
}

//Get all users
function getAll() {
	return data;
}

//Update user data
function update(key, newInfo) {
	//Check if user exists
	if (!data[key]) throw new Error("User does not exist!");
	//load current user data
	const user = data[key];
	console.log("update()");
	//Create temp array
	const objArrayElements = {};
	
	//Declare a iterkey local to block. Serves as i in for loop
	for (let iterKey in newInfo) {
		console.log("key: " + iterKey);
		//Load new info
		const newInfoProp = newInfo[iterKey];
		//Load old info
		const oldInfoProp = user[iterKey];
		console.log("oldinfoprop");
		console.dir(oldInfoProp);
		//merge both objects and check if its of array type
		if (_.isArray(newInfoProp)) objArrayElements[iterKey] = [...newInfo[iterKey], ...oldInfoProp];
	}

	console.log("obj array elements");
	console.dir(objArrayElements);
	//Merge new data with user data
	const newUser = { ...data[key], ...newInfo, ...objArrayElements };
	//update user data
	data[key] = newUser;
	return newUser;
}
//Delete user 
function del(key) {
	if (!data[key]) throw new Error("User does not exist!");
	delete data[key];
}

module.exports = {
	get,
	set,
	getAll,
	update,
	del,
	userPropExistValidator,
	userPropTypeValidator
};
