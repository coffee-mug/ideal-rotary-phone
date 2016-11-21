<template>
<div class="day-container container">
  <div class="row">
    <div class="col-md-12 col-xs-2">
      <div v-for="s in slots" @click.prevent="toggleAppointment(s)" :class="{ busy: !s.isFree }" class="day-slot">
        <h3> <span> App: {{s.startHour}} : {{s.endingHour }} </span> {{ s.isFree }} </h3>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      dayHourStart: 9,
      dayHourEnd: 20,
      appointmentDuration: 15,
      slots: []
    }
  },
  created() {
    var slotsNumber,
        currentHour,
        currentMinutes,
        toNextHour;

    slotsNumber = (this.dayHourEnd - this.dayHourStart) * 60 / this.appointmentDuration;

    // Each slot will consist of a state object indicating if it is available
    for (var i = 0; i < slotsNumber; i++) {

      currentHour = this.dayHourStart + parseInt( i * this.appointmentDuration / 60);
      currentMinutes = i % (60 / this.appointmentDuration) * this.appointmentDuration;
      toNextHour = (i + 1) % (60 / this.appointmentDuration) === 0 ? true : false;

      this.slots.push({
        isFree: true,
        startHour: currentHour + ':' + currentMinutes,
        endingHour: toNextHour ? currentHour + 1 + ':00' : currentHour + ':' + (currentMinutes + this.appointmentDuration)
      });
    }
  },
  methods: {
    toggleAppointment(slot) {
      slot.isFree = !slot.isFree;
      console.log('clicked');
    },
  },
}
</script>

<style>
.busy {
  background-color: red;
}

.day-slot {
  height: 2.5vh !important;
  max-height: 2.5vh;
}

.day-slot h3 {
  font-size: 100%;
  margin: 0;
}
</style>

