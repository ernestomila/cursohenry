// 4️⃣ ***** EJERCICIO 4 ***** - devuelveMayores() 4️⃣

const { LinkedList } = require("../DS")

// Implementar la función devuelveMayores, que recibe por parámetro una LinkedList con precios
// de productos de una determinada góndola de Henry Market, y un precio máximo a evaluar.
// La función deberá recorrer la LinkedList recibida y retornar la CANTIDAD DE PRECIOS QUE SUPEREN
// el valor de precio máximo que se desea evaluar.
// En caso de que ningún precio supere dicho valor, debe retornar en string "Sin precios"

//  EJEMPLOS:
//
//  listaPrecios1 = 5 => 10 => 8 => 7 => 14 => 20
//  devuelveMayores(listaPrecios1, 10) => 2
//  (2 precios (14 y 20) superan el valor a evaluar (10))
//
//  listaPrecios2 = 99 => 100 => 81 => 74 => 14 => 22
//  devuelveMayores(listaPrecios2, 50) => 4
//  (4 precios (99, 100, 81 y 74) superan el valor a evaluar (50))
//
//  listaPrecios3 = 99 => 80 => 81 => 75 => 15 => 21
//  devuelveMayores(listaPrecios3, 100) => "Sin precios"
//  (Ningún precio de la lista supera el valor a evaluar (100))
//
//  REQUISITOS:
//    🟢 La función debe retornar un valor numérico, que representa la CANTIDAD DE PRECIOS que superen
//      el valor a evaluar.
//    🟢 En caso de que ningún precio supere dicho valor, debe retornar el string "Sin precios"
//
//  ATENCIÓN! Las respuestas en strings son case sensitive!

function devuelveMayores(lista, valor) {
  // Tu código aquí:
  if(!lista.head) return "Sin precios";
  if(lista.head.next === null) return lista.head.value <= valor ? "Sin precios" : 1;
  let cant = 0;
  lista.head.value > valor ? cant++ : cant;
  var current = lista.head;
  while (current.next !== null) {
    current.next.value > valor ? cant++ : cant;
    current = current.next;
  }
  return cant == 0 ? "Sin precios" : cant;
}

// let lista1 = new LinkedList();
// lista1.add(5);

// console.log(devuelveMayores(lista1, 10));

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  devuelveMayores
};