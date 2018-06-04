<template>
    <div id='news'>
        新闻组件
        <br>
        <ul>
            <li v-for="item in list">
                <router-link :to="/content/+item.aid">{{item.aid}}--{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                msg:'我是一个新闻组件',
                list:[]
            }
        },
        methods:{
            requestData(){
                var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
                this.$http.jsonp(api).then((response)=>{
                    console.log(response);
                    this.list=response.body.result;
                },function(err){
                    console.log(err);
                })
            }
        },
        mounted(){
            this.requestData();
        }       
    }
</script>

<style lang="scss" scoped>

</style>
