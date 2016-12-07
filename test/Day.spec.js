'use strict';

import test from 'tape';
import Day from '../src/components/Day.vue';
import Vue from 'vue';


test('Number of hours slots', assert => {
  const vm = new Vue(Day).$mount();

  var defaultData = Day.data(),
      dayHourStart = defaultData.dayHourStart,
      dayHourEnd = defaultData.dayHourEnd,
      appointmentDuration = defaultData.appointmentDuration;

  const actual = vm.slots.length;
  const expected = (dayHourEnd - dayHourStart) * 60 / appointmentDuration;

  assert.equal(actual, expected, 'The number of hours slots should be equal to the difference of the "closing" hour and "starting hour" for appointments multiplied by 60, divided by the appointment duration set divivded by 2');

  assert.end()
});

test('Displayed slots number', assert => {
  const vm = new Vue(Day).$mount();

  const actual = vm.$el.querySelectorAll('div.day-container div.day-slot').length;
  const expected = vm.slots.length;

  assert.equal(actual, expected, 'The number of divs displayed should be equal to the length of slots Array');

  assert.end();

});

test('Slot state change on click', assert => {
  const vm = new Vue(Day).$mount();

  var slot = vm.slots[0],
      slotState = slot.isFree,
      divSlot = vm.$el.querySelectorAll('div.day-container div.day-slot')[0];

  // Toggle on click
  divSlot.click();

  const changedInHTML = !divSlot.querySelector('h3').innerText.trim() === !slotState;
  const hasBeenChangedInHTML = true;

  const changedInSlotState = vm.slots[0].isFree;
  const slotStateHasChanged = !slotState;

  assert.equal(changedInHTML, hasBeenChangedInHTML, 'Slot value in HTML must correspond to slot value in slots Array');

  assert.equal(changedInSlotState, slotStateHasChanged, 'The slot state should be inverted on click');

  assert.end();
});

test('Busy slot state class toggle', assert => {
  const vm = new Vue(Day).$mount();

  var divSlot = vm.$el.querySelectorAll('div.day-container div.day-slot')[0],
      isFree = vm.slots[0].isFree;

  if (isFree) divSlot.click(); // Turn slot busy

  // Try to see if asynchronous make it pass (it works on client)
  Vue.nextTick( () => {
    const actual = vm.$el.querySelectorAll('div.day-container div.day-slot')[0].classList.contains('busy');
    const expected = true;

    assert.equal(actual,expected,'Busy slot should contain the busy class');
  });

  assert.end();
});

test('Slot starting and end hour', assert => {
  const vm = new Vue(Day).$mount();

  var startingHour = vm.slots[0].startHour,
      endingHour = vm.slots[0], endingHour,
      isDefined;

  isDefined = (hour) => { return typeof hour !== undefined && hour !== null && hour !== "" };

  assert.equal(isDefined(startingHour), true, 'Starting hour should be set with hours and minutes like HH:mm');
  assert.equal(isDefined(endingHour), true, 'Ending hour should be set with hours and minutes like HH:mm');
  assert.equal(endingHour > startingHour, true, 'Slot\'s end date should be greater than starting one');

  assert.end();
<<<<<<< HEAD

=======
>>>>>>> 6ada27f10730674f193856ccbd1b93dd9851cb31
});
// Need to test that the new funciton to be created "GetSlotIndexFromHour" gives back the right index from the slot arrays.
// Simply : hourdiff with startHour * 60 divided by appointmentDuration + minutes / appointmentDuration. Test with imaginary values
test('hourToAppointment right index to toggle', assert => {
    const vm = new Vue(Day).$mount();
    var indexToToggle = '';

    //hourToAppointment should return the slot Index to toggle
    indexToToggle = Day.methods.hourToAppointment('09:00', 30);

    assert.equal(0, indexToToggle, 'Index to toggle should be 0');

    assert.end();
});
