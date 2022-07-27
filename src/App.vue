<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  outline: none;
}
a{
  color:black ;
}
.flex{
  display: flex;
}
.j-s{
  justify-content:space-between ;
}
.j-c{
  justify-content: center;
}
.a-c{
  align-items: center;
}
</style>
