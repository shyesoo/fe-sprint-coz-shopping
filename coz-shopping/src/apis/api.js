import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://cozshopping.codestates-seb.link',
});

export const getProducts = () => {
  return instance.get('/api/v1/products');
};