function sayname(){
    console.log("hello")
}
sayname()
function addnumber(number1, number2){
    console.log(number1+number2);

}
addnumber(3,5);
function loginuser(user){
    return `${user} just logged in `
}
console.log(loginuser("sachin kumar"))
// rest operator 
function calculatecartprice(...num1){
    return num1
}

 console.log(calculatecartprice(200,400,500))
 // object passs in function 
//  user={
//     username:"sachin kumar",
//     price:20000
//  }
 function handleobject(anyobject){
    console.log(`user name is${ anyobject.username} and price is ${anyobject.price}`);
 }
 handleobject({
    username:"sam",
    price:5000
 })
 const array=[100,200,300]
 function arrrayreturn(array1){
    return array[1];
 }
 console.log(arrrayreturn(array));
 // direct pass 
 function directarray(arr){
    return arr;
 }
 console.log(directarray([100,200,500,450,780]))
