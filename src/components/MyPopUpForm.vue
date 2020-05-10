<script>
/**
 * 记忆 绑定数据 checkbox 特化
 */
// Vue对象
var vue_obj = {
    props: {
        data: {
            required: true,
        }
    },
    render(h) {
        
        let data_keys = Object.keys( this.data );
        let len = data_keys.length;
        let input_list = [];// input 的集合
        for( let i = 0; i < len; i++ ) {
            input_list.push( new CreateFormElement(h, this.data[data_keys[ i ]].type, this.data[data_keys[ i ]]) )
        }
        input_list.push( h('input', {
            attrs: {
                type: 'submit',
                value: '提交'
            },
            'class': 'form-default-submit'
        }))
        let box = h('div', {
            // 阻挡操作的阴影遮罩
            'class': 'shadow-mark',
            on: {
                click: (e) => {
                    // console.log(this.data);
                }
            }
        }, [
            h('div', {
                // 对话框
                'class': 'popup-box'
            }, [h( 'form', input_list )])
        ])
        return box;
        // return h('h2', 'World')
    }
}

/**
 * prop对象的每个属性对应一个表单DOM
 * h @param {Function} Vue的构建DOM函数
 * type @param {String} DOM类型
 * data @param {Object} 数据对象
 */
function CreateFormElement(h, type, data) {
    if( !this instanceof CreateFormElement) return new CreateFormElement(h,type, data);
    if(!this[type]) {
        throw new Error('正在尝试调用不存在的方法');
    }
    return this[type](h, data);
}
// 方法集
CreateFormElement.prototype = {
    /**
     * @description 闭包保存数据 供事件使用
     * @param {Object} obj 数据对象
     * @param {String} key 数据key
     * @param {Boolean} anti_shake 是否防抖
     * @param {Number} s 延迟
     * @extends {Funtion} 经过闭包保存数据的CallBack
     */
    model: function(obj, key, anti_shake, s) {
        // 闭包 obj key anti_shake s
        // 防抖
        if(anti_shake) {
            return function F(e) {
                if(F.time_key) {
                    clearTimeout(F.time_key);
                }
                F.time_key = setTimeout((e) => {
                    obj[key] = e.target.value;
                    console.log("数据绑定" + obj[key])
                }, s, e)
            }
        }
        return function(e) {
            obj[key] = e.target.value;
            console.log("数据绑定" + obj[key])
        }
    },
    'text': function(h, data) {
        
        let VNode = h( 'input', {
            attrs: {
                type: 'text',
                placeholder: data.placeholder || 'ss',
                value: data.value
            },
            on: {
                input: this.model( data, 'value' , true, 200)
            },
            'class': 'form-text'
        })
        // 若有标题则创建label
        if(data.title && (typeof data.title == 'string') ) {
            VNode = h('label', {
                'class': 'form-text-label'
            }, [
                data.title,
                VNode
            ])
        }
        return VNode;
    },
    'button': function(h, data) {
        let VNode = h( 'input', {
            attrs: {
                type: 'button',
                value: data.value || '默认按钮'
            },
            'class': 'form-button'
        })
        return VNode;
    },
    'submit': function(h, data) {
        let VNode = h( 'input', {
            attrs: {
                type: 'submit',
                value: data.value || '提交'
            },
            'class': 'form-button'
        })
        return VNode;
    },
    'reset': function(h, data) {
        let VNode = h( 'input', {
            attrs: {
                type: 'reset',
                value: data.value || '重置'
            },
            'class': 'form-button'
        })
        return VNode;
    },
    'checkbox': function(h, data) {
        // 构建 input
        return h('div', {
            'class': 'form-checkbox-box'
        }, [
            h( 'input', {
                attrs: {
                    type: 'checkbox',
                    value: data.value || '',
                    id: data.for
                },
                'class': 'form-checkbox',
                on: {
                    input: this.model(data, 'value')
                }
            }),
            h('label', {
                attrs: {
                    for: data.for
                },
                'class': 'form-checkbox-label'
            }),
            h('span', data.value)
        ]);
    },
    /*
     * data所需参数
     * children {Object} checkbox
     */
    'checkboxlist': function(h, data) {
        let checkBoxList = [];//保存checkbox列表
        let len = data.options.length;
        for(let i = 0; i < len; i++) {
            //创建被div 包裹的checkbox 和 input
            checkBoxList.push( h('div', {
                'class': 'form-checkboxlist-box'
            }, [
                 h('input', {
                    attrs: {
                        type: 'checkbox',
                        value: data.options[ i ].value || '',
                        checked: data.options[ i ].checked,
                        id: data.options[ i ].for
                    },
                    'class': 'form-checkboxlist',
                    on: {
                        input: this.model(data.options[ i ], 'value')
                    }
                }),
                h('label', {
                    attrs: {
                        for: data.options[ i ].for
                    },
                    'class': 'form-checkboxlist-label'
                }),
                h('span', {}, data.options[ i ].value)
            ]))
            checkBoxList.push(  );
        }
        return h('div', checkBoxList);

    },
    'radio': function(h, data) {
        return h('div', {
            'class': 'form-radio-box'
        }, [
            h( 'input', {
                attrs: {
                    type: 'radio',
                    value: data.value || '',
                    id: data.for
                },
                'class': 'form-radio'
            }),
            h('label', {
                attrs: {
                    for: data.for
                },
                'class': 'form-radio-label'
            }),
            h('span', data.value)
        ]);
    },
    /**
     * 
     */
    "radiolist":  function(h, data) {
        let checkBoxList = [];//保存checkbox列表
        let len = data.options.length;
        for(let i = 0; i < len; i++) {
            //创建被label 包裹的checkbox
            checkBoxList.push( h('div', {
                'class': 'form-radio-box'
            }, [
                h('input', {
                    attrs: {
                        name: data.name,
                        type: 'radio',
                        value: data.options[ i ].value || '',
                        checked: data.options[ i ].checked,
                        id: data.options[ i ].for
                    },
                    'class': 'form-radio'
                }),
                h('label', {
                    attrs: {
                        for: data.options[ i ].for
                    },
                    'class': 'form-radio-label'
                }),
                h('span', data.options[ i ].value)
            ] ) )
        }
        return h('div', checkBoxList);

    },
    'select': function(h, data) {
        let options = [];
        let len = data.options.length;
        for(let i = 0; i < len; i++) {
            options.push( h('option', {
                attrs: {
                    value: data.options[ i ].value
                },
                domProps: {
                    innerHTML: data.options[ i ].value
                }
            }) )
        }
        return h('select', options);
    },
    'textarea': function(h, data) {
        let VNode = h('input', {
            attrs: {
                type: 'textarea'
            }
        })
    },
    'datalist': function(h, data) {
        let options = [];
        let VNode = null;
        let len = data.options.length;
        for( let i = 0; i < len; i++) {
            options.push( h('option', {
                attrs: {
                    value: data.options[ i ].value
                }
            }))
        }
        VNode = h('div', [ h('input', {
            attrs: {
                list: data.list
            }
        }),
        h ('datalist', {
            attrs: {
                id: data.list
            }
        }, options) ])
        return VNode;
        
    },
    'output': function(h, data) {

    },
    /**
     * min max 
     */
    'range': function(h, data) {

    }
}

