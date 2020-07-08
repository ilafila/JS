class HashTable {
  constructor(){
    this.memory = [];
  }

  hashKey(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      let code = key.charCodeAt(index);
      hash = ((hash << 5) - hash) + code | 0;
    }
    return hash;
  }

  set(key, value){
    const address = this.hashKey(key);
    this.memory[address] = value;
  }

  get(key){
    const address = this.hashKey(key);
    return this.memory[address];
  }
}

class HashTableWithChains extends HashTable {
  constructor(){
    super();
    this.buildChains();
  }

  buildChains(){
    for(let i = 0; i < this.memory.length; i++){
      this.memory[i] = new Array();
    }
  }

  set(key, value){
    const address = this.hashKey(key);
    let index = 0;
    if(this.memory[address][index] == undefined){
      this.memory[address][index] = [key, value];
    }else{
      index += 1;
      while(this.memory[address][index] != undefined){
        index += 1;
      }
      this.memory[address][index] = [key, value];
    }
  }

  get(key){
    const address = this.hashKey(key);
    let index = 0;
    if(this.memory[address][index][0] == key){
      return this.memory[address][index][1];
    }else{
      index += 1;
      while(this.memory[address][index][0] != key){
        index += 1;
      }
      return this.memory[address][index][1];
    }
  }
}

const test = new HashTableWithChains();
test.get(1);