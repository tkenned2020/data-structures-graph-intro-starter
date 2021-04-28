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

module.exports = {
  Graph,
};
