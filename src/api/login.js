import {get, post} from '@/http';
import {URL_PROFIX, HOST, PORT} from '@/api/Global.js';
import qs from 'qs';

/*
* 登录
* @params {Object} params
*   @params {user_number} 学号/手机号码/邮箱
*   @params {user_password} 密码
*/
export var API_LOGIN = (user_number, user_password) => {
    return new Promise((resolve, reject) => {
        post(HOST + PORT + URL_PROFIX + '/login', {
            user_number: user_number,
            user_password: user_password,
            user_Identity: '1'
        })
        .then((response) => {
            if(response.status == 200) {
                resolve(response.data);
            } else {
                resolve(response);
            }
        }).catch((err) => {
            if(err.response.status == 401) {
                resolve(err)
            } else {
                reject(err);
            }
            
        })
    })
}
// 注册
export var API_REGISTER = (payload) => {
    return new Promise( (resolve, reject) => {
        post("/register", {
            user_name: payload.user_name,
            user_stuID: payload.user_stuID,
            user_number: payload.user_number,
            user_password: payload.user_password,
            user_email: payload.user_email
        }).then( (response) => {
            console.log(response)
            if(response.status == 200) {
                resolve(response.data);
            } else {
                reject(response);
            }
        }).catch( (err) => {
            // 密码错误
            reject(err)
        })
    })
}


//用户列表
export var API_USER_LIST = (params) => {
    return get(HOST + PORT + URL_PROFIX + '/admin/allUser', {params});
}
//注册
// export var API_REGISTER = (params) => {
//     return post(HOST + PORT + URL_PROFIX + '/api/register', {
//         user_name: params.user_name,
//         user_stuID: params.user_stuID,
//         user_number: params.user_number,
//         user_password: params.user_password
//     })
// }

//个人空间
export var API_PERSONAL = (params) => {
    return get(HOST + PORT + URL_PROFIX + params.id + '/personal', {});
}

//用户留言表
export var API_USER_LEAVE_FORM = (params) => {
    return get('/recruit/message', params);
};




//-----------------------------------------------------------------
export var API_GETFREEAPI = (params) => {
    //返回 Promise 
    // https://api.apiopen.top/getSingleJoke?sid=28654780
    return get('https://api.apiopen.top/getSingleJoke', params);
}
export var APT_GETCLASSES = (params) => {
    return get('https://api.apiopen.top/getJoke', params);
}