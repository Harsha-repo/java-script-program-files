const car={
    brand : 'toyota',
    model : 'el',
    year  : 3,
    color : 'k'
};

console.log('original properties');
for ( let key in car){
    console.log(`${key}:${car[key]}`)       // for each key repective value is being printed
}

const secondprop = Object.keys(car)[1];    // secondprop holds the value of the secondnd key of car object
console.log(Object.keys(car))              // returns the array of keys which are present (before deletion)
delete car[secondprop]                     // we delete the decond key prop

console.log('after deletion');
for(let key in car){
    console.log(`${key}:${car[key]}`) 
}

console.log(Object.keys(car))

// to find the length of the object

const lenofobj = Object.keys(car).length;           // since we have deleted a key the length gets reduced to 3j
console.log('length of the object :',lenofobj)