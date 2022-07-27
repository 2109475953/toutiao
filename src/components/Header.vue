<template>
  <div class="header flex j-s a-c">
    <img class="img1" src="/image/index/message.png">
    <div class="center flex a-c j-c">
      <img class="img2" src="/image/index/wap_logo.png">
      <img class="img3" src="/image/index/titlebar_refresh.png">
    </div>
    <img class="img1" src="/image/index/search_normal.png">
  </div>
</template>

<script>
export default {
name:'Header',
}
</script>

<style scoped>
.header{
  width: 100vw;
  height: 40px;
  background: #d33d3e;
  position: fixed;
  top: 0;
  left: 0;
}
.header .center{
  flex: 1;
}
.header .img1{
  width: 36px;
}
.header .img2{
    width: 122px;
}
.header .img3{
    width: 24px;
}
</style>