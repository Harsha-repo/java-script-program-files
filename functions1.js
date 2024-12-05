// function as an expression 
// we assign a function to a variable and with the help of that variable we try to call function and execute it


// global variable declarations are done here
let fibo=  function fibonacci(n){
                    let a = 0
                    let b=1
                    let res =0
                    for(let i=0;i<=n;i++){
                        console.log(res)
                        a=b
                        b=res
                        res=a+b
                    }


                }
let result=fibo(5)
console.log(result)


// in this i assigned a fibonacci series generating funciton to a variable fibo 
// and that ans is stored in the result and later printed 
// hance we see this as the assigning funciton to a variable