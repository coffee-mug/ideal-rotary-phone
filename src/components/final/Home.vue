<template>
<div>
  <div class="searchContainer">
    <h1>Tereza</h1>
    <h2>Simplifiez vous la vie !</h2>
    <div class="searchbar">
      <form class="form-inline">
        <div class="form-group">
          <input v-model="haircut" class="form-control" placeholder="Recherche coupe">
        </div>
        <div class="form-group">
          <input v-model="city" class="form-control" placeholder="Où ça ?">
        </div>
      </form>
      <button @click.prevent="preSearch"><i class="glyphicon glyphicon-search"></i> </button>
    </div>
  </div>
  <div class="home-categoriesContainer">
    <h3>Nos catégories</h3>
    <div class="home-categoriesList">
      <div class="home-categoryCard">
        <img src="http://placehold.it/140x140" alt="">
        <p>HOMMES</p>
      </div>
      <div class="home-categoryCard">
        <img src="http://placehold.it/140x140" alt="">
        <p>FEMMES</p>
      </div>
      <div class="home-categoryCard">
        <img src="http://placehold.it/140x140" alt="">
        <p>BARBIERS</p>
      </div>
      <div class="home-categoryCard">
        <img src="http://placehold.it/140x140" alt="">
        <p>A DOMICILE</p>
      </div>
    </div>
  </div>
  <hr class="overlay" />
  <div class="home-selectionContainer">
    <h3>LES COIFFEURS DU MOIS</h3>
    <div class="home-selectionList">
      <div class="home-selectionCard">
        <div class="selectionCard-photo"></div>
        <div class="selectionCard-infos">
          <div class="selectionCard-name">
            <p>HENRI DE TREGES</p>
          </div>
          <div class="selectionCard-coordinates">
            <p class="selectionCard-address">12, rue du chien <br> Paris, 75012</p>
            <p class="selectionCard-tags">Brushing, Coupe Homme, coupe Femme</p>
          </div>
          <div class="selectionCard-benefits">
            <div class="selectionCard-benef"></div>
            <div class="selectionCard-benef"></div>
            <div class="selectionCard-benef"></div>
          </div>
          <button>PRENDRE RENDEZ-VOUS</button>
        </div>
      </div>
      <div class="home-selectionCard">
        <div class="selectionCard-photo"></div>
        <div class="selectionCard-infos">
          <div class="selectionCard-name">
            <p>HENRI DE TREGES</p>
          </div>
          <div class="selectionCard-coordinates">
            <p class="selectionCard-address">12, rue du chien <br> Paris, 75012</p>
            <p class="selectionCard-tags">Brushing, Coupe Homme, coupe Femme</p>
          </div>
          <div class="selectionCard-benefits">
            <div class="selectionCard-benef"></div>
            <div class="selectionCard-benef"></div>
            <div class="selectionCard-benef"></div>
          </div>
          <button>PRENDRE RENDEZ-VOUS</button>
        </div>
      </div>
      <div class="home-selectionCard">
        <div class="selectionCard-photo"></div>
        <div class="selectionCard-infos">
          <div class="selectionCard-name">
            <p>HENRI DE TREGES</p>
          </div>
          <div class="selectionCard-coordinates">
            <p class="selectionCard-address">12, rue du chien <br> Paris, 75012</p>
            <p class="selectionCard-tags">Brushing, Coupe Homme, coupe Femme</p>
          </div>
          <div class="selectionCard-benefits">
            <div class="selectionCard-benef"></div>
            <div class="selectionCard-benef"></div>
            <div class="selectionCard-benef"></div>
          </div>
          <button>PRENDRE RENDEZ-VOUS</button>
        </div>
      </div>
    </div>
  </div>
  <hr class="overlay big">
  <div class="home-benefitsList">
    <div class="home-benefitItem">
      <div class="benefitIcon">
        <img src="http://placehold.it/90x90" alt="">
        <p>Votre coiffeur en deux clics</p>
      </div>
      <p>Une envie de changer de coupe de cheveux, de tailler votre barbe ? </p>
      <p>Terez vous trouve le coiffeur-barbier qui vous convient, selon vos critères.</p>
      <p>Vérifiez la disponibilité et prenez rendez-vous directement en ligne depuis votre mobile !</p>
    </div>
    <div class="home-benefitItem">
      <div class="benefitIcon">
        <img src="http://placehold.it/90x90" alt="">
        <p>Votre coupe préférée</p>
      </div>
      <p>Tereza vous offre les catalogues exhaustifs de nos partenaires spécialistes.</p>
      <p>Vous cherchez une coupe en particulier ?</p>
      <p>Trouvez la sur Tereza, réservez, votre coiffeur vous attend.</p>
    </div>
    <div class="home-benefitItem">
      <div class="benefitIcon">
        <img src="http://placehold.it/90x90" alt="">
        <p>Meilleur coiffeur, au plus proche !</p>
      </div>
      <p>Grâce à nos avis vérifiés et aux photos clients, vous n'aurez plus de mauvaises surprises sur la qualité de la prestation.</p>
      <p>Vous savez à l'avance à quoi vous attendre, qu'il s'agisse du prix, du rendu et même de l'aspect du salon</p>
      <p>Alors, n'attendez plus !</p>
    </div>
  </div>
  <hr class="overlay" />
  <div class="home-marketingMessage">
    <h3>COIFFEUR, BARBIERS, REJOIGNEZ-NOUS !</h3>
    <p>Tereza, c'est un univers mode et beauté dans lequel votre salon et votre savoir-faire sauront être mis en valeur.</p>
    <p><strong>Notre but ?</strong></p>
    <p>Vous libérez de la prise de rendez-vous. Notre système de réservation en ligne vous libère du téléphone. Vous pouvez maintenant vous recentrer sur votre activité.</p>
    <p><strong>Envie de connaître votre clientèle ?</strong></p>
    <p>Le compte utilisateur est fait pour ça ! Vous avez accès aux statistiques que vos clients souhaitent partager pour une qualité de service optimale.</p>
    <p>N'hésitez plus !</p>
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

