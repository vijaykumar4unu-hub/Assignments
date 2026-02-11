//1. number >> the data type that we are going to use to store numbers with decimal or without decimals without any quotations.
let num1 = 10;
let num2 = 3.14;
console.log (num1);
console.log (num2);


//2. string >> the data type that we are going to use to store text or chacarcters with the help of single quotes ot double quotes or backticks.
let empname = "vijaykumar";
let location = 'hyderabad';
console.log (empname);
console.log (location);

let greeting = 'he told me, "Good morning"';
let anothergreeting = " i told him, 'very good morning' and also \" nice to work|";
console.log (greeting);
console.log (anothergreeting);

// backticks >> will be used to store template literals
let message = ' new employee name is $ {empname} and location is $ {location}';
console.log (message);

//3.boolean >> the data type that we are going to use to store true or false values
let isactive = true;
console.log (isactive);
console.log (10<5);

//4. Undefined >> the data type that we are going to use to store a variable that is declared but not assigned with any value.
let age;
console.log (age);




// 6. Date >> Date repersents date and time in javascript. we can create a date object by using the new keyword and Date() constructor.
let currentdate = new Date();
console.log (currentdate);

//current year
console.log (currentdate.getFullYear());

//current month
console.log (currentdate.getMonth()+1);  

//current date
console.log (currentdate.getDate());    

//Current hours
console.log (currentdate.getHours());

//Current minutes
console.log (currentdate.getMinutes());     

//Current seconds
console.log (currentdate.getSeconds()); 

// symbol >> symbol represents a unique hidden identifier.
let color = Symbol();
let productinfo = {
    productname : "iphone 14 pro max",
    price : 120000,
    [color] : "silver"            
}
console.log (productinfo);