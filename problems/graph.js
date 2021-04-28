class Graph {
  constructor() {
    //understand
    //this.adjList = new Object()
    //plan
    //
    //execute
    this.adjList = new Object();
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }
  //{'a': [b], 'b': [a]}
  addEdges(srcValue, destValue) {
    this.addVertex(srcValue);
    this.addVertex(destValue);
    if (!this.adjList[srcValue].length) {
      this.adjList[srcValue].push(destValue);
    } else if (!this.adjList[srcValue].includes(destValue)) {
      this.adjList[srcValue].push(destValue);
    }

    if (!this.adjList[destValue].length) {
      this.adjList[destValue].push(srcValue);
    } else if (!this.adjList[destValue].includes(srcValue)) {
      this.adjList[destValue].push(srcValue)
  }
}

  buildGraph(edges) {
    // addEdge
    edges.forEach(ele => this.addEdges(ele[0], ele[1]))
    return this.adjList

  }

  breadthFirstTraversal(startingVertex) {

    const visited = new Set(); // {'a' }
    const q = [startingVertex] // [ c, d]
    while(q.length) {
      let currentKey = q.shift();
      let currentNode = this.adjList[currentKey];
      if(!visited.has(currentKey)){
          visited.add(currentKey)
          for(let i = 0; i < currentNode.length; i++) {

            if(!visited.has(currentNode[i])) {
              q.push(currentNode[i])
            }
          }
        }
      }

    // console.log(visited)
    // allKeys = Object.keys(visited)
    // console.log(visited);
    console.log(Array.from(visited));
    return Array.from(visited)

  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(
    startingVertex,
    visited = new Set(),
    vertices = []
  ) {
    // Code goes here ...
  }
}

  let graph;
    const edges =
        [['a', 'b'],
        ['a', 'c'],
        ['a', 'd'],
        ['d', 'g'],
        ['b', 'c'],
        ['b', 'e'],
        ['c', 'f'],
        ['c', 'g'],
        ['f', 'g'],
        ['h']]

  graph = new Graph();
    for (let edge of edges) {
        if (edge.length === 1) {
            graph.addVertex(edge[0])
        } else {
            graph.addEdges(edge[0], edge[1])
        }
    }

    console.log(graph)
module.exports = {
  Graph,
};
