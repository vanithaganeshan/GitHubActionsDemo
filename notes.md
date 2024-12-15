dynamically typed langauage  - js,python,ruby
statically typed langauge - java,c++,typescript

Transpilation 
--------------
TypeScript must be transpiled into plain JavaScript before it can be executed.

Transpilation in TypeScript refers to the process of converting TypeScript code into JavaScript code. TypeScript is a superset of JavaScript, meaning it introduces features like static typing, interfaces etc.,

Run the TS file
---------------
method1:
        tsc filename.ts
        node filaname.js
method12:
        tsc filename.ts |node filaname.js // using pipe symbol

method3:
Install ts-node  to run the ts file without compiling into js file for that 
npm install -g ts-node
ECMA script - provides the guideline (steps) and rules to run the same script in different browsers
But intially it will throw an error but we can resolve it by creating empty tsconfig.json

How the empty json helps to run this ts-node ?
----------------------------------------------
1. Creating an empty tsconfig.json fixed the issue because ts-node relies on the presence of a tsconfig.json file to configure how TypeScript files are transpiled and executed.
2. If tsconfig.json is missing, ts-node might not know how to handle TypeScript files properly, leading to errors.

Type Inferenece and Annoatation:
--------------------------------

Inference: TypeScript guesses the type for you.
Annotation: You manually declare the type.

class varible:
--------------
while declaring the varibale inside the class no need use the keywords var,const,let.
to access the variables ,funcitons inside the class we need to create a object for that class.

Datatypes
---------

Any : it can accept any kind of datatypes
Primitive:number,string,boolean,void,null and undefined
Non-Primitive:arrays,class,enums,interfaces.

**We can assign a variables that can holds multi type values it is done by denoting with '|" symbol
" var a:number|string|boolean " this is known as Type script multitype.***

Type Alias
----------
It is useful if we want declare certain values .

Function overlaoding
--------------------
use the any type to overwrite the fucntions.

optional params
---------------
declare the variable with "?" mark. ex: y ?:number

Anonymous functions:
--------------------
it will invoke when dynamic event occuring
undefined+undefined = NaN








