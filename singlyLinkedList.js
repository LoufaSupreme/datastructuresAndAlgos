
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
        }
        else {
            this.tail.next = node;
        }
        this.tail = node;
        this.length++;
        return this;
    }
    // remove last node:
    pop() {
        if (!this.head) return;
        
        let currentNode = this.head;
        let newTail = this.head;
        while (currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    }
    // remove first node:     
    shift() {
        if (!this.head) return;
        const oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return oldHead;
    }
    // add node to beginning:
    unshift(val) {
        const node = new Node(val);
        if (!this.tail) this.tail = node;
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }
    // traverse the list up to the targetIndex:
    traverse(targetIndex = this.length-1) {
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentNode && currentIndex < targetIndex) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode;
    }
    // get the node at a targetIndex:
    get(targetIndex) {
        if (targetIndex < 0 || targetIndex >= this.length) return null;
        return this.traverse(targetIndex);
    }
    // set the value of a node at a targetIndex:
    set(targetIndex, val) {
        const targetNode = this.get(targetIndex);
        if (targetNode) targetNode.val = val;
        return targetNode;
    }
    // insert node at targetIndex:
    insert(targetIndex, val) {
        if (targetIndex < 0 || targetIndex > this.length) return null;
        else if (targetIndex === 0) return this.unshift(val);
        else if (targetIndex === this.length) return this.push(val);
        else {
            const newNode = new Node(val);
            const frontNode = this.get(targetIndex - 1);
            newNode.next = frontNode.next;
            frontNode.next = newNode;
            this.length++;
        }
        return this;
    }
    // remove node at targetIndex:
    remove(targetIndex) {
        if (targetIndex < 0 || targetIndex > this.length) return null;
        else if (targetIndex === 0) return this.shift();
        else if (targetIndex === this.length-1) return this.pop();
        else {
            const frontNode = this.get(targetIndex - 1);
            const targetNode = frontNode.next;
            frontNode.next = targetNode.next;
            length--;
            return targetNode;
        }
    }
    // print an array version of the list:
    print() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode) {
            arr.push(currentNode.val);
            currentNode = currentNode.next;
        }
        console.log(arr);
    }
    // print the values in reverse orders:
    // recursive
    printReverse(head) {
        if (head === null) return;
        this.printReverse(head.next);
        console.log(head.val);
    }
    // reverse the order of the list:
    reverse() {
        if (this.length === 0) return null;

        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let next;;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.print();
        return this;
    }
}

let list = new SinglyLinkedList;
list.push(35);
list.push('ass');
list.push(100);

list.reverse()
// list.printReverse(list.head);
