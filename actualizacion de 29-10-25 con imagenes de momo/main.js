let boton = document.getElementById("boton");
let nombre = document.getElementById("nom");
boton.addEventListener("click",()=>{

let r1 = document.getElementById("1").checked;



console.log(r1);
let p=0;

if(r1){p++}

let r2 = document.getElementById("7").checked;

console.log(r2);

if(r2){p++}

let r3 = document.getElementById("10").checked;

console.log(r3);

if(r3){p++}

let r4 = document.getElementById("13").checked;

console.log(r4)

if(r4){p++} 

let r5 = document.getElementById("17").checked;

console.log(r5)

if(r5){p++}

let r6 = document.getElementById("24").checked;

console.log(r6)

if(r6){p++}

let r7 = document.getElementById("25").checked;

console.log(r7)

if(r7){p++}

let r8 = document.getElementById("32").checked;

console.log(r8)

if(r8){p++}

let r9 = document.getElementById("33").checked;

console.log(r9)

if(r9){p++}

let r10 = document.getElementById("39").checked;

console.log(r10)

if(r10){p++}

console.log(p)

localStorage.setItem("total",p);

window.location.href = "Index11(final).html";

});

