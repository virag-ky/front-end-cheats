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
];
