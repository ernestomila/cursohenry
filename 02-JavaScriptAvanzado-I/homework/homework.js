'use strict'

function homeWork01(){
    var x = 1;
    var a = 5;
    var b = 10;
    var c = function(a, b, c) {
    var x = 10;
    console.log(x);// 10
    console.log(a);
    var f = function(a, b, c) {
        var this2 = this;
        b = a;
        console.log(b);
        b = c;
        var x = 5;
    }
    f(a,b,c);
    console.log(b);
    }
    c(8,9,10);
    console.log(b);
    console.log(x);
    console.log("+++++++++++++1");
}

function homeWork02(){
    var bar = 1;
    console.log(bar);
    foo();
    function foo() { console.log('Hola!'); }
    
    var baz = 2;    
    console.log(baz);
    console.log("+++++++++++++2");
}

function homeWork03(){
    var bar = 1;
    console.log(bar);
    foo();
    function foo() { console.log('Hola!'); }
    
    var baz = 2;    
    console.log(baz);
    console.log("+++++++++++++3");
}

function homeWork04(){
    var instructor = "Tony";
    if(true) {
        var instructor = "Franco";
    }
    console.log(instructor);
    console.log("+++++++++++++4");
}

function homeWork05(){
    var instructor = "Tony";
    console.log(instructor);
    (function() {
       if(true) {
          var instructor = "Franco";
          console.log(instructor);
       }
    })();
    console.log(instructor);
    console.log("+++++++++++++5");
}

function homeWork06(){
    var instructor = "Tony";
    let pm = "Franco";
    if (true) {
        var instructor = "The Flash";
        let pm = "Reverse Flash";
        console.log(instructor);
        console.log(pm);
    }
    console.log(instructor);
    console.log(pm);
    console.log("+++++++++++++6");
}

function homeWork07(){
    console.log(6 / "3")// = 2
    console.log("2" * "3")// = 6
    console.log(4 + 5 + "px")// = "9px"
    console.log("$" + 4 + 5)// = "$45"
    console.log("4" - 2)// = 2
    console.log("4px" - 2)// = NaN
    console.log(7 / 0)// = 0
    console.log({}[0])// = undefined
    console.log(parseInt("09"))// = 9
    console.log(5 && 2)// = 2
    console.log(2 && 5)// = 5
    console.log(5 || 0)// = 5
    console.log(false || 5)// = 5
    console.log([3]+[3]-[10])// = 23
    console.log(3>2>1)// = false
    console.log([] == ![])// = true   
    console.log('true' && 'false')// = false   
    console.log('cat' && 'dog')// = false   

    console.log("+++++++++++++7");
}

function homeWork08(){
    console.log(a);
    console.log(foo());
 
    var a = 1;
    function foo() {
       return 2;
    }
    console.log("+++++++++++++8");
}

var snack = 'Meow Mix';

function homeWork09(food) {
    if (food) {
        var snack = 'Friskies';
        console.log(snack);
        console.log("+++++++++++++9");
        return snack;
    }
    console.log(snack);
    console.log("+++++++++++++9");
    return snack;
}

function homeWork10(){
    var fullname = 'Juan Perez';
    var obj = {
       fullname: 'Natalia Nerea',
       prop: {
          fullname: 'Aurelio De Rosa',
          getFullname: function() {
             return this.fullname;
          }
       }
    };
    
    console.log(obj.prop.getFullname());
    var test = {fullname: 'Ernesto Mila'};
    test.getFullname = obj.prop.getFullname;

    console.log(test.getFullname());    
    console.log("+++++++++++++10");
}

function homeWork11() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
    console.log("+++++++++++++11");
 }


module.exports = {
    homeWork01,
    homeWork02,
    homeWork03,    
  }
  
  homeWork01();  
  homeWork02(); 
  homeWork03();
  homeWork04();
  homeWork05();
  homeWork06();
  homeWork07();
  homeWork08();
  homeWork09();
  homeWork10();
  homeWork11();