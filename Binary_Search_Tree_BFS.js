class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
   
        if(!this.root){
            this.root = node; 
            return this;
        } else {
            let temp = this.root
            while(temp != null){
                if(temp.value ==node.value) return undefined;
                if(temp.value > node.value) {
                    if(!temp.left) {
                        temp.left = node;
                        return this;
                    }
                    temp = temp.left;   
                }
                 
                else {
                     if(!temp.right) {
                        temp.right = node;
                        return this;
                    }
                    temp = temp.right;
                }
            }

        }
    }

    search(value) {
        if(!this.root) return undefined;
        let current = this.root;
        while(current){
            if(current.value == value) return current;
            if(current.value > value){
                current = current.left;
            } else{
                current = current.right;
            }   
        }
        return undefined;
    }

    BFS() {
        if(!this.root) return undefined;
        let queue = [this.root], 
            visited = [];
        while(queue.length > 0){
            console.log(queue)
            let node  = queue.shift();
            visited.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            
        }
        return visited;
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let b = new BinarySearchTree();
b.insert(10)
b.insert(5)
b.insert(13)
b.insert(2)
b.insert(7)
b.insert(11)
b.insert(16)
console.log(b.BFS());
