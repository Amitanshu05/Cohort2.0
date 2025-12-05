// 1

// function runTwice(fn){
//     fn();
//     fn();
// }

// runTwice(function(){
//     console.log("hello");
// });

//ek fnc parameter me pass hota hai and wahi refernece diya jata haii

// 2

// function pure(){
//    console.log("hey");
// }
// pure();

// Another example : 

// function abcd(a,b){
//     console.log(a+b)
// }
// abcd(1,2);
// abcd(1,2);



// let a = 12;
// function impure(){
//    console.log(Math.random()+a);
// }
// impure();


// 3

// function abcd(name,age){
//     console.log(name,age);
// }

// abcd({name:"amitanshu" , age:12});

// object destructuring -> 

// 4

// this keyword : -> dynamic keyword jiski value badal jaati hai baar baar 

//  console.log(this);
// // --> window 

// function abcd(){
//    console.log(this);
// }
// abcd();

// this -> window

// let obj = {
//     name : "harsh",
//     fnc : function(){
//         console.log(this);
//     } ,

//     fnc2 : ()=>{
//         console.log(this);
//     }
// }
// obj.fnc();  // obj 
// obj.fnc2(); //  window since isne apne parent se uthaya this ka value jo ki global space me hai and global space mein iski value to window hi hoti hai 



// if there is a 'this' inside a fnc which is inside an object then the 'this' ki value is equals the object 


// let obj1 = {
//     name : 'harsh' ,
//     fnc : function(){
//         let fn = ()=>{
//             console.log(this);
//         }
//         fn(); 
//     },
// };

// obj1.fnc();

// yaha pe this ek fnc ke andar hai hence value will  be object 
// yahi iski jagah agar normal fnc hota to this value revert ho jati


// let  arr = [1,2,3,4,5] ;

// let neww = arr.map(function(val){
//     return val*val ;
// });

// console.log(neww);


// let arr1 = [1,2,3,4,5,6,7];
// let arr2 = arr1.filter(function(val){
//     if(val%2==0) return val ; // in filter return statement must be a boolean value ;
// });

// console.log(arr2);


// let arrr = [1000,2000,3000];

// let newarrrr = arrr.reduce(function(acc,val){
//     return acc + val ;
// },0);

// console.log(newarrrr);


// some and every -> as name suggests , checks for either some cndns or every cndns 


// let Arr = ['amam' , ' sdjsds' , 'asjdsdb' , ' asdhdsdhjsdag' , 'amitanshu' , 'nayan' , 'shivang ' , 'kushagra'  ,  'billaaaa'];

// let nn = Arr.some(function(val){
//     return val.length > 3 ;
// })

// console.log(nn);


// Object.freeze() - > object ki values ko freeze kar deta hai , they cant be changes now 


let obj = { 
    name : "amitanshu",
    age : 20 ,
    college : "VIT",
}

Object.seal(obj);
obj.name = 'amiiiiiitaaaa';

console.log(obj);


// freeze - >  na add kar skte na change kar skte values 

// seal - > add nhi kar skte but update kar skte ho




