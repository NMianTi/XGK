<template>
    <div class="content">
        <MyNav></MyNav>
        <main>
            <ul class="filtrate-box">
                <li class="filtrate-item">
                    热度
                </li>
                <li class="filtrate-item">
                    时间
                </li>
                <li class="filtrate-search">
                    <input type="text" placeholder="搜索项目关键字" />
                </li>
            </ul>
            <ul class="project-box">
                <li class="project-item">
                    <router-link to="/home" class="project-a">
                        <h2 class="project-title" >项目招募，一个新工科选课平台的招募</h2>
                        <p class="project-description">
                            技术人员：已齐全。
                            缺少一些简单的人员。
                        </p>
                    </router-link>
                    
                    <div class="project-decoration">
                        <div class="project-star">
                            <i class="el-icon-star-off p-icon-star"></i><span class="star-number">123</span>
                        </div>
                        <router-link to="/home" class="project-user">
                            <i class="el-icon-user p-icon-user"></i><span class="author">佚名</span>
                        </router-link>
                        <span class='project-time'>
                            1998-07-02
                        </span>
                    </div>
                </li>

                <li class="project-item">
                    <router-link to="/home" class="project-a">
                        <h2 class="project-title" >项目招募，一个新工科选课平台的招募</h2>
                        <p class="project-description">
                            技术人员：已齐全。
                            缺少一些简单的人员。
                        </p>
                    </router-link>
                    
                    <div class="project-decoration">
                        <div class="project-star">
                            <i class="el-icon-star-off p-icon-star"></i><span class="star-number">123</span>
                        </div>
                        <router-link to="/home" class="project-user">
                            <i class="el-icon-user p-icon-user"></i><span class="author">佚名</span>
                        </router-link>
                        <span class='project-time'>
                            1998-07-02
                        </span>
                    </div>
                </li>
                
            </ul>
        </main>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
/* 筛选盒子 */
.filtrate-box {
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 2rem;
    line-height: 2rem;
    margin: 0;
    padding: 0;

    text-align: center;
    background-color: red;
}
.filtrate-box li {
    list-style: none;
    background-color: yellow;
}
.filtrate-item {
    display: block;
    padding: 0 10px;
    height: 100%;
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

    width: 16%;

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