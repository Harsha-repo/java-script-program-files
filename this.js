// this is like this object so fetch whatever that is in that particular object 
// let us see with an example

let name={

    e1 : "hari",
    e2 : "giri",

    job : function(){

        console.log("iam a developer  "+name.e1)
    }

}
let r = name.job()

let name1={

    e1 : "siri",
    e2 : "iri",

    job : function(){
        console.log("iam a developer"+name1.e1) // isntead of using class name every time we use this keyword 

}
}

let r1 = name1.job()
console.log(r1)


// why it is called this 