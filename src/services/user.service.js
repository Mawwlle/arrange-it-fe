import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://5.159.101.107:8000/';

class UserService {
    getPublicContent() {
        return axios.get("https://reqres.in/api/users");
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }
}

export default new UserService();