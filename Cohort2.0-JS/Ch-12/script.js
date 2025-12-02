// anonymous function -> jiska naam hi nhi hai

// function (){

// }

// pure function -> same input pe same output , no side effects 

// impure function -> same input pe different output , side effects maybe 


// let a = 12;
// function abcd(val){
//     console.log(val+2); // pure function 
// }

// abcd(12);


// let aa = 12 ;

// function xy(val){
//     console.log(Math.random() + val)
// }


// xy(12);
// xy(12);
// xy(12);
// xy(12);   // impure function

// global scope and function scope 

// closure -> ek aisa fnc jo ek aur fnc return karega but jo returning fnc hai wo parent ka variable use karega

// function abcd(){
//     var a = 33;
//     return function xyz(){
//         console.log(a);
//     }
// }

// abcd();  // har closure ek hof bhi hota hai 




// Arrays and Objects in JavaScript

// ekse se jyada logo ko rkhne ki jagah 

// let arr = [1,2,3,4,5,6,7,7,8]
// console.log(arr[5]);

// let arr1 = [];
// let arr2 = new Array();

// arrays operations : -> push , pop , 

// shift : ek value uda deta hai starting ki and return kar deta hai 


// let ax = [1,2,3,4]
// ax.shift();

// unshift us value ko starting me laga deta hai

// ax.indexOf(3); -> index bata deta

// array destructuring 

// let b = [1,2,3,4,5]
// let [r,y,z] = b ;

// yaha index wise values aajayengi variables mein

// let numbers = [1,5,88,44,96];

// let bigNumbers = numbers.filter(function(num){
//     return num>10;
// });


// spread operator : -> 

// let original = [1,23,44,55];
// let copy = [22,55,77,343,33];

// let combined = [...original , ...copy , 5];
// console.log(combined);


// iterating over arrays :

let arr = [1,2,3,4,5];
for(let i =0;i<4;i++){
    console.log(arr[i]);
}

// via for loop :

let ax = [1,2,3,4,5];
ax.forEach(function(val){
    console.log(val);
})

// via for each 


// Objects in Javascript 

let obj = {
   name : 'harsh',
   age : 12, 
   email : "amitanshu@gmail.com"   // key-value pair .
};

let ob2 = new Object();


let obj33 = {
    name : "amitanshu",
    socials : {
        insta :11,
        facebook : 23,  // nested objects 
    }
};

obj['name'] ;
obj.name  ;

delete obj.name ; // deleting properties 



