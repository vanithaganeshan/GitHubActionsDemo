// function add(num1:number,num2:number):number{
//     return num1+num2;
// }
// let result:number=add(10,15);
// console.log("Value of the Result is:"+result);
// if(result>15){
//     console.log("accepted")
// }
// else if(result==10){
//     console.log("waitlisted")
// }
// else
// console.log("rejected");


// // Function Overloading

// function addValues(val1:number,val2:number):number;
// function addValues(val1:string,val2:string):string;
// function addValues(val1:any,val2:any):any
// {
//     return val1+val2;
// }
// //let result=addValues(1,2); -- we need to say type for the result variable to store.
// console.log(addValues(1,2));
// console.log(addValues("vani","tha"));

// // calling the fucntions by object

// let myObject=(fname:string,lname:string):string=>{
//     return fname+lname;
// }
// console.log (myObject("vanitha","ganeshan"));

// // no restrictions on params -  to pass unlimited params
// function addNumbers(...numbers:number[]):number{
//     return numbers[0]+numbers[4]
// }
// console.log(addNumbers(1,2,3,4,5,6,));

// // to work all the passing params

// function multiparams(...mulval:number[]){
//     let sum=0;
// for(let i=0;i<=mulval.length-1;i++)// <= will throw error if the last index is undefined 
// {                                // always use < or length-1
//     sum=mulval[i]+sum;
//     console.log("index value is :",mulval[i]);
//     console.log("index is:", i);

// }
// return sum;

// }
// console.log(multiparams(7,6,5));

// define the params are as default value

function defaultValues(price:number,discount:number=0.5):number{
    return price*(price*discount);
}
console.log(defaultValues(100)); // it doesnt mean declared values cannot change, it can.
console.log(defaultValues(300,0.2));
//optional arguments 

function optparams(x:number,y?:number,z?:number):number{
//     if(y){
//         if (z){
//             return x+y+z;
//         }
//         else {
//             return x+y;
//         }
//     } 
//     else{
//         if(z){
//             return x+z;
//         }
//         else{
//             return x;
//         }
//     }
//   }

if(y&&z){
    return x+y+z;
} else{
    if(z){
        return x+z;
    }
    else return x;
} 
}
  console.log(optparams(5,3));
// Anonymous funciton : occurs when dynamic event or node is generated
let obj1=function(){
    console.log("Hello")
};
console.log(obj1()); // it will print undefined for this console call because function doesnt return any
// Dynamic Constructor
let myconstructor=new Function('a','b',"return(a+b)")
console.log(myconstructor(5,6));

// importing the function from 06.1-functions file
import {add} from "./06.1-functions";
console.log(add(2,3));
