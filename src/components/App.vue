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
body {
  background-color: #04030F;
  font-family: 'Lato' sans-serif; 
}
h1 {
  font-family: 'Sacramento', cursive;
  color: #eee;
  text-align: center;
  font-size: 4.5rem;
  margin-top: 5vh;
}

</style>
