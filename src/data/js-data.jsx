export const javascript = [
  {
    title: "Variable Declarations",
    text: `// Variable Declarations

// let - block-scoped, can be reassigned
let x = 10;

// const - block-scoped, immutable (cannot be reassigned)
const PI = 3.14159;

// var - function-scoped or globally-scoped, less preferred in modern JS
var y = 20;

// Declaring without initial value
let emptyVar;
const emptyConst; // Must be initialized at declaration for objects and arrays

// Multiple declarations
let a = 1, b = 2, c = 3;

// Destructuring assignment
let [first, second] = [1, 2];
let { name, age } = { name: 'Alice', age: 30 };

// Assigning values later (only for let and var)
let laterAssigned;
laterAssigned = 'Value added later';

// Reassigning values (let and var only)
let mutable = 'initial';
mutable = 'changed';

// var can be hoisted, but use with caution
console.log(z); // undefined
var z = 5;

// let and const are not hoisted in the same way
// console.log(notHoisted); // ReferenceError
// let notHoisted = 10;`,
    language: "javascript",
    keypoints: `<ul>
    <li><code>let</code>: Block-scoped, can be reassigned</li>
    <li><code>const</code>: Block-scoped, immutable (cannot be reassigned)</li>
    <li><code>var</code>: Function-scoped or globally-scoped, less modern</li>
    <li>Variables can be declared without initial value: <code>let emptyVar;</code></li>
    <li><code>const</code> must be initialized if it's an object or array</li>
    <li>Multiple declarations in one line: <code>let a = 1, b = 2, c = 3;</code></li>
    <li>Destructuring assignment for arrays and objects</li>
    <li><code>let</code> and <code>var</code> allow assignment after declaration</li>
    <li>Reassignment is possible with <code>let</code> and <code>var</code></li>
    <li><code>var</code> can be hoisted, leading to unexpected behavior</li>
    <li><code>let</code> and <code>const</code> are not hoisted in the same manner</li>
</ul>`,
    id: 201,
  },
  {
    title: "Data Types",
    text: `// Primitive Data Types

// String
let stringVar = "Hello, World!";

// Number
let numberVar = 42;

// BigInt
let bigIntVar = 9007199254740991n;

// Boolean
let booleanVar = true;

// Undefined
let undefinedVar;

// Null
let nullVar = null;

// Symbol
let symbolVar = Symbol('description');

// Object Data Types

// Object (Literal)
let objectVar = { key: 'value', anotherKey: 42 };

// Array
let arrayVar = [1, 2, 3];

// Function
function functionVar() { return 'I am a function'; }

// Date
let dateVar = new Date();

// RegExp
let regExpVar = /pattern/;

// Type Checking

// typeof operator for primitive types
typeof stringVar; // "string"
typeof numberVar; // "number"
typeof bigIntVar; // "bigint"
typeof booleanVar; // "boolean"
typeof undefinedVar; // "undefined"
typeof nullVar; // "object" (known quirk)
typeof symbolVar; // "symbol"
typeof objectVar; // "object"
typeof arrayVar; // "object"
typeof functionVar; // "function"
typeof dateVar; // "object"
typeof regExpVar; // "object"

// instanceof for objects
objectVar instanceof Object; // true
arrayVar instanceof Array; // true
functionVar instanceof Function; // true
dateVar instanceof Date; // true
regExpVar instanceof RegExp; // true`,
    language: "javascript",
    keypoints: `<ul>
    <li>Primitive Types: <code>string</code>, <code>number</code>, <code>bigint</code>, <code>boolean</code>, <code>undefined</code>, <code>null</code>, <code>symbol</code></li>
    <li>Object Types: <code>object</code>, <code>array</code>, <code>function</code>, <code>date</code>, <code>regexp</code></li>
    <li>String: Represented by quotes or backticks</li>
    <li>Number: Double or integer, includes NaN and Infinity</li>
    <li>BigInt: For numbers beyond Number.MAX_SAFE_INTEGER, ends with 'n'</li>
    <li>Boolean: true or false</li>
    <li>Undefined: Default value of uninitialized variables</li>
    <li>Null: Represents intentional absence of value</li>
    <li>Symbol: Unique and immutable data type</li>
    <li>Object: Collection of key-value pairs, including arrays</li>
    <li>Array: Special type of object, indexed by numbers</li>
    <li>Function: Callable object that executes code</li>
    <li>Date: Object for working with dates and times</li>
    <li>RegExp: For pattern matching with regular expressions</li>
    <li>Type Checking: Use <code>typeof</code> for primitives, <code>instanceof</code> for objects</li>
    <li>Note: <code>typeof null</code> returns "object" due to historical reasons</li>
</ul>`,
    id: 202,
  },
  {
    title: "Functions",
    text: `// Function Declaration
function functionName(param1, param2) {
    // body of the function
    return result;
}

// Function Expression
const functionVar = function(param1, param2) {
    // body of the function
    return result;
};

// Arrow Function
const arrowFunction = (param1, param2) => {
    // body of the function
    return result;
};

// Arrow Function - implicit return for single expression
const shortArrow = (a, b) => a + b;

// Default Parameters
function withDefault(param1 = 'default') {
    return param1;
}

// Rest Parameters
function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}

// Spread in Function Calls
Math.max(...[1, 2, 3]);

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("Immediately Invoked!");
})();

// Function Methods

// toString()
console.log(functionName.toString());

// call, apply, bind
function greet(greeting, punctuation) {
    return greeting + ' ' + this.name + punctuation;
}
const person = { name: 'John' };
greet.call(person, 'Hello', '!'); // "Hello John!"
greet.apply(person, ['Hello', '!']); // "Hello John!"
const boundGreet = greet.bind(person, 'Hello');
boundGreet('!'); // "Hello John!"

// Function as First-Class Citizens

// Passing functions as arguments
function higherOrder(func) {
    return func();
}
higherOrder(() => 'Executed');

// Returning functions
function returnFunction() {
    return function() {
        return 'Returned function';
    };
}

// Closures
function makeCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}
const counter = makeCounter();
counter(); // 1
counter(); // 2

// Generator Functions
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = generatorFunction();
gen.next().value; // 1

// Async Functions
async function asyncFunction() {
    const result = await someAsyncOperation();
    return result;
}

// Promises
function promiseFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done!"), 1000);
    });
}`,
    language: "javascript",
    keypoints: `<ul>
    <li>Function Declaration: Standard function definition</li>
    <li>Function Expression: Assigning a function to a variable</li>
    <li>Arrow Functions: Concise function syntax, <code>this</code> binding differs</li>
    <li>Implicit Return: Single-expression arrow functions can omit <code>return</code></li>
    <li>Default Parameters: Provide fallback values for parameters</li>
    <li>Rest Parameters: Collect additional arguments into an array</li>
    <li>Spread Operator: Spread array elements into individual arguments</li>
    <li>IIFE: Immediately Invoked Function Expressions for encapsulation</li>
    <li><code>toString()</code>: Convert function to string representation</li>
    <li><code>call()</code>, <code>apply()</code>, <code>bind()</code>: Change function context</li>
    <li>Functions as First-Class Citizens: Can be passed around, returned, or assigned</li>
    <li>Higher-Order Functions: Functions that operate on other functions</li>
    <li>Closure: A function having access to its creation scope even after the scope is gone</li>
    <li>Generator Functions: Use <code>yield</code> for lazy evaluation, iterator creation</li>
    <li>Async Functions: Use <code>await</code> for handling asynchronous operations</li>
    <li>Promises: Objects representing the eventual completion or failure of an asynchronous operation</li>
</ul>`,
    id: 203,
  },
  {
    title: "Objects",
    text: `// Creating Objects

// Object Literal
const objectLiteral = {
    key: 'value',
    anotherKey: 42,
    method: function() { return this.key; }
};

// Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person = new Person('John', 30);

// Object.create()
const prototypeObject = { greet: function() { return "HELLO"; } };
const newObject = Object.create(prototypeObject);

// Object Properties

// Dot Notation
objectLiteral.key = 'new value';

// Bracket Notation
objectLiteral['anotherKey'] = 43;

// Computed Property Names
const propName = 'dynamicKey';
const computedObj = {
    [propName]: 'Computed Value'
};

// Methods

// Method Definition
const withMethod = {
    sayHello() { return 'Hello!'; }
};

// Getters and Setters
const withGetterSetter = {
    _private: 'secret',
    get private() {
        return this._private;
    },
    set private(value) {
        this._private = value;
    }
};

// Object Methods

// Object.keys()
Object.keys(objectLiteral); // ['key', 'anotherKey', 'method']

// Object.values()
Object.values(objectLiteral); // ['value', 42, function]

// Object.entries()
Object.entries(objectLiteral); // [['key', 'value'], ['anotherKey', 42], ['method', function]]

// Object.assign()
const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source); // {a: 1, b: 2}

// Object.freeze()
const frozen = Object.freeze({ unfreezable: 'frozen' });
frozen.unfreezable = 'changed'; // no effect

// Object.seal()
const sealed = Object.seal({ sealable: 'sealed' });
delete sealed.sealable; // no effect, but can change values

// Destructuring
const { key, anotherKey } = objectLiteral;
const { name: personName, age: personAge } = person;

// Spread Operator
const spreadObj = { ...objectLiteral, newKey: 'spread' };

// Object.is()
Object.is(NaN, NaN); // true, unlike ===
Object.is(0, -0); // false, unlike ===

// Prototypes
person.__proto__ === Person.prototype; // deprecated, use Object.getPrototypeOf()
Object.setPrototypeOf(newObject, {}); // Changes prototype chain`,
    language: "javascript",
    keypoints: `<ul>
    <li>Object Creation: Literal, Constructor, <code>Object.create()</code></li>
    <li>Dot Notation: Access properties with <code>.</code></li>
    <li>Bracket Notation: Access properties with <code>[]</code></li>
    <li>Computed Property Names: Use expressions in property names</li>
    <li>Methods: Function properties that can be invoked</li>
    <li>Getters and Setters: Special methods for property access and modification</li>
    <li><code>Object.keys()</code>: Returns array of object's own enumerable property names</li>
    <li><code>Object.values()</code>: Returns array of object's own enumerable property values</li>
    <li><code>Object.entries()</code>: Returns array of key-value pairs</li>
    <li><code>Object.assign()</code>: Copies all enumerable own properties from one or more source objects to a target object</li>
    <li><code>Object.freeze()</code>: Prevents changes to object properties</li>
    <li><code>Object.seal()</code>: Prevents addition or removal of properties</li>
    <li>Destructuring: Extract data from objects into variables</li>
    <li>Spread Operator: Expand properties into a new object</li>
    <li><code>Object.is()</code>: Determines whether two values are the same value</li>
    <li>Prototypes: Objects can inherit properties from other objects</li>
</ul>`,
    id: 204,
  },
  {
    title: "Arrays",
    text: `// Creating Arrays

// Array Literal
const arrayLiteral = [1, 'two', true, { key: 'value' }];

// Array Constructor
const arrayConstructor = new Array(3); // [empty × 3]
const arrayConstructorWithValues = new Array(1, 'two', true);

// Array.from()
const fromArray = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
const fromIterable = Array.from({ length: 5 }, (_, i) => i * 2); // [0, 2, 4, 6, 8]

// Array.of()
const ofArray = Array.of(7); // [7]

// Array Methods

// Adding/Removing Elements

// push() - Add to end
arrayLiteral.push('end'); // returns new length

// pop() - Remove from end
const last = arrayLiteral.pop(); // returns removed item

// unshift() - Add to beginning
arrayLiteral.unshift('start'); // returns new length

// shift() - Remove from beginning
const first = arrayLiteral.shift(); // returns removed item

// splice() - Add or remove elements at specific index
arrayLiteral.splice(2, 0, 'inserted'); // insert at index 2
arrayLiteral.splice(1, 1); // remove 1 element from index 1

// Manipulating Arrays

// concat() - Merge arrays
const merged = arrayLiteral.concat([5, 6]);

// slice() - Extract part of an array
const sliced = arrayLiteral.slice(1, 3); // from index 1 to 3

// join() - Combine array elements into string
const joined = arrayLiteral.join('-');

// reverse() - Reverse order of elements
arrayLiteral.reverse();

// sort() - Sort elements (modifies original array)
arrayLiteral.sort(); // for strings
arrayLiteral.sort((a, b) => a - b); // for numbers

// Iteration

// forEach()
arrayLiteral.forEach(item => console.log(item));

// map() - Create new array from calling a function on every element
const mapped = arrayLiteral.map(item => item.length);

// filter() - Create new array with elements that pass a test
const filtered = arrayLiteral.filter(item => typeof item === 'string');

// reduce() - Reduce array to single value
const sum = arrayLiteral.reduce((acc, val) => acc + val, 0);

// every() - Check if all elements pass a test
const allStrings = arrayLiteral.every(item => typeof item === 'string');

// some() - Check if at least one element passes a test
const hasString = arrayLiteral.some(item => typeof item === 'string');

// find() - Return first element that satisfies the provided testing function
const found = arrayLiteral.find(item => item > 2);

// findIndex() - Return index of first element that satisfies the provided testing function
const indexFound = arrayLiteral.findIndex(item => item > 2);

// Array Properties

// length
console.log(arrayLiteral.length);

// Prototype Methods

// isArray()
Array.isArray(arrayLiteral); // true

// Static Methods

// Array.from(), Array.of() (as shown above)`,
    language: "javascript",
    keypoints: `<ul>
    <li>Array Creation: Literal, Constructor, <code>Array.from()</code>, <code>Array.of()</code></li>
    <li><code>push()</code>: Add element to the end</li>
    <li><code>pop()</code>: Remove and return last element</li>
    <li><code>unshift()</code>: Add element to the beginning</li>
    <li><code>shift()</code>: Remove and return first element</li>
    <li><code>splice()</code>: Add or remove elements at index</li>
    <li><code>concat()</code>: Combine arrays</li>
    <li><code>slice()</code>: Extract portion of array</li>
    <li><code>join()</code>: Create string from array elements</li>
    <li><code>reverse()</code>: Reverse array in-place</li>
    <li><code>sort()</code>: Sort array elements</li>
    <li><code>forEach()</code>: Execute function for each element</li>
    <li><code>map()</code>: Transform elements to new array</li>
    <li><code>filter()</code>: Filter elements based on condition</li>
    <li><code>reduce()</code>: Reduce to single value</li>
    <li><code>every()</code>: Test if all elements pass condition</li>
    <li><code>some()</code>: Test if any element passes condition</li>
    <li><code>find()</code>: Return first element that matches</li>
    <li><code>findIndex()</code>: Return index of first match</li>
    <li><code>length</code>: Property for array size</li>
    <li><code>Array.isArray()</code>: Check if value is an array</li>
</ul>`,
    id: 205,
  },
  {
    title: "Math Object",
    text: `// Math Object - Constants

Math.E;         // Euler's number, base of natural logarithms
Math.LN10;      // Natural logarithm of 10
Math.LN2;       // Natural logarithm of 2
Math.LOG10E;    // Base 10 logarithm of E
Math.LOG2E;     // Base 2 logarithm of E
Math.PI;        // Pi, ratio of circumference to diameter of a circle
Math.SQRT1_2;   // Square root of 1/2
Math.SQRT2;     // Square root of 2

// Basic Arithmetic

Math.abs(x);    // Absolute value
Math.ceil(x);   // Smallest integer greater than or equal to x
Math.floor(x);  // Largest integer less than or equal to x
Math.round(x);  // Round to nearest integer
Math.trunc(x);  // Remove fractional digits (ES6)

// Exponential and Logarithmic

Math.exp(x);    // e raised to the power of x
Math.expm1(x);  // e^x - 1 (ES6)
Math.log(x);    // Natural logarithm (base e) of x
Math.log1p(x);  // ln(1 + x) (ES6)
Math.log10(x);  // Base 10 logarithm of x
Math.log2(x);   // Base 2 logarithm of x (ES6)

// Power and Roots

Math.pow(x, y); // x raised to the power y
Math.sqrt(x);   // Square root of x
Math.cbrt(x);   // Cube root of x (ES6)

// Trigonometry

Math.sin(x);    // Sine of x (in radians)
Math.cos(x);    // Cosine of x
Math.tan(x);    // Tangent of x
Math.asin(x);   // Arcsine of x
Math.acos(x);   // Arccosine of x
Math.atan(x);   // Arctangent of x
Math.atan2(y, x); // Arctangent of y/x considering the quadrant

// Hyperbolic Functions

Math.sinh(x);   // Hyperbolic sine
Math.cosh(x);   // Hyperbolic cosine
Math.tanh(x);   // Hyperbolic tangent
Math.asinh(x);  // Inverse hyperbolic sine (ES6)
Math.acosh(x);  // Inverse hyperbolic cosine (ES6)
Math.atanh(x);  // Inverse hyperbolic tangent (ES6)

// Rounding and Conversion

Math.sign(x);   // Sign of x (-1, 0, 1) (ES6)
Math.hypot(...values); // Square root of sum of squares (ES6)

// Miscellaneous

Math.max(...values); // Maximum of numbers
Math.min(...values); // Minimum of numbers
Math.random();       // Pseudo-random number between 0 (inclusive) and 1 (exclusive)
Math.imul(a, b);     // 32-bit integer multiplication (ES6)

// Note: Math functions can be used directly like Math.sqrt(9) or with spread/rest for multiple args like Math.max(1, 2, 3)`,
    language: "javascript",
    keypoints: `<ul>
    <li>Constants: <code>Math.E</code>, <code>Math.PI</code> etc. for mathematical constants</li>
    <li>Arithmetic: <code>abs()</code>, <code>ceil()</code>, <code>floor()</code>, <code>round()</code>, <code>trunc()</code></li>
    <li>Exponential/Log: <code>exp()</code>, <code>log()</code>, <code>log10()</code>, <code>log2()</code>, <code>expm1()</code>, <code>log1p()</code></li>
    <li>Power/Roots: <code>pow()</code>, <code>sqrt()</code>, <code>cbrt()</code></li>
    <li>Trigonometry: <code>sin()</code>, <code>cos()</code>, <code>tan()</code>, <code>asin()</code>, <code>acos()</code>, <code>atan()</code>, <code>atan2()</code></li>
    <li>Hyperbolic: <code>sinh()</code>, <code>cosh()</code>, <code>tanh()</code>, <code>asinh()</code>, <code>acosh()</code>, <code>atanh()</code></li>
    <li>Rounding: <code>sign()</code> for determining sign</li>
    <li>Conversion: <code>hypot()</code> for Euclidean norm</li>
    <li>Miscellaneous: <code>max()</code>, <code>min()</code> for finding extremes, <code>random()</code> for random number generation, <code>imul()</code> for int multiplication</li>
</ul>`,
    id: 206,
  },
  {
    title: "Date Object",
    text: `// Date Object Creation

// Current date and time
const now = new Date();

// Specific date and time
const specificDate = new Date('2023-10-01T14:48:00');
const anotherDate = new Date(2023, 9, 1, 14, 48, 0); // Note: month is 0-indexed

// Date from timestamp (milliseconds since Epoch)
const fromTimestamp = new Date(1696193280000);

// Static Methods

Date.now(); // Number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
Date.parse('2023-10-01T14:48:00'); // Returns timestamp in milliseconds
Date.UTC(2023, 9, 1, 14, 48, 0); // UTC timestamp for given date

// Instance Methods for Retrieving Values

date.getYear(); // Deprecated, use getFullYear instead
date.getFullYear(); // Year (e.g., 2023)
date.getMonth(); // Month (0-11)
date.getDate(); // Day of the month (1-31)
date.getDay(); // Day of the week (0-6, where 0 is Sunday)
date.getHours(); // Hours (0-23)
date.getMinutes(); // Minutes (0-59)
date.getSeconds(); // Seconds (0-59)
date.getMilliseconds(); // Milliseconds (0-999)
date.getTime(); // Timestamp in milliseconds since Epoch
date.getTimezoneOffset(); // Timezone difference in minutes from UTC

// Instance Methods for Setting Values

date.setFullYear(year, [month], [date]);
date.setMonth(month, [date]);
date.setDate(date);
date.setHours(hour, [min], [sec], [ms]);
date.setMinutes(min, [sec], [ms]);
date.setSeconds(sec, [ms]);
date.setMilliseconds(ms);
date.setTime(timeValue); // Set the date to the time represented by a number of milliseconds

// Timezone and Locale Methods

date.toLocaleString([locales], [options]); // Human readable string in specified locale
date.toLocaleDateString([locales], [options]);
date.toLocaleTimeString([locales], [options]);
date.toTimeString(); // Time portion of the Date in human-readable form
date.toDateString(); // Date portion of the Date in human-readable form
date.toUTCString(); // Converts date to a string using UTC

// String Conversion

date.toString(); // Human-readable string
date.toISOString(); // ISO 8601 date string
date.toJSON(); // Same as toISOString, used for JSON serialization

// Comparison

const date1 = new Date('2023-10-01');
const date2 = new Date('2023-10-02');
date1 < date2; // true
date1.getTime() === date2.getTime(); // false

// Time Difference

const timeDiff = date2 - date1; // milliseconds difference

// Note: Date objects automatically adjust for DST and timezone when creating or setting dates.`,
    language: "javascript",
    keypoints: `<ul>
    <li>Creation: <code>new Date()</code> for now, with string, or with arguments</li>
    <li>Static Methods: <code>Date.now()</code>, <code>Date.parse()</code>, <code>Date.UTC()</code></li>
    <li>Getters: <code>getFullYear()</code>, <code>getMonth()</code>, <code>getDate()</code>, <code>getDay()</code>, <code>getHours()</code>, <code>getMinutes()</code>, <code>getSeconds()</code>, <code>getMilliseconds()</code>, <code>getTime()</code>, <code>getTimezoneOffset()</code></li>
    <li>Setters: <code>setFullYear()</code>, <code>setMonth()</code>, <code>setDate()</code>, <code>setHours()</code>, <code>setMinutes()</code>, <code>setSeconds()</code>, <code>setMilliseconds()</code>, <code>setTime()</code></li>
    <li>Locale Methods: <code>toLocaleString()</code>, <code>toLocaleDateString()</code>, <code>toLocaleTimeString()</code></li>
    <li>String Conversion: <code>toString()</code>, <code>toISOString()</code>, <code>toJSON()</code>, <code>toUTCString()</code>, <code>toDateString()</code>, <code>toTimeString()</code></li>
    <li>Comparison: Can use comparison operators directly with Date objects</li>
    <li>Time Difference: Subtract one Date from another for milliseconds difference</li>
</ul>

`,
    id: 207,
  },
  {
    title: "Console Object",
    text: `// Logging
console.log(message); // Basic logging to the console
console.info(message); // Similar to log, but may have different styling in some browsers
console.warn(message); // Shows a warning message
console.error(message); // Logs an error message

// Advanced Logging
console.table(arrayOrObject); // Displays data in a tabular format
console.time(label); // Starts a timer with a label
console.timeEnd(label); // Ends the timer with the label, logs the elapsed time
console.count(label); // Increments a counter for the label, logs the count
console.countReset(label); // Resets the count for the label

// Grouping
console.group(label); // Starts a new group in the console log
console.groupEnd(); // Ends the current group
console.groupCollapsed(label); // Starts a new collapsed group

// Assertions
console.assert(expression, message); // Logs an error if the expression is false

// Stack trace
console.trace(); // Logs the stack trace at the point where it's called

// Clearing the console
console.clear(); // Clears the console screen

// Example Usage
console.log('Hello, world!');
console.warn('Be careful!');
console.error('Something went wrong!');
console.table([{name: "John", age: 30}, {name: "Doe", age: 40}]);

console.time('Timer');
for (let i = 0; i < 1000000; i++) {} // Simulating work
console.timeEnd('Timer');

console.group('Group');
console.log('In group');
console.groupEnd();

console.assert(1 === 1, 'This assertion should pass');
console.assert(1 === 2, 'This assertion will fail');

console.trace("Here's the trace");

console.clear(); // Use this to clear the console`,
    language: "javascript",
    keypoints: `<ul>
  <li><strong>Logging:</strong>
    <ul className="secondary-list">
      <li><code>console.log()</code> - Basic logging.</li>
      <li><code>console.info()</code> - Similar to log, potentially styled differently.</li>
      <li><code>console.warn()</code> - Displays warnings.</li>
      <li><code>console.error()</code> - Logs errors.</li>
    </ul>
  </li>
  <li><strong>Advanced Logging:</strong>
    <ul className="secondary-list">
      <li><code>console.table()</code> - Displays data in table format.</li>
      <li><code>console.time()</code> and <code>console.timeEnd()</code> - For timing operations.</li>
      <li><code>console.count()</code> and <code>console.countReset()</code> - Counts occurrences.</li>
    </ul>
  </li>
  <li><strong>Grouping:</strong>
    <ul className="secondary-list">
      <li><code>console.group()</code> and <code>console.groupEnd()</code> - Groups logs.</li>
      <li><code>console.groupCollapsed()</code> - Starts a collapsed group.</li>
    </ul>
  </li>
  <li><strong>Assertions:</strong>
    <ul className="secondary-list">
      <li><code>console.assert()</code> - Logs if assertion fails.</li>
    </ul>
  </li>
  <li><strong>Stack Trace:</strong>
    <ul className="secondary-list">
      <li><code>console.trace()</code> - Shows the current call stack.</li>
    </ul>
  </li>
  <li><strong>Clearing:</strong>
    <ul className="secondary-list">
      <li><code>console.clear()</code> - Clears the console.</li>
    </ul>
  </li>
</ul>`,
    id: 208,
  },
  {
    title: "Promises",
    text: `// Creating a Promise
let promise = new Promise((resolve, reject) => {
  let success = true; // Example condition
  if (success) {
    resolve("Operation successful"); // If operation succeeded
  } else {
    reject("Operation failed"); // If operation failed
  }
});

// Consuming a Promise
promise
  .then(result => {
    console.log(result); // Logs: "Operation successful"
  })
  .catch(error => {
    console.error(error); // Logs: "Operation failed" if rejected
  });

// Promise Chaining
function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Step 1 done"), 1000);
  });
}

function step2(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value + " and Step 2 done"), 1000);
  });
}

step1()
  .then(result => step2(result))
  .then(result => console.log(result)) // Logs: "Step 1 done and Step 2 done"
  .catch(error => console.error(error));

// Promise.all - Wait for all promises to resolve
let promise1 = Promise.resolve('Hello');
let promise2 = new Promise((resolve, reject) => setTimeout(() => resolve('World'), 2000));
let promise3 = 42; // Non-Promise value

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values); // ['Hello', 'World', 42]
});

// Promise.race - First promise to resolve or reject
let promise4 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'fast'));
let promise5 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'slow'));

Promise.race([promise4, promise5]).then(value => {
  console.log(value); // Logs 'fast' after 500ms
});

// Promise.any - Returns the first fulfilled promise
let promise6 = Promise.reject('Error1');
let promise7 = Promise.resolve('Success');
let promise8 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'Error2'));

Promise.any([promise6, promise7, promise8]).then(value => {
  console.log(value); // Logs 'Success'
});

// Promise.allSettled - Wait for all promises to either resolve or reject
let promise9 = Promise.resolve('Success');
let promise10 = Promise.reject('Failure');
let promise11 = new Promise((resolve) => setTimeout(() => resolve('Delayed'), 1000));

Promise.allSettled([promise9, promise10, promise11]).then(results => {
  console.log(results);
  /*
  [
    { status: "fulfilled", value: "Success" },
    { status: "rejected", reason: "Failure" },
    { status: "fulfilled", value: "Delayed" }
  ]
  */
});

// Promise.finally - Execute after promise whether it was fulfilled or rejected
new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done'), 1000);
})
.finally(() => console.log('Promise settled')) // Always logs
.then(result => console.log(result)); // Logs 'Done' if resolved`,
    language: "javascript",
    keypoints: `<ul>
  <li><strong>Creating Promises:</strong>
    <ul className="secondary-list">
      <li>Use <code>new Promise(executor)</code> where <code>executor</code> is a function with <code>resolve</code> and <code>reject</code> arguments.</li>
    </ul>
  </li>
  <li><strong>Consuming Promises:</strong>
    <ul className="secondary-list">
      <li>Use <code>.then()</code> for handling resolved promises.</li>
      <li>Use <code>.catch()</code> for handling rejected promises.</li>
    </ul>
  </li>
  <li><strong>Promise Chaining:</strong>
    <ul className="secondary-list">
      <li>Chain <code>.then()</code> calls to sequence asynchronous operations.</li>
    </ul>
  </li>
  <li><strong>Promise.all:</strong>
    <ul className="secondary-list">
      <li>Wait for all promises in an array to resolve.</li>
      <li>Returns a new promise that resolves to an array of the results.</li>
    </ul>
  </li>
  <li><strong>Promise.race:</strong>
    <ul className="secondary-list">
      <li>Resolves or rejects as soon as one of the promises in the array settles.</li>
    </ul>
  </li>
  <li><strong>Promise.any:</strong>
    <ul className="secondary-list">
      <li>Resolves with the value of the first promise that fulfills.</li>
      <li>Rejects only if all promises are rejected.</li>
    </ul>
  </li>
  <li><strong>Promise.allSettled:</strong>
    <ul className="secondary-list">
      <li>Waits until all promises have either resolved or rejected.</li>
      <li>Returns an array of objects showing the status of each promise.</li>
    </ul>
  </li>
  <li><strong>Promise.finally:</strong>
    <ul className="secondary-list">
      <li>Executes after the promise is settled, regardless of whether it was fulfilled or rejected.</li>
    </ul>
  </li>
</ul>`,
    id: 209,
  },
  {
    title: "Data Fetching",
    text: `// 1. Fetch API - promise-based
fetch('api/data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Using async/await with Fetch
async function fetchData() {
  try {
    const response = await fetch('api/data.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();

// 2. Axios - A promise based HTTP client for the browser and Node.js
// Note: You need to include Axios in your project first
axios.get('api/data.json')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));

// Using async/await with Axios
async function fetchDataAxios() {
  try {
    const response = await axios.get('api/data.json');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchDataAxios();`,
    language: "javascript",
    keypoints: `<ul>
  <li><strong>Fetch API (Promise-based):</strong>
    <ul className="secondary-list">
      <li>Utilizes <code>fetch()</code> to make HTTP requests.</li>
      <li>Chains <code>.then()</code> to handle responses, check status, and parse JSON.</li>
      <li>Employs <code>.catch()</code> for error handling.</li>
    </ul>
  </li>
  <li><strong>Fetch API with async/await:</strong>
    <ul className="secondary-list">
      <li>Wraps fetch in an <code>async</code> function called <code>fetchData</code>.</li>
      <li>Uses <code>await</code> for asynchronous operations within a <code>try...catch</code> block for error management.</li>
      <li>Checks response status before JSON parsing.</li>
    </ul>
  </li>
  <li><strong>Axios (Promise-based):</strong>
    <ul className="secondary-list">
      <li>Requires Axios library to be included in the project.</li>
      <li>Uses <code>axios.get()</code> for GET requests, directly accessing the data with <code>response.data</code>.</li>
      <li>Employs <code>.then()</code> for success and <code>.catch()</code> for error handling.</li>
    </ul>
  </li>
</ul>`,
    id: 210,
  },
  {
    title: "Classes",
    text: `// Basic Class Declaration
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`;
  }

  // Static Method - Belongs to the class, not instances
  static species() {
    return "Homo Sapiens";
  }
}

