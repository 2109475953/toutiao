<template>
  <div>
    <Header/>
    <News/>
  </div>
</template>

<script>
// 导入组件
import Header from '../components/Header.vue'
import News from '../components/News.vue'

export default {
name:'Home',
components:{
  Header,
  News
  }
}
</script>

<style scoped>

</style>