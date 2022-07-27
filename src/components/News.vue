<template>
  <div class="news">
   <router-link v-for="(item,index) in news" :key="index" :to="`/detail/${item.id}`">
      <div class="flex j-s item " >
        <div class="left">
          <div>{{item.title}}</div>
          <div class="flex">
            <div class="zd">置顶</div>
            <div class="pl">{{item.from}}</div>
            <div class="pl">评论 {{item.commentLength}}</div>
          </div>
        </div>
        <div class="right">
          <img :src="item.img">
        </div>
      </div>
   </router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "News",
  data(){
    return {
      news:[]
    }
  },
  created() {
    axios.get('/data/data.json').then(({data})=>{
      this.news = data
    })
  }
};
</script>

<style scoped>
  .news{
    padding: 5px 10px;
    margin-top:40px ;
  }
  .item{
    border-bottom: 1px solid #eee;
    padding: 10px 0;
  }
  .zd{
    border: 1px solid #d33d3e;
    color: #d33d3e;
    padding: 0 2px;
    font-size: 12px;
  }
  .pl{
    color:#666 ;
    font-size: 12px;
    margin: 0 4px;
  }
  img{
    width: 100px;
  }
</style>