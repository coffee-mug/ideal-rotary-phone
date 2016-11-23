<template>
<div class="landing-container-alt">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-xs-12">
        <img src="https://s3.amazonaws.com/tereza-landing/Landing+pack/Icones/Tereza-LOGOTYPE.png" class="img-responsive logo" alt="logo">
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-xs-12">
        <h1 class="text-center cyan">Tereza, la plateforme qui vous rapproche !</h1>
        <h2 class="text-center pink">Deja inscrits</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-xs-6">
        <img src="https://s3.amazonaws.com/tereza-landing/Landing+pack/compteur_utilisateur.png" alt="" class="img-responsive center-block circle">
        <p class="customers-count">15</p>
        <h3 class="text-center">Utilisateurs</h3>
      </div>
      <div class="col-md-6 col-xs-6">
        <img src="https://s3.amazonaws.com/tereza-landing/Landing+pack/compteur_salon.png" alt=""class="img-responsive center-block circle">
        <p class="customers-count">20</p>
        <h3 class="text-center">Salons/Coiffeurs</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-xs-6">
        <h3 class="text-center cyan title-blackBg">Pour les utilisateurs</h3>
      </div>
      <div class="col-md-6 col-xs-6">
        <h3 class="text-center pink title-blackBg">Pour les professionnels</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <section class="offer-detail">
        <h4 class="text-center">Prenez rendez-vous</h4>
          <img src="https://s3.amazonaws.com/tereza-landing/Landing+pack/pic-left.png" class="img-responsive center-block" alt="">
          <p>Réservez en ligne chez le coiffeur qui est fait pour vous.</p>
          <p>Accédez aux agendas en continu (même le dimanche soir à 23h)</p>
          <p>Vérifiez la qualité du coiffeur grâce aux avis laissés.</p>
          <p>Découvrez les prestations et les prix au moment de les réserver.</p>
        </section>
      </div>
      <div class="col-md-6 col-xs-12">
        <section class="offer-detail">
        <h4 class="text-center">Planifiez tout</h4>
          <img src="https://s3.amazonaws.com/tereza-landing/Landing+pack/pic-right.png" class="img-responsive center-block" alt="">
          <p>Ne soyez plus interrompu par la sonnerie du téléphone.</p>
          <p>Mettez votre planning en ligne pour que vos clients réservent.</p>
          <p>La plage horaire est réservée selon la prestation demandée par le client.</p>
          <p>La grille de réservation a été conçue en collaboration avec des coiffeurs.</p>
        </section>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <h3 class="text-center cyan title-blackBg bottom-cta">Tentez l'experience</h3>
        <form class="form-inline" @submit.prevent="signup()" >
          <div class="form-group">
            <input class="form-control" v-model="email" placeholder="majolieadressse@amoi.fr">
            <select class="form-control" v-model="role">
              <option>Coiffeur</option>
              <option>Utilisateur</option>
            </select>
            <button class="btn btn-primary" type="submit">Je vous suis !</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="bottom-bar"></div>
</div>
</template>

<script>
import moment from 'moment';

var prospect_model = {
    store_name: '',
    address: '',
    address_details: '',
    city: '',
    postal_code: '',
    telephone: '',
    email: '',
    contact_name: '',
    contact_number: '',
    contact_comments: '',
    created_at: ''
  };

export default {
  data() {
    return {
      email: '',
      role: ''
    }  
  },
  methods: {
    signup() {
        moment.locale('fr');
        if (this.email == '' || this.role == '')  {
          throw new Error('email and role field must be filled');
        };

        var prospect = Object.assign({}, prospect_model, { created_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"), email: this.email, contact_comments: this.role });

        console.log(prospect); 

        this.$http.post('/prospection',
          prospect
        ).then( (response) => {
          // success
          console.log("SUCCESS!: ", response.body);
          this.email = this.role = ''
          window.localStorage.setItem('id', response.body.saved.id);
        }, (response) => {
          // error...
          console.log("ERROR!: ", response.body);
        });
      
    }
  }
}

</script>

<style scoped>
@font-face {
  font-family: MarketDeco;
  src: url(Market_Deco.woff);
}

.landing-container-alt {
  background: url('https://s3.amazonaws.com/tereza-landing/Landing+pack/fond.png') 10% 0px fixed;
  background-size: cover;
}

.logo {
  height: 80px;
  margin: 25px auto;
}

h1, h2, h3, h4 {
  font-family: MarketDeco;
}

h3 {
  color: #fff;
  font-size: 3rem;
}

h4 {
  font-size: 2.8rem;
  padding: 20px 0;
}

.cyan {
  color: #bfecee;
}

.pink {
  color: #eecdc0;
}

.circle {
  position: relative;
  height: 15vw;
}

.title-blackBg {
  padding: 10px 5px;
  background: black;
  border-radius: 10px;
}

section.offer-detail {
  background: rgba(255,255,255,0.6);
  border-radius: 10px;
  padding: 5px;
  min-height: 150px;
  margin-top: 50px;
}

.offer-detail img {
  width: 98%;
}

.offer-detail p {
  padding: 5px;
  color: #000;
  font-size: 1.6rem;
}

.bottom-cta {
  margin-top: 50px;
}

.bottom-bar {
  width: 99.2vw;
  background: #000;
  height: 10vh;
}

.customers-count {
  position: absolute;
  left: 43%;
  top: 30%;
  font-size: 8rem;
  text-align: center;
  font-family: MarketDeco;
  font-weight: bold;
}

@media screen and (min-width: 360px) and (max-width: 737px) {
  .customers-count {
    font-size: 3.5rem;
    top: 22%;
    left: 45%;
  }
}

form {
  margin: 15px 0;
}

button {
  font-family: MarketDeco;
  background-color: cyan;
  color: #fff;
  width: 100%;
  margin-top: 15px;
  font-size: 2rem;
  transition: background 0.3s ease-in, color 0.4s ease-in;
  border: transparent;
}

button:hover {
  background: #fff;
  color: cyan;
}

</style>
