class node{
  constructor(value){
    this.value = value;
    this.parent = undefined;
    this.leftChild = undefined;
    this.rightChild = undefined;
  }
}




class binarySearchTree {

  constructor(value){
    this.value = value;
    this.leftChild = undefined;
    this.rightChild = undefined;
  }
  
  insertNode(value){
    if(value < this.value && this.leftChild != undefined){
      this.leftChild.insertNode(value);
    }else if(value < this.value){
      this.leftChild = new binarySearchTree(value);
    }else if(value > this.value && this.rightChild != undefined){
      this.rightChild.insertNode(value);
    }else{
      this.rightChild = new binarySearchTree(value);
    }
  }

  isElementInTree(value){
    if(value < this.value && this.leftChild != undefined){
      return this.leftChild.isElementInTree(value);
    }
    if(value > this.value && this.rightChild != undefined){
      return this.rightChild.isElementInTree(value);
    }

    return this.value === value;
  }

  getElementByKey(key){
    if(this.value === key){
      return this;
    }
    if(key < this.value){
      return this.leftChild.getElementByKey(key);
    }else{
      return this.rightChild.getElementByKey(key);
    }
  }

  showElements(){
    if (this.leftChild != undefined){
      this.leftChild.show()
    }
    console.log(this.value);
    if (this.rightChild != undefined){
      this.rightChild.show()
    }
  }

  getMinimumValue(){
    if (this.leftChild != undefined){
      return this.leftChild.getMinimum();
    }
    return this.value;
  }

  getMaximumValue(){
    if (this.rightChild != undefined){
      return this.rightChild.getMinimum();
    }
    return this.value;
  }

  getNextElement(element){
    return this.getElementByKey(element.value + 1);
  }

  getPreviousElement(element){
    return this.getElementByKey(element.value - 1);
  }
}

let tree = new binarySearchTree(6);
tree.insertNode(2);
tree.insertNode(1);
tree.insertNode(4);
tree.insertNode(5);
tree.insertNode(7);
tree.insertNode(8);
tree.insertNode(9);

console.log(tree.getNext(tree.getElementByKey(8)));
