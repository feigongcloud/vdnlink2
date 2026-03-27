import request from './request';


const API_HOST = 'https://api2.vdnlink.cn';

//const API_HOST = 'http://my.vdnlink.cn:8068';

export const request_post_params = (api_url, params) => {
  const result = request(API_HOST + api_url, {
    method: 'post',
    data: params,
  })
    .then(function (response) {
      return Promise.resolve(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return result;
};