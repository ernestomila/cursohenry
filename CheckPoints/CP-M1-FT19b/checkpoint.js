// ----- IMPORTANTE -----

// IMPORTANTE!: Para este checkpoint tendrán en el archivo DS.js las implementaciones ya realizadas en las
// homeworks de Queue, LinkedLis y BinarySearchTree. Sobre dicha implementación van a tener que agregar nuevos
// métodos o construir determinadas funciones explicados más abajo. Pero todos los métodos ya implementados
// en las homeowrks no es necesario que los vuelvan a definir.
// NO DEBEN MODIFICAR EL ARCHIVO DS.js SINO QUE TODO SU CÓDIGO TENDRÁ QUE ESTAR EN ESTE ARCHIVO checkpoint.js

const {
  Queue,
  Node,
  Stack,
  LinkedList,
  BinarySearchTree
} = require('./DS.js');


/*
* EJERCICIO 1

*
* Implementar de forma RECURSIVA el método Newton-Raphson. Este método es utilizado para aproximar
* la raiz cuadrada de un número entero positivo.
*
* Parametros:
*   count: cantidad de veces que se requiere iterar
*   x: valor entero positivo al que se le quiere calcular la raiz cuadrada
*
* Formula:
*   valorAnterior(0) = x/2
*   y = (valorAnterior + (x/valorAnterior))/2
*   
*
* Ejemplos:
*   x = 20
*   count = 4
*   valorAnterior(0) = 10
*   y(1) = (10 + (20/10))/2 = 6
*   valorAnterior = 6
*   y(2) = (6 + (20/6))/2 = 4.666
*   valorAnterior = 4.666
*   y(3) = (4.666 + (20/4.666))/2 = 4.476
*   valorAnterior = 4.476
*   y(4) = (4.476+ (20/4.476))/2 = 4.472
*
*   x = 45
*   count = 4
*   valorAnterior(0) = 22.5
*   y(1) = (22.5 + (45/22.5))/2 = 12.25
*   valorAnterior = 12.25
*   y(2) = (12.25 + (45/12.25))/2 = 7.96
*   valorAnterior = 7.96
*   y(3) = (7.96 + (45/7.96))/2 = 6.80
*   valorAnterior = 6.80
*   y(4) = (6.80 + (45/6.80))/2 = 6.70
*
* */
function newtonRaphson(x, count, valorAnterior = x/2){
  if(x < 0 || !Number.isInteger(x)) return -1;
  if(count){
    valorAnterior = (valorAnterior + (x/valorAnterior))/2;
    console.log(valorAnterior);
    count--;
    return newtonRaphson(x,count,valorAnterior);
  }
  return valorAnterior;
}
//console.log(newtonRaphson(1.2, 4));

/*
* EJERCICIO 2
*

* A partir de una formula matematica, encontrar y determinar si los parentesis de la misma se encuentran balanceados.
* Decimos que los parentesis de una formula son balanceados si y solo si por cada ( hay un ), se debe respetar
* el orden indicado, es decir, primero ( y luego ), )( no es una combinacion valida.
*
* Parametros:
*   exp: string que describe la expresion matematica a analizar
*
* Valor de retorno:
*   0: si estan balanceados
*   cualquier otro numero: si no estan balanceados
*
* Ejemplos:
*   exp: "(5+6)-(t+2*9-(a+7)/4+(8+5*2))" ---> 0
*   exp: "70 + (9/x - 2))" ----------------> !== 0
*   exp: "(9+10)-6*a/2+(-5)" -------------->  0
*   exp: "(4))" ---------------------------> !== 0
*   exp: "))((" ---------------------------> !== 0
* */
function balanced(string) {
  // Tu código aca:
    let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ")" && count === 0 ) return 1;
    if (string[i] === "(" ) count++;
    else if (string[i] === ")" ) count--;
  } return count;
}


/*
* EJERCICIO 3

*
* Implementar el método compressList dentro del prototype de LinkedList que deberá devolver una nueva lista
* en donde cada elemento se obtiene de aplicar la funcion a dos nodos consecutivos. Si la lista tiene un unico
* elemento, debe devolver la lista con dicho elemento.
*
*
* Parametros:
*   func : funcion a aplicar
*
* Valor de retorno:
*   nueva lista
*
* Ejemplo:
* lista:  -> 5 -> 4 -> 9 -> 1 -> 2 -> null
* lista.compressList((a,b)=>a+b): -> 9 -> 10 -> null
*
* lista: -> 2 -> 2 -> null
* lista.compressList((a,b)=>a+b): -> 4 -> null
*
* lista: -> 2 -> null
* lista.compressList((a,b)=>a+b): -> 2 -> null
* */

LinkedList.prototype.compressList = function(call) {
  let lista = new LinkedList();
  if (!this.head) return false;
  if (!this.head.next){ 
    lista.add(this.head.value);
    return lista;
  }
  if (!this.head.next.next) {
     lista.add (call(this.head.value, this.head.next.value));
     return lista;
   } else {
      lista.add (call(this.head.value, this.head.next.value));
      let current = this.head.next.next;
     while (current) {
       if (current.next){
        lista.add(call(current.value, current.next.value));
      } else {
        return lista;
      }
      if(current.next.next) {
        current = current.next.next;
      } else {
        return lista;
      };
    } 
  }
};

