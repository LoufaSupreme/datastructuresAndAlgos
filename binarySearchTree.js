class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    // insert a new node:
    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (val === current.val) {
                console.log(`${val} already exists`);
                return;
            }
            else if (newNode.val < current.val) {
                if (current.left) current = current.left;
                else {
                    current.left = newNode;
                    return this;
                }
            }
            else {
                if (current.right) current = current.right;
                else {
                    current.right = newNode;
                    return this;
                }
            }
        }
    }
    // check if a val is in the tree:
    contains(val) {
        if (!this.root) return false;

        let current = this.root;
        while (current) {
            if (val === current.val) return true;
            else if (val < current.val) current = current.left;
            else if (val > current.val) current = current.right;
        }
        return false;
    }
    // visit every node via BFS (iterative):
    // can improve performance by using a linked list instead of an array for the queue (faster shift)
    breadthFirstSearch() {
        const queue = [];
        const visited = [];

        queue.push(this.root);

        while (queue.length !== 0) {
            let node = queue.shift();
            visited.push(node.val);
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return visited;
    }
    // visit every node via DFS - preorder (recursive):
    // adds node to list as we come to them
    // valuable if you want to re-create a BST from an array. The visited array will be built in the same order as the tree is built.
    depthFirstSearchPreOrder() {
        const visited = [];

        function traverse(node) {
            visited.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return visited;
    }
    // visit every node via DFS - postorder (recursive):
    // adds node to list after all children of that node have been visited
    depthFirstSearchPostOrder() {
        const visited = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.val);
        }

        traverse(this.root);
        return visited;
    }
    // visit every node via DFS - inorder (recursive):
    // adds node to list after left child is visited
    // returns the values sorted in order
    depthFirstSearchInOrder() {
        const visited = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            visited.push(node.val);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return visited;
    }
}

const tree = new BinarySearchTree;

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

