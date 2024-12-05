let array = [1,2,3,4,4]

// let [a,b,c,d,e] = array // with this the elements of array gets assigned to a b c d e 
// console.log(a)

let l = 'my name is hari staying in bengaluru '.split(" ")
let [a,b,c,,d,e,f,g]=l
console.log(...d);

let [h,i,,j,...k] = l
console.log(k)      // three dot operator that stores the rest of the values aster k in a array