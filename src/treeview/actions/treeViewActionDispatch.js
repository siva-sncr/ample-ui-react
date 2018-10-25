import * as actionTypes from './treeViewActionTypes';


const checkSite = node => node.type.indexOf('SITE') > -1;

export const setTree = (tree) => {
    //map response tree name to title - since tree view library needs tittle. 
    const mapedTree = tree.map(node => {
        return {
            ...node,
            title: node.name,
            arrow: !checkSite(node) ? 'right' : ''
        }
    })
    return {
        type: actionTypes.LOAD_INITIAL_TREE,
        tree: mapedTree
    };
};

export const onDropTree = (tree) => {
    return {
        type: actionTypes.LOAD_DROPPED_TREE,
        tree: tree
    };
};

export const fetchTreeFailed = () => {
    return {
        type: actionTypes.FETCH_TREE_FAILED
    };
};

export const onExpandNode = (nextLevelNodes, clickedNode, routeParams) => {
    const mapedTree = nextLevelNodes.map(node => {
        return {
            ...node,
            title: node.name,
            arrow: !checkSite(node) ? 'right' : ''
        }
    })
    const updatedNode = {
        ...clickedNode.node,
        expanded: true,
        children: mapedTree,
        arrow: !checkSite(clickedNode.node) ? 'down' : ''
    }
    return {
        type: actionTypes.EXPAND_NODE,
        updatedNode: [updatedNode],
        routeParams: routeParams,
        clickedNode: clickedNode
    }
}

export const onEditNode = (newNode, clickedNode, routeParams) => {
    const updatedNode = clickedNode;
    updatedNode.node.name = newNode;
    updatedNode.node.title = newNode;
    return {
        type: actionTypes.EDIT_NODE,
        newNode: [updatedNode.node],
        routeParams: routeParams,
        clickedNode: clickedNode
    }
}

export const onCloseNode = (clickedNode) => {
    const updatedNode = clickedNode;
    updatedNode.node.expanded = false;
    updatedNode.node.arrow = !checkSite(clickedNode.node) ? 'right' : '';
    return {
        type: actionTypes.CLOSE_NODE,
        newNode: [updatedNode.node],
        clickedNode: clickedNode
    }
}

export const setRouteParams = (routeParams) => {
    return {
        type: actionTypes.SET_ROUTE_PARAMS,
        routeParams: routeParams
    }
}
