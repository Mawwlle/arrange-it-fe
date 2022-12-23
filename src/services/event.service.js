import axios from "axios";

const API_URL = "http://5.159.101.107:8000/";

class EventService {
    async getAll(req, res) {
        const {data} = await axios.get(API_URL + 'event')

        return data
    }
}

export default new EventService()