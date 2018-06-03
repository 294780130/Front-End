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
                this.$http.get(api).then((response)=>{
                    console.log(response);
                    //箭头函数才不存在this指向问题
                    this.list = response.body.result;
                },function(err){
                    console.log(err);
                })
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
