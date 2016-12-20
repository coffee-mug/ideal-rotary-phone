<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 header">
        <div class="col-md-6 header-picture">
          <img src="https://unsplash.it/70/70" />
        </div>
        <div class="col-md-6 header-storeName">
          <h1>Aquasani Compact</h1>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h2> Prestations </h2>
        <form class="form">
          <div class="input-group">
            <input class="form-control" v-model="title" placeholder="Titre"/>
          </div>
          <div class="input-group">
            <input class="form-control" v-model="duration" placeholder="Durée"/>
          </div>
          <div class="input-group">
            <input class="form-control" v-model="price" placeholder="Prix"/>
          </div>
          <div class="input-group">
            <input class="form-control" v-model="description" placeholder="Description"/>
          </div>
          <button class="btn btn-primary" @click.prevent="addOffer()">Nouvelle Offre </button>
        </form>
        <Offer v-for="o in offers" :offer="o"></Offer>
      </div>
    </div>
  </div>
</template>


<script>
import Offer from './Offer.vue';

export default {
  data() {
    return {
      title: '',
      description: '',
      duration: '',
      price: '',
      offers: [{ title: 'le meilleur des broyeurs', duration: '45', price: '45', description: 'lorem ipsum' }]
    }
  },
  methods: {
    addOffer() {
      this.offers.push( { title: this.title, description: this.description, duration: this.duration, price: this.price });
      this.title= '';
      this.description= '';
      this.duration= '';
      this.price = '';
      
    }
  },
  components: {
    'Offer': Offer,
  }
}

</script>


<style>
.header {
  background: url('http://placehold.it/400x300') center center no-repeat fixed;
  height: 300px;
  background-size: cover;
  position: relative;
}

.header-picture {
  position: absolute;
  left: 45%;
  bottom: -10%;
}

.header-picture img {
  border-radius: 35px;
}

.header-storeName {
  margin: 15% auto;
  width: 100%;
  text-align: center;
  color: #fff;
}

</style>
