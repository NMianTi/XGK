<template>
    <div class="content">
        <h1>测试页面</h1>
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
        <TestC :tags="['标签1', '标签2', '标签3', '标签4']">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TestC>
    </div>
</template>
<script>
import TestC from '@/components/MyToggleTag';
export default {
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
