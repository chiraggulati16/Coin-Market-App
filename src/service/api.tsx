import axios from 'axios';
import {ApiUrl} from './apiConfig';
const instance = axios.create({
  baseURL: ApiUrl.baseUrl,
  headers: {
    'X-CMC_PRO_API_KEY': '2144b81d-ac65-4081-84e3-f0cecfad85a2',
  },
});

export class ApiConfig {
  getJSON(url: string, params = {}) {
    return new Promise((resolve, reject) => {
      instance({
        method: 'GET',
        url: url,
        params
      })
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          console.log(error)
          reject(error);
        });
    });
  }
}
