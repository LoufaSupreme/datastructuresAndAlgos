
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // print array representation of the values of the list:
    print() {
        const arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
    // push a new value to the end of the list:
    push(val) {
        const newNode = new Node(val);
        // if list is empty:
        if (!this.head) {
            this.head = newNode;
        } 
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }
    // remove the last node from the list:
    pop() {
        // if list only has 1 node:
        if (!this.head) return;
        const targetNode = this.tail;
        if (!this.tail.prev) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = targetNode.prev;
            this.tail.next = null;
        }
        this.length--;
        targetNode.prev = null;
        return targetNode;
    }
    // remove first node from the list:
    shift() {
        // if empty, return:
        if (!this.head) return;
        const targetNode = this.head;
        // if only 1 node:
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = targetNode.next;
            this.head.prev = null;
        }
        targetNode.next = null;
        this.length--;
        return targetNode;
    }
    // add node to beginning of list:
    unshift(val) {
        if (!this.head) return this.push(val);
        else {
            const newNode = new Node(val);
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.length++;
            return this;
        }
    }
    // get node at particular index:
    get(index) {
        if (index <  0 || index >= this.length) return null;
        let current;
        if (index < this.length/2) {
            current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
        }
        else {
            current = this.tail;
            for (let i = this.length-1; i > index; i--) {
                current = current.prev;
            }
        }
        return current;
    }
    // set the value of a node at a particular index:
    set(index, val) {
        const targetNode = this.get(index);
        if (targetNode) {
            targetNode.val = val;
        }
        return targetNode;
    }
    // insert a node at a particular index:
    insert(index, val) {
        if (index <  0 || index >= this.length) return null;
        else if (index === 0) return this.unshift(val);
        else if (index === this.length) return this.push(val);

        const current = this.get(index);
        const before = current.prev;
        const newNode = new Node(val);

        newNode.next = current;
        newNode.prev = current.prev;

        before.next = newNode;
        current.prev = newNode;

        this.length++;
        return this;
    }
    // remove a node at a particular index:
    remove(index) {
        if (index <  0 || index >= this.length) return null;
        else if (index === 0) return this.shift();
        else if (index === this.length-1) return this.pop();

        const targetNode = this.get(index);
        targetNode.prev.next = targetNode.next;
        targetNode.next.prev = targetNode.prev;

        targetNode.next = null;
        targetNode.prev = null;
        this.length--;
        return targetNode;
    }
    // reverse direction:
    reverse() {
        let current = this.head;
        let prev = null;
        this.tail = this.head;
        let next;

        while (current) {
            next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }
        this.head = prev;
        return this;
    }
}

const d = new DoublyLinkedList;
d.push(28);
d.push('butt');
d.push(21);

// d.print();
// d.reverse();
// d.print();
