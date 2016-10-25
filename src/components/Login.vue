<template>
<div id="app">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-xs-12">
        <form @submit.prevent>
          <div class="form-group">
            <label for="emailInput">Email</label>
            <input id="emailInput" v-model="email" />
          </div>
          <div class="form-group">
            <label for="passwordInput">Password</label>
            <input id="passwordInput" v-model="password" />
          </div>
            <button @click.prevent="login()"> Login </button>
            <button @click.prevent="logout()"> Logout </button>
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
      password: ''
    }
  },
  methods: {
    login() {
      this.$http.post('/login', { email: this.email, password: this.password }).then( (res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
    },
    logout() {
      this.$http.get('/logout').then( (res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
    }
  }
}

</script>
