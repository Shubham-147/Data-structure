class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Adds a new Element in the end
    push(val) {
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        } 
        this.length++;
        return this;       
    }
	
    // Removes the last element
    pop(){        
        if(!this.head) return undefined ;
        let node = this.head;
        let newTail = node;
        while(!node.next){
            newTail = node;
            node = node.next; 
        }
        this.tail = node.next;
        this.tail.next = null;
        this.length--;
	if(this.length === 0 ){
            this.head = null;
            this.tail = null;
        }
        return node;        
    }

    // Removes the First Element
    shift(){
        if(!this.head) return undefined ;
        let node = this.head;
        this.head = node.next;
        if(this.length === 0 ){
            this.tail = null;
        }  
	this.length--; 
        return node;
    }

    // Add a Element in the starting
    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next  = this.head;
            this.head = newNode;
        }
	this.length ++;
    }

   // Get Element at a particular position
   get(position) {
        if (position < 0 || position >= this.length ) return undefined;
        let node = this.head;
        for(let i = 0;i < position;i++){
            node = node.next;
        }
        return node;        
    }

    // Update Elements Value at a particular position
    set(position,value){
     	let node = this.get(position);
     	if(node){
            node.val = value;
            return node;
        }
        return undefined;
    }

    // Insert at a particular position
    insert(position,value) {
        if (position < 0 || position >= this.length ) return undefined;
        else if(position == 0) this.unshift(value)
        else if(position == this.length) this.push(value);
        else {
            let node = this.head;
            for(let i = 0;i < position - 1;i++){
                node = node.next;
            }
            let newNode = newNode(value);
            newNode.next = node.next;
            node.next = newNode;
            this.length++;
            return newNode;
	}
    }
   
    // Removes Element from a position
    remove(position){
        if (position < 0 || position >= this.length ) return undefined;
        else if(position == 0) this.shift()
        else if(position == this.length) this.pop();
        else {
            let node = this.head;
            for(let i = 0;i < position-1;i++){
                node = node.next;
            }
            let temp = node.next;
            node.next = node.next.next;
            temp.next = null;
            this.length--;
            return temp
        }
    }

    // Reverse the Linked List	
    reverse(){
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      var next;
      var prev = null;
      for(var i = 0; i < this.length; i++){
           next = node.next;
           node.next = prev;
           prev = node;
           node = next;
      }
      return this;    
    }
}

// const list = new SinglyLinkedList();
// list.push('Hello');
// list.push('How are you ? ')
// list.push('I am good')
// list.push('bye');
