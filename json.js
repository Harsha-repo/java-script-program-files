// JSON is used to convert the objct to string form
// we use inbuilt stringfy method
// everything gets converted t strings except numbers

var data = {
    a:10,
    b:20
}
var json = JSON.stringify(data)
console.log(json)


// see how DATE OBJECT WORKS AND  USE valueOf() on it