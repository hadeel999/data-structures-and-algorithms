'use strict';
const Stack = require('../Stack');


describe('STACK TEST',()=>{
    it('Can successfully push onto a stack',()=>{
        const newStack = new Stack();
        newStack.push('a');
        expect(newStack.top.value).toEqual('a');
    })
    it('Can successfully push onto a stack',()=>{
        const newStack = new Stack();
        newStack.push('a');
        newStack.push('b');
        newStack.push('c');
        expect(newStack.top.value).toEqual('c');
        expect(newStack.top.next.value).toBe('b');
        expect(newStack.top.next.next.value).toBe('a');
    })
    it('Can successfully pop off the stack',()=>{
        const newStack = new Stack();
        newStack.push('a');
        newStack.push('b');
        newStack.push('c');
        newStack.pop();
        expect(newStack.top.value).toEqual('b');
        expect(newStack.top.next.value).toBe('a');
    })
    it('Can successfully empty a stack after multiple pops',()=>{
        const newStack = new Stack();
        newStack.push('a');
        newStack.push('b');
        newStack.push('c');
        newStack.pop();
        newStack.pop();
        newStack.pop();
        expect(newStack.isEmpty()).toEqual(true);
    })
    it('Can successfully peek the next item on the stack',()=>{
        const newStack = new Stack();
        newStack.push('a');
        newStack.push('b');
        newStack.push('c');
        expect(newStack.peek()).toEqual('c');
        newStack.pop();
        expect(newStack.peek()).toEqual('b');
    })
    it('Can successfully instantiate an empty stack',()=>{
        const newStack = new Stack();
        expect(newStack).toBeDefined();
        expect(newStack.top).toBeNull();
    })
    it('Calling pop or peek on empty stack raises exception',()=>{
        const newStack = new Stack();
        expect(newStack.peek()).toBe("Exception");
        expect(newStack.pop()).toBe("Exception");
    })
})
