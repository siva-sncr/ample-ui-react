export const groupRouteParams = (requestParams, routeParams) => {
    if (routeParams instanceof Array) {
        for (var i = 0; i < routeParams.length; i = i + 2) {
            requestParams[routeParams[i]] = routeParams[i + 1];
        }
        requestParams['apiType'] = routeParams[routeParams.length - 2];
    }
    return requestParams;
};