export default vue_obj;
</script>
<style scoped>
/* 该组件 */
.shadow-mark {
    position: absolute; top: 0; left: 0; bottom: 0; right: 0;
    
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 50;
}
.popup-box {
    position: absolute; top: 50%; left: 50%;
    box-sizing: border-box;

    width: 60%;
    padding: 3rem 2rem;
    padding-bottom: 4rem;
    /* height: 2rem; */

    border-radius: 2rem;
    overflow: hidden;
    background-color: white;
    transform: translate(-50%, -50%);
    /* box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.7); */
    z-index: 51;
}   
.form-default-submit {
    position: absolute; bottom: 1rem; right: 2rem;
    /* display: block; */
    width: 8rem;
    height: 2.5rem;
    /* padding: .5rem 1rem; */
    
    border-radius: .2rem;
    border: none;
    outline: none;
    font-size: 1.2rem;
    color: white;
    background-color: rgb(30, 255, 0);
}
/* text */
    .form-text {
        box-sizing: border-box;
        float: right;

        padding-left: .5rem;
        width: 60%;
        height: 2rem;

        border-radius: .5rem;
        border: 1px solid rgb(0, 195, 255);
        outline: none;
    }
    .form-text-label {
        display: block;
        
        width: 100%;
        height: 2rem;
        line-height: 2rem;

        text-align: left;
        font-size: 1.5rem;
        /* background-color: red; */
    }
    /* button */
    .form-button {
        width: 8rem;
        height: 2.5rem;
        /* padding: .5rem 1rem; */
        
        border-radius: .2rem;
        border: none;
        outline: none;
        font-size: 1.2rem;
        color: white;
        background-color: rgb(30, 255, 0);
    }

    /* checkbox */
    .form-checkbox-box {
        height: 2rem;
        /* background-color: red; */
        line-height: 2rem;
    }
    .form-checkbox-box span {
        font-size: 1.2rem;
        margin-left: .5rem;
    }
    .form-checkbox {
        display: none;
    }
    .form-checkbox-label {
        display: block;
        float: left;

        width: 4rem;
        height: 2rem;

        border-radius: 1rem;
        background-color: rgb(245, 245, 245);
        box-shadow: inset 0 0 .2rem .0 rgba(128, 127, 127, .5);
    }
    .form-checkbox:checked + .form-checkbox-label {
        background-color: rgb(0, 245, 0);
    }
    .form-checkbox-label:after {
        box-sizing: border-box;
        content: "";
        display: block;

        padding: 5%;
        width: 2rem;
        height: 2rem;

        border-radius: 1rem;
        background-color: white;
        transition: transform .2s ease-in-out;
        box-shadow: inset 0 0 .4rem .0 rgba(131, 130, 130, .5);
    }
    .form-checkbox:checked + .form-checkbox-label:after {
        transform: translateX(2rem);
    }
    /* checkboxlist */
    .form-checkboxlist-box {
        height: 2rem;
        line-height: 2rem;
    }
    .form-checkboxlist-box span {
        font-size: 1.2rem;
        margin-left: 2px;
    }
    .form-checkboxlist {
        display: none;
    }
    .form-checkboxlist-label {
        display: block;
        float: left;

        width: 2rem;
        height: 2rem;
        box-shadow: inset 0 0 .2rem 0 gray;
        /* border-radius: 1rem; */
        background-color: white;
    }
    .form-checkboxlist:checked + .form-checkboxlist-label {
        background-color: rgb(166, 255, 0);
        box-shadow: inset 0 0 1rem 0 rgb(0, 245, 0),
        inset 0 0 .1rem 0 gray;
    }
    .form-checkboxlist-label:after {
        content: "";
        display: block;

        width: 2rem;
        height: .5rem;

        /* border: 1px solid gray; */
        background-color: rgb(212, 212, 212);
        transform: translateY(0%);
        transition: transform .2s ease-in-out;
        
    }
    .form-checkboxlist:checked + .form-checkboxlist-label:after {
        transform: translateY(300%);
    }
    /* radio */
    .form-radio-box {
        width: 100%;
        height: 2rem;
        line-height: 2rem;
    }
    .form-radio {
        display: none;
    }
    .form-radio-label {
        display: block;
        float: left;
        width: 2rem;
        height: 2rem;

        background-image: url('../assets/radio_unselect.png');
        /* background-color: yellow; */
        background-position: center;
        background-repeat: no-repeat;
    }
    .form-radio:checked + .form-radio-label {
        background-image: url('../assets/radio_select.png');
    }
</style>