<style scoped>
.searchContainer {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 40vh;
  background: #626;
}

.searchContainer h1, .searchContainer h2 {
  text-align: center;
  color: #fff;
}

.searchbar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #000;
  width: 500px;
  height: 70px;
  padding: 15px 0 15px 0;
  margin: 0 auto;
  border-radius: 5px;
  margin-top: 5vh;
}

.searchbar form div input {
  background: #444;
  margin-left: 15px;
}

.searchbar button {
  width: 50px;
  height: 70px;
  margin-left: auto;
  border-radius: 5px;
  background: hsla(180, 100%, 60%, 0.9); 
  border: none;
}

.home-categoriesContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80vw;
  margin: 0 auto;
}

.home-categoriesList {
  display: flex;
  align-tiems: center;
} 

.home-categoryCard {
  margin-right: 5vw;
}

.home-categoryCard p {
  text-align: center;

}

hr.overlay {
  height: 3vh;
  background: hsla(0, 0%, 40%, 0.5);
}

hr.overlay.big {
  height: 8vh;
}

.home-selectionContainer h3 {
  text-align: center;
}

.home-selectionList {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin: 30px auto;
}

.home-selectionCard {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 30vw;
  height: 400px;
  background: hsla(180, 100%, 50%, 0.3);
  border-radius: 5px;
  padding: 10px;
  margin: 0 auto;
}

.selectionCard-infos {
  padding: 10px;
}

.selectionCard-infos > div {
  background: #000;
  padding: 5px;
  margin-bottom: 15px;
  border-radius: 5px;
  color: #fff;
}

.selectionCard-infos button {
  background: #000;
  color: #fff;
  border-radius: 5px;
  border: none;
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
}

.selectionCard-coordinates {
  height: 180px; 
}

.selectionCard-benefits {
  display: flex;
  align-items: center;
  justify-content: center;
}

.selectionCard-benef {
  width: 60px;
  height: 60px;
  background: grey;
  border-radius: 10px;
  margin: auto;
}

.selectionCard-photo {
  width: 250px;
  height: 370px;
  background: pink;
}

.home-benefitsList {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  height: 50vh;
  margin: -70px auto;
}

.home-benefitItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 15vw;
  height: 300px; 
  margin: 0 5vw;
}

.home-benefitItem p {
  text-align: center;
  margin: 10px auto;
}

.home-benefitItem img {
  display: block;
  margin: 25px auto;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.4);
}

.home-marketingMessage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
  width: 100vw;
  margin: 0 auto;
}

.home-marketingMessage p {
  width: 25vw;
  text-align: center;
  margin: 15px auto;
}


</style>
