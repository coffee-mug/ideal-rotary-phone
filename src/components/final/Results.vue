<template>
<div>
  <Card v-for="o in results" :o="o" :hairDresserInfos="o">
  </Card>
</div>
</template>


<script>
import Card from '../funnel/Card.vue';
export default {
  data() {
    return {
      results: []

    }  
  },
  created() {
    // Salons route search by company name OR city, use if if no haircut provided.
    if (!window.localStorage.getItem('haircut') ) {
      this.$http.get('/api/salons/' + window.localStorage.getItem('haircut'),
        {
          params: {
            city: window.localStorage.getItem('city')
          }
      }).then( (res) => {
          this.results = res.body;
          console.log(res);

      }, (err) => {
          console.log(err);
      });

    }
    this.$http.get('/api/haircuts/' + window.localStorage.getItem('haircut'),
      {
        params: {
          city: window.localStorage.getItem('city')
        }
    }).then( (res) => {
        this.results = res.body;
        console.log(res);

    }, (err) => {
        console.log(err);
    });
  },
  components: {
    'Card': Card
  } 
}

</script>
