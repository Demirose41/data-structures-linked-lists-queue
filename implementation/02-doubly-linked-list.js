// Node class is implemented for you, no need to look for bugs here!
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

    addToTail(val) {
        // Add node of val to tail of linked list
        if(this.length == 0){
            this.addToHead(val);
            return this.tail;
        }else{
            let newNode = new DoublyLinkedNode(val);
            let oldTail = this.tail;
            oldTail.next = newNode;
            newNode.prev = oldTail;
            this.tail = newNode;
            this.length++;
            return this.tail;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        if(this.length == 0) return undefined;
        let oldHead = this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
            this.length--;
            return oldHead.value;
        }else{
            let newHead = this.head.next;
            newHead.prev = null;
            this.head = newHead;
            this.length--;
            return oldHead.value;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if(this.length == 0) return undefined;
        let oldTail = this.tail;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
            this.length--;
            return oldTail.value;
        }else{
            let newTail = this.tail.prev;
            newTail.next = null;
            this.tail = newTail;
            this.length--;
            return oldTail.value;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        if(this.length == 0) return undefined;
        // Return value of head node
        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        if(this.length == 0) return undefined;
        // Return value of tail node
       return this.tail.value; 
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
