
const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
    ];
/*The map object 
 buildGraph creates a map object that, for each node,
stores an array of connected nodes*/

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
    if (from in graph) {
    graph[from].push(to);
    } else {
    graph[from] = [to];
    }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
    }
    return graph;
    }