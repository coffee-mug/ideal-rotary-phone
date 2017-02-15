<template>
<div class="funnel-prestation">
  <div class="funnel-prestationBanner">
    <h1 class="text-center" style="font-size: 4.5em">LA PLATEFORME QUI VOUS RAPPROCHE</h1>
  </div>
  <h3>Quelques infos... et on ne vous embete plus !</h3>
  <div class="prestation-form">
    <div>
      <form class="form" >
        <div class="form-group ">
            <div class="col-sm-6">
              <input v-model="salon" placeholder="ADRESSE DU SALON" />
            </div>
            <div class="col-sm-6">
              <input v-model="city" placeholder="Où ça ?" />
            </div>
        </div>
        <div class="form-group">
            <label for="coupe" class="col-sm-6">Vous desirez : </label>
            <div class="col-sm-6">
              <input v-model="haircut" placeholder="Coupe" />
            </div>
        </div>
        <div class="form-group">
          <label for="hairlength" class="col-sm-6">Longueur de vos cheveux: </label>
          <div class="col-sm-6">
            <input v-model="hairLength" placeholder="Longueur de vos cheveux" />
          </div>
        </div>
        <div class="form-group">
          <label for="hairlength" class="col-sm-6">Avec ceci </label>
          <div class="col-sm-6">
            <input v-model="extra1" placeholder="Premier supplement" />
          </div>
        </div>
        <div class="form-group">
          <label for="hairlength" class="col-sm-6"> </label>
          <div class="col-sm-6">
            <input v-model="extra2" placeholder="Second supplement" />
          </div>
        </div>
        <div class="form-group ">
          <label for="hours" class="col-sm-6">Horaire</label>
          <div class="col-sm-6">
            <input v-model="appointmentTime" type="time" />
          </div>
        </div>
        <div class="form-group ">
          <label for="hours" class="col-sm-6">Date</label>
          <div class="col-sm-6">
            <input v-model="appointmentDate" type="date" :minDate="minDate" min="minDate"/>
          </div>
        </div>
        <div class="form-group">
          <label for="waitings" class="col-sm-6">En plus: </label>
          <div class="col-sm-6">
            <select v-model="benefits" placeholder="En attendant">
              <option value="coffee">Cafe</option>
              <option value="juice">Jus de fruit</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-6">
            <textarea v-model="comments" placeholder="Commentaires" />
          </div>
        </div>
        <div class="form-group">
          <button @click="search">Valider</button>
        </div>
      </form>
    </div>
    <gmap-map :center="{lat: 48.862840, lng: 2.333474}" :zoom="12" class="funnel-prestationMap">
      <gmap-marker
        v-for="m in markers"
        :position="m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</div>
</template>

<script>
import moment from 'moment';

moment.locale('fr');

export default {
  data() {
    return {
      city: window.localStorage.getItem('city'),
      haircut: window.localStorage.getItem('haircut'),
      salon: '',
      hairLength: '',
      extra1: '',
      extra2: '',
      minDate: moment().format('DD/MM/YYYY'),
      appointmentDate: '',
      appointmentTime: moment().add(1, 'hour').format('hh:mm:ss'),
      benefits: '',
      comments: '',
      markers: [
        { 
          position: { lat: 48.862095, lng: 2.367220 }
        },
        {
          position: { lat: 48.849043, lng: 2.337246 }
        },
        {
          position: { lat: 48.868566, lng: 2.305299 }
        },
      ]
    }
  },
  methods: {
    search() {
      ['city', 'haircut'].forEach( (e) => {
        console.log(this.$data[e], window.localStorage.getItem(e) );
        if (window.localStorage.getItem(e) !== this.$data[e]) {
          window.localStorage.setItem(e, this.$data[e]);
        }
      });
      this.$router.push({ name: "results" }); 
    }
  }
}
</script>
<style>
.funnel-prestation {
  width: 100vw;
  height: 100vh;
}

.funnel-prestationBanner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25vh;
  text-align: center;
  color: #fff;
}

.funnel-prestation h3 {
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-size: 2.5rem;
  width: 50vw;
  background: #000;
  margin: 15px auto 0 auto;
  padding-top: 35px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.prestation-form {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #000;
  width: 50vw;
  height: 60vh;
  margin: 0 auto;
  padding: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  
}

.prestation-form form input,
.prestation-form form select,
.prestation-form form textarea {
  background: rgba(132,132,132,0.5);
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 3px;
  float: right;
  margin: 5px;
}

.prestation-form form input:focus {
  background: rgba(33,33,33,0.3);
  border-radius: 5px;
}

.prestation-form form label {
  color: #fff;
  padding: 5px;
}

.prestation-form form textarea {
  margin-top: 15px;
}

.prestation-form form button {
  background: hsla(160, 100%, 40%, 1);
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  text-transform: uppercase;
  margin: 35px auto;
}

.funnel-prestationMap {
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
}

@media screen and (max-width: 732px) {
  .prestation-form {
    flex-direction: column;
  }
  .funnel-prestationMap {
    width: 35vw;
    height: 35vh;
  }
}




</style>
