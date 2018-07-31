

let baseUrl = 'https://172.18.2.45/ample'

function loginAmple(loginInfo){
    let newPost = {
        j_username : "ampleadmin",
        j_password : "yourpass"
    };
    const requestOptions = {
        method: 'POST',
        'Accept': 'application/json',
        headers: { 'Content-Type': 'charset=UTF-8' },
        body: JSON.stringify({j_username : loginInfo.username,
        j_password : loginInfo.password})
    };

    return fetch(`${baseUrl}/j_spring_security_check`, requestOptions)
        .then(response => {
            return response;
        });

}


function logoutAmple(){
	return {}
}


let loginServer = { loginAmple, logoutAmple };


export default loginServer;