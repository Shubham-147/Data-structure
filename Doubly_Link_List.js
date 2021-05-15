    class Node {
        constructor(val){
            this.val = val;
            this.next = null;
            this.prev = null;
        }
    }

    class DoubleLinkedList {
        constructor(){
            this.tail = null;
            this.head = null;
            this.length = 0;
        }

        push(value) {
            const newNode = new Node(value);
            if(!this.head){
                this.head = newNode;
                this.tail = this.head;
            }
            else {
                newNode.prev = this.tail;
                this.tail.next = newNode
                this.tail = newNode;
            }
            this.length++;
            return newNode;
        }

        pop() {
            if(!this.head) return undefined;
            this.tail.prev.next = null;
            this.tail.prev = null;
            this.tail = this.tail.prev;
            this.length--;
            if(this.length === 0 ){
                this.head = null;
                this.tail = null;
            }
            return this;
        }

        shift(){
            if(!this.head) return undefined ;
            this.head.next = null;
            this.head = this.head.next;
            this.head.prev = null;
            if(this.length === 0 ){
                this.head = null;
                this.tail = null;
            }
            this.length --;
            return this;
        }

        unshift(value){
            const newNode = new Node(value);
            if(!this.head){
                this.head = newNode;
                this.tail = newNode;    
            } else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
            this.length++;
            return newNode;
         }

         get(position) {

            if (position < 0 || position >= this.length ) return undefined;
            let node = this.head;
            for(let i = 0;i < position;i++){
                node = node.next;
            }
            return node;        
        }

        set(position,value){
         let node = this.get(position);
         if(node){
             node.val = value;
             return node;
         }
         return undefined;
        }

         insert(position,value) {
            if (position < 0 || position >= this.length ) return undefined;
            else if(position == 0) this.unshift(value)
            else if(position == this.length) this.push(value);
            else {
                const newNode = new Node(value);
                const nextNode = this.get(position);
                newNode.next = nextNode;
                newNode.prev = nextNode.prev;
                nextNode.prev.next = newNode;
                nextNode.prev = newNode;
                this.length++;
                return newNode ;                      
             }

         }

       remove(position){
           if (position < 0 || position >= this.length ) return undefined;
           else if(position == 0) this.shift();
           else if(position == this.length) this.pop();
           else {
               const node = this.get(position);
               node.next.prev = node.prev;
               node.prev.next = node.next;
               node.prev = null;
               node.next = null;
           }
           return node;
       }


    }

    let dd = new DoubleLinkedList();
    console.log(dd.push(1));
    console.log(dd.push(2));
    dd.push(3);
    dd.push(4);
    console.log(dd.remove(2))
    // console.log(dd.pop())
//     console.log('Here',dd.insert(3,25), dd.length)

