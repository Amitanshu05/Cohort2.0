// // 1 

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// // 2 

// for(let i=2;i<21;i+=2){
//     console.log(i);
// }

// 3

// for(let i = 10;i>0;i--){
//     console.log(i);
// }

// // 4 

// for(let i=1;i<=5;i++){
//     console.log('Yes');
// }

// // 5 

// for(let i = 1 ; i<=10 ; i++){
//     if(i%2==0){
//         console.log( i +  ' is Even ')
//     }
//     else{
//         console.log( i + ' is Odd ')
//     }
// }

// 6 -> jab bhi prompt se kuch mangoge to wo string ayega , we have to convert it to number for using it here in this question 

// let num = +prompt('Number batao')
// let num = ParseInt(num)


// if(num>=0){
//     console.log('Positive Number ')
// }

// else{
//     console.log('Negative Number ')
// }12

// 7

// let Age = +prompt('Please enter your age')

// if(Age>=18){
//     console.log('Valid')
// }else{
//     console.log('Inalid')
// }

// Exception Handling

let age = prompt('Please enter your age : ')

if(age === null){
    console.log('Bhai cancel mat Daba')
}

else if (age.trim() === ""){
    console.log('Bhai kuch to likh le !!')
}

else if (isNaN(age.trim()) === true){
    console.log('Bhai text mat likh please ')
}

else{
    console.log('Ab sahi hai !!')
}
               

