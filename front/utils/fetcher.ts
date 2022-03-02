import axios from 'axios';

const fetcher = (url: string) => {
  axios
    .get(url, {
      withCredentials: true,            /* cookie 주고받기 위한 */
    })
    .then((response) => response.data)
    .catch((error) => error);
};

export default fetcher;
