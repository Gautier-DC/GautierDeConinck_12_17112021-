import axios from 'axios';

const urlBase = 'http://localhost:3000/user/'

const getUser = async(userId) =>{
    return axios.get(urlBase + userId).then((response) => {
        const processedResponse = {...response};
        const user = {...processedResponse.data.data};

        if (user.todayScore) {
            user.score = user.todayScore
            delete user.todayScore
        }

        processedResponse.data.data = user
        return processedResponse
    })
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