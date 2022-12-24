import axios from "axios";

const API_URL = "http://5.159.101.107:8000/";

class PlaceService {
    getPlaces () {
        const token = localStorage.getItem("token")


        var config = {
            method: 'get',
            url: API_URL + "places/",
            headers: {
                'kbn-xsrf': 'true',
                'Authorization': 'Bearer ' + token,
                'Access-Control-Allow-Origin': "*",
            }
        };

        const response = axios(config);

        return response;
    }
}

export default new PlaceService();
