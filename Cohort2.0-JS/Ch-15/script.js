// DOM -> Document Object Model
// Frontend ki JS

// Dom ke 4 pillers hein 

// 1) Selection of an element
// 2) Changing HTML 
// 3) Changing CSS
// 4) Event Listeners

// 1 

// let h1 = document.querySelector('h1');
// console.log(h1);

// let h2 = document.querySelector('h2');
// console.log(h2);

// 2

// var h = document.querySelector('h1');
// h.innerHTML = 'I am Batman' ; 


// 3 

// let x = document.querySelector('h1');
// x.innerHTML = 'DOM padhlo guys';
// x.style.color = 'red';


// let h1 = document.querySelector('h1');
// h1.innerHTML = 'Changed HTML';
// h1.style.color = 'gold';


// h1.addEventListener('click',function(){
//     console.log('hello');
// });


// let heading = document.querySelector('h1');
// let btn = document.querySelector('button');

// btn.addEventListener('click',function(){
//     btn.style.color = 'red';
//     heading.style.fontSize = '70px';
//     heading.style.color = 'orange';
    
// });

// var h1 = document.getElementById('head');
// var h2 = document.getElementsByClassName('elem');

// textContent and innerHTML and innerText
// querySelector and querySelectorAll


let h2 = document.querySelector('h2');
let btn = document.querySelector('button');
let btn2 = document.querySelector('#button');

btn.addEventListener('click',function(){
    h2.innerHTML = parseInt(h2.textContent) + 1 ;
});

btn2.addEventListener('click',function(){
    h2.innerHTML = parseInt(h2.textContent) - 1 ;
});


