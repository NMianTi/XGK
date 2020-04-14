<template>
    <router-link to="/" class="class-item-a">
        <img class="class-item-img" :src="class_img"/>
        
        
        <div class="class-hidden-box">
            <h3 class="class-hidden-title">{{class_name}}</h3>
            <p>
                {{description}}
            </p>
        </div>
        <div class="class-mark" :style="{backgroundColor: mark.color}">
            {{mark.name}}
        </div>
    </router-link>
</template>
<script>
export default {
    props: {
        'class_img': {
            default: require('../assets/class_images/class_1.png'),
            required: false
        },
        'class_name': {
            default: '默认课程',
            type: String,
            required: false
        },
        'description': {
            default: '这是一门课程，有某位老师上课，从某段事件上到某段时间',
            type: String,
            required: false
        },
        'mark': {
            default: function() {
                return {
                    name: 'NEW',
                    color: '#f00'
                }
                
            },
            required: false
        }
    }
}
</script>
<style scoped>
/* 卡片本身 */
.class-item-a {
    position: relative;
    display: block;

    width: 100%;
    max-width: 300px;
    height: 25rem;
    margin: 0 auto;

    overflow: hidden;
    border-radius: 10px;
    /* background-color: yellow; */

}
/* 动效 */
.class-item-a:hover .class-hidden-box {
    transform: translateY(-25rem);
}
/* 课程图片 */
.class-item-img {
    display: block;
    width: 100%;
    height: 25rem;

    background-color: rgb(218, 218, 218);
}
/* 隐藏描述盒 */
.class-hidden-box {
    /* position: absolute; */
    box-sizing: border-box;
    top: 0;
    width: 100%;
    height: 25rem;
    padding: 0 5px;

    transition: all .5s ;
    transform: translateY(-30px);
    background-color: rgb(0, 0, 0, .5);
}
/* 课程名 */
.class-hidden-title {
    display: inline-block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    /* text-align: center; */
}
/* 角标 */
.class-mark {
    position: absolute;
    top: 0;
    right: 0;

    width: 40px;
    height: 20px;
    line-height: 20px;

    text-align: center;
    border-radius: 0 10px;
    background-color: red;
    
}
a{
    color: white;
}
@media (max-width: 768px) {

}
@media (min-width: 768px) {

}
@media (min-width: 992px) {

}
@media (min-width: 1200px) {

}
</style>