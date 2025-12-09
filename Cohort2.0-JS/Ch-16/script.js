// var h1 = document.querySelector('h1');
// h1.innerHTML = 'Kya Haal Rajjeeyyy!!!!!!!!';
// h1.style.color = 'pink';

// h1.addEventListener('click',function(){
//     h1.style.color = 'blue';
// });


// web api kya hoti hai ? 

// inbuilt method -> Math.random (0 se 1 ke beech mein random numbers har baar )

// var a = Math.random();
// console.log(a);


// var a = Math.random()*100; // 0 to 100 .
// var b = Math.floor(a); take the floor value (83.23332 = 83)
// console.log(b);


// var btn = document.querySelector('button');
// var box = document.querySelector('#box');

// btn.addEventListener('click',function(){
//     var c1 = Math.floor(Math.random()*256);
//     var c2 = Math.floor(Math.random()*256);
//     var c3 = Math.floor(Math.random()*256);

//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
//     box.innerHTML = `rgb(${c1},${c2},${c3})`
// });

// var arr = ['vedant','abhi','sumit','ankit','satwik'];
// var a = Math.floor(Math.random()*arr.length);
// console.log(arr[a]);

// var arr = ['abhishek','kunjika','sukunj','suggi','kushalji','amitanshu','aaditya'];
// var btn = document.querySelector('button');

// var a = Math.floor(Math.random()*arr.length);

// console.log(arr[a]);


var arr = [
    {
       team:'CSK',
       primary:'yellow',
       secondary:'blue'
    },
    {
       team:'RCB',
       primary:'red',
       secondary:'black'
    },
    {
       team:'MI',
       primary:'blue',
       secondary:'gold'
    },
    {
        team:'KKR',
        primary:'purple',
        secondary:'gold'
    }
];

var btn = document.querySelector('button');
var h1 = document.querySelector('h1');
var main = document.querySelector('main');


btn.addEventListener('click',function(){
    var num = Math.floor(Math.random()*arr.length);
    h1.innerHTML = `${arr[num].team}`;
    h1.style.backgroundColor = `${arr[num].secondary}`;
    main.style.backgroundColor = `${arr[num].primary}`
})
