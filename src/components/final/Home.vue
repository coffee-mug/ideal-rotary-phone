<template>
  <div class="row">
    <div class="col-md-12 xs-12">
      <section class="home-header">
        <div class="home-header-title">
          <h1 class="text-center">Tereza</h1>
          <h2 class="text-center">Simplifiez-vous la vie !</h2>
        </div>
        <div class="home-header-search">
         <Search v-on:search(></Search> 
        </div>
      </section>
    </div>
  <div class="row">
    <div class="col-md-12 col-xs-12">
      <section class="home-categories">
        <h3>Nos categories</h3>
        <div class="row">
          <div class="home-categoryCard col-xs-3">
              <img class="img-responsive" src="https://s3.amazonaws.com/tereza-landing/Home/Categorie-Homme.png" alt="">
              <p class="text-center blue">HOMMES</p>
            </div>

            <div class="home-categoryCard col-xs-3">
              <img class="img-responsive" src="https://s3.amazonaws.com/tereza-landing/Home/Categorie-Femmes.png" alt="">
              <p class="text-center pink">FEMMES</p>
            </div>

            <div class="home-categoryCard col-xs-3">
              <img class="img-responsive" src="https://s3.amazonaws.com/tereza-landing/Home/Categorie-barbier.png" alt="">
              <p class="text-center blue">BARBIERS</p>
            </div>

            <div class="home-categoryCard col-xs-3">
              <img class="img-responsive" src="https://s3.amazonaws.com/tereza-landing/Home/Categorie-Lissage.png" alt="">
              <p class="text-center pink">A DOMICILE</p>
            </div>
        </div>
      </section>
    </div>
  </div>

  <div class="diviseur"></div>

  <div class="row">
    <div class="col-md-12 col-xs-12">
      <section class="home-selection">
        <h3>LES COIFFEURS DU MOIS</h3>
        <div class="row">
          <div class="home-selectionList">
            <template v-for="c in hairdressers">
              <div class="col-md-4 col-xs-12">
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
                      <div class="row">

                        <div class="col-xs-4 benefits-card">
                          <img src="https://s3.amazonaws.com/tereza-landing/Home/Scissor2.png" alt="">
                          <p class="text-center">3 coiffeurs disponibles</p>
                        </div>

                        <div class="col-xs-4 benefits-card">
                          <img src="https://s3.amazonaws.com/tereza-landing/Home/Pouce2.png" alt="">
                          <p class="text-center">Excellents avis</p>
                        </div>

                        <div class="col-xs-4 benefits-card">
                          <img src="https://s3.amazonaws.com/tereza-landing/Home/Pouce2.png" alt="">
                          <p class="text-center">Coiffeur certifie</p>
                        </div>

                      </div>
                    </div>
                    <button>PRENDRE RENDEZ-VOUS</button>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
       <hr>
      </section>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 col-xs-12">
      <section class="benefits">
        <div class="home-benefitItem">
          <div class="benefitIcon">
            <img class="img-responsive" src="https://s3.amazonaws.com/tereza-landing/Home/CllickBof2.png" alt="">
            <p class="benefits-highlight">Votre coiffeur en deux clics</p>
          </div>
          <p>Une envie de changer de coupe de cheveux, de tailler votre barbe ? </p>
          <p>Tereza vous trouve le coiffeur-barbier qui vous convient, selon vos criteres.</p>
          <p>Verifiez la disponibilite et prenez rendez-vous directement en ligne depuis votre mobile !</p>
        </div>
        <div class="home-benefitItem">
          <div class="benefitIcon">
            <img class="img-responsive" src="https://s3.amazonaws.com/tereza-landing/Home/Hair2.png" alt="">
            <p class="benefits-highlight">Votre coupe preferee</p>
          </div>
          <p>Tereza vous offre les catalogues exhaustifs de nos partenaires specialistes.</p>
          <p>Vous cherchez une coupe en particulier ?</p>
          <p>Trouvez la sur Tereza, reservez, votre coiffeur vous attend.</p>
        </div>
        <div class="home-benefitItem">
          <div class="benefitIcon">
            <img class="img-responsive" src="https://s3.amazonaws.com/tereza-landing/Home/localisation2.png" alt="">
            <p class="benefits-highlight">Meilleur coiffeur, au plus proche !</p>
          </div>
          <p>Grâce a nos avis verifies et aux photos clients, vous n'aurez plus de mauvaises surprises sur la qualite de la prestation.</p>
          <p>Vous savez a l'avance à quoi vous attendre, qu'il s'agisse du prix, du rendu et même de l'aspect du salon</p>
          <p>Alors, n'attendez plus !</p>
        </div>
        <hr>
      </section>
    </div>
  </div>
  <section class="marketing">
    <h3 class="text-center">COIFFEUR, BARBIERS, REJOIGNEZ-NOUS !</h3>
    <div>
      <p class="text-center">Tereza, c'est un univers mode et beaute dans lequel votre salon et votre savoir-faire sauront être mis en valeur.</p>
    </div>
    <div>
      <p class="text-center"><strong>Notre but ?</strong></p>
      <p>Vous liberez de la prise de rendez-vous. Notre système de reservation en ligne vous libère du telephone. Vous pouvez maintenant vous recentrer sur votre activite.</p>
    </div>
    <div>
      <p class="text-center"><strong>Envie de connaître votre clientèle ?</strong></p>
      <p>Le compte utilisateur est fait pour ça ! Vous avez accès aux statistiques que vos clients souhaitent partager pour une qualite de service optimale.</p>
    </div>
    <p>N'hesitez plus !</p>
  </section>
</div>
</template>

<script>
import Search from "./Search.vue";
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
  components: {
    'Search': Search

  }
}
</script>

