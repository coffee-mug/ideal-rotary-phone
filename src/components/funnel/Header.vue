<template>
    <section class="home-header">
        <div class="row">
            <div class="col-md-12 xs-12">
                <div class="home-header-title">
                    <h1 class="text-center">Tereza</h1>
                    <h2 class="text-center">Simplifiez-vous la vie !</h2>
                </div>
                <div class="home-header-search">
                    <Search v-on:search(></Search> 
                </div>
            </div>
        </div>
    </section>
</template>   

<script>
import Search from "../final/Search.vue";
export default {
  data() {
    return {};
  },
    components: {
    'Search': Search
  },
}
</script>

<style>
.home-header {
  background: url('https://s3.amazonaws.com/tereza-landing/BG0.png') no-repeat center center;
  background-size: cover;
  height: 340px;
}
.home-header .home-header-title h1{
  margin-top: 0px;
}
.home-header-search{
    width: 60%;
    margin: 0 auto;
}
</style>
