<template>
    <div class="content">
        <MyNav></MyNav>
        <main> 
            <form actio="javascript:;" class="login-box">
                <div class="login-logo"></div>
                <label class="login-label">
                    <input type="text" class="login-text" placeholder="用户名" />
                </label>

                <label class="login-label">
                    <input type="password" class="login-text" placeholder="密码" />
                </label>

                <input type="checkbox" class="login-checkbox" id="login-checkbox" /><label class="login-checkbox-label" id="login-checkbox"  for="login-checkbox">记住密码</label>
                
                <input type="submit" class="login-submit" value="登录"/>
            </form>
        </main>
        <footer>

        </footer>
    </div>
</template>
<script>

export default {
    
}
</script>
<style scoped>
    header {
        height: 4rem;
    }
    main {
        height: calc(100vh - 4rem);
        background-color: red;
    }
    .content {
        position: relative;
        width: 100%;
        overflow: hidden;
        /* height: 100vh; */
        /* overflow: hidden; */
        /* background-color: red; */
    }
    .login-box {
        position: absolute;
        top: 50%;
        left: 50%;

        width: 70%;
        max-width: 400px;
        /* width: 40rem; */
        padding: 1rem 0;
        transform: translateY(-50%) translateX(-50%);
        border-radius: 10px;
        /* border: 1px solid rgb(202, 202, 202); */
        box-shadow: 0 0 20px 5px rgba(0, 0, 0, .1);
        background-color:white;
    }
    .login-logo {
        width: 100%;
        height: 150px;
        background-image: url('../assets/logo.png');
        background-size: 50% 80%;
        background-position: center center;
        background-repeat: no-repeat;
    }
    .login-label {
        display: block;
        box-sizing: border-box;

        width: 80%;
        height: 40px;
        margin: 0 auto;
        padding-left: 40px;
        border-radius: 3px;
        border: 1px solid rgb(185, 185, 185);

        background-color: rgb(247, 247, 247);
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
        display: block;
        width: 80%;
        height: 40px;
        margin: 40px auto;
        border: 0px none;
        border-radius: 15px;

        font-size: 15px;
        color: white;
        background-color:rgb(0, 174, 255)
    }
    .login-submit:hover {
        background-color:rgb(26, 201, 26);
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