// create element and append child 


// var btn = document.querySelector('button');

// btn.addEventListener('click',function(){
//     var h1 = document.createElement('h1');
//     h1.innerHTML = 'Hello from JS';
//     console.log(h1);

//     var main = document.querySelector('main');
//     main.appendChild(h1);
// });


// var btn = document.querySelector('button');
// var main = document.querySelector('main');

// btn.addEventListener('click',function(){
    
//     var div = document.createElement(div);

//     var x = Math.random()*100;
//     var y = Math.random()*100;
//     var r = Math.random()*360;

//     var c1 = Math.floor(Math.random()*256);
//     var c2 = Math.floor(Math.random()*256);
//     var c3 = Math.floor(Math.random()*256);


    


//     div.style.height = '50px';
//     div.style.width = '50px';
//     div.style.position = 'absolute';
//     div.style.left = x+'%';
//     div.style.top = y+'%';
//     div.style.rotate = r+'deg';
//     div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;

//     main.appendChild(div);


// });


var btn = document.querySelector('button');
var main = document.querySelector('main') ;

var arr = ['amitanshu is the best ' , ' lalaji is the best ' , ' I will kill someone ' , ' aisi ki taisi ' , ' juniper green energy is my first company ' , ' varshney supremacy '];

btn.addEventListener('click',function(){

    var x = Math.random()*100;
    var y = Math.random()*100;
    var r = Math.random()*360;

    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);

    var sc = Math.random()*3
    var h1 = document.createElement('h1');
    var a = Math.floor(Math.random()*arr.length);

    h1.innerHTML = arr[a];
    h1.style.position = 'absolute';
    h1.style.left = x+'%';
    h1.style.top = y +'%'
    h1.style.rotate = r + 'deg';
    h1.style.scale = sc;
    h1.style.color = `rgb(${c1},${c2},${c3})`;
    main.appendChild(h1);
});