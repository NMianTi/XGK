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
                <ProjectCard v-for="item of projectData" :key="item.ID" :title="item.title" :descrition="item.description" :star="item.star" :auther="item.auther" :time="item.time" :href="item.href" :auther_href="auther_href"></ProjectCard>
            </ul>
        </main>
    </div>
</template>
<script>
import {API_GET_PROJECTLIST} from '@/api/API.js';
import ProjectCard from '@/components/NProjectCard';
import ShortID from 'shortid';
export default {
    data() {
        return {
            projectData: []
        }
    },
    created() {
        this.projectData = API_GET_PROJECTLIST();
        let len = this.projectData.length;//获取数据的大小
        while(len--) {
            this.projectData[len].ID = shortID.generate();
        }
    },
    components: {
        ProjectCard
    }
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
</style>