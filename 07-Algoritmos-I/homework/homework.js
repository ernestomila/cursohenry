'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let i = 2;
  let primo = false;
  let aux = num;
  let arr = [1];
  while (num > 1){
    if(num % i === 0) {
      console.log(num, i);
      arr.push(i);
      num = num / i;
    } else {
      i++;
    }
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var cambio = true; 
  while(cambio){
    cambio = false;
    for (let i = 0; i < array.length; i++) {
      if(array[i] > array[i+1]){
        let aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux;
        cambio = true;
      } 
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let aux = array[i]; 
    for (let j = i - 1; j >= 0; j--) {
      console.log(array[j]);
      if(aux < array[j]){
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      } //8,7,6,5,4
      console.log(array);
    }
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let menor = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if(menor > array[j]){
        menor = array[j];
        array[j] = array[i];
        array[i] = menor;
      }
    }
  }
  return array;
}
console.log(selectionSort([8,7,6,5,4]));


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
