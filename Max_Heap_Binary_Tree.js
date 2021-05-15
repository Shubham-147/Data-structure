class MaxBinaryHeap {
    constructor(){
        this.values = [41,39,33,18,27,12];
    }
    
    insert(value) {
        this.values.push(value);
        const parent  = Math.floor((values.length - 1) / 2);
        if(this.values.length > 1 )
            this.bubbleUp(value);
        return this.values;
    }

    bubbleUp(value) {

       let index = this.values.length - 1;
       while(index > 0){
           const parent = Math.floor((index - 1)/2);
           if(this.values[parent] >= value )  break; 
           let temp = this.values[parent]  
           this.values[parent] = this.values[index]; 
           this.values[index] = temp;
           index = parent
      }        
    }

    extractMax() {
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
              if(leftChild > value){
                  swap = left;
              }  
            }

            if(right < this.values.length){
              rightChild = this.values[right];
              if((swap == null && rightChild > value)||
                  (swap !== null && rightChild > leftChild )){
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

let heap = new MaxBinaryHeap()
heap.insert(55)
heap.insert(10)
heap.insert(20)

