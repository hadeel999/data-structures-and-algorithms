'use strict';
const Node = require('./Node');
class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    isEmpty() {
        if (this.top === null) {
            return true;
        } else {
            return false;
        }
        // return this.top === null;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.top = newNode;
            this.length += 1;
        } else {
            newNode.next = this.top;
            this.top = newNode;
            this.length += 1;
        }
    }

    pop() {
        if (this.isEmpty()) {
            return 'Exception';
        }
        const temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length -= 1;
        return temp.value;
    }

    peek() {
        if (this.isEmpty()) {
            return 'Exception';
        } else {
            return this.top.value;
        }
    }
}

module.exports = Stack;