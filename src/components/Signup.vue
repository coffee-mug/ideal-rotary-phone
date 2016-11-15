<template>
<div class="container">
  <div class="row">
    <div class="col-md-6 col-md-offset-3 col-xs-12">
      <div class="form-container">
        <form @submit.prevent="signup()">
          <div class="form-group">
            <label for="email">Email address</label>
            <input v-model="email"  class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input v-model="firstName" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="firstName">Last Name</label>
            <input v-model="lastName" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password Confirmation</label>
            <input v-model="passwordConfirmation" type="password" class="form-control" placeholder="">
          </div>
          <button @click.prevent="signup()" type="submit" class="submit-btn">Submit</button>
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
			email: '',
			firstName: '',
			lastName: '',
			password: '',
			passwordConfirmation: ''
		}
	},
	methods: {
		signup() {
			if (this.email && this.password === this.passwordConfirmation) {
				this.$http.post('/signup', { emailAddress: this.email, firstName: this.firstName, lastName: this.lastName, password: this.password }).then( (response) => {
					// success
          console.log("SUCCESS!: ", response.body);
          window.localStorage.setItem('id', response.body.saved.id);
          this.$router.push('/admin/salon');
				}, (response) => {
					// error...
          console.log("ERROR!: ", response.body);
				});	
			}
		},

	}
}

</script>

<style scoped>
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
  background-color: #432CC9;
  border-color: transparent;
}

</style>
