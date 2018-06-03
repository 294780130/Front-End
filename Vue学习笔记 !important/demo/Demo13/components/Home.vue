<template>
    <div>
        <v-header :title="title" :homemsg="homemsg" :run="run" :home="this"></v-header>
        首页组件

    </div>
</template>

<script>
    import Header from './Header.vue'
    export default{
        data(){
            return {
                homemsg:'我是一个首页组件',
                title:'首页'
            }
        },
        components:{
            'v-header':Header
        },
        methods:{
            run(data){
                alert('我是Home组件run方法'+data);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
