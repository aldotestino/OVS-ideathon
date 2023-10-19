import axios from 'axios';
import { QueryClient } from 'react-query';

const client = (() => {
  return axios.create({
    baseURL: 'http://localhost:3001'
  });
})();

const queryClient = new QueryClient();

export { client, queryClient };