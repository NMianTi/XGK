import {get, post} from '@/http';
import {URL_PROFIX, HOST, PORT} from '@/api/Global.js';
import qs from 'qs';

/*
* 重构 1
* 模拟后端数据
*/
export const API_GET_TAGS = function() {
    return [
        {
            name: '首页',
            src: '/home'
        },
        {
            name: '选课',
            src: '/classlist'
        },
        {
            name: '项目招募',
            src: '/projectlist'
        },
        {
            name: '资源分享',
            src: 'resource'
        }
    ]
}
























/*公用方法*/

/* 页面跳转*/
export const GO_INDEX = function() {
    this.$router.push('/index');
}
export const GO_LOGIN = function() {
    this.$router.push('/login');
}
export const GO_REGISTER = function() {
    this.$router.push('/reigster');
}
export const GO_PERSONALSPACE = function() {
    this.$router.push('/personalspace');
}
export const GO_PROJECTLIST = function() {
    //项目列表
    this.$router.push('/projectlist');
}

/*
* 用户信息补充
* POST  /api/:id/personal/perfect
    请求参数：----------------------------------
    |    名称      |  参数类型  |  是否必要  |
    |   user_id    |  string   |    是      |
    |user_introduce|  string   |    否      |
    | user_contact |  string   |    否      |
    | user_college |  string   |    否      |
    | user_class   |  string   |    否      |
	| user_img     | 
*/
export const API_SET_USER = (data) => {
    return new Promise((resolve, reject) => {
        post('/personal/perfect', data)
        .then( (response) => {
            if(response.status == 200) {
                resolve( {
                    data: response.data.data,
                    msg: '更改成功',
                    status: response.status
                })
            } else{
                resolve({
                    data: response.data.data,
                    msg:"???",
                    status: response.status
                })
            }
        }) .catch( (err) => {
            if(err.response.status == 501) {
                console.log("用户未登录");
            }
            reject(err);
        })
    })
}
/*
* 根据学院 选择老师
*/
export const API_SELECT_TEACHER = (data) => {
    return new Promise( (resolve, reject) => {
        post('admin/classList/select/tea', {
            course_id: data.course_id,//课程id
            course_timeWeek: data.course_timeWeek,//星期
            course_section: data.course_section,//节
            college_id: data.college_id,//学院id
        }) .then( (response) => {
            if(response.status == 200) {
                resolve( {
                    data: response.data.data,
                    msg: '获取教师成功',
                    status: response.status
                });
            } else if(response.status == 556) {
                resolve({
                    data: response.data.data,
                    msg: "没有教师了",
                    status: response.status
                })
            }
        }) .catch( (err) => {
            if(err.response.status == 556) {
                reject({
                    data: err,
                    msg: '没有可用教师',
                    status: err.response.status
                })
            } else {
                reject({
                    data: err,
                    msg: '未知错误',
                    status: err.response.status
                })
            }
        })
    });
}
/*
* 获取用户课程表
*/
export const API_GET_USER_CLASS = (id) => {
    return new Promise( (resolve, reject) => {
        get('coursetable', {
            user_id: id
        }).then( (response) => {
            if(response.status == 200) {
                console.log(response)
                resolve({
                    data: response.data.data,
                    msg: '获取成功'
                });
            } else {
                resolve({
                    data: response.data,
                    msg: '获取失败'
                })
            }
        }) .catch( (err) => {
            reject(err);
        })
    })
}
/*
* 新增课程 选课
*/
export const API_PUT_CLASS = (data) => {
    return new Promise( (resolve, reject) => {
        post('admin/classList/add', data)
        .then( (response) => {
            if(response.status == 200) {
                resolve({
                    status: response.status,
                    msg: '提交成功'
                });
            } else {
                resolve({
                    status: response.status,
                    msg: '提交失败'
                })
            }
        }) .catch( (err) => {
            reject(err);
        })
    })
}
/*
*  获取教师列表
*/
export const API_GET_TEACHERS = (collegeID) => {
    return new Promise( (resolve, reject) => {
        get('admin/allUser/teacher/' + collegeID, {})
        .then( (response) => {
            if(response.status == 200) {
                resolve({
                    data: response.data.data,
                    msg: '获取成功'
                });
            } else {
                resolve({
                    data: response.data,
                    msg: '获取失败'
                })
            }
        }) .catch( (err) => {
            reject(err);
        })
    })
}
/*
* 获取班级列表
*/
export const API_GET_CLASSES = (collegeName) => {
    return new Promise( (resolve, reject) => [
        get('admin/className/' + collegeName, {})
        .then( (response) => {
            if(response.status == 200) {
                resolve({
                    data: response.data.data,
                    msg: '获取成功'
                });
            } else {
                resolve({
                    data: response.data,
                    msg: '获取失败'
                })
            }
        }) .catch( (err) => {
            reject(err);
        })
    ])
}
/*
* 获取学院列表
*/
export const API_GET_COLLEGES = () => {
    return new Promise( (resolve, reject) => {
        get('admin/collegeName', {})
        .then( (response) => {
            if(response.status == 200) {
                resolve({
                    data: response.data.data,
                    msg: '获取成功'
                });
            } else {
                resolve({
                    data: response.data,
                    msg: '获取失败'
                })
            }
        }) .catch( (err) => {
            reject(err);
        })
    })
}

