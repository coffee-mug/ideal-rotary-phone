<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="wrapper container">
      <router-view></router-view>
    </div>
    <!-- Footer of the page !-->
    <footer class="footer">
      <div class="container">
        <div class="right-links">
            <router-link to="home">Parametre des cookies</router-link>
            <router-link to="home">Cookies</router-link>
            <router-link to="home">Declaration de confidentialite</router-link>
            <router-link to="home">Condition d'utilisation</router-link>
            <router-link to="home">Responsable du site</router-link>
            <div class="text-footer">2017 Tereza FR</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from './final/Navbar.vue';
export default {
  
  name: 'app',
  data () {
    return {
      msg: "",
      idTest: '1',
    }
  },
  components: {
    'Navbar': Navbar
  }
}
</script>

<style>
@font-face {
    font-family: "MarketDeco";
    src: url("https://s3.amazonaws.com/tereza-landing/Home/Market_Deco.woff") format('woff');
}

#app {
  font-family: MarketDeco;
  background: black;
}

.logo h1 {
 font-size: 4.5em; 
  text-align: center;
}

.logo img {
  display: block;
  min-width: 300px;
  width: 300px;
  margin: 0 auto;
}
body {
  background: none;
}

.footer {
    height: 80px;
    background-color: black;
}
.footer .container {
    width: 100%;
}
.footer .container .right-links {
  margin-top: 10px;
  float: right;
}
.footer .container .right-links a{
  color: #add7d6;
  margin-right: 24px;
}
.footer .container .right-links a:last-of-type{
  margin-right: 0;
}
.footer .container .right-links .text-footer{
  color: white;
  text-align: right;
}

.wrapper{
  margin-top:50px;
}
</style>
