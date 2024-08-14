
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
    //convert roads to a data structure
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

        const roadGraph = buildGraph(roads);
        //addresses and location
        class VillageState {
            constructor(place, parcels) {
            this.place = place;
            this.parcels = parcels;
            }
            move(destination) {
            if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
            if (p.place != this.place) return p;
            return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
            }
            }
            }



            //Parcel objects aren’t changed when they are moved but re-created
            let first = new VillageState(
                "Post Office",
                [{place: "Post Office", address: "Alice's House"}]
                );
                let next = first.move("Alice's House");
                console.log(next.place);
                console.log(next.parcels);
                console.log(first.place);
                //The mail truck route
                const mailRoute = [
                    "Alice's House", "Cabin", "Alice's House", "Bob's House",
                    "Town Hall", "Daria's House", "Ernie's House",
                    "Grete's House", "Shop", "Grete's House", "Farm",
                    "Marketplace", "Post Office"
                ];
                //implement route following
                function routeRobot(state, memory) {
                    if (memory.length == 0) {
                    memory = mailRoute;
                    }
                    return {direction: memory[0], memory: memory.slice(1)};
                    }