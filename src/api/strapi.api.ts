import axios from "axios";

const strapiApi = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    withCredentials: true
})

strapiApi.interceptors.request.use((config) => {

    config.headers = {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }

    return config

})

export default strapiApi
