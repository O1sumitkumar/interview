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

//*5 for simple array and object destructuring
let users = ["Ram", "Jon"];
let [user1, user2] = users;

// console.warn(user1);
// console.warn(user2);

//*6 using split

// let [firstName, lastName] = "Sumit jha".split(" ");
// console.log(firstName);
// console.log(lastName);

//*7 for nested array and object destructuring
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

//*8 skipping values with arrays

// let data = ["Subbu", "ankit", "sumit"];
// let [dog, , elder] = data;
// console.log(dog);
// console.log(elder);

//*9 skipping values with objects

// let data = { dog: "subbu", younger: "ankit", elder: "sumit" };

// let { younger, dog } = data;

// console.log(dog);
// console.log(younger);
//* 10

// const name = "Subbu";
// console.warn(name());

//*11
// const result = false || {} || null

// console.warn(result)

//* 12

// const result = null || false || "";

// console.warn(result);

//*13
// const result = [] || 0 || true
// console.warn(result)

//*14

// console.log(Promise.resolve(5));

//*15

// JSON.parse()

//*16

// let name = "sumit";

// function getName() {
//   console.log(name);
//   let name = "subbu";
// }
// getName()

//*17

// let name = "sumit";

// function getName() {
//   console.log(name);
// }

// getName();

//*18
// console.log(`${((x) => x)("i  love ")} to program`);

//*19
// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(...[1, 2, 3]));

//*20
// const name = "subbu";

// console.log(!typeof name === "object");
// console.log(!typeof name === "string");
// console.log(!typeof name === false);

//*21

// const name = "Jhon";
// const age = 25;

// console.log(isNaN(name));
// console.log(isNaN(age));

//*22
// let user = { name: "subbu", age: 25 };
// Object.seal(user);
// user.gender = "male";

// console.log(user);

//*23
// let data = [1,2,3,4]

// data.shift()
// console.log(data);

//*24
// let data = [1, 2, 3, 4];
// delete data[0]
// console.log(data);

//*25
// let a = 31;
// console.log(a % 2);
