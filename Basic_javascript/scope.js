function one(){
    const username="sachin";
    function two(){
        const website="sachin.com"
        console.log(username);
    }
   // console.log(website)
    two ()

}
one()
console.log(addnumber(5)) // easy run not give any error 
function addnumber(number){
    return number+1;
}
console.log(addnumber(5))
addtwonum(5) // can't run  cal before defination in this expressin storing function
const addtwonum =function(num){
    return num+1;

}
