<template>
<div>
  <h1>Details Prospect</h1>
  <form> 
    <template v-for="(value, key) in prospect">
      <div class="form-group">
        <label>{{ key }}</label>
        <input :value="value" placeholder="value" keypress.enter.prevent="updateField"></input>
      </div>
    </template>
  </form>
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
        prospectProperties = Object.keys(res.body.prospect).filter( (e) => {
          if (typeof e !== 'function') {
            return e;
          };
        });

        prospectData = {};

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
    updateField(e) {
      console.log(e.target);
    }
  }
}
</script>
