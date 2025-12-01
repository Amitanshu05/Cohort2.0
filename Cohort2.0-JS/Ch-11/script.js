// function abcd(age , name){
//     // parameters
// }
// abcd(12 , "harsh")
// // arguements

// function abcd(a,b,...c){
//    console.log(a,b,c)
// }
// abcd(1,2,3,4,5,6)


// console.log(a)
// var a ;

// abcd();
// var abcd = function (){
//     console.log("hey")
// };

// script.js:16 Uncaught TypeError: abcd is not a function

// abcd();
// function abcd(){
//     console.log("heyeyeye")
// }

// non var functions me call kabhi bhi kar skte ho 

// function abcd(a,b,c,d){
//     // here the parameters are undefined
// }

// abcd();


// function xyz({name,age}){
//  console.log(name,age)
// }

// xyz({name: "ayush" , age: 22})


// without destructuring 


//function xyz(person) {
    // यहाँ आपको हर बार . लगा कर वैल्यू निकालनी पड़ती
//     let name = person.name;
//     let age = person.age;

//     console.log(name, age);
// }


// function a(...v){
//    console.log(v);
// }
// a(1,2,3,4,5)

// function abcd(a,b,c){   // a = 0 , b = 0 , c = 0 
//    console.log(a,b,c);
// }

// abcd(1,2);

// Arguements in Javascript :

// function abcd(a,b,c,d){
//     console.log(a,b,c,d)
// }

// abcd(1,2,3,4)   // positional arguements mein same order mein value dii jati hai 

// warna default me kya hai ki tum (a = 0 , b = 2 ) etc etc karo

// spread arguement: 

// function abcd(a,b,c,d){
//    console.log(a,b,c,d)
// }
// let arr = [1,2,3,4]
// abcd(...arr)


// nested function 

// function abcd(){
//     function defg(){
//         console.log("heyeyee")
//     }
//     defg();
// }

// abcd();

// scope chain :
let a = 12 ;
function abcd(){
    let b = 12;
    function defg(){
        console.log(b)
    }
}
abcd();

// kaunse variable ki scope kya hoti hai !!!


// Immediately invoked function expression :

(function(){
    let balance = 1222;
}) ();

// for creating private variable ham ye iife use karte hein

// arrow ya fat arrow function :

let fnc = () => {
    console.log("heyyyy")
} ;

fnc();


let fn = function(){
    // iska koi naam nhi haii 
}


// hof -> ek aisa fnc jo doosre fnc ko return karde ya to wo fnc accept karle ek aur fnc parameter mein 

function abcd(){
    return function (){

    }
}


function abcd(fnc){
   console.log("badi baatcheet industry ke logo se ")
}
abcd(function(){}) ; 


function abcd(f){  // f here is higher order function 

}

abcd(function(){}); // function here is called callback function .


// fist class function -> can be used as variables ki tarah use ho skte hein

function abcd (a,b){
    
}
abcd(function(){},2)

