class Node{
  constructor(value){
    this.value = value;
    this.next = undefined;
    this.prev = undefined;
  }
}

class LinkedList{
  constructor(node){
    this.head = new Node(node);
    this.tail = this.head;
  }

  addLast(element){
    const AddNode = new Node(element);
    AddNode.prev = this.tail;
    this.tail.next = AddNode;
    this.tail = AddNode;
  }

  addFirst(element){
    const AddNode = new Node(element);
    AddNode.next = this.head;
    this.head.prev = AddNode;
    this.head = AddNode;

  }

  deleteLast(){
    this.tail = this.tail.prev;
    this.tail.next = undefined;
  }

  deleteFirst(){
    this.head = this.head.next;
  }

  find(element){
    let start = this.head;
    while(element != start.value){
      start = start.next;
    }
    return start;
  }

  showElements(){
    let start = this.head;
    while(start != undefined){
      console.log(start.value);
      start = start.next;
    }
  }
}
