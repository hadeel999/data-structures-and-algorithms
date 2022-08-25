"use strict";
let Node = require("../../javascript/trees/Node");
let BinaryTree = require('../../javascript/trees/BinaryTree');
let tree_intersection = require("../tree_intersection");

let a = new Node("1");
let b = new Node("2");
let c = new Node("3");
let d = new Node("4");

a.left = b;
a.right = c;
b.left = d;

let tree1 = new BinaryTree(a);

let e = new Node("1");
let f = new Node("2");
let g = new Node("3");
let h = new Node("5");

e.left = f;
e.right = g;
f.left = h;

let tree2 = new BinaryTree(e);

describe("Testig tree intersection", () => {
  it("return common values between 2 trees", () => {
    expect(tree_intersection(tree1, tree2)).toEqual(["2", "3", "1"]);
  });

  it("Successfully returns a list of all common values", () => {
    expect(tree_intersection(tree2, tree2)).toEqual(["5","2", "3", "1"]);
  });
});
