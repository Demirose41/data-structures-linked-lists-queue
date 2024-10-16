const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);
        if(this.length == 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        
        this.length++;
        return this.length;
        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if(this.length == 0) return null;
        let oldHead = this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
            this.length--;
        }if(this.length == 2){
            this.head = oldHead.next;
            this.tail = oldHead.next;
            this.length--;
        }else{
            this.head = oldHead.next;
            this.length--;
        }
        return oldHead.value;
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
