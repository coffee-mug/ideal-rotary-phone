<template>
<div class="coiffeur">
  <div class="coiffeur-header">
    <div class="coiffeur-avatar">
      <img :src="photo_link" />
      <ul class="coiffeur-socialList">
        <li><img src="https://s3.amazonaws.com/tereza-landing/Home/FB-White.png" alt=""></li>
        <li><img src="https://s3.amazonaws.com/tereza-landing/Home/Instagram-White.png" alt=""></li>
        <li><img src="https://s3.amazonaws.com/tereza-landing/Home/Pinterest-logo.png" alt=""></li>
        <li><img src="https://s3.amazonaws.com/tereza-landing/Home/Twitter-White.png" alt=""></li>
      </ul>
    </div>
    <div class="coiffeur-headerPicture"></div>
    <div class="coiffeur-headerMap">
      {{ geocode }}
      <gmap-map :center="geocode" :zoom="12"></gmap-map>
    </div>
  </div>
  <div class="coiffeur-description">
    <div class="coiffeur-coordinates">
      <p>{{name}}</p>
      <p></p>
      <p>{{ street }}</p>
      <p>{{cp}}, {{city}}</p>
    </div>
    <div class="coiffeur-descriptionContent">
      <p>
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
      </p>
      <ul class="coiffeur-tags">
        <li>Brushing</li>
        <li>Lissage</li>
        <li>Coloration</li>
        <li>Barbes</li>
      </ul>
      <hr>
      <div class="order-recap">
        <p class="order-date">Lundi 16 Février 2017</p>
        <p class="order-timeSlot">15:30 - 16:30</p>
        <p class="order-haircut">Coupe Homme (Medium) </p>
        <p class="order-addition">Shampooing </p>
        <p class="order-addition">Lissage </p>
        <p class="order-price">35 euros</p>
      </div>
      <button>VALIDER LE RENDEZ-VOUS</button>
    </div>
    <div class="coiffeur-descriptionAvis">
      <div class="coiffeur-avisCard">
        <img src="http://placehold.it/60x60" alt="">
        <div class="coiffeur-avisContent">
          <p> * * * * * </p>
          <p> Bonne prestation, un petit salon sympa, rapide et bien placé dans le 15</p>
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
      photo_link: window.localStorage.getItem('photo_link'),
      name: window.localStorage.getItem('name'),
      city: window.localStorage.getItem('city'),
      street: window.localStorage.getItem('street'),
      cp: window.localStorage.getItem('cp'),
      geocode: { lat: parseFloat(window.localStorage.getItem('lat'),10), lng: parseFloat(window.localStorage.getItem('lng'), 10) }
    }
  }
  
}
</script>

<style>
.coiffeur {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  background: black;
  margin: 0 auto;
}

.coiffeur-avatar {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 200px; 
  height: 200px;
  margin-left: 50px;
}

.coiffeur-avatar img {
  height: 100%;
  width: 100%;
  border-radius: 15px;
  z-index: 2;
}

.coiffeur-avatar ul {
  position: relative;
  left: -15px;
  list-style-type: none;
  background: #111;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  width: 65px;
  height: 98%;
  z-index: 1;
  padding: 0 35px;
}

.coiffeur-avatar ul li {
  display: block;
  margin-bottom: 5px;
  color: #fff;
  margin-top: 20px;
  width: 25px;
}


.coiffeur-header {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 60vw;
  height: 30vh;
  background: url('https://s3.amazonaws.com/tereza-landing/Home/cover-henri.png') center center;
  margin: 0 auto;
  border-radius: 15px;
}

.coiffeur-headerMap {
  background: blue;
  width: 35%;
  height: 100%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.coiffeur-description {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-orientation: column;
  width: 60vw;
  height: 100vh;
  color: #fff;
  padding: 10px 5px;
  margin-top: 15px;
}

.coiffeur-coordinates h1 {
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: bold;
}

.coiffeur-descriptionContent {
  width: 30vw;
  text-align: justify;
  margin: 0 15px;
}

ul.coiffeur-tags {
  width: 100%;
  list-style-type: none;
  margin-top: 25px;
}

ul.coiffeur-tags li {
  display: inline-block;
  border: 1px solid lightblue;
  font-weight: bold;
  padding: 3px;
  margin-right: 2px;
  border-radius: 3px;
  text-transform: uppercase;
}

.coiffeur-avisCard {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 15vw;
  text-align: justify;
  padding: 5px 3px;
}

.coiffeur-avisCard > img {
  height: 70px;
  width: 70px;
  margin-right: 15px;
  border-radius: 5px;
}

.order-recap {
  position: relative;
  background: #444;
  padding: 6px 4px;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 65px;
}

.order-recap:before {
  content: 'RECAPITULATIF';
  position: absolute;
  top: -30px;
  height: 30px;
  left: 0;
  background: #444;
  padding: 5px;
}

.order-price {
  text-align: right;
}

.coiffeur-description button {
  text-align: center;
  margin: 0 auto;
}

</style>
