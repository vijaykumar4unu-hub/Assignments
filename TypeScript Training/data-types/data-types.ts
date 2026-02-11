//run code 
npx tsx file Path

// Syntax to store data in typescript
// 1. Variable declaration
// 2. Data types    

//variabledeclaration variableName: dataType = value;
//Primitive data types in Typescript

//1.number
let age: number = 25;
let mum1: number = 3.2;     
console.log("Age:", age);
console.log("Mum1:", mum1);

//2.string
let name: string = "John Doe";
console.log("Name:", name); 

//3.boolean >> data type that can only have two values: true or false       
let isStudent: boolean = true;
console.log("Is Student:", isStudent);  

//4.null >> represents the intentional absence of any object value
let nullValue: null = null;
console.log("Null Value:", nullValue);

//5.undefined >> represents a variable that has been declared but has not been assigned a value
let undefinedValue: undefined = undefined;      
console.log("Undefined Value:", undefinedValue);
//6.union types >> allows a variable to hold more than one type of value
let empaddress: string | null| number = "123 Main St";
console.log(empaddress);
//7. any >> allows a variable to hold any type of value without type checking
let randomValue: any = 42;
console.log("Random Value:", randomValue);
randomValue = "Now I'm a string!";
console.log("Random Value:", randomValue);      

//1. Object>> represents a collection of key-value pairs
interface personinfo{
name: string;
age: number;    
empid : number;
address {
    street: string; 
    city: string;   
    country: string;
}

}

let person: personinfo = {
    name: "Alice",
    age: 30
};
console.log("Person:", person); 

//array>> represents a list of values of the same type
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
let mixed: (number | string)[] = [1, "two", 3, "four"];
console.log("Numbers:", numbers);
console.log("Names:", names);
console.log("Mixed:", mixed);   
//tuple>> represents an array with a fixed number of elements of different types
//array vs tuple >> array can have any number of elements of the same type, while a tuple has a fixed number of elements of different types
let personTuple: [string, number] = ["Alice", 30];
console.log("Person Tuple:", personTuple);  