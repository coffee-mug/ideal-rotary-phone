<!--
TO DO:
    - Ajouter des faux "commentaires" du coiffeur
    - Ajouter un plugin map pour l'affichage
    - Ajouter dynamiquement les tags du coiffeurs
    - Design a revoir !
-->

<template>
<div class="coiffeur">
    <div class="container">
        <div class="row">
            <div class="col-md-8 .col-xs-12">
                <div class="coiffeur-header">
                    <div class="coiffeur-avatar">
                        <img :src="photo_link" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 .col-xs-12">
                        <div class="coiffeur-data">
                            <div class="coiffeur-coordinates"><p>{{name}}</p></div>
                            <p>{{ street }}</p>
                            <p>{{cp}}, {{city}}</p>
                        </div>
                        
                        <!-- TO DO AJOUTER LA NOTATION ! -->
                    </div>

                    <div class="col-md-8 .col-xs-12">
                        <div class="coiffeur-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend elit aliquet, venenatis dui vestibulum, euismod neque. Duis vel consequat augue, id mollis sem. Pellentesque justo lectus, mollis non lobortis quis, porta non tortor. Ut pharetra eu turpis sed volutpat. Donec scelerisque ipsum at auctor aliquet. Ut quis nisi risus. Donec ut commodo enim. </p>
                        </div>                        
                    </div>
                </div>

                <div class="line-separator"></div>

            </div>
            <div class="col-md-4 .col-xs-12">
                <div class="coiffeur-headerMap">
                    <img src="https://s3.amazonaws.com/tereza-landing/Home/photo_map.PNG" />
                </div>
            </div>
        </div>
    </div>
    
</div>

        <!--<div class="coiffeur-header">
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
                <img src="https://s3.amazonaws.com/tereza-landing/Home/photo_map.PNG" />
            </div>
        </div>-->


        <!--<div class="coiffeur-description">
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
    </div>-->
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
      geocode: { lat: parseFloat(window.localStorage.getItem('lat'),10), lng: parseFloat(window.localStorage.getItem('lng'), 10) },
      LastComments: [
          {photos:"", score:"", name:""},
          {photos:"", score:"", name:""},
          {photos:"", score:"", name:""}
      ]
    }
  }
  
}
</script>

<style>
.coiffeur {
  height: 100vh;
  background: black;
}

.coiffeur .row{
  margin-right: 0px;
  margin-left: 0px;
}

.coiffeur-header {
  background: url('https://s3.amazonaws.com/tereza-landing/Home/cover-henri.png') center center;
  background-size: cover;
  border-radius: 15px 15px 0px 0px;
  height: 160px;
  width: 100%;
  float: right;
}

.coiffeur-avatar {
  width: 140px;
  height: 90%;
  margin-left: 50px;
  margin-top: 10px;
}

.coiffeur-avatar img {
  height: 100%;
  width: 100%;
  border-radius: 15px 15px 0px 0px;
  z-index: 2;
}

.coiffeur-coordinates{
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: bold;
}

.coiffeur-data{
    color:white;
}

.coiffeur-avatar ul {
  position: relative;
  left: -15px;
  list-style-type: none;
  background: #111;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  width: 65px;
  height: 100%;
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

.coiffeur-headerMap {
  width: 100%;
  height: 160px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.coiffeur-headerMap img {
  height: 100%;
  width: 100%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.coiffeur-description {
  color: #fff;
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
  font-family: Helvetica, sans-serif;
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
  display: block;
  text-align: center;
  margin: 15px auto;
  background: #70D5DA;
  color: #333;
  border: none;
  border-radius: 5px;
  font-size: 1.8em;
  font-family: MarketDeco;
}

.line-separator{
    height:2px;
    background: white;
    border-bottom:1px solid #313030;
    width: 80%;
    margin: 0 auto;
}

</style>
