import axios from 'axios';
import qs from 'qs';

axios.interceptors.request.use((config) => {
    return config;
}, (err) => {
    return new Promise().reject(err);
})


export function get(url, params) {
    return axios.get(url, {
        params
    });
}
export function post(url, data) {
    return axios.post(url, data)
}
