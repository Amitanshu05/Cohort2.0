// let count = 0 ;

// while(true){
//     let entry = prompt("Enter a word");
//     if(entry === "yes") count++;
//     if(entry === "stop") break;
// }
// console.log(count);



// for(let i =1;i<=50;i++){
//     if(i%7 === 0){
//         console.log(i);
//     }
// }



// let sum = 0 ;

// for(let i = 1 ; i <=30 ; i+=2){
//     sum+=i;
// }

// console.log(sum);



// while(true){
//     let input = prompt("Enter a number");
//     if(Number(input) % 2 == 0) break ;
// }


// let num1 = +prompt("num 1")
// let num2 = +prompt("num 2")

// for(let  i = num1 ; i = num2+1 ;num1++){
//    console.log(num1);
// }


// let count = 0 ;
// for(let i=1;i<21;i+=2){
//     if(count===3) break;
//     count ++ ;
//     console.log(i);
// }

// let count = 0 ;

// for(let i =1;i<6;i++){
//     let entry = +prompt("number");
//     if(entry>=0) count++;
// }

// console.log(count);



// let balance =  1000 ;

// for(let i = 1; i<=3 ; i++){
//     let amount = +prompt("amount batao")
//     if(balance > amount) {
//         balance -= amount ;
//         let alertmess = alert(balance + " is remaining ")
//     }
//     else console.log(" Insufficient Amount ")
// }


// na ke barabar use case .
// do{
//     console.log("hello")
// }
// while(12>13){
//     console.log("huihui")
// }

// function abcd(n){
//     if(n === 0 ) return ;
//     console.log(n);
//     abcd(n-1);
// }

// abcd(5);


// Functions in JavaScript : 

// function - > code tab chalega jab aap usko call karoge and jitna man chahoge utni baar use kar skoge 

function doSomething(name,age,email){
    console.log(name,age,email); // arguements 
}

doSomething("harsh" , 27 , "harsh@gmail.com") 

// variable hoisting 

console.log(x); // Output: undefined (x is hoisted)
var x = 5;

// console.log(y); // Output: ReferenceError (y is in TDZ)
// let y = 10;

// function hoisting 
hello(); // Output: Hello from Hoisted function!

function hello() { // Full function body is hoisted
    console.log("Hello from Hoisted function!");
}

// Rest Parameters ES6 (ECMAScript 2015) ka ek feature hai. Yeh allow karta hai ki aap ek function ko indefinite number of arguments (kitne bhi arguments) de sakein.
// Yeh saare bache hue arguments ko lekar unko ek single JavaScript Array mein pack kar deta hai.

// use caseof rest arguements : 
function sumAll(firstNumber, ...theRest) { // '...theRest' rest parameter hai
    // firstNumber = 10
    // theRest = [20, 30, 40] (Array ban gaya)
    
    let sum = firstNumber;
    
    // theRest array par loop kar sakte hain
    for (let num of theRest) {
        sum += num;
    }
    
    return sum;
}

const total = sumAll(10, 20, 30, 40); 
console.log(total); // Output: 100
