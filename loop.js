// while (condition) {
//   // code block to be executed
// }

let i = 0;
while (i < 5) {        
  console.log(i);
  i++;
}

// reverse loop
const fruits = ["apple", "orange", "banana"];

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(`${i}. ${fruits[i]}`);
}

// => 2. banana
// => 1. orange
// => 0. apple


// for looop
for (let i = 0; i < 4; i += 1) {
  console.log(i);
};

// => 0, 1, 2, 3


// dowhileloop

x = 0
i = 0

do {
  x = x + i;
  console.log(x)
  i++;
} while (i < 5);
// => 0 1 3 6 10


//looping through 
const array =[10]
for (let i = 0; i < array.length; i++){
  console.log(array[i]);
}

// => Every item in the array


// *************all loops in javsacript **************



// #JavaScript Loops
// #While Loop
// while (condition) {
//   // code block to be executed
// }

let j = 0;
while (j < 5) {        
  console.log(j);
  j++;
}
// #Reverse Loop
const fruitss = ["apple", "orange", "banana"];

for (let i = fruitss.length - 1; i >= 0; i--) {
  console.log(`${i}. ${fruitss[i]}`);
}

// => 2. banana
// => 1. orange
// => 0. apple
// #Do…While Statement
x = 0
i = 0

do {
  x = x + i;
  console.log(x)
  i++;
} while (i < 5);
// => 0 1 3 6 10
// #For Loop
for (let i = 0; i < 4; i += 1) {
  console.log(i);
};

// => 0, 1, 2, 3
// #Looping Through Arrays
for (let i = 0; i < array.length; i++){
  console.log(array[i]);
}

// => Every item in the array
// #Break
for (let i = 0; i < 99; i += 1) {
  if (i > 5) {
     break;
  }
  console.log(i)
}
// => 0 1 2 3 4 5
// #Continue
let text
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
// #Nested
for (let i = 0; i < 2; i += 1) {
  for (let j = 0; j < 3; j += 1) {
    console.log(`${i}-${j}`);
  }
}
// #for...in loop
const fruit = ["apple", "orange", "banana"];

for (let index in fruit) {
  console.log(index);
}
// => 0
// => 1
// => 2
// #for...of loop
const fruites = ["apple", "orange", "banana"];

for (let fruit of fruites) {
  console.log(fruit);
}
// => apple
// => orange
// => banana

