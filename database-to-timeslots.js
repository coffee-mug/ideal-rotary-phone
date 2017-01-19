<template>
  <h1>test calendrier installs</h1>
</template>


<script>
export default {
  methods: {
    dbToTimeslot() {
      var opening = 540, // starting at 9:00
        closing = 635, // closing at 12:00
        interval = 15, // 15 min interval
        currentSlot = opening,
        slots = [];

      var fixtures = [{
        startDate: 540,
        duration: 45,
        close: 585
      }];

      // Each slot consists of an appointment, or a free space if there is
      // no appointment starting at the current slot index. 
      // Therefore, we loop over each fixtures, look for startDate
      // and add the duration to the currentSlot. If there is none, at this startDate
      // Then continue to next slot (currentSlot + interval)
      for (currentSlot; currentSlot <= closing; currentSlot += interval) {
        for (let appointment of fixtures) {
          if (appointment.startDate == currentSlot) {
            slots.push(appointment);
            currentSlot += appointment.duration - interval;
          } else {
            slots.push({
              isfree: true,
              startDate: currentSlot,
              duration: interval
            });
          }
        }
      }
      console.log(slots);
    },
  }
}
</script>


// NOW, for tomorrow, need to test with sample data from db and fix the layout. And for god turn this into a function.  
