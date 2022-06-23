'use strict';
const Stack = require('../Stack');

class PseudoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
       if (this.stack1.top){
        this.stack2.push(this.stack1.top.value);
        return this.stack1.pop();
       }else{
        return "Exception";
       }
    }
    
}
module.exports = PseudoQueue;