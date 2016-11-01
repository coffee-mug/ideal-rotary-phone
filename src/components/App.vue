<template>
  <div id="app">
    <h1>{{ msg }}</h1>
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
h1 {
  font-family: 'Sacramento', cursive;
  color: #eee;
  text-align: center;
  font-size: 4.5rem;
  margin-top: 5vh;
}

</style>
