type address=number|string; // here we assign the multi type values to use it as datatype of any variable
let myAddress:address; // use the alias as datatype
myAddress=1;
console.log(myAddress);
myAddress="vanitha";
console.log(myAddress);
//myAddress=true; // it will throw an error because this dataype holds only alias reference


type marks=60|70|80|90;
let stu_marks:marks;
stu_marks=90;
console.log(stu_marks);
//stu_marks=100; // It will not accept;

type result="pass"|"fail"
let stu_result:result="pass";
//stu_result="pass"
if (stu_result=="pass")
{
    console.log("congrats")
}
else if(stu_result=="fail"){
    console.log("good luck next time")
}
