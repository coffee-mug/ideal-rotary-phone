<template>
<div>
  <h1 class="text-center" style="font-size: 4.5em">Simplifiez vous la vie !</h1>
  <div class="searchContainer">
    <div class="searchbar">
      <form class="form-inline">
        <div class="form-group form-inline">
          <input v-model="haircut" class="form-control" placeholder="Recherche coupe">
        </div>
        <div class="form-group form-inline">
          <input v-model="city" class="form-control" placeholder="Lieu ?">
        </div>
        <div class="form-group form-inline">
          <input v-model="coiffeur" class="form-control" placeholder="Deja un coiffeur ?">
        </div>
      </form>
      <button @click.prevent="preSearch"><i class="glyphicon glyphicon-search"></i> </button>
    </div>
  </div>
  <div class="background-patch">

    <section class="home-categoriesContainer">
      <h3>Nos categories</h3>
      <div class="home-categoriesList">
        <div class="home-categoryCard">
          <img src="https://s3.amazonaws.com/tereza-landing/Home/Categorie-Homme.png" alt="">
          <p>HOMMES</p>
        </div>
        <div class="home-categoryCard">
          <img src="https://s3.amazonaws.com/tereza-landing/Home/Categorie-Femmes.png" alt="">
          <p>FEMMES</p>
        </div>
        <div class="home-categoryCard">
          <img src="https://s3.amazonaws.com/tereza-landing/Home/Categorie-barbier.png" alt="">
          <p>BARBIERS</p>
        </div>
        <div class="home-categoryCard">
          <img src="https://s3.amazonaws.com/tereza-landing/Home/Categorie-Lissage.png" alt="">
          <p>A DOMICILE</p>
        </div>
      </div>
    </section>
    <section class="home-selectionContainer">
      <h3>LES COIFFEURS DU MOIS</h3>
      <div class="home-selectionList">
        <template v-for="c in hairdressers">
          <div class="home-selectionCard">
            <div class="selectionCard-photo">
              <img :src="c.photo_link" alt="">
            </div>
            <div class="selectionCard-infos">
              <div class="selectionCard-name">
                <p>{{ c.name }}</p>
              </div>
              <div class="selectionCard-coordinates">
                <p class="selectionCard-address">{{ c.street }} <br> {{ c.city }}, {{ c.cp }}</p>
                <ul class="selectionCard-tags">
                  <li>Brushing</li> 
                  <li>Coupe Homme</li> 
                  <li>coupe Femme</li>
                </ul>
              </div>
              <div class="selectionCard-benefits">
                <div class="selectionCard-benef">
                  <img src="https://s3.amazonaws.com/tereza-landing/Home/Scissor2.png" alt="">
                  <span class="text-center">3 coiffeurs disponibles</span>
                </div>
                <div class="selectionCard-benef">
                  <img src="https://s3.amazonaws.com/tereza-landing/Home/Pouce2.png" alt="">
                  <span class="text-center">Excellents avis</span>
                </div>
                <div class="selectionCard-benef">
                  <img src="https://s3.amazonaws.com/tereza-landing/Home/Pouce2.png" alt="">
                  <p class="text-center">Coiffeur certifie</p>
                </div>
              </div>
              <button>PRENDRE RENDEZ-VOUS</button>
            </div>
          </div>
        </template>
        </div>
      </div>
    </section>
    <section class="home-benefitsList">
      <div class="home-benefitItem">
        <div class="benefitIcon">
          <img src="https://s3.amazonaws.com/tereza-landing/Home/CllickBof2.png" alt="">
          <p class="benefits-highlight">Votre coiffeur en deux clics</p>
        </div>
        <p>Une envie de changer de coupe de cheveux, de tailler votre barbe ? </p>
        <p>Tereza vous trouve le coiffeur-barbier qui vous convient, selon vos criteres.</p>
        <p>Verifiez la disponibilite et prenez rendez-vous directement en ligne depuis votre mobile !</p>
      </div>
      <div class="home-benefitItem">
        <div class="benefitIcon">
          <img src="https://s3.amazonaws.com/tereza-landing/Home/Hair2.png" alt="">
          <p class="benefits-highlight">Votre coupe preferee</p>
        </div>
        <p>Tereza vous offre les catalogues exhaustifs de nos partenaires specialistes.</p>
        <p>Vous cherchez une coupe en particulier ?</p>
        <p>Trouvez la sur Tereza, reservez, votre coiffeur vous attend.</p>
      </div>
      <div class="home-benefitItem">
        <div class="benefitIcon">
          <img src="https://s3.amazonaws.com/tereza-landing/Home/localisation2.png" alt="">
          <p class="benefits-highlight">Meilleur coiffeur, au plus proche !</p>
        </div>
        <p>Grâce a nos avis verifies et aux photos clients, vous n'aurez plus de mauvaises surprises sur la qualite de la prestation.</p>
        <p>Vous savez a l'avance à quoi vous attendre, qu'il s'agisse du prix, du rendu et même de l'aspect du salon</p>
        <p>Alors, n'attendez plus !</p>
      </div>
    </section>
    <section class="home-marketingMessage">
      <h3>COIFFEUR, BARBIERS, REJOIGNEZ-NOUS !</h3>
      <p>Tereza, c'est un univers mode et beaute dans lequel votre salon et votre savoir-faire sauront être mis en valeur.</p>
      <p><strong>Notre but ?</strong></p>
      <p>Vous liberez de la prise de rendez-vous. Notre système de reservation en ligne vous libère du telephone. Vous pouvez maintenant vous recentrer sur votre activite.</p>
      <p><strong>Envie de connaître votre clientèle ?</strong></p>
      <p>Le compte utilisateur est fait pour ça ! Vous avez accès aux statistiques que vos clients souhaitent partager pour une qualite de service optimale.</p>
      <p>N'hesitez plus !</p>
    </section>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
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
    preSearch() {
      // Keep it to extend with later search. 
      var queries = ['haircut', 'city'],
          coiff = '';

      for (let q of queries) {
        if (q) {
          window.localStorage.setItem(q, this.$data[q]); 
        }
      }
       if (this.coiffeur) {
        var re = new RegExp(this.coiffeur, "gi");

        coiff = this.hairdressers.filter( (h) => { 
          if (re.exec(h.name)) { 
            return h;
          }
        });

        console.log("Coiff: ", coiff[0]);
        if (coiff) {
          for (let el in coiff[0]) {
            window.localStorage.setItem(el, coiff[0][el]);
          }
          return this.$router.push({ name:'coiffeur' });
          
        }
      }
      return this.$router.push({ name: 'prestation' });
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
}

