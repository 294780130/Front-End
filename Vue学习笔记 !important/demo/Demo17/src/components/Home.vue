<template>
    <div id='home'>
        首页组件
        <br>
        <ul>
            <li v-for="(item,key) in list">
                <router-link :to="'/Pcontent?aid='+key">{{key}}--{{item}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                msg:'我是一个首页组件',
                list:['商品111','商品222','商品333']
            }
        },
        methods:{

        },
        mounted(){

        }     
    }
</script>

<style lang="scss" scoped>

</style>