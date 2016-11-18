<template>
<div class="day-container">
  <div v-for="s in slots" @click.prevent="toggleAppointment(s)" :class="{ busy: !s.isFree }">
    <h3> {{ s.isFree }} </h3>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      dayHourStart: 9,
      dayHourEnd: 19,
      appointmentDuration: 15,
      slots: []
    }
  },
  created() {
    var slotsNumber;

    slotsNumber = (this.dayHourEnd - this.dayHourStart) * 60 / this.appointmentDuration;

    // Each slot will consist of a state object indicating if it is available
    for (var i = 0; i < slotsNumber; i++) {
      this.slots.push({ isFree: true });
    }
  },
  methods: {
    toggleAppointment(slot) {
      slot.isFree = !slot.isFree;
      console.log('clicked');
    }
  },
}
</script>

<style>
.busy {
  background-color: red;
}
</style>

