'use strict';
const LinkedList =require('../lib/linkedList');

describe("Linked Lists Test",()=>{
    test("Can successfully instantiate an empty linked list",()=>{
        const ll=new LinkedList ();
        expect(ll.head).toBeNull();
    })
    test("Can properly insert into the linked list(empty linked list)",()=>{
        const ll=new LinkedList();
        ll.insert('a');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();
        expect(ll.length).toEqual(1);
    })
    test("Can properly insert into the linked list(not empty linked list)",()=>{
        const ll=new LinkedList();
        ll.insert('a');
        ll.insert('b');
        expect(ll.head.value).toEqual('b');
        expect(ll.head.next.value).toEqual('a');
        expect(ll.head.next.next).toBeNull();
    })
    test("The head property will properly point to the first node in the linked list",()=>{
        const ll=new LinkedList();
        expect(ll).toBeDefined();
        expect(ll.head).toBeNull();
    })
    test("Can properly insert multiple nodes into the linked list",()=>{
        const ll=new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        expect(ll.head.value).toEqual('c');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('a');
        expect(ll.length).toEqual(3);
    })
    test("Will return true when finding a value within the linked list that exists",()=>{
        const ll=new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        expect(ll.includes('c')).toEqual(true);
    })
    test("Will return false when searching for a value in the linked list that does not exist",()=>{
        const ll=new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        expect(ll.includes('k')).toEqual(false);
    })
    test("Can properly return a collection of all the values that exist in the linked list",()=>{
        const ll=new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        expect(ll.toString()).toEqual("{ c } -> { b } -> { a } -> NULL")
    })
    test("append to linklist works", () => {
        let list = new LinkedList();
        list.append('one');
        expect(list.head.value).toEqual('one');
        list.append('two');
        expect(list.head.value).toEqual('one');
        list.append(4);
        list.append(5);
        expect(list.head.value).toEqual('one');
    })
})