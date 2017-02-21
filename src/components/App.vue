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

<style>
@font-face {
    font-family: "MarketDeco";
    src: url("https://s3.amazonaws.com/tereza-landing/Home/Market_Deco.woff") format('woff');
}

#app {
  font-family: MarketDeco; 
}

.logo h1 {
 font-size: 4.5em; 
  text-align: center;
}

.logo img {
  display: block;
  min-width: 300px;
  width: 300px;
  margin: 0 auto;
}
body {
  background: none;
}
</style>
