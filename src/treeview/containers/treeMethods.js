export const updateRouteParams = (clickedNode, tree) => {
    let routePrams = [];
    let parent = {};
    const lowerSiblings = clickedNode.lowerSiblingCounts;

    for (let i in lowerSiblings) {
        if (parseInt(i, 10) === 0) {
            parent = tree[tree.length - (lowerSiblings[i] + 1)];
        } else {
            parent = parent.children[parent.children.length - (lowerSiblings[i] + 1)]
        }
        routePrams.push(parent.type);
        routePrams.push(setRoute(parent));
    }
    return routePrams;
}

const setRoute = (parent) => {
    let { id, name, type, title } = parent;
    return { id, name, type, title };
}