import axios from 'axios';

const urlBase = 'http://localhost:3000/user/'


const getUser = async(userId) =>{
    

    return axios.get(urlBase + userId);    
}


const getUserActivity = async(userId) =>{
    
    return axios.get(urlBase + userId + '/activity')
    
}

const getUserSessions = async(userId) =>{
    
    return axios.get(urlBase + userId + '/average-sessions')
}

const getUserPerf = async(userId) =>{
    
    return axios.get(urlBase + userId + '/performance')
}


export { getUser, getUserActivity, getUserSessions, getUserPerf };