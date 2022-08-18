"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor 
  (tener en cuenta el caso particular de una lista de un solo nodo 
    y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una 
  particularidad: el parámetro puede ser un valor o un callback. En el 
  primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en 
  el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro 
  del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando
  recibe por parámetro un número par, busca un nodo cuyo valor sea un 
  número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar
   null.
*/

function LinkedList() {
  this.head = null;
  this.leng = 0;
}
//[va: 1 si:->va:2 si:->va:3]
function Node(value) {
  this.value = value;
  this.next = null; 
}

const list = new LinkedList();
//Agregar
//{v:1 next: null}
LinkedList.prototype.add = function(value){
  let newNode = new Node(value);
  if(!this.head){
    this.leng++;
    return this.head = newNode;
  }
  // {1{2{4{5{6{7{8{null}}}}}}}}
  //  | | | | | | | 
  let current = this.head;
  while(current.next){
    current = current.next;
  }
  current.next = newNode;
  this.leng++;
}


//Eliminar
LinkedList.prototype.remove = function (){
  //Cuando está vacío
  if(!this.head){
    return null;
  } else if(!this.head.next){ //hay 1 elemento
    let eliminado = this.head;
    this.head = null;
    this.length--;
    return eliminado.value;
  }
  //Hay más de 1 elemento
  let current = this.head;
  let ultimo = null;
  
  while((current.next).next){
    current = current.next;
  }
  ultimo = current.next;
  current.next = null;

  //let anterior = {};
  // while(current.next){
  //   anterior = current;
  //   current = current.next;
  // }
  // ultimo = current;
  // anterior.next = null;

  this.length--;
  return ultimo.value;
}


/**
  - search: recibe un parámetro y lo busca dentro de la lista, con una 
  particularidad: el parámetro puede ser un valor o un callback. En el 
  primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en 
  el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro 
  del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando
  recibe por parámetro un número par, busca un nodo cuyo valor sea un 
  número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar
   null.
 */

//CallBack
function isEven(nodeValue){
  return nodeValue === 'two';
}

//Buscar
LinkedList.prototype.search = function (value){
  if(!this.head) return null;
  //value = isEven
  if(typeof value === "function"){
    //Es funcion//exec(isEven(this.head.value))
    let count = 0;
    if(value(this.head.value)){
      return this.head.value;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
      if(value(current.value)){
        return current.value;
      }
    }       
  }
  //No es funcion
  if(this.head.value == value){
    return this.head.value;
  }

  let current = this.head;
  while(current.next){
    current = current.next;
    if(current.value == value){
      return current.value;
    }
  } 
  return null;
}

list.add("first");
list.add("two");
list.add("second");
list.add(10);
list.add(12);
list.add(13);
console.log("Lista completa:    ", list);
console.log(list.search(isEven));

LinkedList.prototype.recorrer = function (){
  if(!this.head){
    console.log(null);
    return null;
  } else if(!this.head.next){
    console.log(this.head);
    return null;
  }
  let current = this.head;
  while(current.next != null){
      console.log(current);
      current = current.next;
  }
  console.log(current);
}

list.recorrer();

// list.add("first");
// list.add("two");
// list.add("second");
// list.add(10);
// list.add(12);
// list.add(13);
// console.log("Lista completa:    ", list);
// console.log("Valor eliminado: ",list.remove());
// console.log("Despues de eliminado: "),
// list.recorrer();

// console.log("Valor eliminado: ",list.remove());
// list.recorrer();

// //++++++++ Buscar
// list.recorrer();
// console.log("Valor encontrado: ",list.search(isEven));

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets 
(slots, contenedores, o casilleros; es decir, posiciones posibles para 
almacenar la información), donde guardaremos datos en formato clave-valor 
(por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). 
(Luego de haber pasado todos los tests, a modo de ejercicio adicional, 
pueden modificar un poco la clase para que reciba la cantidad de buckets 
por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un 
  dato. Recibe un input alfabético, suma el código numérico de cada 
  caracter del input (investigar el método charCodeAt de los strings) y 
  calcula el módulo de ese número total por la cantidad de buckets; de 
  esta manera determina la posición de la tabla en la que se almacenará 
  el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), 
  hashea la clave invocando al método hash, y almacena todo el conjunto 
  en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde
   en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo 
  almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. 
Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el 
nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se 
almacenará el par clave-valor en un bucket específico (determinado al 
hashear la clave)
*/

function HashTable(cant) {
  this.numBuckets = cant || 35;
  this.array = new Array(this.numBuckets);
}

const hashea = new HashTable();

HashTable.prototype.hash = function (value){
  if(!value) return null;
  let posicion = 0;
  for (let i = 0; i < value.length; i++) {
    posicion += value.charCodeAt(i);
  }
  return posicion%this.numBuckets;
}

HashTable.prototype.set = function (clave, valor){
  if(typeof clave !== "string") throw new TypeError("Keys must be strings");
  let posicion = this.hash(clave);
  console.log(posicion);
  if(!this.array[posicion]){
    this.array[posicion] = {};
  }
  this.array[posicion][clave] = valor;
}

HashTable.prototype.get = function (clave){
  let posicion = this.hash(clave);
  if (!this.array[posicion]) return null;

  if(this.array[posicion][clave]){
    return this.array[posicion][clave];
  }
  return null;
}

HashTable.prototype.hasKey = function (clave){
  return this.get(clave) ? true : false;  
}

// console.log("++ Ejercicio HashTable ++")
// hashea.hash("foo");
// hashea.set('key2', 'Mundo');
// hashea.set('CUBA', 'hola');
// hashea.set('OFO', 'hola');
// hashea.set('FOO', 'hola');
// hashea.set('foobar', 'fluf cats');
// hashea.set('this is a very different string', 44.4);
// console.log(hashea.numBuckets);
// console.log(hashea.array);
// console.log(hashea.get('this is a very different string'));
// console.log(hashea.hasKey('foobar'));
// console.log(hashea.hasKey('raboof'));
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
