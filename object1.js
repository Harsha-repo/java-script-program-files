// ?and delete

let student={

    name:"harsha",
    roll :45,
    sec:"A",

     boyss : {

        boy1:"hari",
        boy2:"abhi",
        boy3 :"arun"
     }


}

console.log(student)
console.log(student.boys?.boy3.length) // we get undeifned output beacuse we dont have the name boys instead we have boyss
console.log(student.boyss.boy2.length)// for this we get the desired output

delete student.boyss.boy2
console.log(student)    // with this delete function we can delete the desired objectvariable 



// for in loop 

for (let item in student)
{
    console.log(item,student[item])


}



for(let item in student["boyss"]){

    console.log(item,student.boyss[item])
}