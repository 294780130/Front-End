<template>
    <div>
        <v-header></v-header>
        <br>
        <v-life v-if="flag"></v-life>
        <br>
        <button @click="flag=!flag">挂载以及卸载life组件</button>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Life from './Life.vue'
    export default{
        data(){
            return {
                msg:'我是一个首页组件',
                flag:true
            }
        },
        methods:{
            run(){
                alert(this.msg);
            }
        },
        components:{
            'v-header' : Header,
            'v-life' : Life
        }
    }
</script>

<style lang="scss" scoped>
    h2{
        color: red;
    }
</style>
