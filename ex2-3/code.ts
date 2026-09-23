
// pa 2 — ex 2-3
// a) 

function mysterious(...args: number[]): void {
  const out = args.reduce((acc, num) => acc + num * num, 0);
  console.log(out);
}
mysterious(1, 2, 3); // should output 14

// b) 
let age: number = 25;
function updateAge() {
  age = age + 5;
}
updateAge();
console.log("my age is", age); // should output: my age is 30

// c) 

interface Employee {
  firstName: string;
  age: number;
  lastName?: string;
  salary?: number;
}

const employee: Employee = { firstName: "farid", age: 23 };
employee.lastName = "Mohamed";
const newEmployee: Employee = { ...employee, age: 24, salary: 3000 };
console.log(newEmployee);
// should output: { firstName: 'farid', age: 24, lastName: 'Mohamed', salary: 3000 }


// d) 
const output: string = false || [] ? "Invalid" : "Correct";
console.log("The Input Type is", output);
// should output: The Input Type is Invalid


// e) 
function myFunction(
  x: Record<string, any>,
  y: Record<string, any>
): Record<string, any> {
  const { b, ...rest } = y;        
  return { ...x, ...rest, d: b };  
}

console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
// should output: { a: 1, b: 2, c: 3, e: 5, d: 4 }

console.log(myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));
// should output: { a: 5, b: 4, c: 3, e: 2, d: 1 }


// f) 
function isPrime(n: number): boolean {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(1));  // false


// g) 
function reverseNumber(n: number): number {
  return Number(String(n).split("").reverse().join(""));
}

console.log(reverseNumber(32243)); // should output: 34223


// h)
function first<T>(arr: T[], n?: number): T | T[] {
  if (n === undefined) return arr[0];
  return arr.slice(0, n);
}

console.log(first([7, 9, 0, -2]));     // 7
console.log(first([], 3));             // []
console.log(first([7, 9, 0, -2], 3));  // [7, 9, 0]
console.log(first([7, 9, 0, -2], 6));  // [7, 9, 0, -2]


// i) 
function processParam(param: string | number): number {
  if (typeof param === "string") return param.length;
  return param * param;
}

console.log(processParam("hello")); // 5
console.log(processParam(4));       // 16


// j) 
interface Person {
  readonly id: number;
  name: string;
  age: number;
  address?: string;
}

function createPerson(
  id: number,
  name: string,
  age: number,
  address?: string
): Person {
  const person: Person = { id, name, age, address };

  return person;
}

console.log(createPerson(1, "Ali", 25));
// should output: { id: 1, name: 'Ali', age: 25, address: undefined }