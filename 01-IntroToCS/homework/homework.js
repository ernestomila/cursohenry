'use strict'

function BinarioADecimal(num) {
  var pos = 0;
  var suma = 0;
  for (var i = num.length-1; i >= 0; i--){
    suma += Math.pow(2,pos)*Number(num[i]);
    pos++;
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  //20
  console.log(num);
  var div = 0;
  var binario = "";
  while (num / 2 != 0){
    if(num%2 == 0){
      binario += "0"
    } else {
      binario += "1"
    }
    div = parseInt(num / 2);   
    num = div;   
  }
  var nuevaCadena = "";
  for (var i = binario.length - 1; i >= 0; i--) {
      nuevaCadena += binario[i];
  }
  return nuevaCadena;  
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}