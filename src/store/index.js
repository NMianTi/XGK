import Vue from 'vue';
import Vuex from 'vuex';

import {COOKIE_USER} from '@/api/Global.js';
import {UTIL_GET_SESSION} from '@/api/API.js';

Vue.use(Vuex);

const state = {
    user: null,//用户登录
    personal_tag_pattern: 0,//个人空间 侧向tag
}
const getters = {
    //获取登录用户的信息
    user: function(state) {
        if(!state.user) {
            //向session 查找
            let user_backups = UTIL_GET_SESSION(COOKIE_USER)
            if(user_backups) {
                state.user = user_backups;//反向赋值
            }
        }
        return state.user;
        
    },
    //获取个人空间的tag 状态
    personalTagPattern: function(state) {
        return state.personal_tag_pattern;
    }
}
const actions = {

}
const mutations = {
    //登录设置用户
    setUser: function(state, payload) {
        state.user = payload.user;//
    },
    //设置个人空间的侧向tag
    setPersonalTagPattern: function(state, payload) {
        state.personal_tag_pattern = payload.index;//
    }
}
const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});

export default store;