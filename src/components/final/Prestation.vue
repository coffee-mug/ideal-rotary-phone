<template>
<div class="funnel-prestation">
  <div class="funnel-prestationBanner">
    <h1>Tereza</h1>
    <h2>LA PLATEFORME QUI VOUS RAPPROCHE</h2>
  </div>
  <h3>Quelques infos... et on ne vous embête plus !</h3>
  <div class="prestation-form">
    <div>
      <form class="form" >
        <div class="form-group">
          <input v-model="salon" placeholder="ADRESSE DU SALON" />
          <input v-model="city" placeholder="Où ça ?" />
        </div>
        <div class="form-group">
          <label for="coupe">Vous désirez : </label>
          <input v-model="haircut" placeholder="Coupe" />
        </div>
        <div class="form-group">
          <label for="hairlength">Longueur de vos cheveux: </label>
          <input v-model="hairLength" placeholder="Longueur de vos cheveux" />
        </div>
        <div class="form-group">
          <label for="hairlength">1er extra: </label>
          <input v-model="extra1" placeholder="extra 1" />
        </div>
        <div class="form-group">
          <label for="hairlength">2nd extra: </label>
          <input v-model="extra2" placeholder="extra 2" />
        </div>
        <div class="form-group">
          <label for="hours">Horaires</label>
          <input v-model="appointmentTime" type="time" />
          <input v-model="appointmentDate" type="date" :minDate="minDate" min="minDate"/>
        </div>
        <div class="form-group">
          <label for="waitings">En attendant: </label>
          <select v-model="benefits" placeholder="En attendant">
            <option value="coffee">Cafe</option>
            <option value="juice">Jus de fruit</option>
          </select>
        </div>
        <div class="form-group">
          <label>Commentaires: </label>
          <textarea v-model="comments" placeholder="Commentaires" />
        </div>
        <div class="form-group">
          <button @click="search">Valider</button>
        </div>
      </form>
    </div>
    <div class="funnel-prestationMap"></div>
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
      comments: ''
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
  background: cyan;
}

.funnel-prestationBanner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25vh;
  background: violet;
  text-align: center;
  color: #fff;
}

.funnel-prestation h3 {
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-size: 2.5rem;
}

.prestation-form {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #000;
  width: 50vw;
  height: 60vh;
  margin: 15px auto;
  padding: 15px;
  
}

.prestation-form form input,
.prestation-form form select,
.prestation-form form textarea {
  background: rgba(33,33,33,0.8);
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
  background: hsla(180, 100%, 50%, 1);
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 145px;
  text-transform: uppercase;
  margin: 15px auto;
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
