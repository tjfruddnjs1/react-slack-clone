import axios from 'axios';

const fetcher = (url: string) => 
    axios
    .get(url, {
      withCredentials: true,                /* 쿠키 주고받기 위한 */
    })
    .then((response) => response.data);

export default fetcher;
