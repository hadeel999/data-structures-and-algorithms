'use strict';
const Queue = require("../../stack-and-queue/Queue");

class Node {
    constructor(value) {
      this.value = value;
      this.parent = null;
      this.children = [];
    }
  }
  
  class KaryTree {
    constructor(root = null) {
      this.root = root;
    }

    fizzBuzzTree(karyTree){
        let queue = new Queue();
        queue.enqueue(karyTree.root);
        while(!queue.isEmpty()){
            let dequeued=queue.dequeue();
            if(dequeued.value%5===0 && dequeued.value%3===0){
                dequeued.value="FizzBuzz";
            } else if(dequeued.value%3===0){
                dequeued.value="Fizz";
            }else if(dequeued.value%5===0){
                dequeued.value="Buzz";
            }else{
                dequeued.value=dequeued.value.toString();
            }

            dequeued.children.forEach((child)=>{
                queue.enqueue(child);
            })
        }
        return karyTree;
    }
}

module.exports={Node,KaryTree};