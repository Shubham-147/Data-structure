class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}


class PriorityQueue {

    constructor(){
        this.values = [];
    }

    enqueue(value, priority){
        const newNode = new Node(value, priority);
        this.values.push(newNode);
        const parent  = Math.floor((values.length - 1) / 2);
       
        if(this.values.length > 1 )
            this.bubbleUp(value);
        return this.values;
    }

    bubbleUp(value) {

       let index = this.values.length - 1;
       while(index > 0){
           const parent = Math.floor((index - 1)/2);
           if(this.values[parent].priority <= value.priority )  break; 
           let temp = this.values[parent]  
           this.values[parent] = this.values[index]; 
           this.values[index] = temp;
           index = parent
      }        
    }

    deque(){
        const lastElement = this.values.pop();
        if(this.values.length > 0 ){
            this.values[0] = lastElement;
            this.heapDown(lastElement);        
        }
        return this.values
    }

     heapDown(value){
        let index = 0;
        while(true) {
            let swap = null;
            const left = (2*index) + 1;
            const right = (2*index) + 2;
            let leftChild,rightChild;
            
            if(left < this.values.length){
              leftChild = this.values[left];
              if(leftChild.priority > value.priority){
                  swap = left;
              }  
            }

            if(right < this.values.length){
              rightChild = this.values[right];
              if((swap == null && rightChild.priority > value.priority)||
                  (swap !== null && rightChild.priority > leftChild.priority )){
                  swap = right;
              }  
            }
             
            if(swap == null) break;
            else {
                this.values[index] = this.values[swap];
                this.values[swap] = value
                index = swap;
            }
        }

    }
    
}


let ER = new PriorityQueue();
ER.enqueue('Covid -1 ', 1)
ER.enqueue('Covid -2 ', 4)
ER.enqueue('Covid -3 ', 2)
ER.enqueue('Covid -4 ', 7)





