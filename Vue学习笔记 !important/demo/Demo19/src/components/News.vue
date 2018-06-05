<template>
    <div id='news'>
        新闻组件
        <br>
        <!-- <ul>
            <li v-for="item in list">
                <router-link :to="/content/+item.aid">{{item.aid}}--{{item.title}}</router-link>
            </li>
        </ul> -->
        <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
            <li v-for="item in list"><router-link :to="/content/+item.aid">{{item.title}}</router-link></li>
        </ul>
        <div class="loading">loading...</div>
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
            loadMore(){
                 this.requestData();
            },
            requestData(){
                this.loading=true;
                var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+this.page;
                this.$http.get(api).then((response)=>{
                    console.log(response);
                    this.list=this.list.concat(response.body.result);
                    ++this.page;
                    this.loading=false;
                    if(response.body.result.length<20){
                        this.loading=true;
                    }
                },(err)=>{
                    console.log(err);
                })
            }
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
