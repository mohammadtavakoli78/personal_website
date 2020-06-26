import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');

axios.interceptors.response.use(null, (err) => {
    const expectedError =  
    err.response && 
    err.response.status >=400 && 
    err.response.status<500;

    if(!expectedError){
        console.log('Loggin the error', err);
        toast.error('خطایی رخ داده است');
    }

    return Promise.reject(err);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}