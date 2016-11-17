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
            <label for="storeName">Nom</label>
            <input v-model="storeName"  class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="address">Adresse</label>
            <input v-model="address" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="addressDetails">Complement d'adresse</label>
            <input v-model="addressDetails" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="city">Ville</label>
            <input v-model="city" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="postalCode">Code postal</label>
            <input v-model="postalCode" type="text" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="email" type="email" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="telephone">Telephone</label>
            <input v-model="telephone" type="tel" class="form-control" placeholder="">
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


export default {
	data() {
		return {
      storeName: '',
      address: '',
      addressDetails: '',
      city: '',
      postalCode: '',
      telephone: '',
      email: ''
		}
	},
	methods: {
		signup() {
        // French locale
        moment.locale('fr');

				this.$http.post('/prospection', { 
          storeName: this.storeName, 
          address: this.address,
          addressDetails: this.address_details,
          city: this.city,
          postalCode: this.postalCode,
          telephone: this.telephone,
          email: this.email,
          created_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        }).then( (response) => {
					// success
          console.log("SUCCESS!: ", response.body);
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
/*
@font-face {
  font-family: MarketDeco;
  src: url(Market_Deco.woff);
}
*/

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
  padding: 40px;
  border: 8px solid transparent;
  -webkit-border-image:-webkit-linear-gradient(top right, rgb(247,177,60) 40%,rgb(195,152,140) 40%, rgb(195,152,140) 60%, rgb(75,168,163) 60% ); 
  border-image-slice: 1;
  min-width: 25vw;
  background: rgb(178,178,178);
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
  margin-top: 5vh;
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
  width: 20vw;
  height: 5vh;
  border-right: 5vh solid rgb(247,177,60);
  border-bottom: 5vh solid rgb(195,152,140);  
  top: 0;
  right: 25vw;
}

</style>
