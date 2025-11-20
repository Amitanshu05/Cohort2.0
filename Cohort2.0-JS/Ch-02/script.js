var a = 12;
let b = 12;
const c = 13; // fixed value

{
  var a = 15; // doesnt respect scope
}

console.log(a);

{
  let a = 15; // respects scope
}

console.log(a);

console.log("ayoooooo !!!");
console.info("ayooooo !!");
console.warn(); //yellow warning 
console.error(); 
console.table({name : "amitanshu"});

// its the same (info and log) , its just that browsers treat them dofferently

prompt("name ?") // to ask via dialogue box 
alert("amitanshu !!") // seedha batata hai 

//  string -> "amitanshu"
// ' ' , ajnru3r3rb -> string 

// String operations 

// "amitanshu bhai kaise ho ?".slice(0,4)

"amitanshu 2+2" // amitanshu 2+2;
`amitanshu ${2+2}` //amitanshu 4;

"amitanshu".split();
"amitanshu".split(' '); 

"amitanshu".replace('m','l'); //replaces the first occurrence only.
"amitanshu".replaceAll('m','l'); // replace all 

"amitanshu bhaiya mast hein".includes('amit');

// statements and expressions 
// ek aisa code jo answer dede usko statements kehte hein 
// ek complete line ka code jiske end mein ; lagta hai 

// any line written is called expressionn . 


