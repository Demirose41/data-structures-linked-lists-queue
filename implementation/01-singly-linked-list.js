// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        const newNode = new SinglyLinkedNode(val);
        if(this.head) newNode.next = this.head; 
        this.head = newNode;
        this.length++;
        return this;
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // O(n)
        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }

        let curr = this.head;
        while (curr.next != null) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++;

        return this;
    }

    removeFromHead() {
        // Remove node at head
        // 1. check if head is length 0
        if(this.length == 0) return undefined;
        // 2. check if head is length 1
        if(this.length == 1){
            let removedNode = this.head;
            this.head = null;
            this.length--;
            return removedNode;
        }
        // 3. save head node to be removed
        let oldHead = this.head;
        // 4. set 2nd node to new head
        this.head = oldHead.next;
        this.length--;
        return oldHead;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if(this.length == 0) return undefined
        if(this.length == 1){
            let removedNode = this.head;
            this.head = null;
            this.length--;
            return removedNode;
        }
        let curr = this.head;
        while(curr.next.next != null){
            curr = curr.next;
        }
        let removedNode = curr.next;
        curr.next = null;
        this.length--;
        return removedNode;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    peekAtHead() {
        // Return value of head node
        if(this.head == null) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    print() {
        // Print out the linked list
        if(this.length == 0) return;
        let current = this.head;

        while(current){
            console.log(`${current.value}`);
            current = current.next;
        }

        console.log("NULL");
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
