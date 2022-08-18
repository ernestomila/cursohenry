function List (){
    this.head = null;
    this.leng = 0;
}

function Node(value){
    this.value = value;
    this.next = null;
    this.previous = null;
}

const list = new List();

List.prototype.add = function (value){
    const newNode = new Node(value);
    if(!this.head){
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next){
            current = current.next;
        }
        //Lista doblemente enlazada
        newNode.previous = current;
        current.next = newNode;
    }
    this.leng++;
}

List.prototype.contar = function(){
    return this.leng;
}

List.prototype.borrarUltimo = function (){
    const current = this.head;
    while(current.next){
        current = current.next;
    }
    current.next = null;
}

List.prototype.addFirst = function(value){
    const newNode = new Node(value);
    if(this.head == null){
        this.head = newNode;
    } else {
        let aux = this.head;
        this.head = newNode;
        this.head.next = aux;
    }
    this.leng++;
}

List.prototype.insert = function(data,pos) {
	if (this.leng < pos) return this.add(data); 
	var newNode = new Node(data);
	if (pos == 1 ) {
        newNode.next = this.head;
        this.head = newNode;
        return;
    } else if( pos == 0){
        return this.addFirst(data);
    }
	var current = this.head;
	while (pos > 2) {
		pos--;
		current = current.next;
	}
	newNode.next = current.next;
    newNode.previous = current;
	current.next = newNode;
    this.leng++;
}

List.prototype.recorrer = function (){
    let current = this.head;
    while(current.next != null){
        console.log(current);
        current = current.next;
    }
    console.log(current);
}

list.add(14);
list.add(5);
list.add(10);
list.add(12);
list.add(13);
list.add(20);
list.add(80);


console.log("Cantidad: ", list.leng);
//console.log("Lista#1: ",list);
list.insert(7, 4);
list.recorrer();
//console.log("Lista#2: ",list);
//list.insert({value:7, next: null}, 4);
//console.log("Lista#3: ",list);