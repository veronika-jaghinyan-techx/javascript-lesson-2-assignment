/*------------------------------------------ Part A: JavaScript Utilities Library (Functions) ------------------------------------------*/

// ---------- Get current year for footer ----------

function getCurrentYear() {
	return new Date().getFullYear();
}

// console.log(getCurrentYear());

// ---------- Remove duplicate values from array ----------

function getUniqueValues(arr) {
	const uniqueValues = [];

	for (let i = 0; i < arr.length; i++) {
		if (!uniqueValues.includes(arr[i])) {
			uniqueValues.push(arr[i]);
		}
	}

	return uniqueValues;
}

// console.log(getUniqueValues([1, 2, 3, 4, 2, 5, 1]));

// ---------- Return random integer in the range (inclusive) ----------

const getRandomInt = function (min, max) {
	const randomInt = Math.ceil(Math.random() * (max - min));

	return randomInt + min;
};

// console.log(getRandomInt(1, 5));

// ---------- Shuffle array ----------

const shuffleArray = function (arr) {
	const result = arr.slice();

	for (let i = result.length - 1; i >= 0; i--) {
		const randomInd = Math.floor(Math.random() * (i + 1));
		[result[i], result[randomInd]] = [result[randomInd], result[i]];
	}

	return result;
};

// console.log(shuffleArray([1, 2, 3, 4, 5]));

// ---------- Capitalize each word in a string ----------

const capitalizeWords = (str) => {
	return str
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
};

// console.log(capitalizeWords("hello world"));

// ---------- Reverse String ----------

const reverseString = (str) => {
	return str.split("").reverse().join("");
};

// console.log(reverseString("hello"));

/*------------------------------------------- Part B: Scope Simulation & Analysis -------------------------------------------*/

// Global variable - Accessible anywhere in the script, including inside functions
const firstName = "John";

function demonstrateScope() {
	// Function-level variable - Declared with var (function-scoped)
	var lastName = "Doe";

	if (lastName.length > 2) {
		// Block-scoped variables - Declared with let and const (only accessible inside this block)
		let email = "john.doe@gmail.com";
		const profession = "engineer";

		// Inside the block all variables are accessible
		console.log("firstName:", firstName); // ✅ accessible (global)
		console.log("lastName:", lastName); // ✅ accessible (function-scoped)
		console.log("email:", email); // ✅ accessible (block-scoped)
		console.log("profession:", profession); // ✅ accessible (block-scoped)
	}

	// Nested function that tries to access all declared variables
	function createPerson() {
		return {
			firstName, // ✅ accessible (global)
			lastName, // ✅ accessible (function-scoped)
			// email,    // ❌ ReferenceError (block-scoped, not accessible outside block they are declared in)
			// profession // ❌ ReferenceError (block-scoped, not accessible outside block they are declared in)
		};
	}

	const person = createPerson();

	return person;
}

// console.log(demonstrateScope());

/*------------------------------------------- Part C: Hoisting & TDZ Debugger -------------------------------------------*/

// ---------- Variable Hoisting ----------

// console.log('Variable declared with var', varWithVar) // logs: undefined. Hoisted and initialized with value undefined
// console.log('Variable declared with let', varWithLet) // ❌ ReferenceError. It is hoisted, but not initialized (it is in TDZ)
// console.log('Variable declared with const', varWithConst) // ❌ ReferenceError. It is hoisted, but not initialized (it is in TDZ)

var varWithVar = "var";
let varWithLet = "let";
const varWithConst = "const";

// ---------- Function Hoisting ----------

// console.log(functionDeclaration()); // Fully hoisted and initialized (both name and body), so they can be called before definition

function functionDeclaration() {
	return "Function Declaration";
}

// console.log(functionExpressionWithVar()); // ❌ TypeError. Variable hoisted and initialized with value undefined. Function is assigned later
// console.log(functionExpressionWithLet()); // ❌ ReferenceError. let is hoisted in the TDZ. Accessing before declaration throws ReferenceError
// console.log(functionExpressionWithConst()); // ❌ ReferenceError. const is hoisted in the TDZ. Accessing before declaration throws ReferenceError

var functionExpressionWithVar = function () {
	return "Function Expression with var";
};

let functionExpressionWithLet = function () {
	return "Function Expression with let";
};

const functionExpressionWithConst = function () {
	return "Function Expression with const";
};

// Arrow functions work the same way as function expressions
