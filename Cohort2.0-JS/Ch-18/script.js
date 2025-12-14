// // set timeout and set interval

// // setTimeout - > used to provide delay .

// // synch : ek baar me sirf ek process hoga and async mein multiple process hote hein at the same time 

// // JS is sync lang 

// // console.log('hello 1 ');

// // setTimeout(function(){
// //     console.log('hello 2 ');
// // },1000);   // after the fnc we write the delay we need.

// // console.log('hello 3 ');
// // console.log('hello 4 ');
// // console.log('hello 5 ');

// var btn = document.querySelector('button');
// var h1 = document.querySelector('h1');

// btn.addEventListener('click',function(){
//     h1.innerHTML = 'changing user...';
    
//     setTimeout(function(){
//         h1.innerHTML = 'Amitanshu is the best';
//     },2000)
// });


// var a = 0;

// var int = setInterval(function(){

//     a++;

//     console.log(a);

// },30);

// // clearInterval(int);
// // set timeout -> ek delay lagana type .
// // set interval -> ek controlled loop type .

// setTimeout(function(){

//     clearInterval(int);

// },2000)


var grow = 0 ;
var btn = document.querySelector('button');
var h2 = document.querySelector('h2');
var inner = document.querySelector('.inner');

btn.addEventListener('click',function(){
    btn.style.pointerEvents = 'none';
    var int = setInterval(() => {
        grow++;
        h2.innerHTML = `${grow}%`;
        inner.style.width = grow+'%';
    }, 200);

    setTimeout(() => {
        clearInterval(int);
        btn.innerHTML = 'downloaded';
        btn.style.opacity = 0.5;
    }, 20000);
});


