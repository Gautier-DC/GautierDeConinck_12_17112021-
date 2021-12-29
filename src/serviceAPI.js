import axios from 'axios';

const urlBase = 'http://localhost:3000/user/'

const APIBackEnd = {
    getUser:(userId) => axios.get(urlBase + userId).then((response) => { return response.data.data}),
    getUserActivity: (userId) => axios.get(urlBase + userId + '/activity').then((response) => { return response.data.data}),
    getUserSessions: (userId) => axios.get(urlBase + userId + '/average-sessions').then((response) => { return response.data.data}),
    getUserPerf: (userId) => axios.get(urlBase + userId + '/performance').then((response) => { return response.data.data}),
}


export default APIBackEnd;