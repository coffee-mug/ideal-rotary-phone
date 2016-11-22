<template>
<div>
  <div class="top-bar">
    <img src="https://s3.amazonaws.com/tereza-landing/Landing+pack/Icones/Tereza-LOGOTYPE.png">
  </div>
  <div class="container tereza-main">
    <div class="row">
      <div class="col-md-12 col-xs-12">
        <h1>Tereza</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-xs-6">
        <div class="registration-box">
          <div class="registrationBox-head"></div>
          <div class="cyan">Comptes utilisateurs crees</br><strong>5</strong></div>
        </div>
      </div>
      <div class="col-md-6 col-xs-6">
        <div class="registration-box">
          <div class="registrationBox-check"></div>
          <div class="pink">Salons enregistres</br><strong>20</strong></div>
        </div>
      </div>
    </div>
    <div class="row col-title">
      <div class="col-md-6 col-xs-12">
        <div><h2 class="text-center left-title ">Pour les professionnels</h2></div>
      </div>
      <div class="col-md-6 col-xs-12">
        <div><h2 class="text-center right-title">Pour les utilisateurs</h2></div>
      </div>
    </div>
    <div class="row white-bg">
        <div class="col-md-12 col-xs-12">
            <h2 class="text-center">Prise de rendez-vous chez le coiffeur</h2>
            <div class="row picture-row">
              <div class="col-md-6 col-xs-12"><img src="https://s3.amazonaws.com/tereza-landing/Landing+pack/Images/Image-1.jpg" alt=""></div>
              <div class="col-md-6 col-xs-12">
                <p>Prenez Rendez-vous chez votre coiffeur préféré ou trouvez celui qui vous correspond grâce à Tereza.</p>
                <p>Plus besoin de décrocher votre téléphone, réservez directement dans l'agenda de votre coiffeur qui sera informé de votre rendez-vous (même le dimanche soir à 23h, oui oui !)</p>
              </div>
            </div>
            <div class="row picture-row">
              <div class="col-md-6 col-xs-12">
                <p>Besoin d'un avis ? <br> Vérifiez la qualité de prestation grâce aux notes laissées par les autres clients</p>
                <p>Finies les mauvaises surprises: Nos coiffeurs partenaires renseignent par eux-mêmes toutes les coupes proposées, vous savez à l'avance le prix et la durée.</p>
              </div>
              <div class="col-md-6 col-xs-12"><img src="https://s3.amazonaws.com/tereza-landing/Landing+pack/Images/Image-2-ZOOM.jpg" alt=""></div>
            </div>
            <div class="row form-row">
              <div class="col-md-12 col-xs-12">
                <form @submit.prevent="signup()">
                  <h3 class="text-center"> Vous m'interessez !</h3>
                  <div class="form-group">
                    <input v-model="prospect.email" placeholder="monsuper@mail.fr" @submit.prevent="signup()"/>
                    <button class="btn btn-primary" type="submit">GO!</button>
                    <small class="text-center">Promis, pas de SPAM!</small>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    <div class="row white-bg">
      <div class="col-md-12 col-xs-12">
          <h2 class="text-center">Pour les professionnels</h2>
          <div class="row picture-row">
            <div class="col-md-6 col-xs-12"><img src="https://s3.amazonaws.com/tereza-landing/Landing+pack/Images/Image-3.jpg" alt=""></div>
            <div class="col-md-6 col-xs-12">
              <p>Las d'être interrompu plusieurs fois par jour pour répondre au téléphone ? </p>
              <p>Tereza met en ligne votre calendrier pour que les utilisateurs puissent prendre rendez-vous sans vous déranger.</p>
            </div>
          </div>
          <div class="row picture-row">
            <div class="col-md-6 col-xs-12">
              <p>Notre grille de réservation à choix cumulatifs a été conçue en collaboration avec des coiffeurs afin d'offrir davantage qu'une simple réservation :</p>
              <p>Tereza réserve la durée exacte pour que la coupe que votre client souhaite réaliser.</p>
            </div>
            <div class="col-md-6 col-xs-12"><img src="https://s3.amazonaws.com/tereza-landing/Landing+pack/Images/Image-4-ZOOM.jpg" alt=""> </div>
          </div>
          <div class="row picture-row">
            <div class="col-md-6 col-xs-12"><img src="https://s3.amazonaws.com/tereza-landing/Landing+pack/Images/Image-5.jpg" alt=""></div>
            <div class="col-md-6 col-xs-12">
              <p>Tereza souhaite vous faire gagner du temps et vous donner la possibilité de vous recentrer sur votre coeur de métier.</p>
            </div>
          </div>
          <div class="row form-row">
            <div class="col-md-12 col-xs-12">
              <form @submit.prevent="signup()">
                <h3 class="text-center"> Vous m'interessez !</h3>
                <div class="form-group">
                  <input v-model="prospect.email" placeholder="monsuper@mail.fr"/>
                  <button class="btn btn-primary" type="submit">GO!</button>
                  <small class="text-center">Promis, pas de SPAM!</small>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import moment from 'moment';


