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
    // const visited = new Set();
    // if(!visited.has(startingVertex)){
    //   visited.add(startingVertex)
    // }
    //if first neighbor is not in visited set,
    //go to that node
    //add b to visited/ then check the b's first
    //N is in visited.has(a) if not keep traversing
    const visited = new Set();
    const q = [startingVertex]
    while(q.length) {
      let currentNode = q.shift()
      if(!visited.has(currentNode)){
          visited.add(currentNode)
          q.push(this.adjList[currentNode][0])
    }
    console.log(visited)
    allKeys = Object.keys(visited)


  }}

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
