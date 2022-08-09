// 'use strict'

// let a = 10, b = 5;

// var obj1 = {
//     valor: 1
// }, obj2 = {
//     valor: 2
// }

// obj2 = obj1;

// obj2.valor = 8;

// console.log(obj1, obj2);

// console.log("Global", this);

// function miObje(variable){
//     var a = 10;
//     console.log("funcion", variable);
// }

// miObje(this);

// this.numero = 4000;

// var objetoCompleto = {
//     valor: 100,
//     auxiliar: 200,
//     funcion: function (){
//         console.log("Local", this);
//     }
// }

// var otroObj = objetoCompleto.funcion;
// objetoCompleto.funcion();

// otroObj();

// //++++++++++++++++

// function sumadorBase(base){
//     let suma = 0;
//     function sumaHija1(){
//         return suma += base;
//     }
//     function sumaHija2(){ 
//         suma = 0;
//         return suma;
//     }
//     return [sumaHija1, sumaHija2];
    
// }
// const sumador5 = sumadorBase(5);
// console.log(sumador5[0]());
// console.log(sumador5[0]());
// console.log(sumador5[1]());
// console.log(sumador5[0]());
// console.log(sumador5[0]());
// console.log(sumador5[0]());

//Usar el bind
const mati = {
    name: "Matias"
}
const diego = {
    name: "Diego"
}
function log (){
    console.log(this.name);
}
const logMati = log.bind(mati);
logMati();

//Usar el call

var obj = {
    saludo: "Hola 🟧"
}

function saludar(a,b){
    console.log(this.saludo);
    return a + b;
}

console.log(saludar.call(obj,3,3));
//Usar apply
obj.saludo = "Hola 🦁";
console.log(saludar.apply(obj,[9,3]));