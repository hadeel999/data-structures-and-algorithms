"use strict";

const Vertex = require("./vertex");
const Edge = require("./edge");

class Graph {
  constructor() {
    this.adjacenctList = new Map();
  }

  addVertex(vertex) {
    this.adjacenctList.set(vertex, []);
  }

  addEdge(start, end, weight) {
    if (!this.adjacenctList.has(start) || !this.adjacenctList.has(end)) {
      console.log("one or both vertex is not existed");
      return;
    }
    const adjacencies = this.getNeighbors(start);
    adjacencies.push(new Edge(end, weight));
  }

  getNeighbors(vertex) {
    if (!this.adjacenctList.has(vertex)) {
      return;
    }
    return this.adjacenctList.get(vertex);
  }

  breadthFirst (startNode) {
    let queue = [];
    let visitedNodes = new Set();
    queue.push(startNode);
    visitedNodes.add(startNode);
    while (queue.length) {
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }
    return visitedNodes
  };
}

module.exports = Graph;