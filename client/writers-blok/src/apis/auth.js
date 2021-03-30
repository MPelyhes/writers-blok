import axios from 'axios';

export function apiCall(method, path, data){
  console.log(path)
  return new Promise((resolve, reject) => {
    return axios[method](path, data)
    .then(res => {
      return resolve(res.data)
    })
    .catch(err => {
      return reject(err.response.data.error)
    })
  });
}