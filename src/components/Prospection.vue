<template>
<div class="container prospection-top-bar">
  <div class="row">
    <div class="col-md-12 col-xs-12">
      <div class="logo-bar">
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 col-md-offset-3 col-xs-12">
      <div class="form-container">
        <form @submit.prevent="signup()">
          <h1> Inscription </h1>
          <div class="form-group">
            <label for="storeName">Nom du Salon</label>
            <input v-model="prospect.store_name"  class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="address">Adresse</label>
            <input v-model="prospect.address" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="addressDetails">Complément d'adresse</label>
            <input v-model="prospect.address_details" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="city">Ville</label>
            <input v-model="prospect.city" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="postalCode">Code postal</label>
            <input v-model="prospect.postal_code" type="text" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="prospect.email" type="email" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="telephone">Téléphone du Salon</label>
            <input v-model="prospect.telephone" type="tel" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="telephone">Contact principal</label>
            <input v-model="prospect.contact_name" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="telephone">Téléphone du Contact</label>
            <input v-model="prospect.contact_number" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="telephone">Commentaires</label>
            <input v-model="prospect.contact_comments" class="form-control" placeholder="">
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
      prospect: Object.assign({}, prospect_model, { created_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") })
		}
	},
	methods: {
		signup() {
        // French locale
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

<style> 
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

body {
  background-color: #04030F;
  font-family: 'Lato', sans-serif;
}

.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

form {
  font-family: MarketDeco;
  padding: 30px;
  border: 8px solid transparent;
  -webkit-border-image:-webkit-linear-gradient(top right, rgb(247,177,60) 40%,rgb(195,152,140) 40%, rgb(195,152,140) 60%, rgb(75,168,163) 60% ); 
  border-image-slice: 1;
  min-width: 25vw;
  background: rgb(178,178,178);
  margin-bottom: 5vh;
  position: fixed;
}

form h1 {
  font-family: MarketDeco;
  text-align: center;
  color: #eee;
  font-weight: bold;
  font-size: 2.1em;
  margin: 15px 0;
}

.form-control {
  font-family: Verdana, sans-serif;
  font-size: 1.1em;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid rgba(255,255,255,0.33);
  transition: border-color ease-in-out 0.2s;
}

.form-control:focus {
  border: 2px solid #0197F6;
  box-shadow: none;
}

input.form-control {
  border-radius: 0;
  background-color: rgba(255, 255, 255,0.65);
  color: #333;
}

label {
  color: #333;
}

.submit-btn {
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

.submit-btn:hover {
  background-color: rgb(75,168,163);
  -webkit-border-image: none;
}

.logo-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 5vh;
  background: -webkit-linear-gradient(-40deg, rgb(75, 168, 163) 33%, rgb(195,152,140) 33%, rgb(195,152,140) 67%, rgb(247,177,60) 67% ); 
}

.prospection-top-bar:after, .prospection-top-bar:before {
  position: fixed;
  width: 19vw;
  height: 5vh;
  border-right: 5vh solid rgb(247,177,60);
  border-bottom: 5vh solid rgb(195,152,140);  
  top: 0;
  right: 25vw;
}

</style>
