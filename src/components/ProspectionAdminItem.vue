<template>
<div class="container">
  <div class="row">
    <div class="col-md-12 col-xs-12">
      <h1>Prospect details</h1>
      <router-link :to="{ path: '/prospection/admin' }">Back to Admin </router-link>
      <form> 
        <template v-for="(value, key) in prospect" v-if="['id', 'created_at', 'updated_at'].indexOf(key) === -1">
          <div class="form-group">
            <label>{{ key }}</label>
            <input class="form-control" v-model="prospect[key]" :value="value" placeholder="value" @keydown.enter.prevent="updateField(key)"></input>
          </div>
        </template>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      prospect: {}
    }
  },
  created() {
    var prospectData,
        prospectProperties;

    this.$http.get('/prospection/admin/' + this.$route.params.id)
      .then( (res) => {
        //  A bunch of methods are added to the returned objects, filter them out
        //  to only keep what corresponds to the model
        prospectProperties = Object.keys(res.body.prospect).filter( (e) => {
          if (typeof e !== 'function') {
            return e;
          };
        });

        prospectData = {};

        // Associate data 
        prospectProperties.map( (e) => {
           prospectData[e] = res.body.prospect[e];  
        });

        console.log("ProspectData: ",prospectData);
        this.prospect = prospectData;
      }, (err) => {
        console.log(err);
      });
  },
  methods: {
    updateField(k,v) {
      var updatedValue = this.prospect[k],
          bodyObject = {};

      bodyObject[k] = updatedValue;

      console.log("Key: ", k, updatedValue);
      this.$http.put('/prospection/admin/' +this.$route.params.id, bodyObject)
        .then( (res) => {
         console.log(res);
        })
    }
  }
}
</script>

<style scoped>
label {
  color: #eee;
}

</style>
