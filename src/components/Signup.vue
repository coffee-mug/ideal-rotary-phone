<template>
<div class="container">
  <div class="row">
    <div class="col-md-12 col-xs-12">
			<form @submit.prevent="signup()">
				<div class="form-group">
					<label for="email">Email address</label>
					<input v-model="email"  class="form-control" placeholder="Email">
				</div>
				<div class="form-group">
					<label for="firstName">First Name</label>
					<input v-model="firstName" class="form-control" placeholder="First Name">
				</div>
				<div class="form-group">
					<label for="firstName">Last Name</label>
					<input v-model="lastName" class="form-control" placeholder="First Name">
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input v-model="password" type="password" class="form-control" placeholder="Password">
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">Password Confirmation</label>
					<input v-model="passwordConfirmation" type="password" class="form-control" placeholder="Confirm password">
				</div>
				<button @click.prevent="signup()" type="submit" class="btn btn-default">Submit</button>
			</form>
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
