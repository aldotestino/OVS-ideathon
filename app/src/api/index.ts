import axios from 'axios';
import { QueryClient } from 'react-query';

const client = (() => {
  return axios.create({
    baseURL: 'http://localhost:8000'
  });
})();

const queryClient = new QueryClient();

export { client, queryClient };