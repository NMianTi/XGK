<!--
对象
title href data
-->

<template>
    <div class="plate-box">
        <div class="plate-head">
            <h3 class="plate-title">{{data.title}}</h3><router-link :to="data.href" class="plate-a">更多>>></router-link>
        </div>
        <ul class="plate-item-box">
            <GenerateCard></GenerateCard>
        </ul>
    </div>
</template>
<script>
import GenerateCard from '@/components/GenerateClassifedCard';

export default {
    props: {
        data: {
            required: true,
            type: Object
        }
    },
    components: {
        GenerateCard
    }
}
</script>
<style scoped>
a {
    color: black;
    text-decoration: none;
}
.plate-box {
    width: 100%;
    /* background-color: yellow; */
}
.plate-head {
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    /* background-color: red; */
    overflow: hidden;
    border-bottom: 1px solid rgb(223, 223, 223);
}
.plate-title {
    float: left;
    margin-left: 20px;
}
.plate-a {
    float: right;

    margin-right: 20px;

    color: rgb(0, 195, 255);
    text-decoration: none;
    font-size: .5rem;
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