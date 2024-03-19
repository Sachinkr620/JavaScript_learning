const tinder= new object() object declaration singleton object  or constructor 
const tinderuser={}
tinderuser.user="sachin kumar";
tinderuser.id=123
tinderuser.islogin=false
console.log(tinderuser)
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj3=Object.assign(obj1,obj2);
//const obj3=Object.assign({},obj1,obj2); // better use 

const obj3={...obj1, ...obj2}
console.log(obj3)
const user=[
    {
        id:123,
        name:'sachinkr@1245'


    },
    {
        id:1234,
        name:'sachinkr@124'


    },
    {
        id:12345,
        name:'sachinkr@12'

    }

]
console.log(user[0].name)
 //console.log(Object.keys(regularUser.key)); //  all key return store in array 
// console.log(Object.values(regularUser)); all value return store in array 
// console.log(Object.entries(regularUser)); key value pair ka array
console.log(regularUser.hasOwnProperty('isLoggedIn'));
// if you want to see more proprty on object go to console and cal any object go to prototype 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sachin"
}
course.courseInstructor
const {courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);
//course.courseInstructor // this is way to print value of object we can use sortcut of this by destructuring 
//const {courseInstructor//kya value extract krna h // }=course- kha se value extract kr rhe h 
//const {courseInstructor: small name(instructor) } 
