import {request_post_params}  from './utils/util'

export async function sendSpecialService(params) {
    return request_post_params('/ccs/vdnlink/sendSpecialService', params);
}