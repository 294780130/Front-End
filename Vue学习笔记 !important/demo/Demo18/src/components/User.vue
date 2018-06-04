<template>
    <div id='user'>
        用户中心
        <div class="user">
                <div class="left">
                    <ul>
                        <li><router-link to="/user/useradd">增加用户</router-link></li>
                        <li><router-link to="/user/userlist">用户列表</router-link></li>
                    </ul>
                </div>
                <div class="right">
                    <router-view></router-view>
                </div>
        </div>
        
    </div>
</template>

<script>
    export default{
        data(){
            return {
                msg:'我是一个user组件'
            }
        },
        methods:{
            
        },
        mounted(){

        }     
    }
</script>

<style lang="scss" scoped>
    .user{
        display: flex;
        .left{
            width: 200px;
            min-height: 400px;
            border-right: 1px solid #eee;
        }
        .right{
            flex: 1;
        }
    }
</style>