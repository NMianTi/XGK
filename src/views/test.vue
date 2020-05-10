<template>
    <div class="content">
        <!-- <h1>测试页面</h1> -->
        <!-- <div class="toggle-box">
            <ul class="toggle-head">
                <li :class="{'toggle-item': true, 'target': toggle == 0}" @click="toggleTo(0)">标签1</li>
                <li :class="{'toggle-item': true, 'target': toggle == 1}" @click="toggleTo(1)">标签23432</li>
                <li :class="{'toggle-item': true, 'target': toggle == 2}" @click="toggleTo(1)">标签23432</li>
            </ul>
            <div class="toggle-views">
                <div v-show="toggle == 0" class="toggle-view">页面1</div>
                <div v-show="toggle == 1" class="toggle-view">页面2</div>
                <div v-show="toggle == 2" class="toggle-view">页面2</div>
            </div>
            
        </div> -->
        <router-link to="/ptojectlist/test">点击这里</router-link>
        <TestC ></TestC>
    </div>
</template>
<script>
import TestC from '@/views/Project';
import {my_axios} from '@/api/MyAxios.js';

export default {
    created() {
        my_axios({
            url: '/node',
            method: 'get',
            data: {
                'name': 'NMianTi'
            }
        }).then( (response) => {
            console.log(response)
        }).catch( (err) => {
            console.log(err)
        })
    },
    components: {
        TestC
    },
    data() {
        return {
            toggle: 0,
            
        }
    },
    
}
</script>
