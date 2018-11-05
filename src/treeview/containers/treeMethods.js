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

export const updateShadow = (clickedNode) => {
    let className = `shadow${clickedNode.node.type + clickedNode.node.name.replace(/ /g, '')} span`;
    let selector = document.querySelectorAll(`.${className}`);
    if (selector && selector[0]) {
        selector[0].style.boxShadow = "0px 0px 3px 2px #A8A6A6"
    }
}

export const removeShadow = () => {
    let selector = document.querySelectorAll("[class*=shadow] span")
    if (selector && selector.length > 0) {
        for (let i in selector) {
            if (selector[i] && selector[i].style && selector[i].style.boxShadow)
                selector[i].style.boxShadow = null;
        }
    }
}