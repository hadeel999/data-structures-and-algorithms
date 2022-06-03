'use strict';
const Node = require('../lib/node');

describe('testing Node', () => {
    test('Can successfully make a node',()=>{
        const node = new Node('test');
        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual('test');
        expect(node.next).toBeNull();
    })
});