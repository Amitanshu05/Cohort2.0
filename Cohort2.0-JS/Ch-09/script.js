// 7

// let age = prompt('Enter your age ')

// if(age === null ){
//     console.log('Cancelled')
// }else{
//     if(age.trim()===''){
//         console.log('Please write something')
//     }
//     else{
//         age = Number(age)
//         if(isNaN(age)){
//             console.log('Please enter a Number')
//         }else{
//             if(age>=18){
//                 console.log('Valid')
//             }else{
//                 console.log('Invalid')
//             }
//         }
//     }
// }

// 8 

// for(let i = 1 ; i<=10 ; i++){
//     console.log(`5 x ${i} = ` + 5*i)
// }

// need to use backticks ` ` for doing string interpolation

// let count = 0;

// for(let i=1;i<=15;i++){
//     if(i>8){
//         count++;
//     }
// }
// console.log(count)


// 9

// let password = 'Amitanshu'

// let pass = prompt('Enter Password')

// if(pass===null){
//     console.log('Bhai cancel mat daba')
// }else{
//     if(pass.trim()===password){
//         console.log('Sahi hai ')
//     }
//     else{
//         console.log('Nahi hai sahi')
//     }
// }

// Level 2 

// 1)

const password = 'amitanshu'
for(let i = 1;i<=3;i++){
    let pass = prompt('Enter Password')
    if(pass === password){
        console.log('Correct Password')
        break;
    }
    else{
        if(i==3){
            console.log('Account Locked ')
        }
    }
}