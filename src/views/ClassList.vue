<template>
    <div class="content">
        <MyNav></MyNav>
        <main class="main-box">
            <div class="main-content">
                <form action="javascript:;" class="search">
                    <input type="text" placeholder="请输入搜索内容" class="search-box" /><i class="search-submit el-icon-search"></i>
                </form>

                <div>
                    <NList>
                       <NClassCard></NClassCard>
                       <NClassCard></NClassCard>
                       <NClassCard></NClassCard>
                       <NClassCard></NClassCard>
                       <NClassCard></NClassCard>
                       <NClassCard></NClassCard>

                       <NClassCard></NClassCard>
                       <NClassCard></NClassCard>
                       <NClassCard></NClassCard>
                       <NClassCard></NClassCard>
                       <NClassCard></NClassCard>
                       <NClassCard></NClassCard>

                       <NClassCard></NClassCard>
                       <NClassCard></NClassCard>
                       <NClassCard></NClassCard>
                       <NClassCard></NClassCard>
                       <NClassCard></NClassCard>
                       <NClassCard></NClassCard>
                    </NList>
                </div>  
            </div>
            
        </main>
    </div>
</template>
<script>
import NClassCard from '@/components/NClassCard';
import NList from '@/components/NList';

export default {
    components: {
        NClassCard,
        NList
    }
}
</script>
<style scoped>
.main-box {
    width: 100%;  
}
.main-content {

    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
}
/* 搜索框 */
.search {
    display: flex;
    width: 100%;
    padding: 20px 0;
    margin: 0 auto;

    justify-content: center;
    /* background-color: yellow; */
}
.search-box {
    display: inline-block;
    width: 50%;
    height: 4rem;
    padding-left: 2%;

    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border: 1px solid rgb(15, 187, 255);
    outline-style: none;
    border-right: none;
    font-size: 2rem;
}
.search-submit {
    display: inline-block;
    width: 10%;
    height: 4rem;
    line-height: 4rem;

    text-align: center;
    color: white;
    font-size: 2rem;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    border-left: none;
    background-color: rgb(15, 187, 255);
    border: 1px solid rgb(15, 187, 255);
    outline-style: none;
}

@media (max-width: 768px) {
    .search {
        display: none;
    }
}
</style>