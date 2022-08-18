var arreglo = [1,2,3,4,1,4,5,6,7,7];
var sinRepetidos = new Set(arreglo);
console.log(arreglo, arreglo.length);
console.log(sinRepetidos);
console.log("+++++++++1");
var queue = [];
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

console.log(queue);
var primero = queue.shift();
console.log(queue);
console.log(primero);
console.log("+++++++++2");
