import axios from 'axios';

export default axios.create({
baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID QLw1xiSMfgFAcxMB41VGFoK0TBoAS7H1t16vFbIlZ5E'
    }
})