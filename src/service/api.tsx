import axios from 'axios';
import {ApiUrl} from './apiConfig';
const instance = axios.create({
  baseURL: ApiUrl.baseUrl,
  headers: {
    'X-CMC_PRO_API_KEY': 'PASTE YOUR TOKEN',
  },
});

const newsInstance = axios.create({
  baseURL: ApiUrl.newsBaseUrl,
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

  getNewsJSON(url: string, params = {}) {
    return new Promise((resolve, reject) => {
      newsInstance({
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
