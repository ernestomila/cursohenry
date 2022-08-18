
function Tree (tam){
    this.data = Array(tam);
    this.left = null; //menor a la izquierda
    this.right = null;
    this.size = 0; //igual o mayor van a la derecha
}
const tree = new Tree(20);

Tree.prototype.search = function (s){
    if(this.data === s) return this;
    
    if(s <= this.left && this.left !== null) {
        return this.left.search(s);
    } else if(s > this.right && this.right !== null){
        return this.right.search(s);
    } else {
        return null;
    }
}

Tree.prototype.insert = function (data){}
Tree.prototype.contains = function (){}
Tree.prototype.depthFirstForEach = function (){}
Tree.prototype.breadthFirstForEach = function (){}
Tree.prototype.size = function (){}


console.log(tree.data);
