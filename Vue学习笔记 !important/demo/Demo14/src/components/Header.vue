<template>
    <div>
        <h2>我是一个头部组件</h2>
        <button @click="run()">子组件执行父组件的方法</button><br>
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
            run(){
                alert(this.$parent.msg);
                alert(this.$parent.run('123'));
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
