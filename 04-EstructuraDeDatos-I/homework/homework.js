'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un 
número natural, su factorial (representado como n!) es el producto de n 
por todos los números naturales menores que él y mayores a 0. 
Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, 
tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la 
misma, y sabiendo que cualquier elemento que se agregue a esta secuencia 
será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en 
la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

// function nFactorial(n) {
//   if(n == 0){
//     return 1;
//   }
//   return n * nFactorial(n-1);
// }

function nFactorial(n) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total = total * (i)
  }
  return total;
}
console.log(nFactorial(5));
//console.log(nFactorial(15));

/**
 * Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en 
la posición 7 de la secuencia.
Numero: 0,1,2,3,4,5,6,7
Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 

 */
function nFibonacci(n){
  var fibo = [];
  fibo[0] = 0;
  fibo[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 2] + fibo[i - 1]; 
  }
  return fibo[n];
}

console.log(nFibonacci(7));

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, 
donde el primer elemento que ingresa es el primero que se quita. 
Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined 
  cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

// class Queue {
//   constructor (list=[]){
//     this.list = list;
//   }

//   getList(){
//     return this.list;
//   }

//   enqueue(valor){
//     this.list.push(valor);
//   }

//   dequeue(){
//     if(this.list.length == 0){
//       return undefined;
//     }
//     return this.list.shift();
//   }

//   size(){
//     return this.list.length;
//   }  
// }

function Queue(){
  this.data = [];
  //this.count = 0;
}

Queue.prototype.enqueue = function(value){
  console.log(this.data);
  //this.data = [...this.data, value];
  //this.count++;
  this.data.push(value);  
};
Queue.prototype.deenqueue = function(){ 
  //if(this.count > 0){
    // this.count--;
    // const [result, ...rest] = this.data; //rest operators [a, ...others]
    // this.data = rest;
    // return result;
  //}
  //else{ return undefined;}
  return this.data.shift();
};
Queue.prototype.size = function(){
  //return this.count; 
  console.log(this.data.length);
  return this.data.length;
};

console.log(Queue.prototype.enqueue(3));
console.log(Queue.prototype.deenqueue());
console.log(Queue.prototype.size());


let queue = new Queue();
console.log(queue.size());
console.log(queue.getList());
queue.enqueue("M");
queue.enqueue("N");
queue.enqueue("M");
queue.enqueue("J");
queue.enqueue("G");
queue.enqueue("T");
queue.enqueue("W");
queue.enqueue("S");

console.log(queue.getList());
queue.dequeue();
console.log(queue.getList());
queue.dequeue();
console.log(queue.getList());
queue.enqueue('K');
console.log(queue.getList());
queue.dequeue();
console.log(queue.getList());
console.log(queue.size());
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
