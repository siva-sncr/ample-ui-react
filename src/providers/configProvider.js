
import config from '../config/config.json'
// Need to make changes in this file
const getRestAPIURL = (ignoreContextPath) => {
    var rest = config['restapi'];
    var restURL = '';

    if (rest) {
        restURL += rest.protocol ? rest.protocol + '://' : '';
        restURL += rest.host ? rest.host : '';
        restURL += rest.port ? ':' + rest.port : '';
        restURL += restURL ? '/' : '';

        restURL = rest.offline ? "offline/" : restURL;
        if (!ignoreContextPath) {
            restURL += rest.contextPath ? rest.contextPath : '';
        }

    }
    return restURL;
}

export const getURL = (page, entityType, params, ignoreContextPath) => {
    page = page ? page.toLowerCase() : page;
    
    var restURL = getRestAPIURL(ignoreContextPath);
    var rest = config['restapi'];
    var apiURLS = config['api'] || {};
    var basePage = apiURLS[page];
    var levelName = params['apiType'];
    var path = basePage[levelName] ? basePage[levelName][entityType] : null;
    if(!levelName){
        path = basePage[entityType];
    }
    try {
        path = path.replace(/\$/g, '');
    }
    catch(err) {
        return false;
    }

    let keys = Object.keys(params);
    if(typeof(params) !== undefined && params) {
      for(let i = 0; i < keys.length; i++){
          var id;
          if(params[keys[i]] && typeof(params[keys[i]]) === 'object'){
              id = ((params[keys[i]]['type'] === "REGION") || (params[keys[i]]['type'] === "SUBSTATION") || (params[keys[i]]['type'] === "FEEDER") || (params[keys[i]]['type'] === "SITE") || (params[keys[i]]['type'] === "LATERAL") || (params[keys[i]]['type'] === "LATERAL_SITE"))? params[keys[i]]["name"]:params[keys[i]]["id"];
          }else{
              id = params[keys[i]];	
          }
        path = path.replace('{'+ keys[i] + '}', id);
      }
    }

    if(rest && rest.offline){
        path = path.replace("?", "_");
        path = path.replace("=", "_");
        path += ".json";
    }
    return restURL  + path;
}