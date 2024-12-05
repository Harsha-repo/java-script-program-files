let nums = [1,2,3,4,5,6]
nums.forEach((n,i,nums) => {
    console.log(n,i,nums)
})                   // inside theis we pass a function as argument 
                    // callbackfn(value: number, index: number, array: number[]): void
//filter method
 nums.filter(n=>n%2==0)
 .map(n=>n*2)
.forEach(n=>{

   
    console.log(n)
})

let result = nums.filter(n=>n%2==0)
                .map(n=>n*2)
                .reduce((a,b)=>a+b)
console.log(result)


// its like using . and layers are applied over the array and then out put is fitered through that . layers 