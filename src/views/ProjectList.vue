<template>
    <div class="content">
        <MyNav></MyNav>
        <main>
            <ul class="filtrate-box">
                <li class="filtrate-item" @click="markSwitch('hotMark')">
                    热度<i :class="['el-icon-top', hotClass, 'mark-i']" ></i>
                </li>
                <li class="filtrate-item" @click="markSwitch('timeMark')">
                    时间<i :class="['el-icon-top', tiemClass, 'mark-i']"></i>
                </li>
                <li class="filtrate-search">
                    <input type="text" placeholder="搜索项目关键字" />
                </li>
            </ul>
            <ul class="project-box">
                <ProjectCard v-for="item of projectData" :key="item.ID" :title="item.title" :descrition="item.description" :star="item.star" :auther="item.auther" :time="item.time" :href="item.href" :auther_href="item.auther_href"></ProjectCard>
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
            markArr: ['mark-normal', 'mark-top', 'mark-bottom'],
            projectData: [],
            mark: {
                hotMark: 0,
                timeMark: 0
            }
        }
    },
    methods: {
        markSwitch: function(type) {
            this.mark[type] += 1;//进度加1
            if(this.mark[type] >= this.markArr.length) this.mark[type] = 0;//判断越界
            let copy = this.mark[type];
            
            let keys = Object.keys(this.mark);
            let len = keys.length;
            while(len--) {
                this.mark[keys[len]] = 0;

            }
            this.mark[type] = copy;
        }
    },
    computed: {
        hotClass: function() {
            return this.markArr[this.mark.hotMark];
        },
        tiemClass: function() {
            return this.markArr[this.mark.timeMark];
        }
    },
    created() {
        this.projectData = API_GET_PROJECTLIST();
        let len = this.projectData.length;//获取数据的大小
        while(len--) {
            this.projectData[len].ID = ShortID.generate();
        }
    },
    components: {
        ProjectCard
    }
}
</script>
<style scoped>
/* 标志 */
.mark-i {
    transition: .2s all ease-in-out;
}
.mark-normal {
    opacity: 0;
}
.mark-top {

}
.mark-bottom {
    transform: rotateZ(180deg);
}

/* 筛选盒子 */
.filtrate-box {
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 4rem;
    line-height: 2rem;
    margin: 0;
    padding: 0;

    text-align: center;
    background-color: rgba(0, 0, 0, .05);
}
.filtrate-box li {
    list-style: none;
    /* background-color: yellow; */
}
.filtrate-item {
    display: block;
    padding: 0 10px;
}
.filtrate-search input {
    background-color: transparent;
    outline: none;
    border: none;
}
.filtrate-search input:focus {
    background-color: white;
}

/* 项目列表 */
.project-box {
    width: 100%;
    margin: 0;
    padding: 0;
    /* background-color: red; */
}
</style>