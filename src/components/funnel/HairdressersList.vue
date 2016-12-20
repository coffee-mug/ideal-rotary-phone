<template>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <Card v-for="i in 5" />
    </div>
    <div class="col-md-6">
      <img src="http://placehold.it/500x500" alt="">
      <div class="filters">
        <p>Filtres</p>
        <p>Tri</p>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import Card from './Card.vue';

export default {
  data() {
    return {};
  },
  components: {
    'Card': Card
  }
}

</script>
