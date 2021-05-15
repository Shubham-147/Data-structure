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

    BFS_Order() {
        if(!this.root) return undefined;
        return this.traverse(this.root);
    }

    traverse(node){
        let temp = [];
        // Uncomment for PreOrder
        // temp.push(node.value)
        if(node.left) 
            temp = [...temp,...this.traverse(node.left)];
        // Uncomment for In Order
        // temp.push(node.value)
        if(node.right) 
            temp =  [...temp,...this.traverse(node.right)];
        // Uncomment for Post Order
        // temp.push(node.value)
        return temp;
    }

    diagonalTraverse() {
        if(!this.root) return undefined;
        let queue = [this.root];
        let dump = [];
        let data = [];
        while(queue.length > 0 && dump.length >= 0) {
            const node = queue.shift();
            data.push(node.value);
            
            if(node.left) 
                dump.push(node.left);
            if(node.right)
              queue.push(node.right);
            if(queue.length == 0){
                queue = [...queue, ...dump];
                dump = []   
            }   
        }
        return data;                
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
console.log(b.BFS_Order());
