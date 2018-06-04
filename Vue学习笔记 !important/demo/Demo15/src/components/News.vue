<template>
    <div id='news'>
        新闻组件
        <br>
        <button @click="emitHome()">给Home组件广播数据</button>
    </div>
</template>

<script>
    import VueEvent from '../model/VueEvent.js';
    export default{
        data(){
            return {
                msg:'我是一个新闻组件'
            }
        },
        methods:{
            emitHome(){
                VueEvent.$emit('to-home',this.msg)
            }
        },
        mounted(){
            VueEvent.$on('to-news',function(data){
                console.log(data);
            })
        }       
    }
</script>

<style lang="scss" scoped>

</style>
