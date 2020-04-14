<template>
    <header>
        <div class="shadow-mark" ref="shadowMark"></div>
        <!-- 导航栏 -->
        <nav :class="{'nav': true, 'nav-close': nav_close}">
            <i class="open el-icon-menu" @click="nav_close = !nav_close"></i>
            <!-- LOGO -->
            <router-link  to="/home" class="logo">LOGO</router-link>
            
            <ul :class="{'nav-box': true, 'nav-box-close': nav_close}">
                <li class="nav-item">
                    <router-link to="/login" class="user-login" >
                        <img class="userHeadPortrait" :src="userHeadPortrait" />
                        <span class="username">{{username}}</span>
                    </router-link>
                </li>
                <li class="nav-item" v-for="item in tags" :key="item.ID"><router-link class="nav-a" :to="item.src">{{item.name}}</router-link></li>
                <!-- 搜索框 -->
                <li class="nav-item search" >
                    <form action="javascript:;" method="get">
                        <input class="search-box" placeholder="请输入搜索内容" v-model="search_text" type="text"/><i class="search-submit el-icon-search" ></i>
                    </form>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
import {API_GET_TAGS} from '@/api/API';
import shortID from 'shortid';

export default {
    name: 'MyNav',
    data() {
        return {
            tags: [],
            nav_close: false,
            username: "请登录",
            userHeadPortrait: require('../assets/logo.png'),//默认头像
            search_text: '',//搜索内容
        }
    },
    created() {
        this.tags = API_GET_TAGS();//获取课程列表
        let len = this.tags.length;
        while(len--) {
            this.tags[len].ID = shortID.generate();//生成key
        }

        
    },
    methods: {
        
    },
    mounted() {
        // 黑幕拦截操作
        let sm = this.$refs.shadowMark;
        sm.addEventListener('touchstart', function(e) {
            e.stopPropagation();
            e.preventDefault();
        }, false)
        sm.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
        }, false)
        sm.addEventListener('scroll', function(e) {
            e.stopPropagation();
            e.preventDefault();
        }, false)
    }
}
</script>
<style scoped>
/* 搜索框 */
.nav-item:last-child {
    display: none;
}

.shadow-mark {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    overflow: hidden;
    background-color: rgba(0, 0, 0, .5);
    /* z-index: 999; */
}
.nav {
    position: relative;
    width: 100%;
    height: 4rem;

    /* background-color: rgb(139, 222, 255); */
    z-index: 99;
    box-shadow: 0 0 2000px 0 transparent;
    /* transition: all .5s ; */
}
.nav-close {
    box-shadow: 0 0 0 2000px rgba(0, 0, 0, .5);
}


.open {
    position: absolute;
    left: 0;
    top: 50%;

    margin-left: 10px;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    
    color: white;
    text-align: center;
    font-size: 3rem;    
    transform: translateY(-50%);
    /* background-color: rgb(139, 222, 255); */
}
.logo {
    display: block;
    width: 200px;
    height: 4rem;
    line-height: 4rem;
    margin: 0 auto;
    
    text-align: center;
    font-size: 4rem;
    color: rgb(139, 222, 255);
    background-color: rgb(99, 209, 252);
}
.user-login {
    width: 100%;
    height: auto;
    text-align: center;
}
.userHeadPortrait {
    display: block;

    margin: 0 auto;
    width: 3rem;
    height: 3rem;
    margin-top: 10px;

    border-radius: 50%;
    border: 5px solid rgb(99, 209, 252);
}
.username {
    display: block;

    width: 100%;
    margin: 0 auto;
    margin-bottom: 10px;
    font-size: 1rem;
}
.nav-box {
    position: relative;
    left: -45%;

    margin: 0;
    padding: 0;
    width: 45%;
    height: calc(100vh - 4rem);
    
    background-color: rgb(139, 222, 255);
    transition: left .5s ;
    /* box-shadow: 0 0 10000px 0 black; */
    
}
.nav-box-close {
    left: 0%;
}

.nav-box li {
    list-style: none;
}
.nav-item {
    overflow: hidden;
    border-bottom: 1px solid rgb(99, 209, 252);
    /* background-color: rgb(139, 222, 255); */
}
.nav-a {
    display: block;

    width: 100%;
    height: 4rem;
    line-height: 4rem;

    text-align: center;
}
a {
    color: white;
}
/* 超小型设备 手机 */
@media (max-width: 768px) {
    .nav {
        background-color: rgb(99, 209, 252);;
    }
}
/* 小型设备 平板 */
@media (min-width: 768px) {
    

    .nav {
        background-color: yellow;
    }
    .logo {
        float: left;
        color: rgb(99, 209, 252);
        background-color: transparent;
    }
    .open {
        display: none;
    }
    .nav-box {
        width: 100%;
        height: 4rem;
        position: static;
    }
    .user-login {
        height: 100%;
    }
    .userHeadPortrait {
        margin-top: 0;
        width: 2rem;
        height: 2rem;
        border: 1px solid rgb(99, 209, 252);
    }
    .nav-item:first-child {
        float: right;
        margin-right: 5%;
    }
    .username {
        margin-bottom: 0;
        font-size: .5rem;
        /* display: none; */
    }
    .nav-item {
        float: left;
        text-align: center;
        overflow: hidden;
        border: none;
    }
    .nav-a {
        width: auto;
        padding: 0 30px;
        
        transition: all .2s ease-in;
    }
    .nav-a:hover {
        text-decoration: underline;
        background-color: rgb(99, 209, 252);
    }
    
}
/* 中形设备 台式电脑 */
@media (min-width: 992px) {
    /* 搜索框 */
    .nav-item:last-child {
        display: block;
        position: relative;
        float: right;

        margin-right: 5%;
        /* background-color: red; */
    }
    .nav-item form {
        height: 4rem;
    }
    .search-box {
        display: inline-block;
        position: relative;
        top: 50%;
        /* float: left; */

        box-sizing: border-box;
        width: 200px;
        height: 3rem;
        padding-left: 20px;
        margin: 0;

        outline: none;
        border-top-left-radius: .5rem;
        border-bottom-left-radius: .5rem;
        border: 0px solid rgb(139, 222, 255);
        transform: translateY(-50%);
    }
    .search-submit {
        position: relative;
        top: 50%;
        display: inline-block;
        /* float: left; */

        width: 3rem;
        height: 3rem;
        line-height: 3rem;
        padding: 0;
        margin: 0;

        outline: none;
        color: white;
        /* box-shadow: inset 0px 0px 15px white; */
        /* background-color:rgb(139, 222, 255); */
        background-color: rgb(99, 209, 252);
        border: 0px solid rgb(139, 222, 255);
        border-top-right-radius: .5rem;
        border-bottom-right-radius: .5rem;
        transform: translateY(-50%);
    }
    .nav {
        /* background-color: red; */
    }
}
/* 大型设备 大台式电脑 */
@media (min-width: 1200px) {
    .nav {
        /* background-color: blue; */
    }
}
</style>