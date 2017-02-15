<template>
<div>
  <div class="card">
      <div class="card-photo">
        <img :src="photo_link"  alt="">
      </div>
      <div class="card-infos">
        <div class="card-name">
          <p>{{ name }}</p>
        </div>
        <div class="card-rating">
          <ul>
            <li><img src="https://s3.amazonaws.com/tereza-landing/Home/Rate.png" alt=""></li>
            <li><img src="https://s3.amazonaws.com/tereza-landing/Home/Rate.png" alt=""></li>
            <li><img src="https://s3.amazonaws.com/tereza-landing/Home/Rate.png" alt=""></li>
            <li><img src="https://s3.amazonaws.com/tereza-landing/Home/Rate.png" alt=""></li>
            <li><img src="https://s3.amazonaws.com/tereza-landing/Home/Rate.png" alt=""></li>
          </ul>
        </div>
        <div class="card-coordinates">
          <p class="card-address">{{ street }} <br> {{ city }}, {{ cp }}</p>
          <ul class="card-tags">
            <li>Brushing</li> 
            <li>Coupe Homme</li> 
            <li>coupe Femme</li>
          </ul>
        </div>
        <div class="card-benefits">
          <div class="card-benef"></div>
          <div class="card-benef"></div>
          <div class="card-benef"></div>
        </div>
        <p class="card-cta" @click="saveInfoAndGo">PRENDRE RENDEZ-VOUS</p>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.card {
  display: flex;
  flex-orientation: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 650px;
  margin: 0 auto 5px auto;
  height: 300px;
  background: rgba(255,255,255,0.3);
  padding: 15px;
  border-radius: 5px;
}

.card-photo {
  width: 40%;
  height: 95%;
  overflow: hidden;
  border-radius: 25px;
}

.card-photo img {
  display: block;
  margin: 0 auto;
  width: 100%;
  padding: 15px;
  margin-top: -5%;
}

.card-infos {
  width: 60%;
  padding: 15px;
  background: black;
  color: #fff;
  height: 95%;
  border-radius: 15px;
}

.card-name p {
  font-size: 1.8em;
}

.card-cta {
  font-size: 1.7em;
  text-align: center;
}

ul.card-tags {
  width: 100%; 
}

.card-tags, .card-rating ul {
  padding: 0;
}

.card-rating ul li {
  display: inline;
}

.card-rating ul li img {
  width: 20px;
  background: #fff;
}

.card-tags {
  margin-bottom: 25px;
}

.card-tags li {
  display: inline;
  border: 1px solid cyan;
  border-radius: 3px;
  padding: 3px;
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
    'photo_link',
    'cp',
    'street',
    'city',
    'name',
    'geocode'
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
      var data = ['photo_link', 'cp', 'street', 'city', 'name'];
      var geo = { lat: this["geocode"]["lat"], lng: this["geocode"]["lng"] };

      window.localStorage.setItem("lat", geo['lat']);
      window.localStorage.setItem("lng", geo['lng']);

      data.forEach( (e) => {
          window.localStorage.setItem(e, this[e]);
        });

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
  }
}
</script>