export default {
  data() {
    return {
      prospect_model: {
        store_name: 'LandingPage',
        address: '',
        address_details: '',
        city: '',
        postal_code: '',
        telephone: '',
        email: '',
        contact_name: '',
        contact_number: '',
        contact_comments: 'Acquis depuis la landing page',
        created_at: ''
      },
      prospect: Object.assign({}, this.prospect_model, { store_name: 'Landing page', contact_comments: 'Acquis depuis la landing', created_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}),
    }
  },
  methods: {
    signup() {
        moment.locale('fr');

        if (this.email !== "") {
          this.$http.post('/prospection',
            this.prospect
          ).then( (response) => {
            // success
            console.log("SUCCESS!: ", response.body);
            this.prospect = Object.assign({}, this.prospect_model, { created_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") });
            this.email = "";
          }, (response) => {
            // error...
            console.log("ERROR!: ", response.body);
          });
        }
    }
  },
}
</script>

<style>
@font-face {
  font-family: MarketDeco;
  src: url(Market_Deco.woff);
}

#app {
  background: url('https://s3.amazonaws.com/tereza-landing/Landing+pack/Images/Paris-Back.jpg') 0% 0%; 
  background-size: 100vw 3000px;
}

h1, h2, h3 {
  font-family: MarketDeco;
}

h1 {
  font-size: 75px;
}

h2 {
  font-size: 3em;
}

h3 {
  color: pink;
}

p {
  text-align: center;
}

.registration-box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 15vw;
  max-width: 40vw;
  min-height: 5vh;
  margin: 3vh auto;
  font-family: MarketDeco;
  background: #000;
  height: 7vh;
  border-radius: 5px;
  padding: 0 10px;
}

@media screen and (min-width: 360px) and (max-width: 768px) {
  .registration-box {
    width: 30vw;
  }

  .registrationBox-check, .registrationBox-check {
    width: 7vw;
    height: 7vw;
    margin: 0 30px;
  }
}

.registrationBox-check {
  width: 50px;
  height: 50px;
  background-color: pink;
  -webkit-mask-box-image: url('https://s3.amazonaws.com/tereza-landing/Landing+pack/Icones/Arrow.png'); 
  margin: 0 20px;
}

.registrationBox-head {
  width: 50px;
  height: 50px;
  background-color: cyan;
 -webkit-mask-box-image: url('https://s3.amazonaws.com/tereza-landing/Landing+pack/Icones/head.png');
}

.pink {
  color: #fff;
  text-align: right;
} 

.pink strong {
  color: pink;
  font-size: 28px;
}

.cyan {
  text-align: right;
  color: #fff;
}

.cyan strong {
  color: cyan;
  float: right;
  font-size: 28px;
}

.col-title h2 {
  background: #000;
  padding: 10px 5px;
  border-radius: 5px;
  margin: 10px 0;
}

.col-title .left-title {
  color: cyan;
}

.col-title .right-title {
  color: pink;
}

.white-bg {
  background: #eee;
  border-radius: 5px;
  margin-top: 20px;
  padding: 15px 0;
}

.white-bg p {
  color: rgba(0,0,0,0.6);
  font-size: 15px;
  margin-top: 35px;
  padding: 0 50px;
}

img {
  width: 28vw;
  max-width: 80vw;
  border-radius: 5px;
  padding: 25px 0;
}

@media screen and (min-width: 360px) and (max-width: 780px) {
  img {
    width: 50vw;
  }
}

.picture-row, .form-group {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.top-bar {
  width: 100vw;
  height: 8vh;
  background: #000;
}

.top-bar img {
  position: absolute;
  top: 0;
  left: 15px;
  width: 70px;
  padding: 5px 0;
}

form input {
  border: #ddd;
  height: 3vh;
  margin: 0 auto;
}

.form-group {
  flex-direction: column;
  width: 170px;
}

form button {
  height: 3vh;
  width: 170px;
}

.btn .btn-primary {
  border-radius: 0;
}


</style>
