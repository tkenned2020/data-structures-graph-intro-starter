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

    // const visited = new Set(); // {'a' }
    // const q = [startingVertex] // [ c, d]
    // while(q.length) {
    //   let currentKey = q.shift();
    //   let currentNode = this.adjList[currentKey];
    //   if(!visited.has(currentKey)){
    //       visited.add(currentKey)
    //       for(let i = 0; i < currentNode.length; i++) {

    //         if(!visited.has(currentNode[i])) {
    //           q.push(currentNode[i])
    //         }
    //       }
    //     }
    //   }
    // return Array.from(visited)
    const visited = new Set(); // {'a' }
    const result = [];
    const q = [startingVertex] // [ c, d]
    while(q.length) {
      let currentKey = q.shift();
      let currentNode = this.adjList[currentKey];
      if(!visited.has(currentKey)){
          visited.add(currentKey)
          result.push(currentKey)
          for(let i = 0; i < currentNode.length; i++) {

            if(!visited.has(currentNode[i])) {
              q.push(currentNode[i])
            }
          }
        }
      }
      // console.log(result);
    return result
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
    ////Iterative solution
    const visited = new Set(); // {a}
    const result = []; // [a]
    const q = [startingVertex] // [d ]
    while(q.length) {
      let currentKey = q.shift();
      let currentNode = this.adjList[currentKey];
      if(!visited.has(currentKey)){
          visited.add(currentKey)
          result.push(currentKey)
          for(let i = currentNode.length - 1; i >= 0; i--) {
            if(!visited.has(currentNode[i])) {
              q.push(currentNode[i])
              break
            }
          }
        }
      }
    return result

  }

  depthFirstTraversalRecursive(
    startingVertex,
    visited = new Set(), //a, b, c, f, g, d
    vertices = [] //a, b, c, f, g, d
  ) {
    // Code goes here ...
    if (visited.has(startingVertex)) return;

    visited.add(startingVertex);
    vertices.push(startingVertex);
    this.adjList[startingVertex].forEach(
      neighbor => { this.depthFirstTraversalRecursive   (neighbor, visited, vertices)
                  }
    )
  return vertices
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

    console.log(graph);
    graph.depthFirstTraversalRecursive('a')
module.exports = {
  Graph,
};