/*
* 获取课程列表
*/
export const API_GET_CLASS_LIST = () => {
    return new Promise( (resolve, reject) => {
        get('admin/classList', {})
        .then( (response) => {
            //成功返回数据
            if(response.status == 200) {

                resolve({
                    data: response.data.data,
                    status: response.status,
                    msg: '获取成功'
                })
            } else {
                resolve({
                    data: response.data.data,
                    status: response.status,
                    msg: '获取失败'
                })
            }
        }).catch( (err) => {
            reject(err);
        })
    }); 
}
/*
* 获取个人信息
*/
export const API_PERSONAL = () => {
    return get('10000/personal',{});
}
/*
* 提交招募
* @params {Object} params
*   @params {Object} user_id 用户id
*   @params {String} recruit_id 项目id
*/ 
export const API_JOIN_PROJECT = (params) => {
    return get('/recruit/recruit/join', {})
}
/*
* 获取用户课程表
* @params {string} user_id 用户id
* @return {json} data
*/
export const API_GET_COURSETABLE = (user_id) => {
    return new Promise( (resolve, reject) => {
        get('/coursetable', {
            user_id: user_id
        }).then(( response ) => {
            if(response.status == 200) {
                resolve(response.data);
            } else {
                reject("未知错误")
            }
        }).catch( (err) => {
            reject(err);
        });
    })
    
}
/*
* 获取用户信息
*/
export const API_GET_USER = (user_id) => {
    return new Promise( (resolve, reject) => {
        get('/' + user_id + '/personal', {

        }).then( (response) => {
            if(response.status == 200) {
                resolve(response.data.data);
                
            } else {
                reject("未知错误");
            }
        }).catch( (err) => {
            reject(err);
        })
    })
}
//-------------工具-----------------
/*
* 设置cookie 时间戳
* 由于永久保存 so 设置时间戳
* @params {String} key localStorage的键名
* @params {Object} data locaStorage的键值
* @params {Date} 时间戳
*/
export const UTIL_SET_COOKIE = (key, data, sec) => {
    //计算过期时间
    let endTime = new Date();
    endTime.setTime( endTime.getTime() + sec);
    window.localStorage.setItem(key, qs.stringify({data, endTime: endTime.getTime()}) );
}
/*
* 获取cookie localStorage 附带过期检测
* @params {String} key localStorage的键
*/
export const UTIL_GET_COOKIE = (key) => {
    let value = qs.parse( window.localStorage.getItem(key) );
    let Time = Number(value.endTime);
    
    //小于现在 没过期
    if(Time < new Date().getTime()) {
        window.localStorage.removeItem(key);
        return null;
    }
    return value.data;
}
export const UTIL_REMOVE_COOKIE = (key) => {
    window.localStorage.removeItem(key);
}

/*
* 设置 sessionStorage
* @params {String} key 键名
* @params {Object} data 键值对象
*/
export const UTIL_SET_SESSION = (key, data) => {
    window.sessionStorage.setItem(key, qs.stringify(data));
}
/*
* 获取 sessionStorage
* @params {String} key sessionStorage的键
*/
export const UTIL_GET_SESSION = (key) => {
    return qs.parse( window.sessionStorage.getItem(key) );
}

export const UTIL_REMOVE_SESSION = (key) => {
    window.sessionStorage.removeItem(key);
}