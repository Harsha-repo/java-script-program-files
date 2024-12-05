// #Comparison Operators
// 1 > 3                // false
// 3 > 1                // true
// 250 >= 250           // true
// 1 === 1              // true
// 1 === 2              // false
// 1 === '1'            // false
// 1=='1'               // true  : beacuse the coercion leads to conversion into single datatype and gets comapred

// for this reason we always prefer to use the === that compares the value and the datatype also then we get false to above one


// #Logical Operator !
// let lateToWork = true;
// let oppositeValue = !lateToWork;


// // => false
// console.log(oppositeValue); 
// #Nullish coalescing operator ??
// null ?? 'I win';           //  'I win'
// undefined ?? 'Me too';     //  'Me too'



// false ?? 'I lose'          //  false
// 0 ?? 'I lose again'        //  0
// '' ?? 'Damn it'            //  ''

0 == false   // true
0 === false  // false, different type
1 == "1"     // true,  automatic type conversion 
1 === "1"    // false, different type not only value but type is also compared
null == undefined  // true
null === undefined // false
'0' == false       // true
'0' === false      // false


let n = false
let m = !n
console.log(m)
let k =null ?? ""
console.log(k,typeof(k))   

