alert("Welcome");
console.log("Hello world");
alert("Enjoy");
let a = 3 , b = 5;
console.log("a+b=",a+b);
console.log("a*b=",a*b);
console.log("a-b=",a-b);
console.log("a/b=",a/b);

// Loops in JS

for(let i=1;i<=5;i++){
    console.log("Hello",i);
}
console.log("Loop has ended");

// Calculate sum of 1 to 5 

let sum =0;
for(let i=1; i<=5; i++){
    sum = sum + i;
}
console.log("sum =", sum);

console.log("....WHILE LOOP.....");
// While loop

let i = 1;
while(i<=5){
    console.log("i =",i);
    i++;
}

// do while loop
console.log("....DO WHILE LOOP....");

let j = 1;
do{
    console.log("j =",j);
    j++;
}while(j<=5);

//for of loop
console.log("....FOR OF LOOP....");

 let str = "JavaScript";
 
 let size =0;
 for(let i of str){
    console.log("i=",i);
    size++;
 }
 console.log("String size =",size);

 // for in loop
 console.log("....FOR IN LOOP.....");
 let student ={
    name : "John",
    age : 22,
    isPassed : true,
 };
 for(let key in student){
    console.log("key =",key,"value =",student[key]);
 }

 //Pratice set
 console.log("Pratice set");
 
 for(let num= 0; num<=10; num++){
    if(num%2 === 0)
    console.log("Number =",num);
   
 }

 // Strigs 

 let str3 = "HelloWorld"; // 
 console.log(str3[6]); 

 // Template Literals is a special string

 let obj ={
    item : "Book",
    price : 15,
 };

 let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// Arrays in Js

let marks =  [83, 22, 92, 72, 44]; 
console.log(marks);
 
// Looping over an Array

let heroes = ["ironman", "spiderman", "thor", "hulk","khan"];

// for loop

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}



//for of loop

for (let hero of heroes) {
    console.log(hero);
}

// Pratice set  

let marks1 = [45, 67, 89, 23, 12, 90, 34];
let sum1 = 0;
for (let mark of marks1) {
    sum1 += mark;
}

let avg = sum1 / marks1.length;
console.log("Average marks of the class =", avg);

// Lets pratice more  'Discount'

// let itemss = [100, 200, 300, 400, 500];

// let n = 0;
// for (let val of itemss) {
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     itemss [i] = itemss [i] - offer;
//     console.log (`value after offer =  ${itemss[i]}`);
//     i++
//  }  

// Correction

let itemss = [100, 200, 300, 400, 500]; 
let idx = 0;
for (let val of itemss) {
    console.log(`value at index ${idx} = ${val}`);
    let offer = val / 10;
    itemss[idx] = itemss[idx] - offer;
    console.log(`value after offer =  ${itemss[idx]}`);
    i++
}

// pratice set

let companies = ["Blooberg", "Microsoft", "Uber", "Google", "fiverr", "Speedykart"];
console.log("companies:",companies);

companies.shift(); // remove first company

companies.splice(2, 1, "Ola"); // remove Uber and add Ola;

companies.push("Amazon"); // Adding amazon at last ;

// Functions in JS
console.log("Functions in JS");