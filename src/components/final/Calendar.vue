<template>
<div class="calendar">
  <div class="calendar-container">
    <div class="hours">
      <div>
        <p class="text-center">Date</p>
      </div>
      <div v-for="q in slotsNumber(opening, closing)" class="hourRange" :style="{ height: 15 * 2.5 + 'px' }" >
        {{ Math.floor(q.slotFrom / 60) }}:{{ Math.floor(q.slotFrom % 60) === 0 ? "00" : Math.floor(q.slotFrom % 60) }} -
        {{ Math.floor(q.slotTo / 60) }}:{{ Math.floor(q.slotTo % 60) === 0 ? "00" : Math.floor(q.slotTo % 60) }}
      </div>
        
    </div>
    <div class="column">
      <p class="text-center"> {{ startDate }} </p>
      <div class="slot" :class="{ free: s.isFree }" v-for="s in dataFromDate(startDate, timeSlots)" :style="{ height: s.duration * 2.5 + 'px' }">
        <div v-if="!s.isFree">
          <div>
            {{ Math.floor(s.startsAt / 60) }}:{{ Math.floor(s.startsAt % 60) === 0 ? "00" : Math.floor(s.startsAt % 60) }} -
            {{ Math.floor(s.endsAt / 60) }}:{{ Math.floor(s.endsAt % 60) === 0 ? "00" : Math.floor(s.endsAt % 60) }}
          </div>
          <div>
            <p> {{ s.customerName }} </p>
            <p v-for="p in s.productsList"> {{ p }} </p>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <p class="text-center"> {{ incrementDate(startDate, 1) }} </p>
      <div class="slot" :class="{ free: s.isFree }" v-for="s in dataFromDate(incrementDate(startDate, 1), timeSlots)" :style="{ height: s.duration * 2.5 + 'px' }">
        <div v-if="!s.isFree">
          <div>
            {{ Math.floor(s.startsAt / 60) }}:{{ Math.floor(s.startsAt % 60) === 0 ? "00" : Math.floor(s.startsAt % 60) }} -
            {{ Math.floor(s.endsAt / 60) }}:{{ Math.floor(s.endsAt % 60) === 0 ? "00" : Math.floor(s.endsAt % 60) }} 
          </div>
          <div>
            <p> {{ s.customerName }} </p>
            <p v-for="p in s.productsList"> {{ p }} </p>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <p class="text-center"> {{ incrementDate(startDate, 2) }} </p>
      <div class="slot" :class="{ free: s.isFree }" v-for="s in dataFromDate(incrementDate(startDate, 2), timeSlots)" :style="{ height: s.duration * 2.5 + 'px' }">
        <div v-if="!s.isFree">
          <div>
            {{ Math.floor(s.startsAt / 60) }}:{{ Math.floor(s.startsAt % 60) === 0 ? "00" : Math.floor(s.startsAt % 60) }} -
            {{ Math.floor(s.endsAt / 60) }}:{{ Math.floor(s.endsAt % 60) === 0 ? "00" : Math.floor(s.endsAt % 60) }} 
          </div>
          <div>
            <p> {{ s.customerName }} </p>
            <p v-for="p in s.productsList"> {{ p }} </p>
          </div>
        </div>
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
      startDate: '20/01/2017',
      timeSlots: [],
      opening: 8 * 60,
      closing: 20 * 60
    }
  },
  methods: {
    dbToTimeslot() {
      var slots = [];

      var fixtures = [
      {
        appDate: '20/01/2017',
        startsAt: 840,
        duration: 60,
        endsAt: 900,
        isFree: false,
        customerName: 'CEDEO Rive droite',
        productsList: ['Joint', 'Carte électronique']
      },
      {
        appDate: '21/01/2017',
        startsAt: 705,
        duration: 30,
        endsAt: 735,
        isFree: false,
        customerName: 'CEDEO Rive droite',
        productsList: ['Joint', 'Carte électronique']
      },
      {
        appDate: '22/01/2017',
        startsAt: 765,
        duration: 30,
        endsAt: 780,
        isFree: false,
        customerName: 'CEDEO Rive droite',
        productsList: ['Joint', 'Carte électronique']
      },
      ];

      // Each slot consists of an appointment, or a free space if there is
      // no appointment starting at the current slot index. 
      // Therefore, we loop over each fixtures, look for startDate
      // and add the duration to the currentSlot. If there is none, at this startDate
      // Then continue to next slot (currentSlot + interval)
      [this.startDate, this.incrementDate(this.startDate, 1), this.incrementDate(this.startDate, 2)].forEach( (date) => {
        var opening = this.opening, // starting at 9:00
          closing = this.closing, // closing at 12:00
          interval = 15, // 15 min interval
          currentSlot = opening;

        for (currentSlot; currentSlot <= closing; currentSlot += interval) {
          for (let appointment of this.dataFromDate(date, fixtures)) {
            if (appointment.startsAt == currentSlot) {
              slots.push(appointment);
              currentSlot += appointment.duration - interval;
            } else {
              slots.push({
                appDate: appointment.appDate,
                startsAt: currentSlot,
                duration: interval,
                endsAt: currentSlot + interval,
                isFree: true
              });
            }
          }
        }

      });

      return slots;
    },
    dataFromDate(date, arr) {
      if (!date) {
        throw new Error('Please provide a date, in the "DD/MM/AAAA" format');
      }
      return Array.prototype.filter.call(arr, (e) => {
        return e.appDate === date
      });
    },
    incrementDate(date, incr) {
      var start = moment(date, "DD/MM/YYYY");
      console.log(start);
      start.add(incr, "days");
      return start.format("DD/MM/YYYY");
    },
    slotsNumber(start, end) {
      var i = start,
          res = [];
      for (i; i < end; i += 15) {
        console.log(i);
        res.push({ slotFrom: i, slotTo: i + 15 });
      }
      return res;
    }
  },
  created() {
    this.timeSlots = this.dbToTimeslot();
  },
}
</script>

<style>

.calendar-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  margin: 0 auto;
}

.slot {
  width: 25vw;
  background: #333;
  color: #fff;
  border: 1px solid #eee;
  text-align: center;
}

.slot > div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  line-height: 0.9;

}

.slot > div > div {
  padding: 15px;
}

.free {
  background: #fff;
}

.hourRange {
  margin-top: 20px;
  text-align: center;
}

</style>


// NOW, for tomorrow, need to test with sample data from db and fix the layout. And for god turn this into a function.  
