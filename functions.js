// functions

function add( a ,  b){
    return a+b

}

function factorial(a){
    let fact =1
    for(let i=1;i<=a;i++){
        fact = fact*i
    }
    return fact
}

function recfactorial(a){
if(a==0){
    return 1
}
else{
return a*recfactorial(a-1)

}
}

let result =add(4,5);
console.log(result)
let ans = factorial(5);
console.log(ans)
let recresult = recfactorial(5);
console.log(recresult)