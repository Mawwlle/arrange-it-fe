import axios from "axios";

const API_URL = "http://5.159.101.107:8000/";

class AuthService {
    login(username, password) {
        const form_data = new FormData()
        form_data.append("username", username)
        form_data.append("password", password)

        return axios
            .post(API_URL + "token", form_data)
            .then(response => {
                localStorage.setItem("user", username);
                localStorage.setItem("token", response.data.access_token);

                return response.data.access_token;
            });
    }

    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    register(full_name, username, email, password) {
        return axios.post(API_URL + "sign_up", {
            "info": {
            full_name,
            username,
            email,
            },
            password
        });
    }

    getCurrentUser() {
        const username = localStorage.getItem("user")
        const token = localStorage.getItem("token")

        if (!username || !token) {  // TODO: fix it
            return null;
        }

        var config = {
            method: 'get',
            url: API_URL + "user/" + username,
            headers: {
                'kbn-xsrf': 'true',
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin': "*",
            }
        };

        const response = axios(config);

        console.log(response.response)
        return response;
    }
}

export default new AuthService();
