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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

it("Can successfully add a node to the end of the linked list", () => {
    const ll = new LinkedList();
    ll.append("b");
    expect(ll.head.next).toBeNull();
  });

  it("Can successfully add multiple nodes to the end of a linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    expect(ll.head.next.value).toEqual("b");
    expect(ll.head.next.next).toBeNull();
  });

  it("Can successfully insert a node before a node located i the middle of a linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    ll.insertBefore("b", "z"); 
    expect(ll.head.next.value).toEqual("z");
    expect(ll.head.next.next.value).toEqual("b");
  });

  it("Can successfully insert a node before the first node of a linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.insertBefore("a", "l"); 
    console.log(ll.toString());
    expect(ll.head.value).toEqual("l");
  });

  it("Can successfully insert after a node in the middle of the linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    ll.insertAfter("b", "z");
    expect(ll.head.next.next.value).toEqual("z");
    expect(ll.head.next.next.next.value).toEqual("c");

  });

  it("Can successfully insert a node after the last node of the linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    ll.insertAfter("c", "z");
    expect(ll.head.next.next.next.value).toEqual("z");
    expect(ll.head.next.next.next.next).toBeNull();

  });

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  it("Where k is greater than the length of the linked list",()=>{
    const ll=new LinkedList();
    ll.append("a");
    expect(ll.kthFormEnd(2)).toEqual("Exception");
  });

  it("Where k and the length of the list are the same",()=>{
    const ll=new LinkedList();
    ll.append("a");
    ll.append("b");
    expect(ll.kthFormEnd(1)).toEqual("a");
  });

  it("Where k is not a positive integer",()=>{
    const ll=new LinkedList();
    ll.append("a");
    expect(ll.kthFormEnd(-1)).toEqual("Exception");
  });

  it("Where the linked list is of a size 1",()=>{
    const ll=new LinkedList();
    ll.append("a");
    expect(ll.kthFormEnd(0)).toEqual("a");
  });

  it("Happy Path” where k is not at the end, but somewhere in the middle of the linked list",()=>{
    const ll=new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    ll.append("d");
    ll.append("e");
    expect(ll.kthFormEnd(3)).toEqual("b");
  });

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  it("zipLists method -test1", () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    let ll=new LinkedList();
    ll1.append(1);
    ll1.append(3);
    ll1.append(2);
    ll2.append(5);
    ll2.append(9);
    ll2.append(4);
    ll=ll1.zipLists(ll1,ll2);
   expect(ll.toString()).toEqual("{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL");
});

it("zipLists method -test2", () => {
  const ll1 = new LinkedList();
  const ll2 = new LinkedList();
  let ll=new LinkedList();
  ll1.append(1);
  ll1.append(3);
  ll2.append(5);
  ll2.append(9);
  ll2.append(4);
  ll=ll1.zipLists(ll1,ll2);
 expect(ll.toString()).toEqual("{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 4 } -> NULL");
});

it("zipLists method -test3", () => {
  const ll1 = new LinkedList();
  const ll2 = new LinkedList();
  let ll=new LinkedList();
  ll1.append(1);
  ll1.append(3);
  ll1.append(2);
  ll2.append(5);
  ll2.append(9);
  ll=ll1.zipLists(ll1,ll2);
 expect(ll.toString()).toEqual("{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> NULL");
});