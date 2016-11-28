<template>
<div class="day-container container">
  <div class="row">
    <div class="flex-container">
      <form class="form-inline">
        <div class="form-group">
          <label for="searchTime">StartTime</label>
          <input v-model="searchTime" placeholder="Time of appointment" />
        </div>
        <div class="form-group">
          <label for="prestations">Prestation</label>
          <select v-model="selected" id="prestations" name="">
            <option v-for="option in prestations" :value="option.type">
              {{ option.type }}
            </option>
          </select>
          <button class="btn pbtn-primary" @click="hourToAppointment(searchTime,null,45)">Test</button>
        </div>
      </form>
      
      <div v-for="s in slots" @click.prevent="toggleAppointment(s)" :class="{ busy: !s.isFree }" class="day-slot">
        <h3> <span> App: {{s.startHour}} : {{s.endingHour }} </span> {{ s.isFree }} </h3>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      dayHourStart: 9,
      dayHourEnd: 19,
      appointmentDuration: 15,
      slots: [],
      selected: 'CH',
      prestations: [{ type: 'CH', duration: 45 }, { type: 'CF', duration: 75 }],
      searchTime: '14:00',
      fixtures: [
        { 
          isFree: false,
          startHour: moment('15:00', 'HH:mm').format('HH:mm'),
          endingHour: moment('15:45', 'HH:mm').format('HH:mm')
        },
        { 
          isFree: false,
          startHour: moment('10:00', 'HH:mm').format('HH:mm'),
          endingHour: moment('11:00', 'HH:mm').format('HH:mm')
        },
        { 
          isFree: false,
          startHour: moment('12:00', 'HH:mm').format('HH:mm'),
          endingHour: moment('12:30', 'HH:mm').format('HH:mm')
        },
        { 
          isFree: false,
          startHour: moment('16:00', 'HH:mm').format('HH:mm'),
          endingHour: moment('16:45', 'HH:mm').format('HH:mm')
        }
      ]
    }
  },
  created() {
    // Create slots to draw the calendar
    this.initSlots();
    // Fill the busy slots.
    this.fixtures.forEach( (e) => this.hourToAppointment(e.startHour, e.endingHour, null));
  },
  methods: {
    initSlots() {
      var slotsNumber,
          currentHour,
          currentMinutes,
          toNextHour,
          endingHour;

      slotsNumber = (this.dayHourEnd - this.dayHourStart) * 60 / this.appointmentDuration;

      // Each slot will consist of a state object indicating if it is available
      for (var i = 0; i < slotsNumber; i++) {

        currentHour = this.dayHourStart + parseInt( i * this.appointmentDuration / 60);
        currentMinutes = i % (60 / this.appointmentDuration) * this.appointmentDuration;
        toNextHour = (i + 1) % (60 / this.appointmentDuration) === 0 ? true : false;
        endingHour = toNextHour ? currentHour + 1 + ':00' : currentHour + ':' + (currentMinutes + this.appointmentDuration)

        this.slots.push({
          isFree: true,
          startHour: moment(currentHour + ':' + currentMinutes, 'HH:mm').format('HH:mm'),
          endingHour: moment(endingHour, 'HH:mm').format('HH:mm')
        });
      }
    },
    toggleAppointment(slot) {
      slot.isFree = !slot.isFree;
      console.log('clicked');
    },
    hourToAppointment(start, end, duration) {
      var startDate,
          endDate,
          matchedSlots,
          maxIndex,
          minIndex;

      end = end || null;

      matchedSlots = [];
    
      startDate = moment(start, 'HH:mm').format('HH:mm');
      
      if (end) {
        // We already have an ending date
        endDate = moment(end, 'HH:mm').format('HH:mm');
      } else {
        // Thanks moment.js
        endDate = moment(startDate, 'HH:mm').add(duration, 'minutes').format('HH:mm');
      }
      
      console.log("Startdate ", startDate, "EndDate ", endDate);

      this.slots.filter( (e, ind) => {
        if (e.endingHour === endDate || e.startHour === startDate) {
          matchedSlots.push(ind);
        }
      });

      minIndex = Math.min.apply(null, matchedSlots);
      maxIndex = Math.max.apply(null, matchedSlots);

      // Adding the indices in the interval 
      for (var i = minIndex + 1; i < maxIndex; i++) {
       matchedSlots.push(i);
      }

      console.log(matchedSlots);
      matchedSlots.forEach( (e) => {
        // Toggle the one slected
        this.slots[e].isFree = false;
      });
    }
  },
}
</script>

<style>
.busy {
  background-color: red;
}

.day-slot {
  height: 2.5vh;
  width: 10vw;
  border-top: 1px solid rgba(255,255,255,0.3);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding: 15px;
}

.day-slot h3 {
  font-size: 100%;
  margin: 0;
}
</style>

