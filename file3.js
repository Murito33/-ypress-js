// main.js

// Числовий тип
let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
let product = num1 * num2;
console.log("Sum:", sum);
console.log("Product:", product);

// Рядковий тип
let str1 = "Hello";
let str2 = "World";
let greeting = str1 + ", " + str2;
console.log("Greeting:", greeting);

// file_bigint.js
let bigIntNum = 9007199254740991n;
let anotherBigIntNum = BigInt(Number.MAX_SAFE_INTEGER) + 1n;

console.log("BigInt Number:", bigIntNum);
console.log("Another BigInt Number:", anotherBigIntNum);

// Тип масиву
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(num => num * 2);
console.log("Numbers:", numbers);
console.log("Doubled Numbers:", doubledNumbers);

// Тип об'єкта
let person = {
  name: "John",
  age: 30,
  city: "Example City"
};
console.log("Person:", person);