.searchContainer h1, h3 {
  text-align: center;
  color: #fff;
}
 
.searchContainer h1 {
 font-size: 4.5em; 
}

h3 {
  font-size: 3.5em;
}

.searchContainer img {
  min-width: 300px;
  width: 300px;
  margin-top: 10vh;
}

.searchbar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #000;
  width: 40vw;
  min-width: 768px;
  height: 70px;
  padding: 15px 0 15px 0;
  margin: 0 auto;
  border-radius: 5px;
}

.searchbar form div input {
  background: #444;
  margin-left: 15px;
  color: #fff;
}

.searchbar button {
  width: 50px;
  height: 70px;
  margin-left: auto;
  border-radius: 5px;
  background: hsla(180, 100%, 60%, 0.9); 
  border: none;
}

section {
  margin: 5vh auto 25vh auto;
  min-height: 40vh;
}

.home-categoriesContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80vw;
}

.home-categoriesList {
  display: flex;
  align-tiems: center;
  margin: 0 auto 0 auto;
} 

.home-categoryCard {
  margin-right: 5vw;
}

.home-categoryCard img {
  width: 200px;
  border-radius: 15px;
}

.home-categoryCard p {
  text-align: center;
  color: #fff;
  font-size: 1.9em;
}

.home-selectionContainer {
  margin-bottom: 35vh;
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
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
}

.selectionCard-benef img {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin: 0 auto;
}

.selectionCard-photo {
  width: 250px;
  height: 370px;
}

.selectionCard-photo img {
  height: 100%;
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
  color: #fff;
}

.home-benefitItem .benefits-highlight {
  color: cyan;
  font-size: 2em;
}

.home-benefitItem .benefitIcon img {
  display: block;
  height: 150px;
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
  margin: 65vh auto 0 auto;
}

.home-marketingMessage p {
  width: 25vw;
  text-align: center;
  margin: 15px auto;
  color: #fff;
  font-size: 1.2em;
}

.selectionCard-tags {
  list-style-type: none;
}

.selectionCard-tags li {
  display: inline-block;
  margin-left: 5px;
  margin-bottom: 3px;
  border: 1px solid #fff;
  padding: 5px;
  border-radius: 5px;
  font-size: 0.8em;
}

.background-patch {
  background: url('https://s3.amazonaws.com/tereza-landing/Home/Arri%C3%A8re_plan.jpg') no-repeat;
  background-position-y: 80%;
  background-size: cover;
}



</style>
