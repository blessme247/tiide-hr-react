export const getToken = ()=> {
    const tokens = JSON.parse(localStorage.getItem("token")) || [];
    if(!tokens) return //It returns access and refresh tokens

    const accessToken = tokens[0];
    
    return accessToken;
    
}
