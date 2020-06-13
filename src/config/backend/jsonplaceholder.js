import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

instance.defaults.headers.common['Authorization'] = 'jsonPlaceHolder Token'


instance.interceptors.request.use(request => {
    console.log('[jsonplaceholder.js]', 'Http request succeed', request);
    return request;
}, error => {
    console.error('[jsonplaceholder.js]', 'Http request error', error);
    return Promise.reject(error)
})

instance.interceptors.response.use(response => {
    console.log('[jsonplaceholder.js]', 'Http response succeed', response);
    return response;
}, error => {
    console.error('[jsonplaceholder.js]', 'Http response error', error);
    return Promise.reject(error)
})

export default instance;