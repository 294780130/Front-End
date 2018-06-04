<template>
    <div id='Content'>
        我是详情页面
        <br>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                msg:'数据'
            }
        },
        mounted(){
            console.log(this.$route.params.aid);
        }
    }
</script>