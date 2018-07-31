import loginServer from '../services/loginService';

export const loginActions = {
    login,
    logout
};

function login(postData){
	return function(dispatch){
        loginServer
            .loginAmple(postData)
            .then(post => {
                const action = { type : 'LOGIN', payload : post };
                dispatch(action);
            });
    }

}

function logout(postData){
	return function(dispatch){
        let newPost = {
            id : 0,
            title : postData.title,
            description : postData.description,
            editing:false
        };

        loginServer
            .logoutAmple(newPost)
            .then(post => {
                const action = { type : 'ADD_POST', payload : post };
                dispatch(action);
            });
    }

}
