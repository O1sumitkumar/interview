console.log("I have been started!!!!");

// comparison two arrays

// let a = [];
// let b = [];

// console.warn(a == b);
// console.warn(a === b);
//* this is two array always compare two memory location

// 2
// let c = [];
// let d = c;
// console.warn(c == d);
// console.warn(c === d);
//* this is true both had same reference and same memory location

//3

// let a = [20]
// let b = [20]

// console.warn(a[0] == b[0])
// console.warn(a[0] === b[0])

//* both having true because we are comparing two element

//4
// let a = [1, 2, 3, 4]
// let b = [{ name:"sumit", age:"19"}]

// console.log(...b);
//* this will spread the value

// for simple array and object destructuring
let users = ["Ram", "Jon"];
let [user1, user2] = users;

// console.warn(user1);
// console.warn(user2);

// using split

// let [firstName, lastName] = "Sumit jha".split(" ");
// console.log(firstName);
// console.log(lastName);

// for nested array and object destructuring
// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ["red", "green", "blue"],
//   extra: true,
// };

// let {
//   size: { width, height },
//   items: [item1, item2],
//   title = "This is the title",
// } = options;

// console.log(width);
// console.log(height);
// console.warn(title);

// skipping values with arrays

// let data = ["Subbu", "ankit", "sumit"];
// let [dog, , elder] = data;
// console.log(dog);
// console.log(elder);

// skipping values with objects

let data = { dog: "subbu", younger: "ankit", elder: "sumit" };

let { younger, dog } = data;

console.log(dog);
console.log(younger);
