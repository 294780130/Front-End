<template>
    <div id='news'>
        新闻组件
        <br>
        <!-- <ul>
            <li v-for="item in list">
                <router-link :to="/content/+item.aid">{{item.aid}}--{{item.title}}</router-link>
            </li>
        </ul> -->

    </div>
</template>

<script>
    export default{
        data(){
            return {
                msg:'我是一个新闻组件',
                list:[],
                page:1,
                loading:false
            }
        },
        methods:{
        } 
    }
</script>

<style lang="scss" scoped>
ul{
    padding:0 20px;
    li{
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    border-bottom:1px solid #ccc;
    a{
            text-decoration:none;
            color:#333;
    }
    }
}
.loading{
    text-align: center;
}
</style>
