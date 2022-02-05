
// max binary heap
// all parents are greater than children
// no relationship between siblings
// balanced tree
// a child at index i has a parent at index Math.floor((i - 1) / 2)
// a parent at index i has children at indices 2*1 + 1 and 2*i + 2

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(n) {
        this.values.push(n);
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index-1)/2);
        // bubble up:
        while (this.values[index] > this.values[parentIndex]) {
            // swap the values:
            let tmp = this.values[index];
            this.values[index] = this.values[parentIndex];
            this.values[parentIndex] = tmp;
            index = parentIndex;
            parentIndex = Math.floor((index-1)/2);
        }
        return this.values;
    }
    // remove highest value (root)
    extractMax() {
        const maxVal = this.values[0];
        // pop off the last val 
        const end = this.values.pop();
        if (this.values.length === 0) {
            console.log(this.values);
            return maxVal;
        }
        // replace the highest val with the popped last val:
        this.values[0] = end;
        
        // trickle down (reorder the heap):
        let index = 0;
        let val = this.values[index];
        let child1_idx = 2*index + 1;
        let child2_idx = 2*index + 2;

        // while any child is larger than the val, and while atleast one child exists:
        while ((this.values[child1_idx] > val || this.values[child2_idx] > val) && child1_idx < this.values.length) {

            // if first child is larger than second, then swap its position with val:
            if (this.values[child1_idx] > this.values[child2_idx] || this.values[child2_idx] === undefined) {
                let tmp = this.values[child1_idx];
                this.values[child1_idx] = this.values[index];
                this.values[index] = tmp;
                index = 2*index + 1;
            }
            // otherwise, swap child2:
            else {
                let tmp = this.values[child2_idx];
                this.values[child2_idx] = this.values[index];
                this.values[index] = tmp;
                index = 2*index + 2;
            }

            // reset the children based on the new index:
            child1_idx = 2*index + 1;
            child2_idx = 2*index + 2;

        }
        console.log(this.values);
        return maxVal;
    }
}

let MBH = new MaxBinaryHeap;