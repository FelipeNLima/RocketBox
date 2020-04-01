import axios from "axios";

const api = axios.create({
    baseURL:"https://omnistack-backend-felipe.herokuapp.com"
});

export default api;