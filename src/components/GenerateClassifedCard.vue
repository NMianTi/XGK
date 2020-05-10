<script>
export default {
    props: {
        propData: {
            default: function() {
                let data = [];
                    for(let i = 0; i < 4 * 3; i++) {
                        data.push({
                            img_src: require('../assets/logo.png'),
                            link_src: "#",
                            title: '信息技术'
                        })
                        
                    }
                    return data
                },
                type: Array
        }
    },
    render(h) {
        let content;//全局容器
        // console.log("??", this.propData)
        let len = this.propData.length;//获取数据的大小
        let items = [];
        for(let i = 0; i < len; i++) {
            let obj = {};
            //创建图片DOM
            obj.img = h('img', {
                'class': 'plate-item-img',
                attrs: {
                    src: this.propData[i].img_src,
                    alt: this.propData[i].title
                }
            });
            //创建span
            // console.log(this.propData[i].title)
            obj.span = h('span', this.propData[i].title);
            //创建li并包含以上两个DOM
            obj.link = h('router-link', {
                'class': 'plate-item-a',
                attrs: {
                    to: this.propData[i].link_src
                }
                
            }, [obj.img, obj.span])
            obj.li = h('li', {
                'class': 'plate-item'
            }, [obj.link]);
            items.push(obj.li);
        }
        content = h('ul', {
            'class': 'plate-item-box'
        }, [items])
        
        return content;
    }
}
</script>
<style scoped>
.plate-item-box {
    display: flex;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap;
    
    width: 100%;
    margin: 0;
    padding: 0;
}
.plate-item {
    width: 25%;
    list-style: none;
}
.plate-item-a {
    box-sizing: border-box;
    display: block;
    width: 100%;
    /* height: 4rem; */
    padding: 5%;
    background-clip: content-box;
    /* background-color: blue; */
    text-align: center;
}
.plate-item-img {
    display: block;
    margin: 0 auto;
    width: 50%;

}
.plate-item-span {

}
</style>