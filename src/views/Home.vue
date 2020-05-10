<template>
    <div class="content">
        <MyNav></MyNav>
        <main class="main" >
            <!-- 轮播 -->
            <div class="slideshow" ref="slideshow">

                <el-carousel height="calc(100vh - 4rem)">
                    <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>

                <div class="slideshow-rank">
                    
                </div>
            </div>

            <div class="project-box">
                <div class="project-text">
                    <p>
                        足不出门，
                    </p>
                    <p>
                        即可博览群书。
                    </p>
                </div><div class="project-decoration" ></div>
            </div>
            <div class="class-box">
                <div class="class-text">
                    <p>
                        琳琅满目的优质教学资源
                    </p>
                </div><div class="class-decoration" ></div>
            </div>
            <div class="resource-box">
                <div class="resource-text">
                    <p>
                        多样化私人定制的课程。
                    </p>
                </div><div class="resource-decoration" ></div>
            </div>
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
/* 轮播器 */
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


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
    position: relative;
    width: 100%;
    overflow: hidden;
}
.project-box {
    background-color: rgb(250, 250, 250);
}

.class-box {
    background-color: rgb(245, 245, 245);
    
}

/* 文字装饰 */
.project-text {
    box-sizing: border-box;
    float: right;
    width: 50%;
    height: 100%;
    padding: 10rem 2rem;
    
    color: gray;
    font-size: 1rem;
    /* background-color: yellow; */
}
.project-decoration {
    position: absolute;
    top: 50%;
    left: 0;

    width: 50%;
    height: 10rem;
    /* padding-top: 100px; */

    transform: translateY(-50%);
    background-image: url('../assets/home.png');
    background-size: 100%;
    background-position: 0 0%;
    background-repeat: no-repeat;
    background-color: white;
    /* height: 100px; */
}
.class-text {
    box-sizing: border-box;
    float: left;
    width: 50%;
    height: 100%;
    padding: 10rem 2rem;
    
    color: gray;
    font-size: 1rem;
    /* background-color: yellow; */
}
.class-decoration {
    position: absolute;
    top: 50%;
    right: 0;

    width: 50%;
    height: 10rem;
    /* padding-top: 100px; */

    transform: translateY(-50%);
    background-image: url('../assets/home.png');
    background-size: 100%;
    background-position: 0 50%;
    background-repeat: no-repeat;
    background-color: white;
    /* height: 100px; */
}

.resource-text {
    box-sizing: border-box;
    float: right;
    width: 50%;
    height: 100%;
    padding: 10rem 2rem;
    
    color: gray;
    font-size: 1rem;
    /* background-color: yellow; */
}
.resource-decoration {
    position: absolute;
    top: 50%;
    left: 0;

    width: 50%;
    height: 10rem;
    /* padding-top: 100px; */

    transform: translateY(-50%);
    background-image: url('../assets/home.png');
    background-size: 100%;
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-color: white;
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