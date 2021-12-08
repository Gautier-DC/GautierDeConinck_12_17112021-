import axios from 'axios';

const urlBase = 'http://localhost:3000/user/'


const getUser = async(userId) =>{
    

    return axios.get(urlBase + userId);    
}


const getUserActivity = async() =>{
    
    return axios.get('http://localhost:3000/user/18/activity')
    
}

const getUserSessions = async() =>{
    
    axios.get('http://localhost:3000/user/18/average-sessions')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}

const getUserPerf = async() =>{
    
    axios.get('http://localhost:3000/user/18/performance')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}


export { getUser, getUserActivity, getUserSessions, getUserPerf };