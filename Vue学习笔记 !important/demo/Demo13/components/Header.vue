<template>
    <div>
        <h2>我是一个头部组件 --- {{title}}---{{homemsg}}</h2>
        <button @click="run('123')">执行父组件的方法</button><br>
        <button @click="getParent()">获取父组件的数据方法</button>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                msg:'我是一个头部组件',
            }
        },
        methods:{
            getParent(){
                // alert(this.title);
                // alert(this.home.title);
                this.home.run('123');
            }
        },
        props:['title','homemsg','run','home']
    }
</script>

<style lang="scss" scoped>

</style>
