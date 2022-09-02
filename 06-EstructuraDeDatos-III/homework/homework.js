"use strict";

/*
 Implementar la clase BinarySearchBinarySearchTree, definiendo 
 los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar
   si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo 
  el orden depth first (DFS) en cualquiera de sus 
  variantes, según se indique por parámetro ("post-order", 
  "pre-order", o "in-order"). Nota: si no se provee ningún 
  parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el 
  orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(data) {
  this.value = data;
  this.right = null;//igual o mayor van a la derecha
  this.left = null; //menor a la izquierda
}
//[15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34]
const tree = new BinarySearchTree(20);

BinarySearchTree.prototype.search = function (s){
    if(this.value === s) return this;
    
    if(s <= this.left && this.left !== null) {
        return this.left.search(s);
    } else if(s > this.right && this.right !== null){
        return this.right.search(s);
    } else {
        return null;
    }
}

BinarySearchTree.prototype.size = function (){
  let suma = 0;
  if (this.value !== null || this.value === 0 ) suma += 1;
  if (this.left === null && this.right === null) return suma;
  if(this.left !== null && this.right === null){
    suma += this.left.size();
  } else if(this.right !== null && this.left === null){
    suma += this.right.size();
  } else if(this.right !== null && this.left !== null){
    suma += (this.right.size() + this.left.size());
  }
  return suma;
}

BinarySearchTree.prototype.insert = function (data){
  if(!this.value && this.value !== 0) {
    return this.value = data;
  } else {
    //si hay data
    if(data >= this.value){
      if(this.right === null){
        this.right = new BinarySearchTree(data);
      } else {
        this.right.insert(data);
      }
    } else {
      if(this.left === null){
        this.left = new BinarySearchTree(data);
      } else {
        this.left.insert(data);
      }
    }
  }
};

//Crear Árbol
BinarySearchTree.prototype.allInsert = function(arr){
  for (let i = 0; i < arr.length; i++) {
    this.insert(arr[i]);
  }
}

BinarySearchTree.prototype.contains = function (value){
  if(this.value == value) return true;
  if(value > this.value && this.value !== null){
    if(this.right !== null){
      if(value == this.right.value) return true;
      if(value > this.right.value) return this.right.contains(value);
      if(value < this.right.value) return this.right.contains(value);
    }
  } else {
    if(this.left !== null){
      if(value == this.left.value) return true;
      if(value > this.left.value) return this.left.contains(value);
      if(value < this.left.value) return this.left.contains(value);
    }
  }
  return false;
};

// tree.allInsert([15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34, 80]); //, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34, 80
// tree.insert(12);
// tree.insert(22);
// console.log(tree);
// console.log(tree.size());
// console.log(tree.left.value);
// console.log(tree.right.value);
// console.log(tree.contains(81));


/* 
  - depthFirstForEach: recorre el árbol siguiendo 
  el orden depth first (DFS) en cualquiera de sus 
  variantes, según se indique por parámetro ("post-order", 
  "pre-order", o "in-order"). Nota: si no se provee ningún 
  parámetro, hará el recorrido "in-order" por defecto.
*/


BinarySearchTree.prototype.depthFirstForEach = function (cb, order = 'in-order'){
  switch (order){
    case 'in-order':{
      this.left?.depthFirstForEach(cb, order);
      cb(this.value);
      this.right?.depthFirstForEach(cb, order);
 
      break;}
    case 'pre-order':{
      cb(this.value);
      this.left?.depthFirstForEach(cb, order);
      this.right?.depthFirstForEach(cb, order);     
      break;      }
    case 'post-order':{
      this.left?.depthFirstForEach(cb, order);
      this.right?.depthFirstForEach(cb, order);      
      cb(this.value);
      break;}
  }
};
// tree.allInsert([15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34]); //, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34, 80
// var arr = [1];
// var arr2 = [1];
// console.log(arr2 == arr)
// // console.log(tree);
// // console.log(tree.depthFirstForEach('','reset'));
// tree.depthFirstForEach();
// console.log(testArr);
// console.log(testArr == [ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ]);

// tree.depthFirstForEach('cb',"in-order");
// console.log(testArr);
// console.log(testArr == [ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ]);
// // console.log(tree.depthFirstForEach('','reset'));
// tree.depthFirstForEach('cb','pre-order');
// console.log(testArr);

// tree.depthFirstForEach('cb','post-order');
// console.log(testArr);

// console.log(tree.depthFirstForEach('','reset'));
// console.log(tree.depthFirstForEach(tree.addValue, 'post-order'));
// console.log(testArr);

BinarySearchTree.prototype.breadthFirstForEach = function (cb, queue = []){
  cb(this.value);
  if (this.left) queue.push(this.left);
  if (this.right) queue.push(this.right);

  if(queue.length){
    queue.shift().breadthFirstForEach(cb, queue);
  }
};

BinarySearchTree.prototype.searchTwoBig = function (value = this.value){
  if(!this.value) return false;
  let mayor = this.value;
  let menor = value;
  let array = [];
  if(!this.right && !this.left){
    array.push(mayor);
    array.push(menor);
    return array;
  }
  if(!this.right && this.left){
    mayor = this.value;
    menor = this.left.value;
    array.push(mayor);
    array.push(menor);    
    return array;
  }
  if(this.right){
    return this.right.searchTwoBig(this.value);
  }
}

tree.allInsert([ 0, 1, 5, 11, 12, 13, 14, 15, 17, 20, 21, 25, 28, 30, 31, 33, 34, 35, 45, 50 ]);
console.log(tree);
console.log(tree.searcTwoBig());


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
