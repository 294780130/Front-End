<template>
    <div>
        首页组件
        <button @click="getData()">请求数据</button>
        <hr>
        <br>
        <ul>
            <li v-for="item in list">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default{
        data(){
            return {
                msg:'我是一个首页组件',
                list:[]
            }
        },
        methods:{
            getData(){
                var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
                Axios.get(api).then((response)=>{
                    console.log(response);
                    this.list = response.data.result;
                }).catch((err)=>{
                    console.log(err );
                });
            },
           
        },
        components:{
        },
        mounted(){
            this.getData();
        }
    }
</script>

<style lang="scss" scoped>

</style>
