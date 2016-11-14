<template>
<div>
  <h1> Prospects récupérés </h1> 
  
  <ul class="prospects-list">
    <li v-for="p in prospects"><router-link :to="{ name: 'prospects', params: { id: p.id }}">  {{ p.email }}</router-link> </li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      prospects: []
    }
  },
  created() {
    this.$http.get('/prospection/admin')
      .then( (res) => {
        console.log(res.body);
        res.body.users.forEach( (e) => { this.prospects.push(e) }); 
        console.log(this.prospects);
      });
  }
}

</script>

<style>
.prospects-list li {
  color: #fff;
}


</style>
