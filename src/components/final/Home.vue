<template>
<div>
  <div class="searchbar">
    <form class="form-inline">
      <div class="form-group">
        <input v-model="haircut" class="form-control" placeholder="Recherche coupe">
      </div>
      <div class="form-group">
        <input v-model="city" class="form-control" placeholder="Où ça ?">
      </div>
      <button @click.prevent="preSearch"><i class="glyphicon glyphicon-search"></i> </button>
    </form>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      haircut: '',
      city: ''
    }
  },
  methods: {
    preSearch() {
      // Keep it to extend with later search. 
      var queries = ['haircut', 'city'];

      for (let q of queries) {
        if ( window.localStorage.getItem(q) ) {
          window.localStorage.removeItem(q);
        }
        window.localStorage.setItem(q, this.$data[q]); 
      }
      this.$router.push({ name: 'prestation' });
    }
  }
}
</script>
