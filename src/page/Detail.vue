<template>
  <div class="detail">
    <div class="title">{{item.title}}</div>
    <div class="flex a-c">
      <img class="logo" src="/image/datails/author.jpg">
      <div style="margin-left:10px">
        <div class="from">{{item.from}}</div>
        <div class="time flex a-c">
          {{item.time | filterTime }}<span>{{item.commentLength}}评论</span>
          <div class="btn">关注</div>
        </div>
      </div>
    </div>
    <div class="content" v-html="item.content"></div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment'
import time from '../utils/time'
console.log(moment);
export default {
  name: "Detail",
  props: ["id"],
  data(){
    return {
      item:{}
    }
  },
  created() {
    axios.get('/data/data.json').then(({data})=>{
      this.item = data.find(r=>r.id===this.id)
      console.log(this.item);
    })
  },
  filters:{
    filterTime(val){
      console.log(val);
      return time.formatDate(val)
    }
  }
};
</script>

<style scoped>
.detail{
  padding:5px ;
}
.title{
  font-weight: bold;
  font-size: 20px;
}
.logo{
  width: 26px;
  border-radius: 50%;
}
.from{
  font-size: 12px;
  font-weight: bold;
}
.time{
  font-size: 12px;
}
.time span{
  margin-left:10px;
  color: #d33d3e;
}
.btn{
  padding: 2px 10px;
  color: white;
  background: #d33d3e;
  margin-left: 10px;
}

</style>