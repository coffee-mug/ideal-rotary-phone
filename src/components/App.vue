<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: "",
      idTest: '1',
    }
  },
}
</script>

<style scoped>
@font-face {
    font-family: "MarketDeco";
    src: url("https://s3.amazonaws.com/tereza-landing/Home/Market_Deco.woff") format('woff');
}

#app {
  background: url('https://s3.amazonaws.com/tereza-landing/Home/Arri%C3%A8re_plan.jpg') top center;
  background-size: cover;
  height: 420vh;
  font-family: MarketDeco; 
}
h1 {
  font-family: 'Sacramento', cursive;
  color: #eee;
  text-align: center;
  font-size: 4.5rem;
  margin-top: 5vh;
}

</style>