/*
* EJERCICIO 4
* -- A MIRAR --


* Implementar el método removeFrom dentro del prototype de LinkedList que deberá modificar la lista
* de forma tal que el elemento en el indice indicado (recibido por parametro) sea eliminado de la misma.
*
* Parametros:
*   index: describe el indice del elemento que debe ser eliminado [en la lista la posicion inicial, es la posicion 0]
*
* Ejemplos:
*   lista: -> 5 -> 2 -> 4 -> 6 -> null
*   lista.removeFrom(2): -> 5 -> 2 -> 6 -> null
*
*   lista: -> 5 -> 2 -> 4 -> 6 -> null
*   lista.removeFrom(1): -> 5 -> 4 -> 6 -> null
* */
LinkedList.prototype.removeFrom = function(num){
  // Tu código aca:
  if(!this.head) return undefined;
  if(this.head && !this.head.next && num == 0) {this.head = null; return}
  if(this.head.next && !this.head.next.next && num == 1) {this.head.next = null; return}
  if(this.head && this.head.next && num == 0) {this.head = this.head.next; return}
  let pos = 1;
  let anterior = this.head;
  let contiguo = this.head.next;
  while (contiguo.next){
    if(pos == num){
      anterior.next = contiguo.next;
      return;
    }
    anterior = contiguo;
    contiguo = contiguo.next;
    pos++;
  }
  if(!contiguo.next && pos == num){
    anterior.next = null;
  }
  
};
// let linkedList = new LinkedList();
// linkedList.add(5);
// linkedList.add(4);
// linkedList.add(3);
// console.log(linkedList);
// console.log(linkedList.removeFrom(2));
// console.log(linkedList);


/*
* EJERCICIO 5
*
* Implementar el método insertInOrder dentro del prototype de LinkedList que deberá agregar un elemento
* a la lista ordenada (MAYOR a MENOR).
*
*
* Parametros:
*   value: valor a ingresar
*
* Ejemplos:
*   lista: -> 5 -> 4 -> 2 -> null
*   lista.insertInOrder(3): -> 5 -> 4 -> 3 -> 2 -> null
*
* */

LinkedList.prototype.insertInOrder = function(value){
  // Tu código aca:
  if(!this.head) {
    this.add(value); return this;
  }
  let valueNode = new Node(value);
  if(!this.head.next) {
    if(this.head.value > valueNode.value){
      this.head.next = valueNode;
      return this;
    }
  }
  
  let anterior = null;
  let aux2 = null;
  let current = this.head;
  while(current){
    if(current.value > valueNode.value) {
      aux2 = current.next;
      anterior = current;
      current = current.next;
    } else {
      if(current === this.head){
        this.head = valueNode;
        valueNode.next = current;
        return this;
      } else {
        console.log(valueNode);
        anterior.next = valueNode;
        valueNode.next = aux2;
        return this;
      }
    };    
  }
};

// LinkedList.prototype.recorrer = function () {
//   let current = this.head;
//   while(current){
//     console.log(current);
//     current = current.next;
//   }
//   return this;
// }
// let linkedList = new LinkedList();
// linkedList.insertInOrder(10);
// linkedList.insertInOrder(20);
// linkedList.insertInOrder(30);
// linkedList.insertInOrder(40);
// linkedList.insertInOrder(25);

// linkedList.recorrer();


// console.log(linkedList);

