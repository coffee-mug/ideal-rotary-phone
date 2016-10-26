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
      msg: 'Automatisation récupération des Sales Rank',
      idTest: '1',
    }
  },
}
</script>
