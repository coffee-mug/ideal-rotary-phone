<template>
  <div class="card">
    <div class="card-infos">
      <div class="card-avatar">
        <img src="http://placehold.it/70x70" alt="">
      </div>
      <div class="card-profile">
        <strong>{{ hairDresserInfos['company_name'] }}</strong>
        <p class="subtitle"></p>
        <p>{{ hairDresserInfos.street }}</p>
        <p>{{ hairDresserInfos['city'] }}, {{ hairDresserInfos['postal_code'] }}</p>
        <button class="btn btn-primary">Réserver maintenant !</button>
      </div>
    </div>
    <div class="card-calendar">
      <div class="calendar-header">
          <div class="changeDateRange" @click="updateRootDate('decrement')">&lt;</div>
          <div class="calendar-col-header">{{ this.startDate }}</div>
          <div class="calendar-col-header">{{ this.secondDate }}</div>
          <div class="calendar-col-header">{{ this.thirdDate }}</div>
          <div class="changeDateRange" @click="updateRootDate('increment')">&gt;</div>
      </div>
      <div class="calendar-cols">
        <div class="calendar-col-1">
          <div v-for="spot in parseAppointments(startDate.toString())" :class="{ 'calendar-slot-free': spot.isFree }">
            <p v-if="spot.isFree" class="text-center"> {{ spot.spot }} </p>
            <p v-else="!spot.isFree" class="text-center"> - </p>
          </div>
        </div>
        <div class="calendar-col-2">
          <div v-for="spot in parseAppointments(secondDate.toString())" :class="{ 'calendar-slot-free': spot.isFree }">
            <p v-if="spot.isFree" class="text-center"> {{ spot.spot }} </p>
            <p v-else="!spot.isFree" class="text-center"> - </p>
          </div>
        </div>
        <div class="calendar-col-3">
          <div v-for="spot in parseAppointments(thirdDate.toString())" :class="{ 'calendar-slot-free': spot.isFree }">
            <p v-if="spot.isFree" class="text-center"> {{ spot.spot }} </p>
            <p v-else="!spot.isFree" class="text-center"> - </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.card {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 15px;
}

.card:hover {
  border: 1px solid lightblue;
  border-radius: 5px;
}

.card-infos {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 400px;
}

.card-profile strong {
  color: #2980b9;
}

.card-profile .subtitle {
  color: #006;
}

.card-infos > .card-avatar {
  align-self: flex-start;
}

.card-infos > .card-avatar img {
  border-radius: 35px;
  max-width: 70px;
  max-height: 70px;
}

.card-calendar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 2;
  flex-direction: column;
  width: 500px;
}

.calendar-header, .calendar-cols {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}

.calendar-slot-free {
  background: #2980b9;
  color: #eee;
  font-weight: bold;
  border-radius: 5px;
  width: 80px;
  height: 25px;
  margin: 5px 0;
}

.changeDateRange {
  font-weight: bold;
  color: lightblue;
}

.changeDateRange:hover {
  cursor: pointer;
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
    'hairDresserInfos',
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
  }
}
</script>
