'use strict';
const Queue = require('../Queue');


describe('QUEUE TEST',()=>{
    it('Can successfully enqueue into a queue',()=>{
        const newQueue = new Queue();
        newQueue.enqueue('a');
        expect(newQueue.front.value).toEqual('a');
    })
    it('Can successfully enqueue multiple values into a queue',()=>{
        const newQueue = new Queue();
        newQueue.enqueue('a');
        newQueue.enqueue('b');
        newQueue.enqueue('c');
        expect(newQueue.front.value).toEqual('a');
        expect(newQueue.front.next.value).toBe('b');
        expect(newQueue.front.next.next.value).toBe('c');
    })
    it('Can successfully dequeue out of a queue the expected value',()=>{
        const newQueue = new Queue();
        newQueue.enqueue('a');
        newQueue.enqueue('b');
        newQueue.enqueue('c');
        let temp=newQueue.dequeue();
        expect(temp).toEqual('a');
    })
    it('Can successfully peek into a queue, seeing the expected value',()=>{
        const newQueue = new Queue();
        newQueue.enqueue('a');
        newQueue.enqueue('b');
        newQueue.enqueue('c');
        expect(newQueue.peek()).toEqual('a');
    })
    it('Can successfully empty a queue after multiple dequeues',()=>{
        const newQueue = new Queue();
        newQueue.enqueue('a');
        newQueue.enqueue('b');
        newQueue.enqueue('c');
        newQueue.dequeue();
        newQueue.dequeue();
        newQueue.dequeue();
        expect(newQueue.isEmpty()).toEqual(true);
    })
    it('Can successfully instantiate an empty queue',()=>{
        const newQueue = new Queue();
        expect(newQueue).toBeDefined();
        expect(newQueue.front).toBeNull();
    })
    it('Calling dequeue or peek on empty queue raises exception',()=>{
        const newQueue = new Queue();
        expect(newQueue.peek()).toBe("Exception");
        expect(newQueue.dequeue()).toBe("Exception");
    })
})
