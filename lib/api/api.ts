import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL + '/api';

export const nextServer = axios.create({
  baseURL: baseURL,
});
