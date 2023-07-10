import axios from 'axios';
import config from 'config';

const publicAxios = axios.create({
  baseURL: config.baseUrl,
});

export default publicAxios;
