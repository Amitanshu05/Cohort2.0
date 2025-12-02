// 1

// function sayHello(){
//     console.log("hello JavaScript");
// }

// sayHello();


//2

// function add(a,b){
//     return a+b;
    
// }

// let ans = add(3,5); // return ka answer waha jaha hai jaha function call kara jata hai
// console.log(ans);

// 3 


// function printName(guest = "Guest"){   // default parameter tha bsdk
//     console.log(`Hi ${guest}`)
// }

// printName('Amitanshu');



// 4 

// function add(...num){
//     let sum = 0;
//     num.forEach(function(val){
//        sum+=val;
//     });
//     console.log(sum);
// }

// add(1,6,8,8,8,8,8);


// function add(...num){
//     let sum = 0;
//     for(let i=0;i<num.length;i++){
//         sum+=num[i];
//     }
//     console.log(sum);
// }

// add(1,6,8,8,8,8,8);




// function add(...num){
//     let ans = num.reduce(function(acc , val){
//         return acc + val ;
//     }, 0);
//     console.log(ans);
// }

// add(1,6,8,8,8,8,8);

// using reduce method 

// reduce method का काम है एक Array (सूची) के सारे elements को लेकर, उन्हें किसी एक single value में "reduce" (यानी छोटा या संक्षिप्त) कर देना।

// यह किसी Array को sum (जोड़ने), multiply (गुणा करने), या एक single object में बदलने के लिए बहुत काम आता है।



// re attempt to gain confidence :

// function abcd(...nums){
//     let ans = nums.reduce(function(acc,val){
//         return acc + val ;
//     },0);
//     console.log(ans);
// }
// abcd(1,2,3,4,5,6,7,8,90);


// creating an iife 

// (function(){
//     console.log("I run immediately")
// })

// ();


// 

// function bahar(){
//     let a = 12 ;
//     function andar(){
//         console.log(a);
//     }
//     andar();
// }
// bahar();


//


// let arr = ['a','b','c','d','e'];
// console.log(arr.push('cc'));
// console.log(arr.shift());


//

let obj = {
    name : "amitanshu" ,
    age : 22 , 
}

for(let key in obj){
    console.log(obj[key]);
}


setTimeout(function(){
    console.log("time's up !!")
},2000);


