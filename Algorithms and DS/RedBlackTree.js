
class RedBlackTree {

  constructor(value, color='black'){
    this.value = value;
    this.left = null;
    this.right = null;
    this.color = color;
  }

  insertNode(value){
    if(value < this.value && this.left != null){
      this.left.insertNode(value);
    }else if(value < this.value){
      this.left = new RedBlackTree(value, 'red');
    }else if(value > this.value && this.right != null){
      this.right.insertNode(value);
    }else{
      this.right = new RedBlackTree(value);
    }

    this.height = this.getHight();

    const balance = this.getBalance();

    result.insertAdjacentHTML('beforeend', `<div>Баланс корня дерева: ${balance}</div>`);

    if(balance < -1){
      if(this.right.value < value){
        return this.leftRotate();
      }
      if(this.right.value > value){
        this.right = this.right.rightRotate();
        return this.leftRotate();
      }
    }

    if(balance > 1){
      if(this.left.value > value){
        return this.rightRotate();
      }
      if(this.left.value < value){
        this.left = this.left.leftRotate();
        return this.rightRotate();
      }
    }
    return this;
  }

  getHight(){
    let leftHeight = this.left ? this.left.height : 0;
    let rightHeight = this.right ? this.right.height : 0;
    return Math.max(leftHeight, rightHeight);
  }

  getBalance(){
    let leftHeight = this.left ? this.left.height : 0;
    let rightHeight = this.right ? this.right.height : 0;
    return leftHeight - rightHeight;
  }

  leftRotate(){
    let root = this;
    let newRoot = this.right;
    let newRootLeftChild = newRoot.left;

    root.right = newRootLeftChild;
    newRoot.left = root;

    root.height = root.getHight();
    newRoot.height = newRoot.getHight();
    return newRoot;
  }

  rightRotate(){
    let root = this;
    let newRoot = this.left;
    let newRootRightChild = newRoot.right;

    root.left = newRootRightChild;
    newRoot.right = root;

    root.height = root.getHight();
    newRoot.height = newRoot.getHight();
    return newRoot;
  }

  isElementInTree(value){
    if(value < this.value && this.left != null){
      return this.left.isElementInTree(value);
    }
    if(value > this.value && this.right != null){
      return this.right.isElementInTree(value);
    }

    return this.value === value;
  }
}