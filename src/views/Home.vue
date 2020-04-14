<template>
    <div class="content">
        <MyNav></MyNav>
        <main class="main" >
            <!-- 轮播 -->
            <div class="slideshow" ref="slideshow">
                <div class="slideshow-rank">
                </div>
            </div>

            <div class="project-box">

            </div>
            <div class="class-box">
                <div class="class-text">
                    <p>
                        足不出门，
                    </p>
                    <p>
                        即可博览群书。
                    </p>
                </div><img class="class-decoration" src="../assets/home_1.png"/>
            </div>
            <div class="resource-box"></div>
        </main>
        <el-footer></el-footer>
    </div>
</template>
<script>
export default {
   mounted() {
       
        
   }
}
</script>
<style scoped>
.main {
    max-width: 1200;
    margin: 0 auto;

    overflow-X: hidden;
    /* margin-top: 10px; */
}
.slideshow {
    position: relative;
    box-sizing: border-box;

    /* top: -4rem;nav的高度 */
    /* padding-top: 4rem; */
    
    width: 100%;
    height: calc(100vh - 4rem);/* nav的高度 */
    /* padding-right: 400px; */
    background-color: rgb(0, 23, 71);
}
.slideshow-rank {
    /* display: none; */
    position: relative;
    right: -100%;
    /* right: -400px; */
    /* float: right; */
    width: 100%;
    height: 100%;
    background-color: rgb(4, 29, 255);
    transition: all .5s ;
}
.rank-open {
    position: absolute;
    left: -3rem;

    width: 3rem;
    height: 100%;

    background-color: yellow;
}

.project-box, .class-box, .resource-box{
    width: 100%;
    height: 100vh;
}
.project-box {
    background-color: rgb(250, 250, 250);
}

.class-box {
    background-color: rgb(245, 245, 245);
    
}
.class-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    float: left;
    width: 50%;
    height: 100%;
    
    font-size: 2rem;
    background-color: yellow;
}
.class-decoration {
    float: left;
    width: 50%;
    /* height: 100px; */
}

.resource-box {
    background-color: rgb(250, 250, 250);
}

@media (max-width: 768px) {
    /* 手机 */
}
@media (min-width: 768px) {
    /* 平板 */
}
@media (min-width: 992px) {
    /* 台式 */
}
@media (min-width: 1200px) {
    /* 大台式 */
}
</style>