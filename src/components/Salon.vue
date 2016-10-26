<template>
<div id="app">
  <div class="container">
    <div class="row">
      <div class="col-md-7 col-xs-12">
        <h1> Product page of {{ store.raisonSoc }} </h1>
        <form @submit.prevent="updateAdminInfo()">
          <div class="form-group">
            <label> Description </label>
            <textarea class="form-control" rows="3" v-model="store.description" :description="store.description" placeholder="description"/>
          </div>
          <div class="form-group">
            <label>Raison sociale </label>
            <input class="form-control" v-model="store.raisonSoc" />
          </div>
          <div class="form-group">
            <label>Adresse </label>
            <input class="form-control" v-model="store.adresse" />
          </div>
          <div class="form-group">
            <label>Complément (immeuble, ...) </label>
            <input class="form-control" v-model="store.adresse_complement" />
          </div>
          <div class="form-group">
            <label>Ville </label>
            <input class="form-control" v-model="store.ville" />
          </div>
          <div class="form-group">
            <label>Code Postal </label>
            <input class="form-control" v-model="store.cp" />
          </div>
          <div class="form-group">
            <label>Telephone </label>
            <input class="form-control" type="tel" v-model="store.telephone" />
          </div>
            <button class="btn btn-primary">Maj</button>
          </div>
        </form>
      </div>
      <div class="col-md-5 col-xs-12">
        <div class="square">
          <h3> Other infos </h3>
        </div>
        <div class="square">
          <h3> Other infos </h3>
        </div>
        <div class="square">
          <h3> Other infos </h3>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      store: {}
    }
  },
  created() {
    this.$http.get('/admin/salon/' + window.localStorage.getItem('id'))
      .then( (response) => { 
        console.log(response.body); 
        this.store = response.body.store.store;
      }, (err) => { 
        console.log('Error while trying to get initial data')
    });
  },
  methods: {
    updateAdminInfo() {
      this.$http.post('/admin/salon/' + window.localStorage.getItem('id'), {
        raisonSoc: this.store.raisonSoc,
        adresse: this.store.adresse,
        adresse_complement: this.store.adresse_complement,
        ville: this.store.ville,
        cp: this.store.cp,
        telephone: this.store.telephone,
        description: this.store.description,
        user_id: window.localStorage.getItem('id')
      }).then( (response) => {
        console.log(response.body);
      }, (err) => {
        console.log(err)
      });
    }
  }
}
</script>

<style>
.square {
  width: 25vw;
  min-height: 12vh;
  background-color: grey;
}

</style>
