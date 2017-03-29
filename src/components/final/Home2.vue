<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-12.col-xs-12 nopad">

    </div>
  </div>
  <div class="row">
    <div class="col-md-12 col-xs-12 nopad">
      <section class="categories">
        <h2>Nos categories</h2>
        <div class="categories-list">
          <div class="categories-card">
            <img src="https://s3.amazonaws.com/tereza-landing/Home/Categorie-Homme.png" alt="">
            <p>HOMMES</p>
          </div>
          <div class="categories-card">
            <img src="https://s3.amazonaws.com/tereza-landing/Home/Categorie-Femmes.png" alt="">
            <p>FEMMES</p>
          </div>
          <div class="categories-card">
            <img src="https://s3.amazonaws.com/tereza-landing/Home/Categorie-barbier.png" alt="">
            <p>BARBIERS</p>
          </div>
          <div class="categories-card">
            <img src="https://s3.amazonaws.com/tereza-landing/Home/Categorie-Lissage.png" alt="">
            <p>A DOMICILE</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {}
  },
}

</script>


<style>
/*** utils ***/
.nopad {
  padding: 0;
}

.categories {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url('https://s3.amazonaws.com/tereza-landing/BG1.png') center center fixed;
  background-size: cover;
  min-height: 25vh;
  margin: 0 auto;
}

.categories h2 {
  text-align: center;
  color: #fff;
}

.categories-list {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
}

.categories-card {
  display: inline-flex;
  flex-direction: column;
}

.categories-card p {
  text-align: center;
  color: #fff;
}

.categories-card img {
  height: 100%;
}

</style>
