<template>
  <div class="results-container">
    <Header></Header>
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-12">
            <div class="results-title">Salons / Coiffeurs disponibles</div>
          </div>
        </div>
        <div class="row results">
          <div class="col-md-6 results-cards">
            <Card v-for="o in hairdressers" :hairdresser="o" class="row"></Card>
          </div>
          <div class="col-md-6 results-map">
            <gmap-map :center="{lat: 48.862840, lng: 2.333474 }" :zoom="9" class="map">
              <gmap-marker v-for="h in hairdressers" :position="h.geoloc"></gmap-marker>
            </gmap-map>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.results-container {
  background: url('https://s3.amazonaws.com/tereza-landing/BG1.png') no-repeat center center;
  background-size: cover;
  padding: 20px 0;
}

.results-container .row {
  max-width: 1280px;
  margin: 0 auto;
}

.results-title {
  color: #fff;
  font-size: 32px;
  margin-bottom: 12px;
}

.results {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
}

.results-cards {
    margin-right: 4px;
}

.results-map {
    position: relative;
    padding-bottom: calc(100% / 3 * 2);
    border-radius: 8px;
    margin-left: 4px;
}

.map {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 850px;
}
</style>


<script>
  import Card from '../funnel/Card.vue';
  import Search from '../final/Search.vue';
  import Header from '../funnel/Header.vue'
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
            geoloc: { lat: 48.845433, lng: 2.279132 },
            tags: ["Coupe Homme", "Coupe Femme", "Barbier"],
            reviews: [
              { "rating": 5, "comment": "Bonne prestation<br>Un petit salon sympa, rapide et bien place dans le XV" },
              { "rating": 3, "comment": "Coloration rapide et reussie, chapeau bas !" },
              { "rating": 5, "comment": "Que de sympathie dans ce petit salon parisien !<br>Vivement recommande !" }
            ]
          },
          {
            name: "Nathalie Feuillade",
            cp: "75014",
            city: "Paris",
            street: "14, rue henri bocquillon",
            photo_link: "https://s3.amazonaws.com/tereza-landing/Home/Coiffeur-du-mois_3.png",
            geoloc: { lat: 48.841485, lng: 2.289596 },
            tags: ["Brushing", "Lissage", "Coloration", "Mèches", "Boucles", "Afro"],
            reviews: [
              { "rating": 1, "comment": "Je n'y reviendrai pas..." },
            ]
          },
          {
            name: "Simone Duchamp",
            cp: "75004",
            city: "Paris",
            street: "12, rue du temple",
            photo_link: "https://s3.amazonaws.com/tereza-landing/Home/Coiffeur-du-mois_2.png",
            geoloc: { lat: 48.858286, lng: 2.353283 },
            tags: ["Brushing", "Lissage", "Coloration", "Mèches", "Boucles", "Afro"],
            reviews: []
          },
        ]

      }
    },
    created() {
      // Salons route search by company name OR city, use if if no haircut provided.
      if (!window.localStorage.getItem('haircut')) {
        this.$http.get('/api/salons/' + window.localStorage.getItem('haircut'),
          {
            params: {
              city: window.localStorage.getItem('city')
            }
          }).then((res) => {
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
        }).then((res) => {
          this.results = res.body;
          console.log(res);

        }, (err) => {
          console.log(err);
        });
    },
    components: {
      'Card': Card,
      'Search': Search,
      'Header': Header
    }
  }

</script>