<style scoped>
hr {
  background: rgba(255,255,255,0.3);
  height: 55px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border: none;
  margin: 0;
}

.home-header {
  background: url('https://s3.amazonaws.com/tereza-landing/BG0.png') no-repeat center center;
  background-size: cover;
}


.home-categories {
  /* background: url('https://s3.amazonaws.com/tereza-landing/BG1.png') no-repeat top 0 left 0 fixed; */
  background: black;
  background-size: cover;
}

.home-categories .row .home-categoryCard {
  margin: 0 auto;
  padding: 15px;
}

.home-categories .row .home-categoryCard .img-responsive{
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}

.diviseur{
  width: 100%;
  height: 50px;
  background-color: #4D4F4E;
}

.home-selection {
  /* background: url('https://s3.amazonaws.com/tereza-landing/BG2.png') no-repeat center center fixed; */
  background: black;
  background-size: cover;
}

.home-selectionList {
  width: 100%;
}

.home-selectionCard {
  height: 320px;
  width: 80%; 
  background: cyan;
  border-radius: 5px;
  padding: 3px;
  margin: 0 auto;
}

.selectionCard-photo img{
  float: left;
  width: 35%;
}

.selectionCard-infos {
  float: right;
  width: 65%;
}
.selectionCard-coordinates, .selectionCard-name{
  background: black;
  border-radius: 5px;
  width: 80%;
  margin: 3px 10px;
  color: #fff;
}
.selectionCard-benefits{
  border-radius: 5px;
  width: 90%;
  margin: 0 auto;
  color: #fff;
  margin-right: 0;
}
.selectionCard-benefits .benefits-card {
  background: black;
  width: 30%;
  margin-right: 5px;
}
.selectionCard-benefits .benefits-card img {
  width: 60%;
}
.selectionCard-benefits .benefits-card p {
  font-size: 60%;
}
.selectionCard-benef {
  margin: 0 5px;
}

.selectionCard-benef img {
  width: 80px;
  height: 80px;
}

.selectionCard-benef p {
  max-width: 80px;
} 

.benefits {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: url('https://s3.amazonaws.com/tereza-landing/BG3.png') no-repeat 0 0 fixed;
  background-size: cover;
  min-height: 50vh;
  padding: 50px;
}

.home-benefitItem {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  margin: 0 5%;
}

.benefitIcon {
  display: flex;
  align-items: ;
  justify-content: center;
  flex-direction: column;
}

.home-benefitItem img {
  width: 100px;
  margin: 0 auto;
  background: black;
  border-radius: 5px;
}

.home-benefitItem p {
  text-align: center;
  font-family: Helvetica, sans-serif;
  color: #fff;
  font-size: 1.7rem;
}

.marketing {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: url('https://s3.amazonaws.com/tereza-landing/BG4.png') no-repeat center center fixed;
  background-size: cover;
  height: 700px;
  min-height: 60vh;
  font-fmaily: Helvetica, sans-serif;
}

.marketing p {
  color: #fff;
  font-family: Helvetica, sans-serif;
  font-size: 2.3rem;
} 

.marketing div p {
  font-size: 2.3rem;
}

h3 {
  color: #fff;
  font-size: 5rem;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
}

.blue, .pink {
  font-size: 2.5rem;
  padding: 10px;
}

@media screen and (max-width: 700px) {
  .blue, .pink {
    font-size: 1.5em;
  }

}

.blue {
  color: cyan;
}

.pink {
  color: pink;
}



</style>
