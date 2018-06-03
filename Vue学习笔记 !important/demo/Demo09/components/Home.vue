<template>
    <div>
        <v-header></v-header>s
        <h2>这是一个首页组件 --- {{msg}}</h2>
        <button @click="run()">执行run方法</button>
    </div>
</template>

<script>
    import Header from './Header.vue';
    export default{
        data(){
            return {
                msg:'我是一个首页组件'
            }
        },
        methods:{
            run(){
                alert(this.msg);
            }
        },
        components:{
            'v-header' : Header
        }
    }
</script>

<style lang="scss" scoped>
    h2{
        color: red;
    }
</style>
