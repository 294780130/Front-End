<template>
    <div id='home'>
        首页组件
        <button @click="goNews()">通过js跳转到新闻页面</button>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                msg:'我是一个首页组件'
            }
        },
        methods:{
            goNews(){
                // this.$router.push({path:'news'});
                //  this.$router.push({path:'content/495'});
                this.$router.push({name:'news'});
            }
        },
        mounted(){

        }     
    }
</script>

<style lang="scss" scoped>

</style>