'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código: 
  //[4,6,3,8,1] 
  // 

  if(array.length == 0 || array.length == 1) return array;
  let lengHalf = Math.floor(array.length/2);

  let pivote = array[lengHalf];
  let arrayLeft = [];
  let arrayRight = [];

  for (let i = lengHalf + 1; i < array.length; i++) {
    if(pivote < array[i]){
      arrayRight.push(array[i]);
    }else{
      arrayLeft.push(array[i]);
    }
  }
  for (let i = lengHalf - 1; i >= 0; i--) {
    if(pivote > array[i]){
      arrayLeft.push(array[i]);
    }else{
      arrayRight.push(array[i]);
    }
  }
  console.log(arrayLeft,pivote,arrayRight);
  
  return [...quickSort(arrayLeft), pivote, ...quickSort(arrayRight)];
}
 
function mergeSort(array){
  let half = Math.floor(array.length / 2);
  if(array.length < 2) return array;
  let aux1 = array.splice(0, half);
 
  return extra(mergeSort(aux1), mergeSort(array));
}
function extra(aux1, aux2) { 
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let general = [];
  while ( aux1.length && aux2.length){
    if(aux1[0] < aux2[0]){
      general.push(aux1.shift());
    } else {
      general.push(aux2.shift());
    }
  }
  return [...general, ...aux1, ...aux2];
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
