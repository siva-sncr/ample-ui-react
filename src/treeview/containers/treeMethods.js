export const updateRouteParams = (currentRouteParams, clickedNode, tree) => {
    deleteExisting(currentRouteParams, clickedNode);
    currentRouteParams.push(clickedNode.node.type);
    currentRouteParams.push(clickedNode.node);
    return currentRouteParams;
}

const deleteExisting = (route, clickedNode) => {
    if (clickedNode.node.type === route[route.length - 2]) {
        route.splice(route.length - 2, 2)
    }
}