<template>
    <div>
        <v-header ref="header"></v-header>
        首页组件
        <button @click="getChildData()">获取子组件的数据和方法</button>
    </div>
</template>

<script>
    import Header from './Header.vue'
    export default{
        data(){
            return {
                msg:'我是一个首页组件',
                title:'首页'
            }
        },
        components:{
            'v-header':Header
        },
        methods:{
            run(data){
                alert('我是Home组件run方法'+data);
            },
            getChildData(){
                alert(this.$refs.header.msg);
                alert(this.$refs.header.run());
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>