/*
* EJERCICIO 6
*
* Utilizando un STACK, y dada una frase invertir palabra por palabra de la misma.
* NO SE PUEDEN USAR METODOS DE ARRAY. 
*
* Parametro:
*   str: string a ser invertido palabra a palabra
*
* Ejemplo:
*   Hello World: olleH dlroW
*   There is a little monkey: erehT si a elttil yeknom
* */

 function reverseWords(str){
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

/*
* EJERCICIO 7
*
* Implemtnar la funcion height dentro del prototype de BinarySearchTree que calcule la altura de un arbol.
*
* Parametros: -
* Valor de retorno: altura del arbol
*
* Pista: funcion auxiliar, calcular la altura de un arbol.[Una forma de resolverlo es pensarlo recursivamente y usando Math.max]
*
*            16             ---> Nivel 1
          /      \
        6         23        ---> Nivel 2
      /  \       /   \
     2    14    17    31    ---> Nivel 3
      \
       5                    ---> Nivel 4

* La funcion devolveria 3
* */

BinarySearchTree.prototype.height = function(){
  if(!this.value) return 0;
  if(!this.right && !this.left) return 1;
  if(this.right && !this.left){
    return 1 + this.right.height();
  } else if(!this.right && this.left){
    return 1 + this.left.height();
  } else if(this.right && this.left){
    return 1 + Math.max(this.left.height(), this.right.height());
  }
};
    // var tree = new BinarySearchTree(16);
    // tree.insert(6);
    // tree.insert(20);
    // tree.insert(10);
    // tree.insert(11);
    // tree.insert(9);
    // console.log(tree.height());

/*
* EJERCICIO 8
*
* Implemtnar la funcion balanced dentro del prototype de BinarySearchTree que determine si el arbol
* se encuentra o no balanceado.
*
* Parametros: -
* Valor de retorno:
*   true: si el arbol esta balanceado
*   false: si el arbol no esta balanceado
*
*
*            16             ---> Nivel 1
          /      \
        6         23        ---> Nivel 2
      /  \       /   \
     2    14    17    31    ---> Nivel 3
      \
       5                    ---> Nivel 4

* La funcion devolveria true
*
* TIP: Se pueden usar funciones previamente definidas
* */

BinarySearchTree.prototype.balanced = function(){
  if(!this.value) {
    return false;
  }
  if(!this.right && !this.left) return true;
  let countR = 0;
  let countL = 0;  
  if(this.right && !this.left){
    countR = this.right.height();
  }
  if(!this.right && this.left){
    countL = this.left.height();
  } 
  if(this.right && this.left){
    countL = this.left.height();
    countR = this.right.height();
  }
  if((countR - countL) > 1 || (countL - countR) > 1){
    return false;
  }  
  return true;
};

/* EJERCICIO 9
*
* Ordena un arreglo de objetos usando un SELECTION SORT pero con algunas particularidades.
* Ademas del arreglo a ordenar, la funcion va a recibir como parametro una función que va
* ser quien va a determinar si un elemento es mayor a otro para determinar su posicion final.
*
* Ejemplo:
* let array = [
*   {title: 'Comprar tomate', description: 'Ir a la verduleria a comprar tomate', priority: 4, price: 300},
*   {title: 'Ir al gimnasio', description: 'Ir al gimnasio', priority: 4, price: 200},
*   {title: 'Comprar harina', description: 'Ir al supermercado a comprar harina', priority: 2, price: 200},
*   {title: 'Comprar libro', description: 'Ir a la libreria', priority: 2, price: 700}
* ]
*
* orderFunction(array[0], array[1]) -> Devolvera 1 si, la prioridad de array[0] es mayor a la prioridad de array[1].
*                                      En el caso de que las prioridades sean iguales, el que tiene mayor precio, es mas grande.
*                                      Por lo tanto array[0] > array[1] ya que array[0].priority === array[1].priority &&
*                                                                              array[0].price > array[1].price
*
*                                   -> Devolvera -1 caso contrario. Es decir, si array[0].priority < array[1].priority
*                                   => Devolvera 1 si están bien ordenados o -1 si hay que intercambiarlos
*
* specialSort(array, orderFunction) -> retornaria el siguiente arreglo
* [
*   {title: 'Comprar tomate', description: 'Ir a la verduleria a comprar tomate', priority: 4, price: 300},
*   {title: 'Ir al gimnasio', description: 'Ir al gimnasio', priority: 4, price: 200},
*   {title: 'Comprar libro', description: 'Ir a la libreria', priority: 2, price: 700}
*   {title: 'Comprar harina', description: 'Ir al supermercado a comprar harina', priority: 2, price: 200}
* ]
*
* */

var specialSort = function() {
  // Tu código aca:
  
};

let array = [
  {title: 'Comprar tomate', description: 'Ir a la verduleria a comprar tomate', priority: 4, price: 300},
  {title: 'Ir al gimnasio', description: 'Ir al gimnasio', priority: 4, price: 200},
  {title: 'Comprar harina', description: 'Ir al supermercado a comprar harina', priority: 2, price: 200},
  {title: 'Comprar libro', description: 'Ir a la libreria', priority: 2, price: 700}
]


/* EJERCICIO 10
*
*
*
* Implementar la funcion closureTrip cuya finalidad es determinar a que ciudades o paises puede llegar
* una persona en funcion de la cantidad de millas y ciudad origen.
*
* Parametros:
*   - flights: un arreglo en donde cada elemento esta compuesto por dos propiedades
*               airport y destinations, donde destination es un arreglo, y cada elemento
*               posee una propiedad city y otra miles.
*
*
* Valor de retorno:
*   - un arreglo con el nombre de las ciudades a los cuales puede llegar la persona
*
* Ejemplo:
*
* let flights = [{origin: 'BUE', destinations:[{city: 'FRANCIA', miles: 500}, {city: 'ITALIA', miles: 200},
*               {city: 'ALEMANIA', miles: 400}]}, {origin: 'ITALIA', destinations: [{city: 'FRANCIA', miles: 30}]},
*               {origin: 'BUE', destinations: [{city: 'MENDOZA', miles: 30}, {city: 'CORDOBA', miles: 700},
*               {city: 'SALTA', miles: 200}]}]
*
* let user = {
*   name: 'Martina',
*   miles: 450,
*   origin: 'BUE'
* }
*
*
* closureTrip(flights)(user) => [ 'ITALIA', 'ALEMANIA', 'MENDOZA', 'SALTA' ]
*
* */

function closureTrip(){
}

// -------------------

module.exports = {
  newtonRaphson,
  balanced,
  LinkedList,
  Queue,
  specialSort,
  reverseWords,
  closureTrip,
  BinarySearchTree
};
