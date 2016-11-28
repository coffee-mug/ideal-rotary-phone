<template>
<div>
<div class="logo-bar"></div>
<div class="container">
  <div class="row">
    <div class="col-md-6 col-md-offset-3 col-xs-12">
        <form @submit.prevent="signup()" class="prospection">
          <h1> Inscription </h1>
          <div v-if="error_message">
            {{ error_message }}
          </div>
          <div class="form-group">
            <label for="storeName">Nom du Salon</label>
            <input id="storeName" v-model="prospect.store_name"  class="form-control" placeholder="Changer d'Hair">
          </div>
          <div class="form-group">
            <label for="address">Adresse</label>
            <input v-model="prospect.address" id="address" class="form-control" placeholder="12 rue Balaz">
          </div>
          <div class="form-group">
            <label for="addressDetails">Complement d'adresse</label>
            <input v-model="prospect.address_details" id="addressDetails" class="form-control" placeholder="Bat, res, ...">
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-md-6 col-xs-6">
                <label for="city">Ville</label>
                <input v-model="prospect.city" id="city" class="form-control" placeholder="Paris">
              </div>
              <div class="col-md-6 col-xs-6">
                <label for="postalCode">Code Postal</label>
                <input v-model="prospect.postal_code" id="postalCode" class="form-control" placeholder="75000">
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col-md-6 col-xs-6">
                <label for="email">Email</label>
                <input v-model="prospect.email" type="email" id="email" class="form-control" placeholder="contact@monsalon.fr">
              </div>
              <div class="col-md-6 col-xs-6">
                <label for="telephone">Téléphone</label>
                <input v-model="prospect.telephone" type="tel" id="telephone" class="form-control" placeholder="0109090909">
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="contactName">Contact principal</label>
            <input v-model="prospect.contact_name" id="contactName" class="form-control" placeholder="Jacques Dessange">
          </div>
          <div class="form-group">
            <label for="contactPhone">Telephone du Contact</label>
            <input v-model="prospect.contact_number" type="tel" id="contactPhone" class="form-control" placeholder="0609090909">
          </div>
          <div class="form-group">
            <label for="comments">Commentaires</label>
            <textarea v-model="prospect.contact_comments" id="comments" class="form-control" placeholder="" />
          </div>
          <button @click.prevent="signup()" type="submit" class="submit-btn">S'inscrire</button>
        </form>
    </div>
  </div>
</div>
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
  }

export default {
	data() {
		return {
      prospect: Object.assign({}, prospect_model, { created_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") }),
      error_message: '',
		}
	},
	methods: {
		signup() {
        moment.locale('fr');

        this.$http.post('/prospection',
          this.prospect
        ).then( (response) => {
          // success
          console.log("SUCCESS!: ", response.body);
          this.prospect = Object.assign({}, prospect_model, { created_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") });
          window.localStorage.setItem('id', response.body.saved.id);
        }, (response) => {
          // error...
          console.log("ERROR!: ", response.body);
        });
		},
	}
}

</script>

<style scoped> 
/*
  blue: rgb(75,168,163);
  grey: rgb(178,178,180);
  brown: rgb(195,152,140); 
  orange: rgb(247,177,60);
*/
@font-face {
  font-family: MarketDeco;
  src: url(Market_Deco.woff);
}

#app > div {
  background-color: #000;
}

form.prospection {
  padding: 30px;
  border: 8px solid transparent;
  -webkit-border-image:-webkit-linear-gradient(top right, rgb(247,177,60) 40%,rgb(195,152,140) 40%, rgb(195,152,140) 60%, rgb(75,168,163) 60% ); 
  border-image-slice: 1;
  background: rgb(178,178,178);
  margin-bottom: 5vh;
}

form.prospection h1 {
  font-family: MarketDeco;
  text-align: center;
  color: #eee;
  font-weight: bold;
  font-size: 2.1em;
  margin: 5px 0;
}


form.prospection button.submit-btn {
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  min-width: 24.5vw;
  padding: 7px;
  margin-top: 2vh;
  background-color: #04030F;
  border: 1px solid transparent;
  -webkit-border-image:-webkit-linear-gradient(top right, rgb(247,177,60) 40%,rgb(195,152,140) 40%, rgb(195,152,140) 60%, rgb(75,168,163) 60% ); 
  border-image-slice: 1;
  font-weight: bold;
  color: #fff;
  transition: color ease-in-out 0.2s, background-color ease-in-out 0.2s;
  text-transform: uppercase;
}

form.prospection button.submit-btn:hover {
  background-color: rgb(75,168,163);
  -webkit-border-image: none;
}

.logo-bar {
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 5vh;
  background: -webkit-linear-gradient(-40deg, rgb(75, 168, 163) 33%, rgb(195,152,140) 33%, rgb(195,152,140) 67%, rgb(247,177,60) 67% ); 
  margin-bottom: 5vh;
}

.logo-bar:after {
  content: '';
  position: absolute;
  width: 25vw;
  height: 4.99vh;
  border-right: 5vh solid rgb(247,177,60);
  border-bottom: 5vh solid rgb(195,152,140);  
  top: 0;
  right: 25vw;
}

</style>
