"use strict";
const Graph = require("../graph");
const Vertex = require("../vertex");
const Edge = require("../edge");

const myGraph = new Graph();
const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

myGraph.addEdge(zero, two, 5);
myGraph.addEdge(one, three, 5);
myGraph.addEdge(two, three, 5);
myGraph.addEdge(two, four, 5);
myGraph.addEdge(four, five, 5);
myGraph.addEdge(five, three, 5);

describe("Graph", () => {
    it("Node can be successfully added to the graph", () => {
      expect(myGraph.adjacenctList.has(zero)).toEqual(true);
    });
    
    it("breadth first travesal returns the correct length for travesaled nodes", () => {
        expect(myGraph.breadthFirst(zero).size).toEqual(5);
      });
    
      it("breadth first returns the visited nodes", () => {
        const first = [...myGraph.breadthFirst(zero)][0];
        expect(first).toEqual(new Vertex(0));
      });
  });
