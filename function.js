// function addTwoNos(num1,num2){
//     return num1+num2;
//     console.log(result);

// }
// const result=addTwoNos(4,5);
// console.log(result);

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log(`${username},please enter a valid username`);
//         return
//     }
//     console.log(`${username},Good Afternoon You've logged in`);
// }
// loginUserMessage();

// function addInYourCart(num1, num2) {
//     console.log(num1);
//     console.log(num2)
// }
// addInYourCart(100,200,300,400);
function addInYourCart(...val) {
    // console.log(num1);
    // console.log(num2);
    console.log(val);

}
addInYourCart(100,200,300,400);

//scope
var b = 300;
if(true){
    let a = 10;//block scope
    var b = 20;//global scope
    const c = 30;//block scope
    console.log(c);
    console.log(a);
}

console.log(b);
//...............................

// function one(){
//     const personName="dibya";
//     function two(){
//         const childrenName="abc";
//         const location="bbsr";
//         console.log(childrenName);
//         two();   //it not give any output or error or

//         }
//         // console.log(childrenName);// it creat error
//         two();
//         console.log("parent called");
//     }
//     one();


    const user = {
        username : "Dibya",
        location : "puri",
        userMessage  : function(){
            // console.log(`${this.username},hello everyone`);
            console.log(this);
        }

    }
    user.userMessage();
    // console.log(user.userMessage());
    // console.log(user);




    // Arrow function(fat arrow function)
       const schoolData=(schoolid,schoolname,location)=>{
        console.log(schoolid);
        console.log(schoolname);
        console.log(location);
       }
       schoolData(101,"st.xavier's","bbsr");


       const addTwo = (num1,num2) => num1+num2
       console.log(addTwo(6,6));