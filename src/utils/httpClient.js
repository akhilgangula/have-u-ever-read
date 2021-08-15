import axios from "axios";

const httpClient = axios.create({
    baseURL: 'http://localhost:3010', validateStatus: function (status) {
        return status >= 200 && status < 599;
    },
    withCredentials: true
})

export default httpClient;