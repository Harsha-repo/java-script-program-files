// in this we learn typeconversion and coercion 

let num = 6
console.log(num) 
let num1 = "123"
let number=Number(num1)
console.log(number,typeof(number))   


//let sum = number+num                                     
//console.log(sum)
console.log(number+num1) // here the number is int and num1 is string because of coercion both get concatenate  
                         // it converts number to string formate and then concat 
console.log(num+number)

console.log(num-num1)  // but here the coercion is differrent the string is changing to int and got subtracted 


// type coercion
let x 
console.log(x,typeof(x))
x=8
console.log(x,typeof(x))
x=x+"harsha"
console.log(x,typeof(x))
x=x-num
console.log(x,typeof(x))

console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean("harsha"))


console.log(+num1+num) // another way of conversion

// this will eventuallly  leads to bug  beacuse its ownsoversions are taking place sometimes 
// that gives lots of bugs whichwe do not expect

let n = "123 harsha"
let m = parseInt(n) // this converts the number in string to number datatype
console.log(m)
// the number 123 in n gets stored in m as 123 number
