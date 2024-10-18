// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        if(!this.head) return 0

        // Implement in O(n) and 

        // let curr = this.head;
        // let count = 1;
        // while(curr.next != null){
        //     curr = curr.next;
        //     count++;
        // }
        // return count;

        //in O(1) time complexity

        //To do this we need to sacrifice space complexity and add 
        //a length property to the linkedlist object.
        if(this.length){
            return this.length
        }
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = this.head.value;
        let curr = this.head;
        while(curr.next != null){
            curr = curr.next;
            sum += curr.value;
        }

        return sum;

        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes
        return this.sumOfNodes() / this.length;

        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let curr = this.head;
        for(let i = 0; i < this.length; i++){
            if(i == n) return curr;
            curr = curr.next;
        }
        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
        if(this.length % 2 === 0 ){
            return this.findNthNode(Math.ceil(this.length / 2) - 1 )
        }else{
            return this.findNthNode(Math.floor(this.length / 2) )
        }
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let reversedList = new SinglyLinkedList

        let node = this.head
        while(node){
            reversedList.addToHead(node.value)
            node = node.next;
        }

        return reversedList;

        // Write your hypothesis on the time complexity of this method here
    }

    addToHead(val){
        const newNode = new SinglyLinkedNode(val);
        if(this.head) newNode.next = this.head; 
        this.head = newNode;
        this.length++;
        return this;
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let node = this.head;
        let nextNode = this.head
        while(node.next){
            nextNode = node.next
            node.next = null;
            this.addToHead(nextNode.value)
            // [1] - 2 - 3 - 4 - 5
            // [1] - (2) - 3 - 4 -5
            // [2] - (1) - 3 - 4 - 5
            // [3] - 2 - (1) - 4 - 5 
            // [4] - 3 - 2 - (1) - 5  
            node = nextNode
        }
        // Write your hypothesis on the time complexity of this method here
    }
}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
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

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this.head;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // O(1)
        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let curr = this.head;
        for(let i = 0; i < this.length; i++){
            if(i == n) return curr;
            curr = curr.next;
        }
        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
            if(this.length % 2 === 0 ){
                return this.findNthNode(Math.ceil(this.length / 2) - 1 )
            }else{
                return this.findNthNode(Math.floor(this.length / 2) )
            }
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let reversedDLL = new DoublyLinkedList

        let node = this.head
        while(node){
            reversedDLL.addToHead(node.value)
            node = node.next;
        }

        return reversedDLL;

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let node = this.head;
        let nextNode = this.head
        while(node.next){
            nextNode = node.next
            node.next = null;
            this.addToHead(nextNode.value)
            // [1] - 2 - 3 - 4 - 5
            // [1] - (2) - 3 - 4 -5
            // [2] - (1) - 3 - 4 - 5
            // [3] - 2 - (1) - 4 - 5 
            // [4] - 3 - 2 - (1) - 5  
            node = nextNode
        }
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
