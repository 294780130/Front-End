<template>
    <div id='home'>
        首页组件
        <br>
        <button @click="emitNews()">给News组件广播数据</button>
    </div>
</template>

<script>
    import VueEvent from '../model/VueEvent.js';
    export default{
        data(){
            return {
                msg:'我是一个首页组件'
            }
        },
        methods:{
            emitNews(){
                VueEvent.$emit('to-news',this.msg)
            }
        },
        mounted(){
            VueEvent.$on('to-home',function(data){
                console.log(data);
            })
        }     
    }
</script>

<style lang="scss" scoped>

</style>