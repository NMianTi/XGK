/*
* 切换Tag选项卡的组件
*/
<script>
export default {
    data() {
        return {
            toggle: 0,//显示的第几个选项卡
        }
    },
    props: {
        tags: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    methods: {
        toggleTo: function(number) {
            // 切换选项卡事件
            console.log(number)
            this.toggle = number;
        }
    },
    render(h) {
        let box;//总容器
        let tags_Node = {};//标签总
        let tag_Node = [];//标签单项
        let v_Node = [];//视图节点
        let vs_Node = {}; //视图总
        let views = null;//筛选后的视图
        let tag_len = this.tags.length;
        // console.log(this.tags)
        // 创建标签的 li
        for(let i = 0; i < tag_len; i++ ) {
            tag_Node.push( h('li', {
                'class': {
                    'toggle-item': true,
                    'target': this.toggle == i
                },
                on: {
                    click: () => {
                        this.toggleTo(i)
                    }
                }
            }, this.tags[i]) )
        }
        // 创建标签的 ul
        tags_Node = h('ul', {
            'class': {
                'toggle-head': true
            }
        }, [tag_Node])

        //判断有无插槽
        if(this.$slots.default) {
            views = this.$slots.default.filter(function(item, index, target) {
                // console.log(item.tag);
                if(item.tag != undefined) return item;
            })
            
            let v_len = views.length;
            for(let i = 0; i < v_len; i++) {
                v_Node.push( h('div', {
                    'class': 'toggle-view',
                    style: {
                        'display': this.toggle == i ? 'block' : 'none'
                    }
                }, [views[i]]) );
            }
            vs_Node = h('div', {
                'class': 'toggle-views'
            }, [v_Node]);
        } else {
            console.log("无插槽")
        }
        
        box = h('div', {
            'class': 'toggle-box'
        }, [tags_Node, vs_Node]);
        
        return h('div', [box])
    }
}
</script>
<style scoped>
/* .content {
    background-color: gray;
} */
.toggle-box {
    position: relative;
    width: 100%;

    background-color: white;
}
.toggle-head {
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    padding: 0;
    /* margin: 5px 0; */
    /* overflow: hidden; */
}
.toggle-item {
    list-style: none;
    padding: 5px 20px;
    margin: 3px 0;
    /* background-color: blue; */
    border-bottom: 0;
    
    transition: box-shadow .2s;
}
.toggle-item:hover {
    /* box-shadow: 0 3px 0 0 blue; */
    /* background-color: rgb(0, 255, 0); */
    box-shadow: 0 3px 0 0 rgb(0, 255, 0);
    /* text-decoration: underline; */
}
.target{
    box-shadow: 0 3px 0 0 rgb(0, 162, 255);
}
.toggle-views {
    position: relative;

    width: 100%;

    /* background-color: yellow; */
}
.toggle-view {
    position: absolute;

    width: 100%;
    /* height: 300px; */
    /* background-color: red; */
}
</style>