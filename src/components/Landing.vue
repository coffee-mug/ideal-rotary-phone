<template>
<div class="container tereza-main">
  <div class="row">
    <div class="col-md-12 col-xs-12">
      <h1>Tereza</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 col-xs-6">
      <div class="registration-box">
        <div class="registrationBox-head"></div>
        <div class="cyan">Comptes utilisateurs crees</br><strong>250</strong></div>
      </div>
    </div>
    <div class="col-md-6 col-xs-6">
      <div class="registration-box">
        <div class="registrationBox-check"></div>
        <div class="pink">Salons enregistres</br><strong>423</strong></div>
      </div>
    </div>
  </div>
  <div class="row col-title">
    <div class="col-md-6 col-xs-6">
      <div><h2 class="text-center left-title ">Pour les professionnels</h2></div>
    </div>
    <div class="col-md-6 col-xs-6">
      <div><h2 class="text-center right-title">Pour les utilisateurs</h2></div>
    </div>
  </div>
  <div class="row white-bg">
      <div class="col-md-12 col-xs-12">
          <h2 class="text-center">Prise de rendez-vous chez le coiffeur</h2>
          <div class="row picture-row">
            <div class="col-md-6 col-xs-12"><img src="https://s3.amazonaws.com/tereza-landing/Landing+pack/Images/Image-1.jpg" alt=""></div>
            <div class="col-md-6 col-xs-12">
              <p>Prenez Rendez-vous chez votre coiffeur préféré ou trouvez celui qui vous correspond grâce à Tereza.</p>
              <p>Plus besoin de décrocher votre téléphone, réservez directement dans l'agenda de votre coiffeur qui sera informé de votre rendez-vous (même le dimanche soir à 23h, oui oui !)</p>
            </div>
          </div>
          <div class="row picture-row">
            <div class="col-md-6 col-xs-12">
              <p>Besoin d'un avis ? <br> Vérifiez la qualité de prestation grâce aux notes laissées par les autres clients</p>
              <p>Finies les mauvaises surprises: Nos coiffeurs partenaires renseignent par eux-mêmes toutes les coupes proposées, vous savez à l'avance le prix et la durée.</p>
            </div>
            <div class="col-md-6 col-xs-12"><img src="https://s3.amazonaws.com/tereza-landing/Landing+pack/Images/Image-2-ZOOM.jpg" alt=""></div>
          </div>
      </div>
    </div>
  <div class="row white-bg">
    <div class="col-md-12 col-xs-12">
        <h2 class="text-center">Pour les professionnels</h2>
        <div class="row picture-row">
          <div class="col-md-6 col-xs-12"><img src="https://s3.amazonaws.com/tereza-landing/Landing+pack/Images/Image-3.jpg" alt=""></div>
          <div class="col-md-6 col-xs-12">
            <p>Besoin d'un avis ? <br> Vérifiez la qualité de prestation grâce aux notes laissées par les autres clients</p>
            <p>Finies les mauvaises surprises: Nos coiffeurs partenaires renseignent par eux-mêmes toutes les coupes proposées, vous savez à l'avance le prix et la durée.</p>
          </div>
        </div>
        <div class="row picture-row">
          <div class="col-md-6 col-xs-12">
            <p>Besoin d'un avis ? <br> Vérifiez la qualité de prestation grâce aux notes laissées par les autres clients</p>
            <p>Finies les mauvaises surprises: Nos coiffeurs partenaires renseignent par eux-mêmes toutes les coupes proposées, vous savez à l'avance le prix et la durée.</p>
          </div>
          <div class="col-md-6 col-xs-12"><img src="https://s3.amazonaws.com/tereza-landing/Landing+pack/Images/Image-4-ZOOM.jpg" alt=""> </div>
        </div>
        <div class="row picture-row">
          <div class="col-md-6 col-xs-12"><img src="https://s3.amazonaws.com/tereza-landing/Landing+pack/Images/Image-5.jpg" alt=""></div>
          <div class="col-md-6 col-xs-12">
            <p>Besoin d'un avis ? <br> Vérifiez la qualité de prestation grâce aux notes laissées par les autres clients</p>
            <p>Finies les mauvaises surprises: Nos coiffeurs partenaires renseignent par eux-mêmes toutes les coupes proposées, vous savez à l'avance le prix et la durée.</p>
          </div>
        </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {

    }
  }

}
</script>

<style scoped>
@font-face {
  font-family: MarketDeco;
  src: url(Market_Deco.woff);
}


/*
#app {
  background: url('https://s3.amazonaws.com/tereza-landing/Landing+pack/Images/Paris-Back.jpg') 0% 0%; 
  background-size: 100vw 2400px;
}
*/

h1, h2 {
  font-family: MarketDeco;
}

h1 {
  font-size: 75px;
}

p {
  text-align: center;
}

.registration-box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 15vw;
  max-width: 40vw;
  min-height: 5vh;
  margin: 3vh auto;
  font-family: MarketDeco;
  background: #000;
  height: 7vh;
  border-radius: 5px;
  padding: 0 10px;
}

@media screen and (min-width: 360px) and (max-width: 768px) {
  .registration-box {
    width: 30vw;
  }

  .registrationBox-check, .registrationBox-check {
    width: 7vw;
    height: 7vw;
    margin: 0 30px;
  }
}

.registrationBox-check {
  width: 3vw;
  height: 3vw;
  max-width: 10vw;
  background-color: pink;
  -webkit-mask-box-image: url('https://s3.amazonaws.com/tereza-landing/Landing+pack/Icones/Arrow.png'); 
  margin: 0 20px;
}

.registrationBox-head {
  width: 3vw;
  max-width: 10vw;
  height: 3vw;
  background-color: cyan;
 -webkit-mask-box-image: url('https://s3.amazonaws.com/tereza-landing/Landing+pack/Icones/head.png');
}

.pink {
  color: #fff;
  text-align: right;
} 

.pink strong {
  color: pink;
  font-size: 28px;
}

.cyan {
  text-align: left;
  color: #fff;
}

.cyan strong {
  color: cyan;
  float: right;
  font-size: 28px;
}

.col-title h2 {
  background: #000;
  padding: 2px 5px;
  border-radius: 5px;
  margin: 10px 0;
  max-width: 40vw;
}

.col-title .left-title {
  color: cyan;
}

.col-title .right-title {
  color: pink;
}

.white-bg {
  background: #eee;
  border-radius: 5px;
  margin-top: 20px;
  padding: 15px 0;
}

.white-bg p {
  color: rgba(0,0,0,0.6);
  font-size: 15px;
  margin-top: 35px;
  padding: 0 50px;
}

img {
  width: 30vw;
  max-width: 35vw;
  border-radius: 5px;
  padding: 25px 0;
}

.picture-row {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
