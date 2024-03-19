const jsuser= {
    name:"sachin",
    age:18,
    location:'bokaro',
    email:'sachinkr12@gmail.com'
    

}

jsuser.greeting=function(){
    console.log("helow world ");
}
console.log(jsuser.greeting)
jsuser.greetingtwo=function(){
    console.log(`hellow sachin kumar,${this.name}`);
}
console.log(jsuser.greetingtwo())