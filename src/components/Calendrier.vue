<template>
<div class="appointment-container">
  <div class="appointment-form">
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
        <button class="btn btn-primary" @click="hourToAppointment(searchTime,null,45)">Test</button>
      </div>
    </form>
  </div>
  <div class="calendar-container">
    <Day v-for="day in days" day-hour-start=8 day-hour-end=10></Day>
  </div>
</div>
</template>

<script>
import Day from './Day.vue';
import moment from 'moment';

export default {
  data() {
    return {
      message: 'SC43',
      selected: 'CH',
      prestations: [{ type: 'CH', duration: 45 }, { type: 'CF', duration: 75 }],
      searchTime: '14:00',
      days: 5,
      slots: []
    }
  },
  ready() {
    
  },
  components: {
    Day
  },
  methods: {
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

      this.slots.filter( (e, ind) => {
        if (e.endingHour === endDate || e.startHour === startDate) {
          // Appointment can be made of multiple time slots depending on the duration and timeInterval
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
  }
}

</script>

<style>
.calendar-container {
  display: flex;
}

</style>
