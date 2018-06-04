<template>
    <div id='news'>
        新闻组件
        <br>
        <ul>
            <li v-for="(item,key) in list">
                <router-link :to="/content/+key">{{key}}--{{item}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                msg:'我是一个新闻组件',
                list:['111','222','333']
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
