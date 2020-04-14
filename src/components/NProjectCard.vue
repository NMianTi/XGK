<template>
    <li class="content" :style="{height: height}">
        <router-link :to="href" class="project-a">
            <h2 class="project-title" >{{title}}</h2>
            <p class="project-description">{{description}}</p>
        </router-link>
        
        <div class="project-decoration">
            <div class="project-star">
                <i class="el-icon-star-off p-icon-star"></i><span class="star-number">{{star}}</span>
            </div>
            <router-link :to="auther_href" class="project-user">
                <i class="el-icon-user p-icon-user"></i><span class="author">{{auther}}</span>
            </router-link>
            <span class='project-time'>{{time}}</span>
        </div>
    </li>
</template>
<script>
export default {
    props: {
        'description': {
            default: '技术人员：已齐全。缺少一些简单的人员。',
            type: String
        },
        'title': {
            default: '项目招募，一个新工科选课平台的招募',
            type: String
        },
        'time': {
            default: '1998-07-02'
        },
        'auther': {
            default: '佚名',
            type: String
        },
        'auther_href': {
            default: '#',
            type: String
        },
        'href': {
            default: "#",
            type: String
        },
        'star': {
            default: 123,
            type: Number
        },
        height: {
            default: '100px',
        }
    }
}
</script>
<style scoped>
.content {
    list-style: none;
    position: relative;

    width: 90%;
    height: 10rem;
    margin: 20px auto;
}

/* 项目列表 */
.project-box {
    width: 100%;
    margin: 0;
    padding: 0;
    /* background-color: red; */
}
.project-item {
    list-style: none;
    position: relative;

    width: 90%;
    height: 10rem;
    margin: 20px auto;

    /* background-color: yellow; */
    
}
.project-a {
    color: black;
}
.project-title {

}
.project-description {
    color: rgba(0, 0, 0, .5)
}
.project-decoration {
    position: absolute;
    bottom: 0;
    width: 100%;

    color: rgb(0, 0, 0, .4);
    /* background-color: red; */
}
.project-star {
    display: inline-block;
    /* 两格 */
    width: 16%;

    text-align: left;
}
.project-user {
    display: inline-block;
    /* 三格 */
    width: 25%;

    color: rgba(10, 157, 255, .4);
    /* text-decoration: underline; */
    text-align: center;
}
.project-time {
    /* display: inline-block; */
    float: right;
    /* width: 32%; */

    text-align: right;
    /* background-color: green; */
}
</style>