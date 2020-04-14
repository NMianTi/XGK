
<script>
export default {
    render: function(h) {
        let arr = [];
        let len = this.$slots.default.length;

        for(let i = 0; i < len; i ++) {
            let node = this.$slots.default[i];//取出默认插槽内的所有东西
            //去除所有空白标签
            if(node.tag) {
                // 使用 li 包裹
                arr.push( h('li', {
                    class: ['list-item']
                }, [node]) );
            }
        }
        return h('ul', {
            class: ['list-box']
        }, arr);
    }
}
</script>
<style scoped>
    .list-box {
        display: flex;
        margin: 0;
        padding: 0;

        width: 100%;
        
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .list-item {
        /* display: flex; */
        list-style: none;
        box-sizing: border-box;
        width: 100%;
        /* min-width: 250px; */
        padding: 10px;

        /* align-items: center;
        justify-content: center; */
    }
    @media (max-width: 768px) {
        .list-item {
            width: 100%;
        }
    }
    @media (min-width: 768px) {
        /* 平板 */
        .list-item {
            width: 50%;
        }
    }
    @media (min-width: 992px) {
        .list-box {
            justify-content: right;
        }
        .list-item {
            width: 25%;
        }
    }
    @media (min-width: 1200px) {

    }
</style> 