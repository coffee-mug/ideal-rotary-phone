<template>
<div class="results-container">
  <div class="row">
    <div class="col-md-12">
      <div class="home-header">
        <Search></Search>
        <h1> Resultats</h1>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 noPad">
      <div class="results">
        <div class="results-cards">
          <Card v-for="o in hairdressers"
            :o="o" 
            :name="o.name"
            :cp="o.cp"
            :street="o.street"
            :city="o.city"
            :geocode="o.geoloc"
            :photo_link="o.photo_link">
          </Card>
        </div>
        <gmap-map
          :center="{lat: 48.862840, lng: 2.333474 }"
          :zoom="9"
          class="results-map">
          <gmap-marker v-for="h in hairdressers" 
                       :position="h.geoloc"></gmap-marker>
        </gmap-map>
      </div>
    </div>
  </div>
</div>
</template>

<style>
.home-header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url('https://s3.amazonaws.com/tereza-landing/BG0.png') no-repeat center center;
  background-size: cover;
  min-height: 30vh;
  height: 400px;
}
h1 {
  color: #fff;
  text-align: center;
}
.results {
  display: flex;
  align-items: flex-start;
  background: url('https://s3.amazonaws.com/tereza-landing/BG1.png') no-repeat center center;
  background-size: cover;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
}

.results-map {
  width: 50%;
  height: 95vh;
  border-radius: 15px;
  margin-left: 15px;
}

</style>


<script>
import Card from '../funnel/Card.vue';
import Search from '../final/Search.vue';
export default {
  data() {
    return {
      results: [],
      hairdressers: [
        {
          name: "Henri de treges",
          cp: "75015",
          city: "Paris",
          street: "15, rue de la convention",
          photo_link: "https://s3.amazonaws.com/tereza-landing/Home/Coiffeur-du-mois_1.png",
          geoloc: { lat: 48.845433, lng: 2.279132 }
        },
        {
          name: "Nathalie Feuillade",
          cp: "75014",
          city: "Paris",
          street: "14, rue henri bocquillon",
          photo_link: "https://s3.amazonaws.com/tereza-landing/Home/Coiffeur-du-mois_2.png",
          geoloc: { lat: 48.841485, lng: 2.289596 }
        },
        {
          name: "Simone Duchamp",
          cp: "75004",
          city: "Paris",
          street: "12, rue du temple",
          photo_link: "https://s3.amazonaws.com/tereza-landing/Home/Coiffeur-du-mois_3.png",
          geoloc: { lat: 48.858286, lng: 2.353283}
        },
      ]

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
    'Card': Card,
    'Search': Search
  } 
}

</script>
