import axios from 'axios';

const KEY = 'AIzaSyC4TqcIGFc1Uv7X7ZFaLHLQa_JoFcamySA';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
     params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY

     }
})


