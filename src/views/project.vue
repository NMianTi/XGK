<template>
    <div>
        <!-- 项目头部 -->
        <div class="project-header">
            <div class="project-back"></div>
            <!-- 招募中 进行中 已完结 -->
            <strong>{{title}}</strong><div class="project-mark" :class="mark_class">{{mark_name}}</div>
        </div>
        
        <div class="project-users">
            <!-- 人员构成 -->
            <div class="project-user" v-for="item of user_list" :key="item.id">
                <img src="@/assets/home_1.png" />
                <span>{{item.name}}</span>
            </div>
        </div>
        <!-- 项目简介 -->
        <div class="project-description font-level-2">
            招募一个前端，后端，UI，来制作一个新工科选课平台帮助学生选课
        </div>
        <!-- 申请加入 -->
        <div class="project-apply">
            <div class="project-time font-level-3">
                <p>开始时间: {{start_time}}</p>
                <p>结束时间: {{end_time}}</p>
            </div>
            <button class="project-apply-botton" @click="popup_b = !popup_b">申请加入</button>
        </div>
        <!-- 评论/讨论区 -->
        <div class="project-discussion">
            <div class="project-discussion-item" v-for="item of discussion_list" :key="item.id">

            </div>
        </div>

        <MyPopUpForm v-show="popup_b" :data="popup_data">
           
        </MyPopUpForm>
    </div>
</template>
<script>
import MyPopUpForm from '@/components/MyPopUpForm'

