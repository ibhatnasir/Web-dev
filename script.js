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

console.log("WHILE LOOP");
// While loop

let i = 1;
while(i<=5){
    console.log("i =",i);
    i++;
}

// do while loop
console.log("DO WHILE LOOP");

let j = 1;
do{
    console.log("j =",j);
    j++;
}while(j<=5);

//for of loop
console.log("FOR OF LOOP");

 let str = "JavaScript";
 
 let size =0;
 for(let i of str){
    console.log("i=",i);
    size++;
 }
 console.log("String size =",size);

