<template>
<div class="container">
  <div class="row">
    <div class="col-md-6 col-md-offset-3 col-xs-12">
      <div class="form-container">
        <form @submit.prevent="signup()">
          <h1> S'inscrire !</h1>
          <div class="form-group">
            <label for="storeName">Nom</label>
            <input v-model="storeName"  class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="address">Adresse</label>
            <input v-model="address" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="addressDetails">Complément d'adresse</label>
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
            <label for="telephone">Téléphone</label>
            <input v-model="telephone" type="tel" class="form-control" placeholder="">
          </div>
          <button @click.prevent="signup()" type="submit" class="submit-btn">GO !</button>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
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
				this.$http.post('/prospection', { 
          storeName: this.storeName, 
          address: this.address,
          addressDetails: this.address_details,
          city: this.city,
          postalCode: this.postalCode,
          telephone: this.telephone,
          email: this.email
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
  padding: 40px;
  border: 2px solid transparent;
  -webkit-border-image: -webkit-linear-gradient(top right, #2E294E 0%, #F94141 100%);
  border-image-slice: 1;
  box-shadow: 0 0px 5px #432CC9;
  min-width: 25vw;
}

form h1 {
  font-family: 'Sacramento', cursive;
  margin: 15px 0;
}

.scissor {
  font-size: 48px;
  color: #FFDE24;
  border: 3px solid rgba(4,3,15,0.8);
  padding: 25px;
  border-radius: 50px;
}

.form-control {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid rgba(255,255,255,0.33);
  transition: border-color ease-in-out 0.2s;
}

.form-control:focus {
  border-color:#0197F6;
  box-shadow: none;
}

input.form-control {
  border-radius: 0;
  background-color: rgba(4,3,15,0.65);
  color: rgba(255,255,255,0.7);
}

label {
  color: rgba(255,255,255,0.7);
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
  -webkit-border-image: -webkit-linear-gradient(45deg, #2E294E, #F94141);
  border-image-slice: 1;
  font-weight: bold;
  color: #fff;
  transition: color ease-in-out 0.2s, background-color ease-in-out 0.2s;
}

.submit-btn:hover {
  background-color: #D7263D;
  border-color: transparent;
}

</style>
