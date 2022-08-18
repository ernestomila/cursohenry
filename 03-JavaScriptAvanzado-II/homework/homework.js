"use strict";

// Closures

function counter() {
  /*
  Ejercicio 1

  La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando un valor numérico que empieza en 1 e incrementa con cada invocación.

  Ejemplo:
  const nuevoContador = counter()
  nuevoContador()     // 1
  nuevoContador()     // 2
  nuevoContador()     // 3

  const otroContador = counter()
  otroContador()      // 1
  otroContador()      // 2
  otroContador()      // 3
   */
  var suma = 0;
  return function cuenta(){
    return suma += 1;
  }
}
const counterTop = counter();
console.log(counterTop());
console.log(counterTop());
console.log(counterTop());
console.log(counterTop());
console.log(counterTop());
console.log(counterTop());

console.log("+++++++++++++++++++++1");

function multiplica(num2){
  return num2 * 2;
}

function cacheFunction(callback) {
  /*
  Ejercicio 2

  Tu tarea aquí es lograr, mediante un closure, que cacheFunction 
  actúe como una memoria caché para el callback que recibe por parámetro (cb); 
  es decir, que "recuerde" el resultado de cada operación que hace, 
  de manera que, al realizar una operación por segunda vez, se pueda 
  obtener el resultado de esa "memoria" sin tener que efectuar otra vez 
  cálculos que ya se hicieron anteriormente.

  cacheFunction debe retornar una función. Esta función debe aceptar un 
  argumento (arg) e invocar a cb con ese argumento; 
  hecho eso, debe guardar el argumento junto con el resultado de la 
  invocación (tip: usá un objeto donde cada propiedad sea el argumento, 
  y su valor el resultado de la correspondiente invocación a cb) 
  de manera que, la próxima vez que reciba el mismo argumento, 
  no sea necesario volver a invocar a cb, porque el resultado estará 
  guardado en la "memoria caché".


  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché 
                    cuál es el resultado de square(5) y lo retornará 
                    (tip: si usaste un objeto, podés usar hasOwnProperty) 
  */

  let cache = {};
  return function (num2){
    if(!cache.hasOwnProperty(num2)){
      cache[num2] = callback(num2); //{ 5: 10, 2: 4, 3: 6 }
    }
    return cache[num2];
  }
}

const cachedFunction = cacheFunction(multiplica);
console.log(cachedFunction(2));
console.log(cachedFunction(3));
console.log(cachedFunction(2));
console.log(cachedFunction(5));
console.log(cachedFunction(5));
console.log(cachedFunction(6));

console.log("+++++++++++++++++++++2");
// Bind

var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {
  console.log(this.nombre);
  return this.nombre;
}

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);

/*
  Ejercicio 3

  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)

  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

getNombreInstructor();
getNombreAlumno();

console.log("+++++++++++++++++++++3");
/*

  Ejercicio 4
  
  Sin modificar la función crearCadena, usar bind para guardar, en las 
  tres variables declaradas a continuación, tres funciones que retornen 
  una cadena (string) y el delimitador especificado (asteriscos, guiones, 
  y guiones bajos, respectivamente). Las funciones obtenidas deberían 
  recibir solamente un argumento - la cadena de texto - ya que los 
  otros argumentos habrán sido "bindeados".

*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(this,"*","*");
let textoGuiones = crearCadena.bind(this,"-","-");
let textoUnderscore = crearCadena.bind(this,"_","_");
console.log(textoAsteriscos("Sies"));
console.log(textoGuiones("Hola"));
console.log(textoUnderscore("Maria"));

console.log("+++++++++++++++++++++4");
// No modifiquen nada debajo de esta linea
// --------------------------------

console.log(010-03);

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
