<template>
    <div id='Content'>
        <h2>{{list.title}}</h2>
        <div v-html="list.content">{{list.content}}</div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                msg:'数据',
                list:[]
            }
        },
        mounted(){
            // console.log(this.$route.params.aid);
            var aid = this.$route.params.aid;
            this.requestData(aid);
        },
        methods:{
            requestData(aid){
                var api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
                this.$http.get(api).then((res)=>{
                    console.log(res);
                    this.list = res.body.result[0];
                },(err)=>{
                    console.log(err);
                })
            }
        }
    }
</script>