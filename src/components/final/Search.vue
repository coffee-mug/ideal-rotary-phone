<template>
<div id="search">
  <div>
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation"><a @click.prevent="showtab" href="#search-haircut" aria-controls="search-haircut" role="tab" data-toggle="tab">Je cherche ma coupe !</a></li>
      <li role="presentation"><a @click.prevent="showtab" href="#search-hairdresser" aria-controls="search-hairdresser" role="tab" data-toggle="tab">J'ai deja mon coiffeur</a></li>
    </ul>
  </div>
  <div class="tab-content">
    <div role="tabpanel" id="search-haircut" class="tab-pane active">
      <div class="form-inline">
        <div class="form-group">
          <label class="sr-only" for="">Recherche libre</label>
          <div class="input-group">
            <div class="input-group-addon"><span class="glyphicon glyphicon-search"></span></div>
            <input class="form-control" v-model="haircut" type="text" placeholder="Recherche libre">
          </div>
        </div>
        <div class="form-group">
          <label class="sr-only" for="">Location</label>
          <div class="input-group">
            <div class="input-group-addon"><span class="glyphicon glyphicon-search"></span></div>
            <input class="form-control" v-model="city" type="text" placeholder="Ou ca ?">
          </div>
        </div>
        <div class="form-group">
          <input type="date">
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox">A domicile
          </label>
        </div>
        <button type="submit" @click.prevent="preSearch" class="btn btn-primary"><span class="glyphicon glyphicon-search"></span></button>
      </div>
    </div>
    <div role="tabpanel" id="search-hairdresser" class="tab-pane">
      <div class="form-inline">
        <div class="form-group">
          <label class="sr-only" for="">Votre coiffeur</label>
          <input class="form-control" v-model="coiffeur" type="text" placeholder="Votre coiffeur">
        </div>
        <div class="form-group">
          <input type="date">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="preSearch"><span class="glyphicon glyphicon-search"></span></button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'search-haircut',
      haircut: '',
      city: '',
      coiffeur: '',
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
  methods: {
    showtab(e) {
      var tabId = e.target.href.split('#')[1],
          previousActive = document.querySelector('.tab-content div[role="tabpanel"].active');
      
      if (previousActive) {
        // fade out previous active content
        previousActive.classList.toggle('active');
      }
        // and fade in the new one
      document.getElementById(tabId).classList.toggle('active');
        // useful for the search, to distinguish between the two forms
      this.activeTab = tabId;
      
    },
    preSearch() {
      // Keep it to extend with later search. 
      var queries = ['haircut', 'city'],
          coiff = '';

      for (let q of queries) {
        if (q) {
          // Keep it for the "real" search query at next step
          window.localStorage.setItem(q, this.$data[q]); 
          console.log(this.$data[q]);
        }
      }

      // If user on hairdresser search tab 
      if (this.coiffeur && this.activeTab === "search-hairdresser") {
        var re = new RegExp(this.coiffeur, "gi");

        // Just for testing, but will have to change it with a real query instead
        coiff = this.hairdressers.filter( (h) => { 
            if (re.exec(h.name)) { 
            return h;
            }
            });

        console.log("Coiff: ", coiff[0]);
        if (coiff) {
          for (let el in coiff[0]) {
            window.localStorage.setItem(el, coiff[0][el]); // Get all items for hairdresser profile
          }
          // User searched for a specific hairdresser
          return this.$router.push({ name:'coiffeur' });

        }
      }

      // User just want to search for a type of prestation
      return this.$router.push({ name: 'prestation' });
    }
  }
}
</script>

<style scoped>
.tab-content {
  background: black;
  padding: 15px;
  text-align: center;
  border-radius: 0 5px 5px 5px;
}

.form-group {
  margin: 0 5px;
  padding: 0 5px;
}

li[role="presentation"] > a {
  background: black;
  color: #fff;
}

</style>
