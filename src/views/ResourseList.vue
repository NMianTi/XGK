<template>
    <div class="content>">
        <MyNav></MyNav>
        <main>
            <MyClassifyCard :data="classify_data"></MyClassifyCard>
            <MyClassifyCard :data="classify_data"></MyClassifyCard>
            <MyClassifyCard :data="classify_data"></MyClassifyCard>
        </main>
    </div>
</template>
<script>
import MyClassifyCard from '@/components/MyClassifedCard';//分类模块
import {GET_API_GET_CLASSIFEY} from '@/api/API.js'

export default {
    data() {
        return {
            classify_data: GET_API_GET_CLASSIFEY('信息技术')
        }
    },
    methods: {

    },
    components: {
        MyClassifyCard
    }
}
</script>
<style scoped>

</style>