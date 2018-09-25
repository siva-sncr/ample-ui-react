export const updateRouteParams = (clickedNode, tree) => {
    let routePrams = [];
    let parent = {};
    const lowerSiblings = clickedNode.lowerSiblingCounts;

    for (let i in lowerSiblings) {
        if (i == 0) {
            parent = tree[tree.length - (lowerSiblings[i] + 1)];
        } else {
            parent = parent.children[parent.children.length - (lowerSiblings[i] + 1)]
        }
        routePrams.push(parent.type);
        routePrams.push(putRoute(parent));
    }
    return routePrams;
}

const putRoute = (parent) => {
    let route = {};
    route["id"] = parent.id;
    route["name"] = parent.name;
    route["type"] = parent.type;
    route["title"] = parent.title;
    return route;
}