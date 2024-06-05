import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getUserData() {
        return apiClient.get('/test');
    },

    registerUser(userData) {
        return apiClient.post('/registration', userData);
    },

    loginUser(loginData) {
        return apiClient.post('/login', loginData);
    }
};
