// rest operator to accept multiple arguments in a function like (name,...)
function user(name,...remaining){
    console.log(name+":"+remaining)
}
user('john',9,'mail','phone')

// it can accept as amany values as arguments and give op