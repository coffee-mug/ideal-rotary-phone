<template>
  <div class="container-fluid nopad coiffeur">
    <div class="row">
      <div class="left-content col-md-9">
        <div class="row col-md-12 coiffeur-header">
          <div class="coiffeur-avatar">
            <img :src="hairdresser.photo_link" />
          </div>
        </div>
        <div class="row col-md-12 coiffeur-description">
          <div class="row">
            <div class="col-md-4">
              <CardDetails :hairdresser="hairdresser"></CardDetails>
            </div>
            <div class="col-md-8">
              <div class="coiffeur-descriptionContent">
                <p>
                  Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum
                  est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble
                  des morceaux de texte pour réaliser un livre spécimen de polices de texte.
                </p>
              </div>
            </div>
          </div>
          <hr>
          <div class="row coiffeur-appointment">
            <div class="col-md-6">
              <div class="appointment-header">Prendre rendez-vous</div>

              <div class="form-horizontal">
                <div class="form-group">
                  <label for="choice1" class="col-md-4 control-label">Vous desirez :</label>
                  <div class="col-md-8">
                    <select class="form-control" id="choice1">
                      <option>Selectionnez</option>
                      <option>Coupe Homme</option>
                      <option>Coupe Femme</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="choice1" class="col-md-4 control-label">Avec ceci :</label>
                  <div class="col-md-8">
                    <select class="form-control" id="choice1">
                      <option>Selectionnez</option>
                      <option>Shampooing</option>
                      <option>Shampooing + soin</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="choice1" class="col-md-4 control-label">Un extra :</label>
                  <div class="col-md-8">
                    <select class="form-control" id="choice1">
                      <option>Selectionnez</option>
                      <option>Lissage</option>
                      <option>Manucure</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-12">
                    <button type="submit" class="btn btn-default">Valider mon rdv</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="order-recap">
                <div class="appointment-header">Recapitulatif</div>
                <p class="order-date">Lundi 16 Février 2017</p>
                <p class="order-timeSlot">15:30 - 16:30</p>
                <p class="order-haircut">Coupe Homme (Medium)</p>
                <p class="order-addition">Shampooing </p>
                <p class="order-addition">Lissage </p>
                <p class="order-price">35 euros</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-content col-md-3">
        <div class="coiffeur-headerMap">
          <img src="https://s3.amazonaws.com/tereza-landing/Home/photo_map.PNG"></img>
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
  </div>
</template>

<script>
  import CardDetails from '../funnel/CardDetails.vue';
  export default {
    data() {
      return {
        hairdresser: JSON.parse(window.localStorage.getItem('hairdresser'))
      }
    },
    components: {
      'CardDetails': CardDetails
    }
  }
</script>

<style>
.coiffeur {
  background: black;
  margin: 0 auto;
  padding-top: 8px;
  padding-bottom: 8px;
}
.coiffeur > .row {
  max-width: 1280px;
  margin: 0 auto;
}
.coiffeur-header {
  background: url('https://s3.amazonaws.com/tereza-landing/Home/cover-henri.png') center center;
  background-size: cover;
  border-radius: 15px 15px 0 0;
  padding: 12px;
}

.coiffeur-avatar {
  width: 200px;
  height: auto;
  overflow: hidden;
  max-height: 160px;
  border-radius: 8px;
}

.coiffeur-avatar img {
  height: 100%;
  width: 100%;
  z-index: 2;
}

.coiffeur-description {
  color: #fff;
  background-color: #111;
  padding-top: 8px;
}

.coiffeur-appointment {
  margin-top: 24px;
}

.appointment-header {
  font-size: 32px;
  text-align: center;
  margin-bottom: 24px;
}

hr {
  margin: 12px auto;
  width: 75%;
  border-top: 2px solid #666;
}

.coiffeur-headerMap {
  background: blue;
  height: 100%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.coiffeur-headerMap img {
  width: 100%;
  height: 100%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.coiffeur-descriptionContent {
  font-family: sans-serif;
}

.coiffeur-avisCard {
  display: flex;
  align-items: flex-start;
  justify-content: center;
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
  background: #444;
  padding: 6px 4px;
  text-transform: uppercase;
}

.order-price {
  text-align: right;
}

.coiffeur-description button {
  display: block;
  text-align: center;
  margin: 15px auto;
  background: #add7d6;
  color: #333;
  border: none;
  border-radius: 5px;
  font-size: 1.8em;
  font-family: MarketDeco;
}

</style>