let global_var:number=7; // global variable

class myClass{
    class_var:number=10; // class variable 
    myfunction(){
        let local_var:string="Hello" //local variable
        //console.log(local_var);
        return local_var;
    }
}
let myobj = new myClass(); // create a object to access the instances of the class 
console.log(myobj.class_var);
console.log(myobj.myfunction())

