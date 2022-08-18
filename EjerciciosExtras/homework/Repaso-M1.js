const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual 
// cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos 
// los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun 
// elemento de array es un array anidado
// [Para más información del método: 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function (array) {
    // Tu código aca:
    let suma = 0;
        for (let i = 0; i < array.length; i++) {
            if( Array.isArray(array[i])){
                suma += countArray(array[i]);
            } else {
                suma += array[i];
            }
        }
    return suma;
}

// Implementar la función countProps: a partir de un objeto en el cual 
// cada propiedad puede contener cualquier tipo de dato, determinar 
// la cantidad de propiedades de objetos en cualquier nivel, ya sea 
// el inicial u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 
// propiedades, pero a su vez dentro de a tenemos 3 propiedades mas, 
// luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) {
    // Tu código aca:
    let suma = 0;

    for (const key in obj) {
        suma += 1;
        console.log('key: ',obj[key]);
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            console.log('Es objeto');
            suma += countProps(obj[key]);
        }
    }
    return suma
}
const objeto = {
    a: {
        a1: [1, {a: 1}, 'Franco'],
        a2: 'Franco',
        a3: {f: 'r', a: 'n', c: {o: true}}
    },
    b: 2,
    c: [1, {a: 1}, 'Franco']
    }

// Implementar el método changeNotNumbers dentro del prototype de 
// LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 
// 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse 
// a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kiricocho'] y 
//    la función debería haber devuelto el valor 1
let listOne = new LinkedList();

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
    if(!this.head) return 0;
    let count = 0;
    if(this.head.next == null){
        if(isNaN(this.head.value)){
            this.head.value = 'Kiricocho';
            return count++;
        }
        return count;
    }
    let current = this.head;
    while(current.next){
        if(isNaN(current.value)){
            count++;
            current.value = 'Kiricocho';
        }
        current = current.next;
    }
    if(isNaN(current.value)){
        count++;
        current.value = 'Kiricocho';        
    }
    return count;
}

// listOne.add(1);
// listOne.add('2');
// listOne.add(false);
// listOne.add('Franco');
// console.log(listOne.changeNotNumbers());
// console.log(listOne.search('Kiricocho'));


// Implementar la función mergeQueues que a partir de dos queues recibidas 
// por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de 
// las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne = new Queue, queueTwo = new Queue) {
    // Tu código aca:
    let auxQueue = new Queue();

    while (queueOne.size() != 0 || queueTwo.size() != 0){
        var value = queueOne.dequeue();
        if(value != null){
            auxQueue.enqueue(value);
        }
        value = queueTwo.dequeue();
        if(value != null){
            auxQueue.enqueue(value);
        }
    }
    return auxQueue;
}
// var queueOne = new Queue();
// queueOne.enqueue(1);
// queueOne.enqueue(3);
// queueOne.enqueue(5);
// queueOne.enqueue(7);
// queueOne.enqueue(9);
// var queueTwo = new Queue();
// queueTwo.enqueue(2);
// queueTwo.enqueue(4);
// queueTwo.enqueue(6);

// console.log(queueOne);
// console.log(queueTwo);

// mergeQueues(queueOne,queueTwo);

// Implementar la funcion closureMult que permita generar nuevas 
// funciones que representen las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    // Tu código aca:
    return function (mult){
        return mult * multiplier;
    }
}

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo 
// del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:

    let suma = 0;
    if (this.value) suma += this.value;
    if (this.left === null && this.right === null) return suma;
    
    if (this.left !== null && this.right === null){
        suma += this.left.sum();
    } else if(this.right !== null && this.left === null){
        suma += this.right.sum();
    } else if(this.right !== null && this.left !== null){
        suma += (this.right.sum() + this.left.sum());
    } 
    return suma; 
}


module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}