// Using the class
const person1 = new Person("Alice", 30);
console.log(person1.greet()); // "Hello, my name is Alice and I am 30 years old."
console.log(Person.species()); // "Homo Sapiens"

// Inheritance
class Employee extends Person {
  constructor(name, age, jobTitle) {
    // Call the superclass constructor with super()
    super(name, age);
    this.jobTitle = jobTitle;
  }

  // Override method
  greet() {
    return super.greet() + \` I am a \${this.jobTitle}.\`;
  }

  // New method
  work() {
    return \`\${this.name} is working as a \${this.jobTitle}.\`;
  }
}

const employee1 = new Employee("Bob", 40, "Engineer");
console.log(employee1.greet()); // "Hello, my name is Bob and I am 40 years old. I am a Engineer."
console.log(employee1.work()); // "Bob is working as a Engineer."

// Getters and Setters
class Car {
  constructor(make, model) {
    this._make = make;
    this._model = model;
    this._year = null;
  }

  // Getter
  get year() {
    return this._year;
  }

  // Setter
  set year(newYear) {
    if (newYear > 1885 && newYear <= new Date().getFullYear()) {
      this._year = newYear;
    } else {
      console.warn("Invalid year!");
    }
  }

  // Method using getter
  describe() {
    return \`\${this._make} \${this._model} (\${this.year || 'unknown year'})\`;
  }
}

const car = new Car("Toyota", "Corolla");
car.year = 2022; // Valid
console.log(car.describe()); // "Toyota Corolla (2022)"
car.year = 1800; // Invalid, will log a warning

// Private Fields (ES2022+)
class BankAccount {
  #balance = 0;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Public method to access private field
  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // 1000
account.deposit(500);
console.log(account.getBalance()); // 1500

// Static Properties
class MathOperations {
  static PI = 3.14159;

  static calculateCircleArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathOperations.PI); // 3.14159
console.log(MathOperations.calculateCircleArea(5)); // 78.53975`,
    language: "javascript",
    keypoints: `<ul>
  <li><strong>Class Declaration:</strong>
    <ul className="secondary-list">
      <li>Use <code>class</code> keyword to define a class.</li>
      <li>The <code>constructor</code> method initializes new instances.</li>
    </ul>
  </li>
  <li><strong>Methods:</strong>
    <ul className="secondary-list">
      <li>Regular methods operate on instance properties.</li>
      <li><code>static</code> methods belong to the class, not instances.</li>
    </ul>
  </li>
  <li><strong>Inheritance:</strong>
    <ul className="secondary-list">
      <li>Use <code>extends</code> to inherit from another class.</li>
      <li><code>super()</code> calls the parent class constructor.</li>
      <li>Methods can be overridden in child classes.</li>
    </ul>
  </li>
  <li><strong>Getters and Setters:</strong>
    <ul className="secondary-list">
      <li>Defined with <code>get</code> and <code>set</code> keywords for property access control.</li>
    </ul>
  </li>
  <li><strong>Private Fields:</strong>
    <ul className="secondary-list">
      <li>Use <code>#</code> to declare private fields (ES2022+).</li>
      <li>Only accessible within the class methods.</li>
    </ul>
  </li>
  <li><strong>Static Properties:</strong>
    <ul className="secondary-list">
      <li>Defined directly on the class, not instances.</li>
      <li>Accessed via the class name, not instances.</li>
    </ul>
  </li>
</ul>`,
    id: 211,
  },
  {
    title: "String Methods",
    text: `// String Length
let str = "hello";
console.log(str.length); // Output: 5

// Accessing Characters
console.log(str.charAt(1)); // Output: "e"
console.log(str[1]); // Output: "e"

// Searching Within Strings
console.log(str.indexOf('l')); // Output: 2
console.log(str.lastIndexOf('l')); // Output: 3
console.log(str.includes('lo')); // Output: true
console.log(str.startsWith('he')); // Output: true
console.log(str.endsWith('lo')); // Output: true

// Manipulating Strings
let newStr = str.concat(' world');
console.log(newStr); // Output: "hello world"
console.log(str.slice(1, 4)); // Output: "ell"
console.log(str.substring(1, 4)); // Output: "ell"
console.log(str.substr(1, 3)); // Output: "ell" (Note: deprecated in future JavaScript versions)
console.log(str.replace('l', 'L')); // Output: "heLlo"
console.log(str.toUpperCase()); // Output: "HELLO"
console.log(str.toLowerCase()); // Output: "hello"
console.log(str.trim()); // Removes whitespace from both sides of a string
console.log(str.split('')); // Output: ['h', 'e', 'l', 'l', 'o']
console.log(str.repeat(2)); // Output: "hellohello"

// String to Number Conversion
let str1 = "123";
let str2 = "45.67";
let str3 = "hello";

console.log(parseInt(str1)); // Output: 123
console.log(parseInt(str2)); // Output: 45 (ignores decimal part)
console.log(parseInt(str3)); // Output: NaN

console.log(parseFloat(str1)); // Output: 123.0
console.log(parseFloat(str2)); // Output: 45.67
console.log(parseFloat(str3)); // Output: NaN

console.log(Number(str1)); // Output: 123
console.log(Number(str2)); // Output: 45.67
console.log(Number(str3)); // Output: NaN`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Length:</strong> Use <code>length</code> to get the number of characters.</li>
    <li><strong>Access Characters:</strong> <code>charAt(index)</code> or bracket notation <code>[]</code>.</li>
    <li><strong>Search:</strong>
        <ul className="secondary-list">
            <li><code>indexOf(value)</code> - First occurrence.</li>
            <li><code>lastIndexOf(value)</code> - Last occurrence.</li>
            <li><code>includes(value)</code> - If string contains value.</li>
            <li><code>startsWith(value)</code> - If string starts with value.</li>
            <li><code>endsWith(value)</code> - If string ends with value.</li>
        </ul>
    </li>
    <li><strong>Manipulate:</strong>
        <ul className="secondary-list">
            <li><code>concat(value)</code> - Concatenate strings.</li>
            <li><code>slice(start, end)</code> - Extract part of string.</li>
            <li><code>substring(start, end)</code> - Similar to slice but no negative indices.</li>
            <li><code>substr(start, length)</code> - Deprecated, use slice instead.</li>
            <li><code>replace(old, new)</code> - Replace occurrences.</li>
            <li><code>toUpperCase()</code> - Convert to uppercase.</li>
            <li><code>toLowerCase()</code> - Convert to lowercase.</li>
            <li><code>trim()</code> - Remove leading and trailing whitespaces.</li>
            <li><code>split(separator)</code> - Convert string to array.</li>
            <li><code>repeat(count)</code> - Repeat string.</li>
        </ul>
    </li>
    <li><strong>Conversion:</strong>
        <ul className="secondary-list">
            <li><code>parseInt(string)</code> - Convert to integer.</li>
            <li><code>parseFloat(string)</code> - Convert to float.</li>
            <li><code>Number(string)</code> - Convert to number.</li>
        </ul>
    </li>
</ul>`,
    id: 212,
  },
  {
    title: "Number Methods",
    text: `// Basic Number Properties
console.log(Number.MAX_VALUE); // The largest number representable - Output: 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // The smallest positive number representable - Output: 5e-324
console.log(Number.POSITIVE_INFINITY); // Represents positive infinity - Output: Infinity
console.log(Number.NEGATIVE_INFINITY); // Represents negative infinity - Output: -Infinity
console.log(Number.NaN); // "Not-a-Number" value - Output: NaN

// Number Methods
let num = 123.456;

// toString(radix) - Converts a number to a string, radix specifies base for conversion
console.log(num.toString()); // Output: "123.456"
console.log(num.toString(2)); // Binary - Output: "1111011.01110100101111000110101"

// toFixed(digits) - Formats a number using fixed-point notation
console.log(num.toFixed(2)); // Output: "123.46"

// toPrecision(precision) - Formats a number using either fixed or exponential notation
console.log(num.toPrecision(4)); // Output: "123.5"

// toExponential(fractionDigits) - Returns a string representation of the number in exponential notation
console.log(num.toExponential(2)); // Output: "1.23e+2"

// Number.isInteger() - Checks if the value is an integer
console.log(Number.isInteger(num)); // Output: false
console.log(Number.isInteger(123)); // Output: true

// Number.isFinite() - Determines if the passed value is a finite number
console.log(Number.isFinite(num)); // Output: true
console.log(Number.isFinite(Infinity)); // Output: false

// Number.isNaN() - Determines whether the passed value is NaN
console.log(Number.isNaN(num)); // Output: false
console.log(Number.isNaN(NaN)); // Output: true

// Number.parseFloat(string) - Parses a string and returns a floating point number
console.log(Number.parseFloat("10.33")); // Output: 10.33
console.log(Number.parseFloat("10 20 30")); // Only parses the first number - Output: 10

// Number.parseInt(string, radix) - Parses a string argument and returns an integer of the specified radix
console.log(Number.parseInt("10", 10)); // Output: 10
console.log(Number.parseInt("10", 2)); // Binary - Output: 2
`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Basic Number Properties:</strong>
        <ul className="secondary-list">
            <li><code>Number.MAX_VALUE</code> - Largest representable number.</li>
            <li><code>Number.MIN_VALUE</code> - Smallest positive representable number.</li>
            <li><code>Number.POSITIVE_INFINITY</code> - Positive infinity.</li>
            <li><code>Number.NEGATIVE_INFINITY</code> - Negative infinity.</li>
            <li><code>Number.NaN</code> - Not-a-Number value.</li>
        </ul>
    </li>
    <li><strong>Number Methods:</strong>
        <ul className="secondary-list">
            <li><code>toString(radix)</code> - Converts number to string, base conversion if radix is specified.</li>
            <li><code>toFixed(digits)</code> - Formats number to fixed-point notation.</li>
            <li><code>toPrecision(precision)</code> - Formats number to either fixed or exponential notation.</li>
            <li><code>toExponential(fractionDigits)</code> - Formats number in exponential notation.</li>
            <li><code>Number.isInteger(value)</code> - Checks if value is an integer.</li>
            <li><code>Number.isFinite(value)</code> - Checks if value is a finite number.</li>
            <li><code>Number.isNaN(value)</code> - Checks if value is NaN.</li>
            <li><code>Number.parseFloat(string)</code> - Parses string to floating-point number.</li>
            <li><code>Number.parseInt(string, radix)</code> - Parses string to integer of specified radix.</li>
        </ul>
    </li>
</ul>`,
    id: 213,
  },
  {
    title: "Error Handling",
    text: `// Basic Try...Catch
try {
    // Code that might throw an error
    let result = 10 / "a";
    console.log(result);
} catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
} finally {
    // Code that always executes, regardless of error
    console.log("This block always runs.");
}

// Throwing Custom Errors
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero"); // Throws a custom error
    }
    return a / b;
}

try {
    console.log(divide(4, 0));
} catch (error) {
    console.error(error.message); // "Division by zero"
}

// Different Types of Errors
try {
    // SyntaxError - Happens when parsing code (not at runtime)
    // eval("alert('Hello)"); // SyntaxError: Invalid or unexpected token
    
    // TypeError - Happens when an operation is performed on an incorrect type
    null.foo();
    
    // ReferenceError - When trying to use a variable that is not declared
    console.log(nonExistentVariable);
    
    // RangeError - When a numeric variable or parameter is outside of its valid range
    let arr = new Array(-1);
} catch (error) {
    console.error(error.name + ": " + error.message);
}

// Error Properties
try {
    JSON.parse("{ bad json }");
} catch (error) {
    console.log("Error name:", error.name); // SyntaxError
    console.log("Error message:", error.message); // Unexpected token b in JSON at position 2
    console.log("Error stack:", error.stack); // Stack trace
}

// Using instanceof for specific error handling
try {
    JSON.parse("{ bad json }");
} catch (error) {
    if (error instanceof SyntaxError) {
        console.error("JSON parsing error:", error.message);
    } else {
        console.error("Other error:", error.message);
    }
}

// Error Event in Window
window.addEventListener('error', function(event) {
    console.error('Global error:', event.error);
});

// Asynchronous Error Handling with Promises
const asyncOperation = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Async operation failed"));
        }, 1000);
    });
};

asyncOperation()
    .then(result => console.log("Success:", result))
    .catch(error => console.error("Promise error:", error.message));

// Error Handling in Async/Await
async function asyncFunction() {
    try {
        let result = await asyncOperation();
        console.log("Result:", result);
    } catch (error) {
        console.error("Async/Await error:", error.message);
    }
}

asyncFunction();

// Custom Error Classes
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateEmail(email) {
    if (!email.includes('@')) {
        throw new ValidationError("Invalid email format");
    }
}

try {
    validateEmail("invalid-email");
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(error.name + ": " + error.message);
    } else {
        console.error("Unexpected error:", error.message);
    }
}`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Basic Try...Catch:</strong> Use <code>try</code> to execute code, <code>catch</code> to handle errors, and <code>finally</code> for post-execution.</li>
    <li><strong>Throwing Custom Errors:</strong> Use <code>throw new Error("message")</code> to create custom errors.</li>
    <li><strong>Error Types:</strong>
        <ul className="secondary-list">
            <li><code>SyntaxError</code> - Parsing errors in code.</li>
            <li><code>TypeError</code> - Operations on incorrect types.</li>
            <li><code>ReferenceError</code> - Undeclared variables.</li>
            <li><code>RangeError</code> - Numbers outside valid range.</li>
        </ul>
    </li>
    <li><strong>Error Properties:</strong>
        <ul className="secondary-list">
            <li><code>error.name</code> - Name of the error.</li>
            <li><code>error.message</code> - Description of the error.</li>
            <li><code>error.stack</code> - Stack trace of the error.</li>
        </ul>
    </li>
    <li><strong>Specific Error Handling:</strong> Use <code>instanceof</code> to check for specific error types in catch blocks.</li>
    <li><strong>Global Error Event:</strong> Listen for errors with <code>window.addEventListener('error', callback)</code>.</li>
    <li><strong>Promise Error Handling:</strong> Use <code>.catch()</code> with Promises to handle asynchronous errors.</li>
    <li><strong>Async/Await:</strong> Wrap asynchronous code in <code>try...catch</code> for error handling in async functions.</li>
    <li><strong>Custom Error Classes:</strong> Extend <code>Error</code> to create custom error types for specific scenarios.</li>
</ul>`,
    id: 214,
  },
  {
    title: "Conditional Statements",
    text: `// If Statement
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}

// If-Else Statement
if (age < 18) {
    console.log("You are not an adult.");
} else {
    console.log("You are an adult.");
}

// If-Else If-Else Statement
let time = 10;
if (time < 10) {
    console.log("Good morning!");
} else if (time < 20) {
    console.log("Good day!");
} else {
    console.log("Good evening!");
}

// If with Logical Operators (AND, OR, NOT)
let hasLicense = true;
let hasInsurance = true;
if (hasLicense && hasInsurance) {
    console.log("You can drive.");
} else {
    console.log("You cannot drive.");
}

if (hasLicense || hasInsurance) {
    console.log("You have at least one document.");
}

if (!hasLicense) {
    console.log("You don't have a license.");
}

// Switch Statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Friday":
        console.log("End of the work week.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("It's a regular day.");
}

// Ternary (Conditional) Operator
let canVote = (age >= 18) ? "Yes" : "No";
console.log(\`Can you vote? \${canVote}\`);

// Conditional Chaining (ES6+)
let permission = "admin";
let accessLevel = permission === "admin" ? "Full Access" : 
                  permission === "user" ? "Limited Access" : 
                  "No Access";
console.log(\`Access level: \${accessLevel}\`);

// Short-circuit Evaluation
let user = null;
let name = user && user.name; // if user is null or undefined, name will be null or undefined
console.log(name || "Guest"); // outputs "Guest" because name is null

// Using if with optional chaining (ES2020+)
let car = { brand: "Toyota", model: { name: "Corolla" } };
let modelName = car && car.model && car.model.name;
console.log(modelName); // Outputs "Corolla" if all conditions are met, otherwise undefined

// Nullish Coalescing Operator (ES2020+)
let userRole = null;
let defaultRole = "user";
let role = userRole ?? defaultRole; // If userRole is null or undefined, defaultRole is used
console.log(role); // Outputs "user"`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>If Statement:</strong> Basic condition check.</li>
    <li><strong>If-Else Statement:</strong> Two-way decision making.</li>
    <li><strong>If-Else If-Else:</strong> Multiple condition checks with fallback.</li>
    <li><strong>Logical Operators in Conditions:</strong>
        <ul className="secondary-list">
            <li><code>&&</code> (AND) - Both conditions must be true.</li>
            <li><code>||</code> (OR) - At least one condition must be true.</li>
            <li><code>!</code> (NOT) - Reverses the result of the condition.</li>
        </ul>
    </li>
    <li><strong>Switch Statement:</strong> Multiple case comparisons with a default case.</li>
    <li><strong>Ternary Operator:</strong> Shortcut for if-else when assigning values: <code>condition ? exprIfTrue : exprIfFalse</code>.</li>
    <li><strong>Conditional Chaining:</strong> Multiple ternary operators for complex conditions.</li>
    <li><strong>Short-circuit Evaluation:</strong> Using <code>&&</code> or <code>||</code> for concise conditional checks.</li>
    <li><strong>Optional Chaining:</strong> Safer way to access nested object properties (<code>obj?.prop?.subprop</code>).</li>
    <li><strong>Nullish Coalescing:</strong> Use of <code>??</code> to return the right operand when the left is null or undefined.</li>
</ul>`,
    id: 215,
  },
  {
    title: "Loops",
    text: `// For Loop - Traditional loop with initialization, condition, and increment
for (let i = 0; i < 5; i++) {
    console.log(\`Iteration \${i}\`);
}

// For Loop - With array
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// For...of Loop - Iterates over iterable objects like arrays or strings
for (let fruit of fruits) {
    console.log(fruit);
}

// For...of with destructuring - For arrays of objects
let users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];
for (let { name, age } of users) {
    console.log(\`\${name} is \${age} years old.\`);
}

// For...in Loop - Iterates over enumerable properties of an object
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}

// While Loop - Executes a block of code while a condition is true
let counter = 0;
while (counter < 3) {
    console.log("While loop: " + counter);
    counter++;
}

// Do...While Loop - Executes a block of code once before checking the condition
let doWhileCounter = 0;
do {
    console.log("Do-While loop: " + doWhileCounter);
    doWhileCounter++;
} while (doWhileCounter < 3);

// Break Statement in Loops - Exits the loop early
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit loop when i equals 5
    }
    console.log(i);
}

// Continue Statement in Loops - Skips to the next iteration
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i); // Only logs odd numbers
}

// Labeled Loops with Break - Exits from a specific loop
outerLoop:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // Exit outer loop when i=1 and j=1
        }
        console.log(\`i=\${i}, j=\${j}\`);
    }
}

// Infinite Loop with Break
let infiniteCounter = 0;
while (true) {
    if (infiniteCounter >= 3) break; // Break to exit infinite loop
    console.log("Infinite loop: " + infiniteCounter);
    infiniteCounter++;
}

// Loop with Array Methods - forEach
fruits.forEach(fruit => console.log(fruit));

// Using Object.entries() with for...of for key-value pairs
for (let [key, value] of Object.entries(person)) {
    console.log(\`\${key}: \${value}\`);
}

// Using Array.from() for iterable objects
let iterable = "hello";
for (let char of Array.from(iterable)) {
    console.log(char);
}`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>For Loop:</strong> Traditional loop with initialization, condition, and increment.</li>
    <li><strong>For...of Loop:</strong> Iterates over iterable objects like arrays or strings.</li>
    <li><strong>For...of with Destructuring:</strong> For iterating through arrays of objects.</li>
    <li><strong>For...in Loop:</strong> Iterates over enumerable properties of objects.</li>
    <li><strong>While Loop:</strong> Executes as long as the condition is true.</li>
    <li><strong>Do...While Loop:</strong> Executes at least once before checking the condition.</li>
    <li><strong>Break Statement:</strong> Used to exit a loop prematurely.</li>
    <li><strong>Continue Statement:</strong> Skips to the next iteration of the loop.</li>
    <li><strong>Labeled Loops:</strong> Labels allow breaking out of nested loops specifically.</li>
    <li><strong>Infinite Loop with Break:</strong> Loop runs indefinitely until a break condition is met.</li>
    <li><strong>Array Methods:</strong>
        <ul className="secondary-list">
            <li><code>forEach</code> - Executes a function for each array element.</li>
        </ul>
    </li>
    <li><strong>Object Methods:</strong>
        <ul className="secondary-list">
            <li><code>Object.entries()</code> - Returns an array of a given object's own enumerable string-keyed property [key, value] pairs for iteration with for...of.</li>
        </ul>
    </li>
    <li><strong>Array.from() with for...of:</strong> Converts iterable objects to arrays for iteration.</li>
</ul>`,
    id: 216,
  },
  {
    title: "Arithmetic Operators",
    text: `// Addition (+)
let sum = 5 + 3;
console.log(sum); // Output: 8

// Subtraction (-)
let difference = 10 - 4;
console.log(difference); // Output: 6

// Multiplication (*)
let product = 6 * 7;
console.log(product); // Output: 42

// Division (/)
let quotient = 20 / 4;
console.log(quotient); // Output: 5

// Remainder (Modulus) (%)
let remainder = 10 % 3;
console.log(remainder); // Output: 1

// Exponentiation (**)
let power = 2 ** 3;
console.log(power); // Output: 8 (2^3)

// Increment (++)
let x = 1;
x++; // Post-increment, x is now 2
console.log(x); // Output: 2
let y = 1;
++y; // Pre-increment, y is now 2
console.log(y); // Output: 2

// Decrement (--)
let a = 5;
a--; // Post-decrement, a is now 4
console.log(a); // Output: 4
let b = 5;
--b; // Pre-decrement, b is now 4
console.log(b); // Output: 4

// Compound Assignment with Arithmetic Operators
let c = 10;
c += 5; // Equivalent to c = c + 5
console.log(c); // Output: 15

let d = 15;
d -= 5; // Equivalent to d = d - 5
console.log(d); // Output: 10

let e = 5;
e *= 3; // Equivalent to e = e * 3
console.log(e); // Output: 15

let f = 15;
f /= 3; // Equivalent to f = f / 3
console.log(f); // Output: 5

let g = 15;
g %= 4; // Equivalent to g = g % 4
console.log(g); // Output: 3

let h = 2;
h **= 3; // Equivalent to h = h ** 3
console.log(h); // Output: 8

// Unary Plus (+)
let num1 = "42";
let num2 = +num1; // Converts string to number
console.log(typeof num2); // Output: "number"

// Unary Negation (-)
let positive = 42;
let negative = -positive;
console.log(negative); // Output: -42

// Operator Precedence Example
let result = 5 + 3 * 2; // Multiplication has higher precedence than addition
console.log(result); // Output: 11, not 16

// Parentheses for changing precedence
let resultWithParens = (5 + 3) * 2;
console.log(resultWithParens); // Output: 16`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Addition (+):</strong> Adds numbers together.</li>
    <li><strong>Subtraction (-):</strong> Subtracts one number from another.</li>
    <li><strong>Multiplication (*):</strong> Multiplies numbers.</li>
    <li><strong>Division (/):</strong> Divides one number by another.</li>
    <li><strong>Remainder (Modulus) (%):</strong> Returns the remainder of a division operation.</li>
    <li><strong>Exponentiation (**):</strong> Raises the first operand to the power of the second.</li>
    <li><strong>Increment (++):</strong> 
        <ul className="secondary-list">
            <li>Post-increment (x++) increases the value after its current use.</li>
            <li>Pre-increment (++x) increases the value before its use.</li>
        </ul>
    </li>
    <li><strong>Decrement (--):</strong>
        <ul className="secondary-list">
            <li>Post-decrement (x--) decreases the value after its current use.</li>
            <li>Pre-decrement (--x) decreases the value before its use.</li>
        </ul>
    </li>
    <li><strong>Compound Assignment:</strong>
        <ul className="secondary-list">
            <li><code>+=</code> - Addition and assignment.</li>
            <li><code>-=</code> - Subtraction and assignment.</li>
            <li><code>*=</code> - Multiplication and assignment.</li>
            <li><code>/=</code> - Division and assignment.</li>
            <li><code>%=</code> - Modulus and assignment.</li>
            <li><code>**=</code> - Exponentiation and assignment.</li>
        </ul>
    </li>
    <li><strong>Unary Plus (+):</strong> Converts its operand to a number.</li>
    <li><strong>Unary Negation (-):</strong> Negates its operand.</li>
    <li><strong>Operator Precedence:</strong> 
        <ul className="secondary-list">
            <li>Multiplication, division, and modulus have higher precedence than addition and subtraction.</li>
            <li>Use parentheses to override natural precedence.</li>
        </ul>
    </li>
</ul>`,
    id: 217,
  },
  {
    title: "Assignment Operators",
    text: `// Simple Assignment (=)
let a = 5;
console.log(a); // Output: 5

// Addition Assignment (+=)
let b = 10;
b += 5; // Equivalent to b = b + 5
console.log(b); // Output: 15

// Subtraction Assignment (-=)
let c = 15;
c -= 5; // Equivalent to c = c - 5
console.log(c); // Output: 10

// Multiplication Assignment (*=)
let d = 5;
d *= 3; // Equivalent to d = d * 3
console.log(d); // Output: 15

// Division Assignment (/=)
let e = 15;
e /= 3; // Equivalent to e = e / 3
console.log(e); // Output: 5

// Remainder Assignment (%=)
let f = 15;
f %= 4; // Equivalent to f = f % 4
console.log(f); // Output: 3

// Exponentiation Assignment (**=)
let g = 2;
g **= 3; // Equivalent to g = g ** 3
console.log(g); // Output: 8

// Left Shift Assignment (<<=)
let h = 2; // 2 in binary is 10
h <<= 1; // Shifts bits left by 1, equivalent to h = h * 2
console.log(h); // Output: 4 (100 in binary)

// Right Shift Assignment (>>=)
let i = 8; // 8 in binary is 1000
i >>= 2; // Shifts bits right by 2, equivalent to i = Math.floor(i / 4)
console.log(i); // Output: 2 (10 in binary)

// Unsigned Right Shift Assignment (>>>=) 
let j = -8; // -8 in 32-bit binary is 11111111111111111111111111111000 (2's complement)
j >>>= 0; // Equivalent to j = j >>> 0, which effectively changes the sign to positive
console.log(j); // Output: 4294967288 (0xFFFFFFFF8 in hexadecimal)

// Bitwise AND Assignment (&=)
let k = 5; // 5 in binary is 0101
k &= 3; // 3 in binary is 0011, result is 0001 (1 in decimal)
console.log(k); // Output: 1

// Bitwise OR Assignment (|=)
let l = 5; // 5 in binary is 0101
l |= 3; // 3 in binary is 0011, result is 0111 (7 in decimal)
console.log(l); // Output: 7

// Bitwise XOR Assignment (^=)
let m = 5; // 5 in binary is 0101
m ^= 3; // 3 in binary is 0011, result is 0110 (6 in decimal)
console.log(m); // Output: 6

// Destructuring Assignment
let [x, y] = [1, 2];
console.log(x, y); // Output: 1 2

let {name, age} = {name: "John", age: 30};
console.log(name, age); // Output: John 30

// Default Value Assignment
let [n = 10, o = 20] = [5]; // n gets 5, o gets the default value 20
console.log(n, o); // Output: 5 20

// Object Property Shorthand Assignment in Object Literals
let prop = "value";
let obj = { prop }; // Equivalent to { prop: prop }
console.log(obj); // Output: { prop: 'value' }`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Simple Assignment (=):</strong> Assigns the value on the right to the variable on the left.</li>
    <li><strong>Compound Assignments:</strong>
        <ul className="secondary-list">
            <li><code>+=</code> - Adds and assigns.</li>
            <li><code>-=</code> - Subtracts and assigns.</li>
            <li><code>*=</code> - Multiplies and assigns.</li>
            <li><code>/=</code> - Divides and assigns.</li>
            <li><code>%=</code> - Computes the remainder and assigns.</li>
            <li><code>**=</code> - Raises to a power and assigns.</li>
        </ul>
    </li>
    <li><strong>Bitwise Assignment Operators:</strong>
        <ul className="secondary-list">
            <li><code>&lt;&lt;=</code> - Left shift and assign.</li>
            <li><code>&gt;&gt;=</code> - Right shift and assign.</li>
            <li><code>&gt;&gt;&gt;=</code> - Unsigned right shift and assign.</li>
            <li><code>&amp;=</code> - Bitwise AND and assign.</li>
            <li><code>|=</code> - Bitwise OR and assign.</li>
            <li><code>^=</code> - Bitwise XOR and assign.</li>
        </ul>
    </li>
    <li><strong>Destructuring Assignment:</strong> 
        <ul className="secondary-list">
            <li>Allows extracting data from arrays or objects into distinct variables.</li>
        </ul>
    </li>
    <li><strong>Default Value Assignment:</strong> 
        <ul className="secondary-list">
            <li>Assigns a default value if the assigned value is undefined.</li>
        </ul>
    </li>
    <li><strong>Object Property Shorthand:</strong> 
        <ul className="secondary-list">
            <li>Allows for concise object literal creation where property names are the same as the variable names.</li>
        </ul>
    </li>
</ul>`,
    id: 218,
  },
  {
    title: "Destructuring",
    text: `// Array Destructuring
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // Output: 1 2 3

// Skipping items with commas
let [, , third] = [1, 2, 3];
console.log(third); // Output: 3

// Default values
let [x = 10, y = 20] = [5]; // x gets 5, y gets the default value 20
console.log(x, y); // Output: 5 20

// Rest operator for remaining items
let [first, ...rest] = [1, 2, 3, 4];
console.log(first, rest); // Output: 1 [2, 3, 4]

// Swapping variables
let temp = a;
a = b;
b = temp;
// Or using destructuring:
[a, b] = [b, a];
console.log(a, b); // If b was 2 and a was 1, now a is 2 and b is 1

// Nested array destructuring
let nestedArray = [1, [2, 3]];
let [one, [two, three]] = nestedArray;
console.log(one, two, three); // Output: 1 2 3

// Object Destructuring
let obj = { name: "John", age: 30, city: "New York" };
let { name, age, city } = obj;
console.log(name, age, city); // Output: John 30 New York

// Assigning to new variable names
let { name: personName, city: personCity } = obj;
console.log(personName, personCity); // Output: John New York

// Default values in object destructuring
let { job = "unemployed", country = "Unknown" } = obj;
console.log(job, country); // Output: unemployed Unknown

// Destructuring with rest for remaining properties
let { name: personName2, ...otherProps } = obj;
console.log(personName2, otherProps); // Output: John { age: 30, city: 'New York' }

// Nested object destructuring
let product = {
    name: "Widget",
    details: { 
        price: 20,
        color: "blue"
    }
};
let { details: { price, color } } = product;
console.log(price, color); // Output: 20 blue

// Function parameter destructuring
function userDetails({ name, age }) {
    return \`\${name} is \${age} years old.\`;
}
console.log(userDetails(obj)); // Output: John is 30 years old.

// Destructuring in function arguments with default values
function greet({ name = "Guest", greeting = "Hello" } = {}) {
    return \`\${greeting}, \${name}!\`;
}
console.log(greet({ name: "Alice" })); // Output: Hello, Alice!
console.log(greet()); // Output: Hello, Guest!

// Array destructuring in function parameters
function sum([a, b, c]) {
    return a + b + c;
}
console.log(sum([1, 2, 3])); // Output: 6

// Mixing array and object destructuring
let complexData = [
    { name: "Alice", score: 95 },
    { name: "Bob", score: 85 }
];
let [{ name: firstPerson }, { score: secondPersonScore }] = complexData;
console.log(firstPerson, secondPersonScore); // Output: Alice 85`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Array Destructuring:</strong>
        <ul className="secondary-list">
            <li>Extracts values from arrays into variables.</li>
            <li>Can skip elements with commas.</li>
            <li>Allows default values for variables.</li>
            <li>Uses rest syntax (<code>...</code>) to collect remaining elements.</li>
            <li>Enables easy variable swapping.</li>
            <li>Supports nested array destructuring.</li>
        </ul>
    </li>
    <li><strong>Object Destructuring:</strong>
        <ul className="secondary-list">
            <li>Extracts values from objects into variables.</li>
            <li>Can assign properties to differently named variables.</li>
            <li>Supports default values for properties.</li>
            <li>Uses rest syntax for unassigned properties.</li>
            <li>Allows nested object destructuring.</li>
        </ul>
    </li>
    <li><strong>Function Parameter Destructuring:</strong>
        <ul className="secondary-list">
            <li>Can destructure object or array arguments directly in function parameters.</li>
            <li>Supports default values for parameters.</li>
        </ul>
    </li>
    <li><strong>Mixing Destructuring:</strong> 
        <ul className="secondary-list">
            <li>Can combine array and object destructuring in complex data structures.</li>
        </ul>
    </li>
</ul>`,
    id: 219,
  },
  {
    title: "Spread Operator",
    text: `// Array Spread

// Combining arrays
let first = [1, 2, 3];
let second = [4, 5, 6];
let combined = [...first, ...second];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Copying an array
let original = [1, 2, 3];
let copy = [...original];
console.log(copy); // Output: [1, 2, 3]

// Adding elements to an array
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

// Using spread with Math functions
let maxNumber = Math.max(...[10, 5, 20, 15]);
console.log(maxNumber); // Output: 20

// Function Arguments Spread

// Spreading arguments into function calls
function sum(x, y, z) {
    return x + y + z;
}
let args = [1, 2, 3];
console.log(sum(...args)); // Output: 6

// Object Spread

// Merging objects
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 1337 };
let merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { foo: "baz", x: 42, y: 1337 } (obj2 properties override obj1)

// Cloning objects
let originalObj = { a: 1, b: 2 };
let cloneObj = { ...originalObj };
console.log(cloneObj); // Output: { a: 1, b: 2 }

// Adding new properties
let newObj = { ...originalObj, c: 3 };
console.log(newObj); // Output: { a: 1, b: 2, c: 3 }

// Deep cloning (this is shallow by default - for deep clone use a library or recursive function)
let complexObj = { 
    name: "John", 
    details: { 
        age: 30, 
        city: "New York"
    }
};
let shallowClone = { ...complexObj };
shallowClone.details.age = 31;
console.log(complexObj.details.age); // Output: 31 (because it's just a shallow copy)

// Spread in Array Literals with Other Elements
let spreadWithElements = [0, ...[1, 2, 3], 4];
console.log(spreadWithElements); // Output: [0, 1, 2, 3, 4]

// Spread in Object Literals with Other Properties
let user = { name: "Alice", age: 30 };
let userWithStatus = { ...user, status: "active" };
console.log(userWithStatus); // Output: { name: "Alice", age: 30, status: "active" }

// Spread with destructuring for rest elements/properties
let [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest); // Output: 1 2 [3, 4, 5]

let { x, ...restOfObj } = { x: 1, y: 2, z: 3 };
console.log(x, restOfObj); // Output: 1 { y: 2, z: 3 }`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Array Spread:</strong>
        <ul className="secondary-list">
            <li>Combines multiple arrays into one.</li>
            <li>Creates a shallow copy of an array.</li>
            <li>Adds elements to an array.</li>
            <li>Spreads array elements into function arguments.</li>
            <li>Works with built-in functions like <code>Math.max()</code>.</li>
        </ul>
    </li>
    <li><strong>Function Arguments Spread:</strong>
        <ul className="secondary-list">
            <li>Passes elements of an array as individual arguments to a function.</li>
        </ul>
    </li>
    <li><strong>Object Spread:</strong>
        <ul className="secondary-list">
            <li>Merges objects, with later properties overriding earlier ones.</li>
            <li>Creates a shallow clone of an object.</li>
            <li>Adds new properties to an object.</li>
            <li>Note: Only performs shallow cloning, not deep cloning for nested objects.</li>
        </ul>
    </li>
    <li><strong>Using Spread in Literals:</strong>
        <ul className="secondary-list">
            <li>Can be used within array and object literals alongside other elements/properties.</li>
        </ul>
    </li>
    <li><strong>Spread with Destructuring:</strong>
        <ul className="secondary-list">
            <li>Used with rest syntax to capture remaining elements or properties.</li>
        </ul>
    </li>
</ul>`,
    id: 220,
  },
  {
    title: "Scope",
    text: `// Global Scope
let globalVar = "I am global";

function checkGlobalScope() {
    console.log(globalVar); // Output: I am global
}

checkGlobalScope();

// Function Scope
function functionScope() {
    let functionVar = "I am local to functionScope";
    console.log(functionVar); // Output: I am local to functionScope
}

// Uncommenting this would cause an error because functionVar is not accessible outside functionScope:
// console.log(functionVar);

// Block Scope (introduced with let and const in ES6)
if (true) {
    let blockVar = "I am in a block";
    console.log(blockVar); // Output: I am in a block
}

// blockVar is not accessible here:
// console.log(blockVar); // Would cause ReferenceError

// Nested Scope
function outer() {
    let outerVar = "I am in outer";
    
    function inner() {
        let innerVar = "I am in inner";
        console.log(innerVar); // Output: I am in inner
        console.log(outerVar); // Output: I am in outer, inner can access outer's variables
    }
    
    inner();
    
    // outerVar is accessible here within outer function
    console.log(outerVar); // Output: I am in outer
    
    // But innerVar is not:
    // console.log(innerVar); // Would cause ReferenceError
}

outer();

// Lexical Scope (Closure)
function makeFunc() {
    let name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

let myFunc = makeFunc();
myFunc(); // Output: Mozilla, even after makeFunc has returned because of closure

// Hoisting
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";

// Hoisting with let and const behaves differently:
function hoistedLet() {
    console.log(blockScoped); // Would cause ReferenceError: blockScoped is not defined
    let blockScoped = "I am block-scoped";
}

// hoistedLet();

// IIFE (Immediately Invoked Function Expression) for creating private scope
(function() {
    let privateVar = "I am private";
    console.log(privateVar); // Output: I am private
})();

// privateVar is not accessible here:
// console.log(privateVar); // Would cause ReferenceError

// Shadowing
let x = 1;

function shadow() {
    let x = 2; // This x shadows the global x
    console.log(x); // Output: 2
}

shadow();
console.log(x); // Output: 1, the global x is not affected

// Module Scope (ES6 modules)
// Note: This example assumes you're in an environment with module support. 
// It's not executable in a plain JavaScript environment without module setup.
if (typeof module !== 'undefined') {
    module.exports = {
        publicVar: "I am public",
    };
}

// In another file, you would import like this:
// let { publicVar } = require('./moduleFile');
// console.log(publicVar); // If this file were a module, you'd only have access to exported items`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Global Scope:</strong> Variables declared outside any function are globally accessible.</li>
    <li><strong>Function Scope:</strong>
        <ul className="secondary-list">
            <li>Variables declared within a function are only accessible within that function.</li>
            <li><code>var</code> declarations are function-scoped.</li>
        </ul>
    </li>
    <li><strong>Block Scope:</strong>
        <ul className="secondary-list">
            <li>Introduced with <code>let</code> and <code>const</code> in ES6, variables are limited to the block they're declared in (like inside an <code>if</code> or <code>for</code> block).</li>
        </ul>
    </li>
    <li><strong>Nested Scope:</strong> Inner functions can access variables from outer functions but not vice versa.</li>
    <li><strong>Lexical Scope (Closure):</strong> Functions can remember and access variables from their creation context even after the function has returned.</li>
    <li><strong>Hoisting:</strong>
        <ul className="secondary-list">
            <li><code>var</code> declarations are hoisted to the top of their scope with initialization to <code>undefined</code>.</li>
            <li><code>let</code> and <code>const</code> are hoisted but are in a "temporal dead zone" until declared.</li>
        </ul>
    </li>
    <li><strong>IIFE (Immediately Invoked Function Expression):</strong> Used for creating private scope, variables inside are not accessible from outside.</li>
    <li><strong>Shadowing:</strong> When a variable declared in an inner scope has the same name as one in an outer scope, the inner one takes precedence.</li>
    <li><strong>Module Scope:</strong>
        <ul className="secondary-list">
            <li>Modules in ES6 have their own scope; only variables explicitly exported are accessible from outside the module.</li>
        </ul>
    </li>
</ul>`,
    id: 221,
  },
  {
    title: "Hoisting",
    text: `// Variable Hoisting with var
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // Output: I am hoisted

// Function Declaration Hoisting
hoistedFunction();
function hoistedFunction() {
    console.log("I am a hoisted function");
}

// Function Expression Hoisting
// This would cause an error if uncommented because function expressions are not hoisted in the same way:
// hoistedExpression();
var hoistedExpression = function() {
    console.log("I am a function expression");
};

// Let and Const Hoisting (Temporal Dead Zone)
// Using 'let' or 'const' before declaration causes a ReferenceError due to the Temporal Dead Zone
// console.log(letVar); // Would cause ReferenceError
let letVar = "I am let";
console.log(letVar); // Output: I am let

// Class Declaration Hoisting (similar to let/const)
// Uncommenting this would cause a ReferenceError:
// new MyClass(); // Would cause ReferenceError
class MyClass {
    constructor() {
        console.log("I am a class");
    }
}
new MyClass(); // This works

// Function Hoisting in Conditional Blocks
if (false) {
    function conditionalFunction() {
        console.log("This function won't be hoisted outside this block");
    }
}
// Uncommenting this would result in inconsistent behavior across browsers:
// conditionalFunction();

// Hoisting with Arrow Functions
// Arrow functions assigned to variables behave like function expressions, not hoisted:
// hoistedArrow(); // Would cause TypeError if uncommented
var hoistedArrow = () => {
    console.log("Hoisted arrow function");
};

// Named Function Expressions
var namedFunctionExpression = function myNamedFunction() {
    console.log("I am a named function expression");
};
// This would cause an error if uncommented because the name is only for recursion within the function:
// myNamedFunction();

// var reassignment
console.log(reassignedVar); // Output: undefined
var reassignedVar = "First Assignment";
reassignedVar = "Second Assignment";
console.log(reassignedVar); // Output: Second Assignment

// Hoisting and Scope
function scopeTest() {
    console.log(localVar); // Output: undefined (var hoisting)
    var localVar = "I am local";
    console.log(localVar); // Output: I am local
}
scopeTest();

// Hoisting Differences Between var, let, and const
function hoistComparison() {
    console.log(varHoist); // Output: undefined
    var varHoist = "var hoisted";
    
    // console.log(letHoist); // Would cause ReferenceError if uncommented
    let letHoist = "let not hoisted";
    
    // console.log(constHoist); // Would cause ReferenceError if uncommented
    const constHoist = "const not hoisted";
}
hoistComparison();`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>var Declarations:</strong>
        <ul className="secondary-list">
            <li>Hoisted to the top of their scope with an initial value of <code>undefined</code>.</li>
            <li>Can be used before they are declared, but their value will be <code>undefined</code> until assigned.</li>
        </ul>
    </li>
    <li><strong>Function Declarations:</strong>
        <ul className="secondary-list">
            <li>Fully hoisted; can be called before they are defined in the code.</li>
        </ul>
    </li>
    <li><strong>Function Expressions:</strong>
        <ul className="secondary-list">
            <li>Not hoisted in the same way as function declarations; only the variable is hoisted, not the function value.</li>
        </ul>
    </li>
    <li><strong>let and const:</strong>
        <ul className="secondary-list">
            <li>Hoisted but not initialized (Temporal Dead Zone), causing a <code>ReferenceError</code> if used before declaration.</li>
        </ul>
    </li>
    <li><strong>Class Declarations:</strong>
        <ul className="secondary-list">
            <li>Similar to <code>let</code> and <code>const</code>, they are hoisted but exist in a Temporal Dead Zone until defined.</li>
        </ul>
    </li>
    <li><strong>Conditional Function Declarations:</strong>
        <ul className="secondary-list">
            <li>Hoisting behavior can be inconsistent across environments; best to avoid conditional function declarations.</li>
        </ul>
    </li>
    <li><strong>Arrow Functions:</strong>
        <ul className="secondary-list">
            <li>Assigned to variables behave like function expressions; not hoisted as function declarations.</li>
        </ul>
    </li>
    <li><strong>Named Function Expressions:</strong>
        <ul className="secondary-list">
            <li>The name is hoisted only within the function itself for recursion, not globally or in the enclosing scope.</li>
        </ul>
    </li>
    <li><strong>var Reassignment:</strong>
        <ul className="secondary-list">
            <li>Can be reassigned after initial hoisting, with the reassignment happening at the point of execution, not hoisting.</li>
        </ul>
    </li>
    <li><strong>Hoisting and Scope:</strong>
        <ul className="secondary-list">
            <li>Hoisting behavior applies within the scope of declaration, whether global or function scope.</li>
        </ul>
    </li>
</ul>`,
    id: 222,
  },
  {
    title: "Arrow Functions",
    text: `// Basic Arrow Function (Single Expression)
let add = (a, b) => a + b;
console.log(add(1, 2)); // Output: 3

// Arrow Function with Block Body
let multiply = (a, b) => {
    let result = a * b;
    return result;
};
console.log(multiply(3, 4)); // Output: 12

// Arrow Function with No Arguments
let getName = () => "John";
console.log(getName()); // Output: John

// Arrow Function with One Argument (parentheses optional)
let square = x => x * x;
console.log(square(5)); // Output: 25

// Arrow Function Returning an Object (needs parentheses around the object)
let createObject = () => ({ name: "Alice", age: 30 });
console.log(createObject()); // Output: { name: 'Alice', age: 30 }

// Arrow Function in Method Definitions (ES6+)
let person = {
    name: "Bob",
    greet: () => {
        // Note: Arrow functions don't bind their own 'this', so this is not what you might expect
        console.log(\`Hello, my name is \${this.name}\`); // Output: Hello, my name is undefined
    }
};
person.greet();

// Arrow Function with 'this' Binding
let personWithCorrectThis = {
    name: "Charlie",
    greet: function() {
        setTimeout(() => {
            console.log(\`Hello, my name is \${this.name}\`); // Output: Hello, my name is Charlie
        }, 1000);
    }
};
personWithCorrectThis.greet();

// Arrow Functions in Array Methods
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(x => x * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

// Arrow Function with Default Parameters
let fullName = (firstName = "John", lastName = "Doe") => \`\${firstName} \${lastName}\`;
console.log(fullName()); // Output: John Doe
console.log(fullName("Jane", "Smith")); // Output: Jane Smith

// Arrow Functions in Callback Scenarios
let delayedGreet = (name, delay) => {
    setTimeout(() => {
        console.log(\`Hello, \${name}!\`);
    }, delay);
};
delayedGreet("World", 1000);

// Arrow Function with Rest Parameters
let sumAll = (...args) => {
    return args.reduce((sum, current) => sum + current, 0);
};
console.log(sumAll(1, 2, 3, 4)); // Output: 10

// Arrow Functions in Immediately Invoked Function Expressions (IIFE)
(() => {
    console.log("This IIFE runs immediately");
})();

// Arrow Function for Event Listeners
document.addEventListener('click', () => {
    console.log("You clicked somewhere on the document");
});

// Arrow Function in Promise Chains
let promise = new Promise((resolve) => resolve("Resolved!"));
promise.then(result => console.log(result)); // Output: Resolved!

// Arrow Function with Conditional (Ternary) Operator
let isEven = num => num % 2 === 0 ? "Even" : "Odd";
console.log(isEven(4)); // Output: Even
console.log(isEven(3)); // Output: Odd`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Basic Syntax:</strong>
        <ul className="secondary-list">
            <li>Single expression: <code>(params) => expression</code>.</li>
            <li>With block body: <code>(params) => { statements; }</code>.</li>
        </ul>
    </li>
    <li><strong>Parentheses Usage:</strong>
        <ul className="secondary-list">
            <li>Optional for single argument: <code>param => expression</code>.</li>
            <li>Required for no arguments or multiple arguments: <code>() => expression</code>, <code>(a, b) => expression</code>.</li>
        </ul>
    </li>
    <li><strong>Returning Objects:</strong> Must wrap the object in parentheses to avoid syntax confusion: <code>() => ({ key: value })</code>.</li>
    <li><strong>'this' Binding:</strong>
        <ul className="secondary-list">
            <li>Arrow functions do not bind their own <code>this</code>, they inherit from the enclosing lexical scope.</li>
            <li>Useful in callbacks or methods where you want to maintain the <code>this</code> context of the surrounding code.</li>
        </ul>
    </li>
    <li><strong>Array Methods:</strong> Commonly used in <code>map</code>, <code>filter</code>, <code>reduce</code>, etc., for concise, readable code.</li>
    <li><strong>Default Parameters:</strong> Supported, e.g., <code>(param = defaultValue) => expression</code>.</li>
    <li><strong>Callbacks:</strong> Ideal for passing into functions like <code>setTimeout</code> where maintaining <code>this</code> context is beneficial.</li>
    <li><strong>Rest Parameters:</strong> Can use <code>...args</code> for rest parameters.</li>
    <li><strong>IIFE:</strong> Arrow functions can be used as Immediately Invoked Function Expressions.</li>
    <li><strong>Event Listeners:</strong> Good for attaching event handlers with the correct <code>this</code> context.</li>
    <li><strong>Promise Chains:</strong> Often used in <code>.then()</code> for concise promise handling.</li>
    <li><strong>Conditional (Ternary) Operator:</strong> Can be directly used for concise conditional returns.</li>
</ul>`,
    id: 223,
  },
  {
    title: "Regular Expressions - Regex",
    text: `// Creating RegExp Objects
let regexLiteral = /abc/; // Literal notation
let regexConstructor = new RegExp('abc'); // Constructor notation

// Basic Matching
let text = "abcde";
let match = text.match(regexLiteral);
console.log(match); // Output: ["abc", index: 0, input: "abcde", groups: undefined]

// Flags
let caseInsensitive = /abc/i; // i flag for case-insensitive matching
let globalSearch = /abc/g; // g flag for global search, finds all matches
let multiline = /abc/m; // m flag for multiline matching
let sticky = /abc/y; // y flag for sticky (sticky matching starts at the current position in the string)
let unicode = /abc/u; // u flag for Unicode support

// Character Classes
let digit = /\\d/; // matches any digit
let notDigit = /\\D/; // matches any non-digit character
let whitespace = /\\s/; // matches any whitespace character
let notWhitespace = /\\S/; // matches any non-whitespace character
let word = /\\w/; // matches any word character (letter, digit, or underscore)
let notWord = /\\W/; // matches any non-word character

// Quantifiers
let zeroOrOne = /colou?r/; // matches "color" or "colour"
let zeroOrMore = /a*/; // matches 0 or more 'a's
let oneOrMore = /a+/; // matches 1 or more 'a's
let exactlyThree = /a{3}/; // matches exactly three 'a's
let betweenThreeAndFive = /a{3,5}/; // matches between 3 and 5 'a's

// Anchors
let startWith = /^abc/; // matches if string starts with "abc"
let endWith = /xyz$/; // matches if string ends with "xyz"
let wordBoundary = /\\bword\b/; // matches "word" as a whole word

// Groups
let captureGroup = /(\\d{3})-(\\d{3})-(\\d{4})/; // matches and captures groups in a phone number format
let nonCaptureGroup = /(?:abc)/; // matches "abc" but does not capture it

// Alternation
let orCondition = /cat|dog/; // matches either "cat" or "dog"

// Lookahead and Lookbehind
let positiveLookahead = /x(?=y)/; // matches 'x' only if it's followed by 'y'
let negativeLookahead = /x(?!y)/; // matches 'x' only if it's not followed by 'y'
let positiveLookbehind = /(?<=x)y/; // matches 'y' only if it's preceded by 'x' (ES2018+)
let negativeLookbehind = /(?<!x)y/; // matches 'y' only if it's not preceded by 'x' (ES2018+)

// Using Regex Methods
let testResult = /abc/.test("abcdef"); // Returns true if match found
console.log(testResult); // Output: true

let execResult = /abc/.exec("abcdef");
console.log(execResult); // Output: ["abc", index: 0, input: "abcdef", groups: undefined]

let replaceResult = "aabbcc".replace(/a/g, 'x'); // Replace all 'a's with 'x'
console.log(replaceResult); // Output: "xxbbcc"

let searchResult = "abc123def".search(/\\d/); // Find index of first digit
console.log(searchResult); // Output: 3

let splitResult = "apple,banana,cherry".split(/,/); // Split string by comma
console.log(splitResult); // Output: ["apple", "banana", "cherry"]

// Unicode Property Escapes (ES2018+)
let unicodeLetter = /\\p{L}/u; // Matches any Unicode letter
console.log(unicodeLetter.test("á")); // Output: true

// Named Capture Groups (ES2018+)
let namedGroups = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/u;
let matchNamed = namedGroups.exec("2023-01-15");
console.log(matchNamed.groups.year); // Output: "2023"`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Creating RegExp:</strong>
        <ul className="secondary-list">
            <li>Literal notation: <code>/pattern/</code></li>
            <li>Constructor: <code>new RegExp('pattern')</code></li>
        </ul>
    </li>
    <li><strong>Flags:</strong>
        <ul className="secondary-list">
            <li><code>i</code> - Case-insensitive.</li>
            <li><code>g</code> - Global search.</li>
            <li><code>m</code> - Multiline matching.</li>
            <li><code>y</code> - Sticky matching (ES6+).</li>
            <li><code>u</code> - Unicode support (ES6+).</li>
        </ul>
    </li>
    <li><strong>Character Classes:</strong>
        <ul className="secondary-list">
            <li><code>\\d</code> - Matches digits.</li>
            <li><code>\\D</code> - Matches non-digits.</li>
            <li><code>\\s</code> - Matches whitespace.</li>
            <li><code>\\S</code> - Matches non-whitespace.</li>
            <li><code>\\w</code> - Matches word characters.</li>
            <li><code>\\W</code> - Matches non-word characters.</li>
        </ul>
    </li>
    <li><strong>Quantifiers:</strong>
        <ul>
            <li><code>?</code> - Zero or one.</li>
            <li><code>*</code> - Zero or more.</li>
            <li><code>+</code> - One or more.</li>
            <li><code>{n}</code> - Exactly n times.</li>
            <li><code>{n,m}</code> - Between n and m times.</li>
        </ul>
    </li>
    <li><strong>Anchors:</strong>
        <ul className="secondary-list">
            <li><code>^</code> - Start of string.</li>
            <li><code>$</code> - End of string.</li>
            <li><code>\\b</code> - Word boundary.</li>
        </ul>
    </li>
    <li><strong>Groups:</strong>
        <ul className="secondary-list">
            <li><code>(...)</code> - Capture group.</li>
            <li><code>(?:...)</code> - Non-capturing group.</li>
        </ul>
    </li>
    <li><strong>Alternation:</strong> <code>|</code> - Matches either the expression before or after.</li>
    <li><strong>Lookahead/Lookbehind:</strong>
        <ul className="secondary-list">
            <li><code>(?=...)</code> - Positive lookahead.</li>
            <li><code>(?!...)</code> - Negative lookahead.</li>
            <li><code>(?<=...)</code> - Positive lookbehind (ES2018+).</li>
            <li><code>(?<!...)</code> - Negative lookbehind (ES2018+).</li>
        </ul>
    </li>
    <li><strong>Regex Methods:</strong>
        <ul className="secondary-list">
            <li><code>.test()</code> - Checks for a match.</li>
            <li><code>.exec()</code> - Searches for a match and returns details.</li>
            <li><code>.replace()</code> - Replaces matches.</li>
            <li><code>.search()</code> - Returns the index of the match.</li>
            <li><code>.split()</code> - Splits a string by the match.</li>
        </ul>
    </li>
    <li><strong>Unicode Property Escapes:</strong> <code>\\p{...}</code> - Matches Unicode characters (ES2018+).</li>
    <li><strong>Named Capture Groups:</strong> <code>(?&lt;name&gt;...)</code> - Named capture groups (ES2018+).</li>
</ul>`,
    id: 224,
  },
  {
    title: "DOM Manipulation",
    text: `// Selecting Elements

// By ID
let byId = document.getElementById('myId');

// By Class Name
let byClass = document.getElementsByClassName('myClass');

// By Tag Name
let byTag = document.getElementsByTagName('div');

// By CSS Selector
let bySelector = document.querySelector('.myClass');
let allBySelector = document.querySelectorAll('.myClass');

// Creating Elements
let newDiv = document.createElement('div');
let newText = document.createTextNode('Hello, DOM!');
newDiv.appendChild(newText);

// Modifying Elements

// Changing Content
let element = document.getElementById('content');
element.textContent = "New Text"; // Text content
element.innerHTML = "<p>New HTML</p>"; // HTML content

// Changing Attributes
element.setAttribute('data-info', 'value');
element.removeAttribute('data-info');

// Styling
element.style.color = 'red';
element.style.backgroundColor = '#f0f0f0';

// Adding/Removing Classes
element.classList.add('highlight');
element.classList.remove('highlight');
element.classList.toggle('highlight');
element.classList.contains('highlight'); // Returns true if class exists

// Inserting Elements

// Append child
document.body.appendChild(newDiv);

// Insert before another element
let referenceNode = document.getElementById('existingElement');
document.body.insertBefore(newDiv, referenceNode);

// Insert as first child
document.body.prepend(newDiv);

// Insert after another element (custom function for illustration)
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
insertAfter(newDiv, referenceNode);

// Removing Elements
let toRemove = document.getElementById('removeMe');
toRemove.parentNode.removeChild(toRemove);
// Or with modern browsers:
// toRemove.remove();

// Cloning Elements
let clone = element.cloneNode(true); // true for deep clone, false for shallow
document.body.appendChild(clone);`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Selecting Elements:</strong>
        <ul className="secondary-list">
            <li><code>getElementById</code> - Select by ID.</li>
            <li><code>getElementsByClassName</code> - Select by class name.</li>
            <li><code>getElementsByTagName</code> - Select by tag name.</li>
            <li><code>querySelector</code> - Select first element matching a CSS selector.</li>
            <li><code>querySelectorAll</code> - Select all elements matching a CSS selector.</li>
        </ul>
    </li>
    <li><strong>Creating Elements:</strong>
        <ul className="secondary-list">
            <li><code>createElement</code> - Create a new element.</li>
            <li><code>createTextNode</code> - Create a text node.</li>
        </ul>
    </li>
    <li><strong>Modifying Elements:</strong>
        <ul className="secondary-list">
            <li><code>textContent</code> - Set or get text content.</li>
            <li><code>innerHTML</code> - Set or get HTML content.</li>
            <li><code>setAttribute</code>/<code>removeAttribute</code> - Modify attributes.</li>
            <li><code>style</code> - Modify CSS properties.</li>
            <li>Class manipulation with <code>classList</code> methods.</li>
        </ul>
    </li>
    <li><strong>Inserting Elements:</strong>
        <ul className="secondary-list">
            <li><code>appendChild</code> - Add child to the end.</li>
            <li><code>insertBefore</code> - Insert before specified node.</li>
            <li><code>prepend</code> - Insert as first child (newer browsers).</li>
            <li>Custom function for inserting after another element.</li>
        </ul>
    </li>
    <li><strong>Removing Elements:</strong>
        <ul className="secondary-list">
            <li><code>removeChild</code> - Remove an element from its parent.</li>
            <li><code>remove</code> - Directly remove an element (modern browsers).</li>
        </ul>
    </li>
    <li><strong>Cloning Elements:</strong>
        <ul className="secondary-list">
            <li><code>cloneNode</code> - Create a copy of an element, deep or shallow.</li>
        </ul>
    </li></ul>`,
    id: 225,
  },
  {
    title: "DOM Traversing",
    text: `// Selecting an initial element for traversal
let startElement = document.getElementById('start');

// Parent Node
let parentNode = startElement.parentNode;
console.log('Parent Node:', parentNode);

// Parent Element (ignores text nodes, comments, etc.)
let parentElement = startElement.parentElement;
console.log('Parent Element:', parentElement);

// Children
let children = startElement.children; // HTMLCollection of child elements
console.log('Children:', children);

// First Child Element
let firstChild = startElement.firstElementChild;
console.log('First Child:', firstChild);

// Last Child Element
let lastChild = startElement.lastElementChild;
console.log('Last Child:', lastChild);

// Child Nodes (includes text, comment nodes)
let childNodes = startElement.childNodes;
console.log('Child Nodes:', childNodes);

// Next Sibling Element
let nextSibling = startElement.nextElementSibling;
console.log('Next Sibling:', nextSibling);

// Previous Sibling Element
let previousSibling = startElement.previousElementSibling;
console.log('Previous Sibling:', previousSibling);

// Next Sibling Node (including text and comment nodes)
let nextNode = startElement.nextSibling;
console.log('Next Node:', nextNode);

// Previous Sibling Node (including text and comment nodes)
let previousNode = startElement.previousSibling;
console.log('Previous Node:', previousNode);

// Find closest ancestor that matches the selector
let closestAncestor = startElement.closest('.ancestor-class');
console.log('Closest Ancestor:', closestAncestor);

// Check if an element contains another
let container = document.getElementById('container');
let isContained = container.contains(startElement);
console.log('Container contains startElement:', isContained);

// Match elements against a CSS selector
let matchesSelector = startElement.matches('.myClass');
console.log('Matches .myClass:', matchesSelector);

// Traversing up the DOM tree
function traverseUp(element) {
    let current = element;
    while (current) {
        console.log(current.nodeName);
        current = current.parentElement;
    }
}
traverseUp(startElement);

// Traversing down the DOM tree
function traverseDown(element) {
    if (!element) return;
    console.log(element.nodeName);
    const children = element.children;
    for (let i = 0; i < children.length; i++) {
        traverseDown(children[i]);
    }
}
traverseDown(startElement);

// Finding all descendants matching a selector
function findDescendantsBySelector(element, selector) {
    return Array.from(element.querySelectorAll(selector));
}
let buttonDescendants = findDescendantsBySelector(startElement, 'button');
console.log('Button Descendants:', buttonDescendants);`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Parent Traversal:</strong>
        <ul className="secondary-list">
            <li><code>parentNode</code> - Immediate parent node (includes all node types).</li>
            <li><code>parentElement</code> - Immediate parent element (excludes text nodes, comments, etc.).</li>
            <li><code>closest</code> - Finds the closest ancestor matching a selector.</li>
        </ul>
    </li>
    <li><strong>Children Traversal:</strong>
        <ul className="secondary-list">
            <li><code>children</code> - Collection of child elements.</li>
            <li><code>firstElementChild</code> - First child element.</li>
            <li><code>lastElementChild</code> - Last child element.</li>
            <li><code>childNodes</code> - All child nodes, including text and comment nodes.</li>
        </ul>
    </li>
    <li><strong>Sibling Traversal:</strong>
        <ul className="secondary-list">
            <li><code>nextElementSibling</code> - Next sibling element.</li>
            <li><code>previousElementSibling</code> - Previous sibling element.</li>
            <li><code>nextSibling</code> - Next sibling node, includes text and comment nodes.</li>
            <li><code>previousSibling</code> - Previous sibling node, includes text and comment nodes.</li>
        </ul>
    </li>
    <li><strong>Element Relationships:</strong>
        <ul className="secondary-list">
            <li><code>contains</code> - Checks if one element contains another.</li>
            <li><code>matches</code> - Checks if an element matches a CSS selector.</li>
        </ul>
    </li>
    <li><strong>Custom Traversal Functions:</strong>
        <ul className="secondary-list">
            <li><code>traverseUp</code> - Traverse up the DOM tree.</li>
            <li><code>traverseDown</code> - Traverse down the DOM tree.</li>
            <li><code>findDescendantsBySelector</code> - Find all descendants matching a selector.</li>
        </ul>
    </li>
</ul>`,
    id: 226,
  },
  {
    title: "Event Listeners",
    text: `// Basic Event Listener
let element = document.getElementById('myElement');
element.addEventListener('click', function(event) {
    console.log('Button was clicked!');
});

// Multiple Event Listeners for Different Events
element.addEventListener('mouseover', function() {
    console.log('Mouse is over the element');
});
element.addEventListener('mouseout', function() {
    console.log('Mouse left the element');
});

// Using Arrow Functions
element.addEventListener('click', (event) => {
    console.log('Clicked with arrow function:', event.target);
});

// Event Listener with Options
element.addEventListener('click', handleClick, { once: true }); // Event handler runs once
element.addEventListener('click', handleClick, { capture: true }); // Use capture phase
element.addEventListener('click', handleClick, { passive: true }); // Improves scrolling performance

// Removing Event Listeners
function handleClick(event) {
    console.log('Handling click');
    // Remove listener after first click
    element.removeEventListener('click', handleClick);
}
element.addEventListener('click', handleClick);

// Event Object Properties
document.addEventListener('click', function(event) {
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
    console.log('Current target:', event.currentTarget);
    console.log('Event phase:', event.eventPhase); // 1: Capture, 2: Target, 3: Bubbling
    console.log('Mouse coords:', event.clientX, event.clientY);
    console.log('Keyboard event:', event.key, event.code); // For keyboard events
    event.preventDefault(); // Stop default action
    event.stopPropagation(); // Stop event from bubbling up
});

// Event Delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-class')) {
        console.log('Dynamic element clicked:', event.target.textContent);
    }
});

// Custom Events
let customEvent = new CustomEvent('myCustomEvent', {
    detail: { message: 'Hello from custom event!' }
});

window.addEventListener('myCustomEvent', function(event) {
    console.log('Custom event detail:', event.detail.message);
});
element.dispatchEvent(customEvent);

// Keyboard Events
document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    if (event.key === 'Enter') {
        event.preventDefault();
        // Do something when Enter is pressed
    }
});

