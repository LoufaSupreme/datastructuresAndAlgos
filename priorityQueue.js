
// min binary heap
// all parents have priority values less than children (low priority value = high priority e.g. priority 1 is higher priority than priority 5)
// no relationship between siblings
// balanced tree
// a child at index i has a parent at index Math.floor((i - 1) / 2)
// a parent at index i has children at indices 2*1 + 1 and 2*i + 2

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

// same as a min binary heap:
// item with highest priority (lowest priority ranking) is always first element
class PriorityQueue {
    constructor() {
        this.elements = [];
    }

    enqueue(val, priority) {
        const node = new Node(val, priority);
        this.elements.push(node);
        let index = this.elements.length - 1;
        // bubble up:
        while (index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.elements[parentIndex]
            // stop bubbling up when the parents priority are more important than the node:
            if (node.priority >= parent.priority) break;
            // otherwise, swap the elements:
            this.elements[index] = parent;
            this.elements[parentIndex] = node;
            index = parentIndex;
        }
        return this.elements;
    }
    // remove lowest value (root)
    dequeue() {
        const maxVal = this.elements[0];
        // pop off the last val 
        const end = this.elements.pop();
        if (this.elements.length === 0) {
            console.log(this.elements);
            return maxVal;
        }
        // replace the lowest val with the popped last val:
        this.elements[0] = end;
        
        // trickle down (reorder the heap):
        let index = 0;
        let element = this.elements[index];
        
        while (true) {
            let left_child_idx = 2*index + 1;
            let right_child_idx = 2*index + 2;
            let leftChild, rightChild;
            let swapIndex = null;
            
            // if left child index is in range, then check if that elements priority is higher (i.e. its priority number is lower):
            if (left_child_idx < this.elements.length) {
                leftChild = this.elements[left_child_idx];
                if (leftChild.priority < element.priority) {
                    swapIndex = left_child_idx;
                }
            }
            // do same for right child, and check if its priority supersedes left child's as well:
            if (right_child_idx < this.elements.length) {
                rightChild = this.elements[right_child_idx];
                if ((swapIndex === null && rightChild.priority < element.priority) || (swapIndex !== null && rightChild.priority < leftChild.priority)) {
                    swapIndex = right_child_idx;
                }
            }
            // if swapIndex didn't get assigned, then the heap must already be ordered correctly and we can stop:
            if (swapIndex === null) break;
            // otherwise, swap the 
            this.elements[index] = this.elements[swapIndex];
            this.elements[swapIndex] = element;
            index = swapIndex;
        }
        console.log(this.elements);
        return maxVal;
    }
}

let pQ = new PriorityQueue;
pQ.enqueue('first', 1)
pQ.enqueue('2nd', 2)
pQ.enqueue('third', 3)
pQ.enqueue('fourth', 4)
pQ.enqueue('fifth', 5)
console.log(pQ.elements)


