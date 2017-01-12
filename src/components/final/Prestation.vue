<template>
  <div class="prestation-form">
    <form class="form">
      <div class="form-group">
        <input v-model="salon" placeholder="Salon" />
      </div>
      <div class="form-group">
        <input v-model="city" placeholder="Où ça ?" />
      </div>
      <div class="form-group">
        <input v-model="haircut" placeholder="Coupe" />
      </div>
      <div class="form-group">
        <input v-model="hairLength" placeholder="Longueur de vos cheveux" />
      </div>
      <div class="form-group">
        <input v-model="extra1" placeholder="extra 1" />
      </div>
      <div class="form-group">
        <input v-model="extra2" placeholder="extra 2" />
      </div>
      <div class="form-group">
        <input v-model="appointmentDate" type="date" :minDate="minDate" min="minDate"/>
      </div>
      <div class="form-group">
        <input v-model="appointmentTime" type="time" />
      </div>
      <div class="form-group">
        <input v-model="benefits" placeholder="En attendant" />
      </div>
      <div class="form-group">
        <textarea v-model="comments" placeholder="Commentaires" />
      </div>
      <button @click="search">Valider</button>
    </form>
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
