<template>
    <div class="content">
        <MyNav></MyNav>
        <main> 
            <div class="back-div-box">
                <div class="back-1"></div>
                <div class="back-2"></div>
                <div class="back-3"></div>
                <div class="back-4"></div>
            </div>
            <div class="tags-div-box">
                <MyToggleTag :tags="tags" class="tags-box">
                    <form actio="javascript:;" class="login-box">
                        <div class="login-logo">LOGIN</div>
                        <label class="login-label">
                            <i class="el-icon-user login-icon"></i><input type="text" class="login-text" placeholder="用户名" />
                        </label>

                        <label class="login-label">
                            <i class="el-icon-lock login-icon"></i><input type="password" class="login-text" placeholder="密码" />
                        </label>

                        <input type="checkbox" class="login-checkbox" id="login-checkbox" /><label class="login-checkbox-label" id="login-checkbox"  for="login-checkbox">记住密码</label>
                        
                        <input type="submit" class="login-submit" value="登录"/>
                    </form>
                    
                    <form actio="javascript:;" class="login-box">
                        <div class="login-logo">REGIST</div>
                        <label class="login-label">
                            <i class="el-icon-user login-icon"></i><input type="text" class="login-text" placeholder="用户名" />
                        </label>

                        <label class="login-label">
                            <i class="el-icon-lock login-icon"></i><input type="password" class="login-text" placeholder="密码" />
                        </label>
                        <label class="login-label">
                            <i class="el-icon-lock login-icon"></i><input type="password" class="login-text" placeholder="确认密码" />
                        </label>

                        <input type="submit" class="login-submit" value="注册"/>
                    </form>
                </MyToggleTag>
            </div>
            
            

            

        </main>
        <footer>

        </footer>
    </div>
</template>
<script>
import MyToggleTag from '@/components/MyToggleTag';

export default {
    data() {
        return {
            tags: ['登录', '注册']
        }
    },
    components: {
        MyToggleTag
    }
}
</script>
<style scoped>
    header {
        height: 4rem;
    }
    main {
        height: calc(100vh - 4rem);
        /* background-color: red; */
    }

    /* 背景 */
    .back-div-box {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: black;
        border: 1px solid black;
    }
    .back-div-box div {
        position: absolute;

        width: 70%;
        height: 70%;
        /* background-color: rgba(123); */
        border: 1px solid black;
        filter: blur(190px);
    }
    .back-1 {
        top: -70px;
        left: -70px;
        background-color: rgba(0, 128, 255, 1);

        border-bottom-right-radius: 70%;
    }
    .back-2 {
        top: -70px;
        right: -70px;
        background-color: rgba(4, 126, 196, 1);

        border-bottom-left-radius: 70%;
    }
    .back-3 {
        bottom: -70px;
        left: -70px;
        background-color: rgba(10, 17, 109, 1);

        border-top-right-radius: 70%;
    }
    .back-4 {
        bottom: -70px;
        right: -70px;
        background-color: rgb(145, 12, 105);
        
        border-top-left-radius: 70%;
    }

    .content {
        position: relative;
        width: 100%;
        overflow: hidden;
        /* height: 100vh; */
        /* overflow: hidden; */
        /* background-color: red; */
    }
    .tags-div-box {
        position: absolute;
        top: 30%;
        left: 50%;

        width: 70%;
        max-width: 400px;

        transform: translateX(-50%);
        padding-top: 20px;

        border-radius: 10px;
        background-color: white;
    }
    .tags-box {

    }
    .login-box {
        /* position: absolute; */
        /* top: 50%;
        left: 50%; */

        width: 100%;
        max-width: 400px;
        height: 350px;
        /* width: 40rem; */
        padding: 1rem 0;
        /* transform: translateY(-50%) translateX(-50%); */
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        /* border: 1px solid rgb(202, 202, 202); */
        /* box-shadow: 0 0 20px 5px rgba(214, 213, 213, 0.5); */
        background-color:white;
    }
    .login-logo {
        box-sizing: border-box;

        width: 100%;
        height: 120px;
        line-height: 120px;
        text-align: center;
        letter-spacing: 20px;
        padding-left: 10px;
        /* margin: 40px 0; */

        background-image: linear-gradient(90deg, rgb(0, 132, 255), rgb(234, 0, 255));
        -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent; 
        font-size: 4rem;
        font-family: sans-serif;
        /* background-image: url('../assets/logo.png'); */
        /* background-size: 50% 80%; */
        background-position: center center;
        background-repeat: no-repeat;
    }
    .login-label {
        position: relative;
        display: block;
        box-sizing: border-box;

        width: 80%;
        height: 40px;
        margin: 0 auto;
        padding-left: 40px;
        border-radius: 3px;
        border: 1px solid rgb(185, 185, 185);

        /* background-color: rgb(247, 247, 247); */
    }
    .login-icon {
        position: absolute;
        top: 50%;
        left: 15px;
        font-size: 1.5rem;
        transform: translateY(-50%);
    }
    .login-text {
        position: relative;
        top: 50%;

        outline-style: none;
        border: 0 none;
        background-color: transparent;
        transform: translateY(-50%);
    }

    .login-checkbox-label {
        position: relative;
        left: 10%;

        display: inline-block;
        /* width: 100px; */
        padding: 0 10px;
        height: 20px;
        line-height: 20px;
        margin: 10px 0;
        
        text-align: center;
        border: 2px solid white;
        border-radius: 5px;
        background-color: rgb(207, 207, 207);
        color: rgb(163, 163, 163);
        transition: all .2s ;
        user-select: none;
    }
    .login-checkbox:checked + .login-checkbox-label {
        background: rgb(26, 201, 26);
        color: white;
    }
    .login-checkbox {
        display: none;
    }
    
    .login-submit {
        position: absolute;
        left: 50%;
        bottom: 10%;

        display: block;
        width: 80%;
        height: 40px;
        margin: 00px auto;
        border: 0px none;
        border-radius: 15px;

        transform: translateX(-50%);
        font-size: 15px;
        color: white;
        background-color:rgb(0, 174, 255)
    }
    .login-submit:hover {
        background-color:rgb(26, 201, 26);
    }
    @media (max-width: 768px) {
        .tags-div-box {
            top: 20%;
        }
        .login-box {
            height: 300px;
        }
        .login-logo {
            height: 70px;
            line-height: 70px;
            font-size: 2rem;
        }
    }
    @media (min-width: 768px) {
        .back-div-box div {
            filter: blur(250px);
        }
    }
    @media (min-width: 992px) {

    }
    @media (min-width: 1200px) {

    }
</style>