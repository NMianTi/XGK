import Vue from 'vue'
import Router from 'vue-router'

import {COOKIE_USER} from '@/api/Global.js';//用户加密标识
import {UTIL_GET_SESSION} from '@/api/API.js';//用户方法

import Home from '@/views/Home'
import Login from '@/views/Login'
import ClassList from '@/views/ClassList'
import ProjectList from '@/views/ProjectList'
import Test from '@/views/test'

import Store from '../store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/test',
      component: Test
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      name: 'Home',
      meta: {
        title: '新工科平台'
      }
    },
    {
      path: '/login',
      component: Login,
      name: 'Login'
    },
    {
      path: '/classlist',
      component: ClassList,
      name: 'ClassList'
    },
    {
      path: '/projectlist',
      component: ProjectList,
      name: 'ProjectList'
    }
  ]
  
})
export default router;
/*
new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter: (to, from, next) => {
         next({
           path: '/index'
         })
      }
    },
    {
      path: '/index',
      name: 'View_index',
      component: View_index,
      meta: {
        title: '新工科平台'
      }
    },
    {
      path: '/classList',
      name: 'View_classList',
      component: View_classList,
      meta: {
        title: '课程列表'
      }
    },
    {
      path: '/classList/class',
      name: 'View_class',
      component: View_class,
      meta: {
        title: '课程详情'
      }
    },
    {
      path: '/login',
      name: 'View_login',
      component: View_login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/projectlist',
      name: 'View_projectList',
      component: View_projectList,
      meta: {
        title: '项目列表'
      }
    },
    {
      path: '/projectlist/project',
      name: 'View_project',
      component: View_project,
      meta: {
        title: '项目详情'
      }
    },
    {
      path: '/test',
      name: 'View_test',
      component: View_test
    },
    {
      path: '/personalspace',
      name: 'View_personal',
      component: View_personal,
      meta: {
        requireAuth:true
      }
    }
  ]
})
router.beforeEach((to, from, next) =>{
  //若有表示则进行 登录验证
  if(to.meta.requireAuth) {
    //获取ssesion 是否已经登录
    let user = UTIL_GET_SESSION(COOKIE_USER);
    if(Store.getters.user || user) {
      console.log("已登录");
      next();
    } else {
      console.log("未登录");
      next({
        path: '/login'
      });
    }
  } else {
    next();
  }
  
})
*/