// Form Events
let form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    console.log('Form submitted');
    let data = new FormData(form);
    for (let pair of data.entries()) {
        console.log(pair[0] + ': ' + pair[1]); 
    }
});

// Resize and Scroll Events
window.addEventListener('resize', function() {
    console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
});

document.addEventListener('scroll', function() {
    console.log('Scrolled to:', window.pageYOffset);
}, { passive: true }); // Use passive to improve performance

// Touch Events (for mobile devices)
document.addEventListener('touchstart', function(event) {
    console.log('Touch started with', event.touches.length, 'fingers');
});

// Media Events
let video = document.getElementById('myVideo');
video.addEventListener('play', function() {
    console.log('Video started playing');
});
video.addEventListener('pause', function() {
    console.log('Video paused');
});`,
    language: "javascript",
    keypoints: `<ul>
    <li><strong>Basic Event Listener:</strong> Use <code>addEventListener</code> to attach events to elements.</li>
    <li><strong>Multiple Event Listeners:</strong> You can add multiple listeners for different event types on the same element.</li>
    <li><strong>Arrow Functions:</strong> Can be used as event handlers for a more concise syntax.</li>
    <li><strong>Event Listener Options:</strong>
        <ul className="secondary-list">
            <li><code>{ once: true }</code> - The handler runs only once.</li>
            <li><code>{ capture: true }</code> - Event captures in the capturing phase.</li>
            <li><code>{ passive: true }</code> - For scroll events, prevents blocking the main thread.</li>
        </ul>
    </li>
    <li><strong>Removing Event Listeners:</strong> Use <code>removeEventListener</code> with the same function reference.</li>
    <li><strong>Event Object:</strong>
        <ul className="secondary-list">
            <li>Properties like <code>type</code>, <code>target</code>, <code>currentTarget</code>, <code>eventPhase</code>.</li>
            <li>Methods like <code>preventDefault</code>, <code>stopPropagation</code>.</li>
        </ul>
    </li>
    <li><strong>Event Delegation:</strong> Attaching a single handler to a parent element to handle events for its children.</li>
    <li><strong>Custom Events:</strong> Create and dispatch custom events using <code>CustomEvent</code>.</li>
    <li><strong>Keyboard Events:</strong> Handle key presses with <code>keydown</code>, <code>keyup</code>, <code>keypress</code> events.</li>
    <li><strong>Form Events:</strong> Use <code>submit</code> event to handle form submissions.</li>
    <li><strong>Resize and Scroll:</strong> Monitor window resizing or document scrolling.</li>
    <li><strong>Touch Events:</strong> For touch devices, events like <code>touchstart</code>, <code>touchmove</code>, <code>touchend</code>.</li>
    <li><strong>Media Events:</strong> Events for audio/video like <code>play</code>, <code>pause</code>, <code>ended</code>.</li>
</ul>`,
    id: 227,
  },
];
