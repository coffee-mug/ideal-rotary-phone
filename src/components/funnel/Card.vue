<template>
<div class="card">
    <div class="card-left col-xs-6">
      <div class="card-photo">
          <img :src="hairdresser.photo_link" alt="">
      </div>
    </div>
    <div class="card-right col-xs-6">
      <div class="card-data">
        <CardDetails :hairdresser="hairdresser"></CardDetails>
        <div class="card-cta">
          <p class="btn-profile" @click="saveInfoAndGo">Voir le profil complet ></p>
          <p class="btn-appointment" @click="saveInfoAndGo">Prendre rendez-vous</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: rgba(255,255,255,0.3);
  padding: 15px;
  border-top: 3px solid white;
}
.card:first-of-type {
  border-top: none;
  border-radius: 8px 8px 0 0;
}
.card:last-of-type {
  border-radius: 0 0 8px 8px;
}

.card-left {
  padding-left: 0;
}

.card-photo {
  max-height: 248px;
  overflow: hidden;
  border-radius: 8px;
  padding: 0;
}

.card-photo img {
  display: block;
  margin: 0 auto;
  width: 100%;
}

.card-right {
  position: relative;
  padding-right: 0;
}

.card-data {
  color: #fff;
  background: black;
  width: 100%;
  min-height: 248px;
  height: 100%;
  padding: 8px;
  border-radius: 8px;
}

.card-cta {
  text-align: center;
  cursor: pointer;
  text-align: right;
}

.card-cta .btn-profile {
  font-size: 10px;
  margin-bottom: 0;
}

.card-cta .btn-appointment {
  font-size: 20px;
}

</style>

<script>
/** 
   pour récupérer les horaires il faut:
    1/ L'heure d'ouverture du coiffeur
    2/ L'heure de fermeture du coiffeur
    3/ Récupérer les rdv sur une semaine
**/
import moment from 'moment';
moment.locale('fr');

import CardDetails from './CardDetails.vue';

export default {
  data() {
    return {
      start: moment(),
      startDate: moment().format('ddd Do MMM'),
      startHour: 9,
      endHour: 11
    }
  },
  props: [
    'hairdresser'
  ],
  computed: {
    secondDate() {
      return moment(this.startDate, 'ddd Do MMM').add(1, 'days').format('ddd Do MMM');
    },
    thirdDate() {
      return moment(this.startDate, 'ddd Do MMM').add(2, 'days').format('ddd Do MMM');
    }
  },
  methods: {
    saveInfoAndGo() {
      window.localStorage.setItem("hairdresser", JSON.stringify(this["hairdresser"]));

      this.$router.push('coiffeur');
    },
    currentDate(offset) {
      var offset = offset || 0,
          dateCopy = Object.assign(this.start, {});

      return dateCopy.add(offset, 'days');
    },
    updateRootDate(type) {
      if (type === 'increment') {
        this.start = this.start.add(3, "days");
      }
      if (type === 'decrement') {
        this.start = this.start.subtract(3, 'days');
        console.log(this.start);
      } 
      this.startDate = this.start.format('ddd Do MMM');
    },
    parseAppointments(day) {
      /**
      Use isSame method form moment js to simplify everything
      console.log(this.start.isSame('2016-12-20', 'day'));
    
      Use it in a computed
      Like : given an object with dates as keys and appointment hours list,
      check for each keys if equals this.start or isBetween this.start and this.start + 2 days.
      If it is, loop over the appointments hours and check if its filled or not.  
      Fill the blank hours starting from startHour til endHour. 
      @ returns a dic of objects with appointment hour and boolean isAvailable. In the template, only display
      appointment hour if available 
      http://momentjs.com/docs/#/query/is-between/
      **/
      
      var fixtures = { 
         '24/12/2016': [ '09:00', '09:30' ],
         '25/12/2016': [ '10:00', '10:30', '11:00'],
         '31/12/2016': [ '09:00', '10:30']
      };

      // if the date has some appointments, build the spots list with those appointments and filling the rest
      var results = []
      var currentSlot = moment().hour(this.startHour).minutes(0);
      var amplitude = (this.endHour - this.startHour) * 60 / 30;
      var slot = {};
      var spot = '';

      day = moment(day, "ddd Do MMM").format('DD/MM/YYYY').toString();

      for (var i = 0; i < amplitude; i++) {
        spot = currentSlot.format('HH:mm').toString();
        slot = { spot: spot, isFree: true };
  
        // Ugly really. But must check in order, as I am too lazy to make a reliable sort function to keep the right order 
        if ( Object.keys(fixtures).indexOf(day) !== -1) {
          if ( fixtures[day].indexOf(currentSlot.format('HH:mm').toString()) !== -1) {
            console.log("REACHED THAT ONE");
            slot['isFree'] = false;
          }
        }

        results.push(slot);
        currentSlot.add(30, 'minutes');
      }
      return results; 
    }
  },
  components: {
      'CardDetails': CardDetails
  }
}
</script>