export default {
    components: {
        MyPopUpForm
    },
    props: {
        mark: {
            default: 2
        },
        title: {
            default: '制作一个新工科平台的招募令'
        },
        start_time: {
            default: '2020年2月19日22:22:22'
        },
        end_time: {
            default: '2020年5月19日22:22:22'
        },
        user_list: {
            default: () => {
                return [
                    {
                        id: 1,
                        name: '黄微量'
                    },
                    {
                        id: 2,
                        name: "网李红"
                    }
                ]
            }
        },
        discussion_list: {
            default: () => {
                return [
                    {
                        id: 0,
                        user_id: 1, //MD5
                        text: '评论',
                        time: new Date()
                    },
                    {
                        id: 1,
                        user_id: 1, //MD5
                        text: '加一',
                        time: new Date()
                    }
                ]
            }
        }
    },
    created() {
        console.log( this.$route.params)
    },
    data() {
        return {
            popup_b: false, // 是否显示弹出框
            popup_data: {
                name: {
                    required: false,
                    title: '用户名: ',
                    placeholder: '请输入用户名',
                    type: 'text',
                    value: null
                },
                
                checkboxlist: {
                    type: 'checkboxlist',
                    options: [
                        {
                            value: 'yes',
                            checked: true,
                            for: '12434634sdaf'
                        },
                        {
                            value: 'no',
                            for: 'asdf235cq23c'
                        }
                    ]
                },
                radio: {
                    type: 'radio',
                    value: 'yesss',
                    for: '18940237092sadf'
                },
                radio_list: {
                    type: 'radiolist',
                    name: 'yes',
                    options: [
                        {
                            value: 'radio_1',
                            checked: true,
                            for: 'werwrasd'
                        },
                        {
                            value: 'radio_2',
                            for: "144124"
                        },
                        {
                            value: 'radio_3',
                            for: '4534dfg'

                        },
                        {
                            value: 'radio_4',
                            for: 'sdfsdf'
                        }
                    ]
                },
                select: {
                    type: 'select',
                    options: [
                        {
                            value: '1号选项'
                        },
                        {
                            value: '2号选项'
                        },
                        {
                            value: '3号选项'
                        }
                    ]
                },
                datalist: {
                    type: 'datalist',
                    list: 'key',
                    options: [
                        {
                            value: '1号选项'
                        },
                        {
                            value: '2号选项'
                        },
                        {
                            value: '3号选项'
                        }
                    ]
                },
                checkbox: {
                    type: 'checkbox',
                    value: '单选框',
                    for: 'this'
                },

            }
        }
    },
    computed: {
        // 装换显示mark的名字 角标
        mark_name: function() {
            switch(this.mark) {
                case 0:
                    return '招募中';
                    break;
                case 1:
                    return '进行中';
                    break;
                case 2:
                    return '已完结';
                    break;
                default :
                    return '禁用'
            }
        },
        // 装换为角标的样式
        mark_class: function() {
            switch(this.mark) {
                case 0:
                    return 'mark-ing';
                    break;
                case 1:
                    return 'mark-doing';
                    break;
                case 2:
                    return 'mark-over';
                    break;
                default :
                    return 'mark-unknow'
            }
        }
    }
}
</script>
<style scoped>
    .project-header {
        position: relative;
        width: 100%;
        height: 4rem;
        line-height: 4rem;

        background-color: rgb(0, 217, 255);
        overflow: hidden;
    }
    .project-back {
        position: absolute; top: 44%; left: 2%;

        width: 1rem;
        height: 1rem;
        /* background-color: red; */

        border: 3px solid white;
        border-top-color: transparent;
        border-right-color: transparent;
        border-radius: 5px;
        transform: rotateZ(45deg) translateY(-50%);
    }
    .project-header strong {
        padding-left: 10%;
        font-size: 1.2rem;
    }
    .project-mark {
        position: absolute; top: 0; right: 0;

        width: 4rem;
        height: 2rem;
        line-height: 2rem;

        border-bottom-left-radius: 1rem;
        text-align: center;
        transform-origin: center;
        /* transform: rotateZ(45deg) translateY(-50%); */
        /* background-color: red; */
    }
    /* 角标样式 */
    .mark-ing {
        color: white;
        background-color: rgb(20, 241, 0);
    }
    .mark-doing {
        color: rgb(255, 255, 255);
        background-color: rgb(0, 238, 255);
    }
    .mark-over {
        color: rgb(209, 136, 0);
        background-color: rgb(250, 233, 0);
    }
    .mark-unknow {
        color: white;
        background-color: red;
    }

    .project-users {
        width: 100%;
        padding: 10px 0;

        /* background-color: red; */
        border-bottom: 1px solid rgb(230, 230, 230);
        overflow: hidden;
    }
    .project-user {
        float: left;

        width: 4rem;
        height: 5rem;

        text-align: center;
        /* background-color: blue; */
    }
    .project-user img {
        width: 3rem;
        height: 3rem;

        border-radius: 50%;
        border: 1px solid rgb(230, 230, 230);
    }
    /* 简介 */
    .project-description {
        /* 怪异盒 */
        box-sizing: border-box;

        min-height: 10rem;
        padding: 2%;

        background-color: rgb(247, 247, 247);
    }
    /* 申请列 */
    .project-apply {
        box-sizing: border-box;
        position: relative;

        width: 100%;
        height: 4rem;
        padding-right: 15rem;
        padding-left: 1rem;

        border: 1px solid rgb(230, 230, 230);
        /* background-color: red; */
    }
    .project-time {
        position: absolute; top: 50%;

        transform: translateY(-50%);
    }
    .project-apply-botton {
        position: absolute; top: 50%; right: 2%;
        /* float: right; */

        width: 10rem;
        height: 3rem;
        margin-right: 5%;

        outline: none;
        border-radius: 5px;
        border: none;
        color: white;
        font-size: 2rem;
        background-color:rgb(20, 241, 0);
        transform: translateY(-50%);
        /* box-shadow: inset 0 0 10px 2px rgb(0, 156, 21); */
        /* background-image: linear-gradient(180deg, rgb(229, 255, 219), rgb(0, 255, 0)); */
        
    }

    /* 字体重要等级 */
    .font-level-1 {
        opacity: 1;
    }
    .font-level-2 {
        opacity: 0.7;
    }
    .font-level-3 {
        opacity: 0.5;
    }
    .font-level-4 {
        opacity: 0.3;
    }
</style>