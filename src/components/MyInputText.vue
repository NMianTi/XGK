<template>
    <div class="content">
        <input input="text" :class="[c_input, type]" :style="style"/>
    </div>
</template>
<script>
export default {
    props:{
        height: {
            
        },
        type: {
            default: 'normal',

        }
    },
    data() {
        return {
            style: null,
            c_input: 'input-text'
        }
    },
    created() {
        this.style = {
            height: this.height
        }
    }
}
</script>
<style scoped>
    .input-text {
        width: 100%;
    }
    .normal {
        height: 30px;
        font-size: 15px;
    }
    .small {
        height: 20px;
        font-size: 10px;
    }
    .big {
        height: 40px;
        font-size: 30px;
    }
</style>